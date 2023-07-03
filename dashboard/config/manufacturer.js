
    //================================================================================================Chart Calculations================================

    //Creates an array of arrays from an array of objects

    for (var i in frequency) {
        valuesManufacturer.push(frequency[i].Manufacturer);
        valuesManufacturerCount.push(frequency[i].Counts);
        valuesManufacturerID.push(frequency[i].BeachID);
    }

    //Combine Array to form 2d array
    valuesCombinedManufacturer = valuesManufacturerID.map(function(v, i) {
        return [v, valuesManufacturer[i], valuesManufacturerCount[i]];
    });


    for (var i in valuesCombinedManufacturer) {
        valuesManufacturerTop.push(valuesCombinedManufacturer[i][1]);
        valuesCountManufacturerTop.push(parseInt(valuesCombinedManufacturer[i][2]));
    }

    //Combine Array to form 2d array
    valuesCombinedManufacturer = valuesCountManufacturerTop.map(function(v, i) {
        return [v, valuesManufacturerTop[i]];
    });

    //Reduce the array by summing duplicate values
    let mapManufacturer = ((m, a) => (valuesCombinedManufacturer.forEach(c => {
        let [num, str] = c;
        m.set(str, (m.get(str) || 0) + num);
    }), m))(new Map(), valuesCombinedManufacturer);

    let resultManufacturer = [...mapManufacturer.entries()].map(([a, b]) => [b, a]);

    //Sort Array WITH SECOND COLUMN
    resultManufacturer = resultManufacturer.sort((a, b) => b[0] - a[0]);
    //Get to 10 elements
    resultManufacturer = resultManufacturer.slice(0, 10);

    //Second split array
    for (var i in resultManufacturer) {

        valuesManufacturerTop_chart.push(resultManufacturer[i][1].substring(0, 15));
        valuesCountManufacturerTop_chart.push(resultManufacturer[i][0]);

    }

    //================================================================================================Manufacturers Bar Chart =================

    var chrt1 = document.getElementById("barChartTopManufacturers").getContext("2d");
    var config = {
        type: 'bar',
        data: {
            labels: valuesManufacturerTop_chart,
            datasets: [{
                label: "Top 10 Manufacturers Leading in Polution",
                data: valuesCountManufacturerTop_chart,
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

    var barChartTopManufacturers = new Chart(chrt1, config);