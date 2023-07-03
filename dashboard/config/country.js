//================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency) {
        valuesCountry.push(frequency[i].Country);
        valuesCountryCount.push(frequency[i].Counts);
        valuesCountryID.push(frequency[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombinedCountry = valuesCountryID.map(function(v, i) {
        return [v, valuesCountry[i], valuesCountryCount[i]];
    });


    for (var i in valuesCombinedCountry) {
        valuesCountryTop.push(valuesCombinedCountry[i][1]);
        valuesCountCountryTop.push(parseInt(valuesCombinedCountry[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombinedCountry = valuesCountCountryTop.map(function(v, i) {
        return [v, valuesCountryTop[i]];
    });

    //Reduce the array by summing duplicate values
    let mapCountry = ((m, a) => (valuesCombinedCountry.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombinedCountry);

    let resultCountry = [...mapCountry.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    resultCountry = resultCountry.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    resultCountry = resultCountry.slice(0, 10);

    //Second split array
    for (var i in resultCountry) {

        valuesCountryTop_chart.push(resultCountry[i][1]);
        valuesCountCountryTop_chart.push(resultCountry[i][0]);

    }


    //================================================================================================Countrys Bar Chart =================

    var chrt3 = document.getElementById("barChartTopCountry").getContext("2d");
    var config = {
        type: 'bar',
        data: {
            labels: valuesCountryTop_chart,
            datasets: [{
                label: "Top 10 Country Leading in Polution",
                data: valuesCountCountryTop_chart,
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

    var barChartTopCountry = new Chart(chrt3, config);