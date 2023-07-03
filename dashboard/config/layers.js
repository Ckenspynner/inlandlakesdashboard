//================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency) {
        valuesLayers.push(frequency[i].TypeOfLayer);
        valuesLayersCount.push(frequency[i].Counts);
        valuesLayersID.push(frequency[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombinedLayers = valuesLayersID.map(function(v, i) {
        return [v, valuesLayers[i], valuesLayersCount[i]];
    });


    for (var i in valuesCombinedLayers) {
        valuesLayersTop.push(valuesCombinedLayers[i][1]);
        valuesCountLayersTop.push(parseInt(valuesCombinedLayers[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombinedLayers = valuesCountLayersTop.map(function(v, i) {
        return [v, valuesLayersTop[i]];
    });

    //Reduce the array by summing duplicate values
    let mapLayers = ((m, a) => (valuesCombinedLayers.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombinedLayers);

    let resultLayers = [...mapLayers.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    resultLayers = resultLayers.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    resultLayers = resultLayers.slice(0, 10);

    //Second split array
    for (var i in resultLayers) {

        valuesLayersTop_chart.push(resultLayers[i][1]);
        valuesCountLayersTop_chart.push(resultLayers[i][0]);

    }
    // console.log(valuesCountLayersTop_chart);
    //================================================================================================Type of Layers Polar Chart

    var chrt4 = document.getElementById("TypeOfLayers").getContext("2d");
    var polarChartTopLayers = new Chart(chrt4, {
        type: 'polarArea',
        data: {
            labels: valuesLayersTop_chart,
            datasets: [{
                label: "Type Of Layers",
                data: valuesCountLayersTop_chart,
                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'gold', 'lightblue', 'yellow',
                    'aqua', 'pink', 'lightgreen'
                ],
            }],
        },
        options: {
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
        },
    });