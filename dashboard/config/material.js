//================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency) {
        valuesMaterial.push(frequency[i].TypeOfMaterial);
        valuesMaterialCount.push(frequency[i].Counts);
        valuesMaterialID.push(frequency[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombinedMaterial = valuesMaterialID.map(function(v, i) {
        return [v, valuesMaterial[i], valuesMaterialCount[i]];
    });


    for (var i in valuesCombinedMaterial) {
        valuesMaterialTop.push(valuesCombinedMaterial[i][1]);
        valuesCountMaterialTop.push(parseInt(valuesCombinedMaterial[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombinedMaterial = valuesCountMaterialTop.map(function(v, i) {
        return [v, valuesMaterialTop[i]];
    });

    //Reduce the array by summing duplicate values
    let mapMaterial = ((m, a) => (valuesCombinedMaterial.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombinedMaterial);

    let resultMaterial = [...mapMaterial.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    resultMaterial = resultMaterial.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    resultMaterial = resultMaterial.slice(0, 10);

    //Second split array
    for (var i in resultMaterial) {

        valuesMaterialTop_chart.push(resultMaterial[i][1]);
        valuesCountMaterialTop_chart.push(resultMaterial[i][0]);

    }

    //================================================================================================Type of Material Doughnut chart
    var ctx1 = document.getElementById("TypeOfMaterial");
    var pieChartTopMaterials = new Chart(ctx1, {
        type: 'doughnut',
        data: {
            labels: valuesMaterialTop_chart,
            datasets: [{
                label: '# Type Of Material',
                data: valuesCountMaterialTop_chart,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 182, 102, 0.5)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 40,
            responsive: true,
            plugins: {
                datalabels: {
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map((data) => {
                            sum += data;
                        });
                        let percentage = ((value * 100) / sum).toFixed(0) + "%";
                        return percentage;
                    },
                }
            }

        }
    });