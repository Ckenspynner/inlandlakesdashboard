//================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency_counts) {
        
        valuesCategory.push(frequency_counts[i].KMFRICategory);
        valuesCategoryCount.push(frequency_counts[i].Count);
        valuesCategoryID.push(frequency_counts[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombinedCategory = valuesCategoryID.map(function(v, i) {
        return [v, valuesCategory[i], valuesCategoryCount[i]];
    });


    for (var i in valuesCombinedCategory) {
        valuesCategoryTop.push(valuesCombinedCategory[i][1]);
        valuesCountCategoryTop.push(parseInt(valuesCombinedCategory[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombinedCategory = valuesCountCategoryTop.map(function(v, i) {
        return [v, valuesCategoryTop[i]];
    });

    //Reduce the array by summing duplicate values
    let mapCategory = ((m, a) => (valuesCombinedCategory.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombinedCategory);

    let resultCategory = [...mapCategory.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    resultCategory = resultCategory.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    resultCategory = resultCategory.slice(0, 10);

    //Second split array
    for (var i in resultCategory) {

        valuesCategoryTop_chart.push(resultCategory[i][1]);
        valuesCountCategoryTop_chart.push(resultCategory[i][0]);

    }


    //================================================================================================Categorys Bar Chart =================

    var chrt2 = document.getElementById("barChartTopCategory").getContext("2d");
    var config = {
        type: 'bar',
        data: {
            labels: valuesCategoryTop_chart,
            datasets: [{
                label: "Top 10 Categorys Leading in Polution",
                data: valuesCountCategoryTop_chart,
                backgroundColor: ['yellow', 'aqua', 'pink', 'lightgreen', 'lightblue', 'grey', 'lime',
                    'orange', 'purple', 'green'
                ],
                borderColor: ['red', 'blue', 'fuchsia', 'green', 'navy', 'black', 'red', 'blue', 'fuchsia',
                    'green', 'black'
                ],
                borderWidth: 2,
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
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
                }
            }
        },
    };

    var barChartTopCategory = new Chart(chrt2, config);