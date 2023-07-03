
    //================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency) {
        valuesBrand.push(frequency[i].Brand);
        valuesCount.push(frequency[i].Counts);
        valuesBeachID.push(frequency[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombined = valuesBeachID.map(function(v, i) {
        return [v, valuesBrand[i], valuesCount[i]];
    });


    for (var i in valuesCombined) {
        valuesBrandTop.push(valuesCombined[i][1]);
        valuesCountTop.push(parseInt(valuesCombined[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombined = valuesCountTop.map(function(v, i) {
        return [v, valuesBrandTop[i]];
    });

    //Reduce the array by summing duplicate values
    let map = ((m, a) => (valuesCombined.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombined);

    let result = [...map.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    result = result.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    result = result.slice(0, 10);

    //Second split array
    for (var i in result) {

        valuesBrandTop_chart.push(result[i][1].substring(0, 15));
        valuesCountTop_chart.push(result[i][0]);

    }

    //console.log(valuesBrandTop_chart);
    //================================================================================================Brand Bar Chart =================

    var chrt = document.getElementById("barChartTopBrands").getContext("2d");
    var config = {
        type: 'bar',
        data: {
            labels: valuesBrandTop_chart,
            datasets: [{
                label: "Top 10 Brand Leading in Polution",
                data: valuesCountTop_chart,
                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'grey', 'lime',
                    'orange', 'purple', 'green'
                ],
                borderColor: ['red', 'blue', 'fuchsia', 'green', 'navy', 'black', 'red', 'blue', 'fuchsia',
                    'black'
                ],
                borderWidth: 2,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: [ChartDataLabels],
            plugins: {
                datalabels: {
                    //display: false,
                    anchor: 'end',
                    align: 'top',
                    formatter: (value, ctx) => {
                        let sum = 0;
                        let dataArr = ctx.chart.data.datasets[0].data;
                        dataArr.map((data) => {
                            sum += data;
                        });
                        let percentage = ((value * 100) / sum).toFixed(1) + "%";
                        return percentage;
                    },
                    // font: {
                    //     weight: 'bold',
                    //     size: 16
                    // }
                }
            }
        },
    };

    var barChartTopBrands = new Chart(chrt, config);
