//================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency) {
        valuesProduct.push(frequency[i].TypeOfProduct);
        valuesProductCount.push(frequency[i].Counts);
        valuesProductID.push(frequency[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombinedProduct = valuesProductID.map(function(v, i) {
        return [v, valuesProduct[i], valuesProductCount[i]];
    });


    for (var i in valuesCombinedProduct) {
        valuesProductTop.push(valuesCombinedProduct[i][1]);
        valuesCountProductTop.push(parseInt(valuesCombinedProduct[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombinedProduct = valuesCountProductTop.map(function(v, i) {
        return [v, valuesProductTop[i]];
    });

    //Reduce the array by summing duplicate values
    let mapProduct = ((m, a) => (valuesCombinedProduct.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombinedProduct);

    let resultProduct = [...mapProduct.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    resultProduct = resultProduct.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    resultProduct = resultProduct.slice(0, 10);

    //Second split array
    for (var i in resultProduct) {

        valuesProductTop_chart.push(resultProduct[i][1]);
        valuesCountProductTop_chart.push(resultProduct[i][0]);

    }

    //================================================================================================Type of product Doughnut chart
    var ctx = document.getElementById("TypeOfProduct");
    var pieChartTopProducts = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: valuesProductTop_chart,
            datasets: [{
                label: '# Type Of Product',
                data: valuesCountProductTop_chart,
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
            //cutoutPercentage: 40,
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