var valuesManufacturer = [];
var valuesManufacturerCount = [];
var valuesManufacturerID = [];

var valuesManufacturerTop = [];
var valuesCountManufacturerTop = [];

var valuesManufacturerTop_chart = [];
var valuesCountManufacturerTop_chart = [];

var valuesManufacturerTop_filter = [];
var valuesCountManufacturerTop_filter = [];

var valuesManufacturerTop_chart_filter = [];
var valuesCountManufacturerTop_chart_filter = [];

var valuesCombinedManufacturer;
var valuesCombinedManufacturer_filter;

var filterValue;

var filterDropdownName;

function updateManufacturerChartDetails() {

  switch (filterDropdownName) {
    case "tbeach":
      valuesManufacturerID = [];
      valuesManufacturer = [];
      for (var i in frequency) {
        valuesManufacturerID.push(frequency[i].BeachID);
        valuesManufacturer.push(frequency[i].Manufacturer);
      }
      break;
    case "tcategory":
      valuesManufacturerID = [];
      valuesManufacturer = [];
      valuesManufacturerCount = [];
      for (var i in frequency_counts) {
        valuesManufacturerID.push(frequency_counts[i].KMFRICategory);
        valuesManufacturerCount.push(frequency_counts[i].Count);
        valuesManufacturer.push(frequency_counts[i].Item);
      }
      break;
    case "tproduct":
      valuesManufacturerID = [];
      valuesManufacturer = [];
      for (var i in frequency) {
        valuesManufacturerID.push(frequency[i].TypeOfProduct);
        valuesManufacturer.push(frequency[i].Manufacturer);
      }
      break;
    case "tmaterial":
      valuesManufacturerID = [];
      valuesManufacturer = [];
      for (var i in frequency) {
        valuesManufacturerID.push(frequency[i].TypeOfMaterial);
        valuesManufacturer.push(frequency[i].Manufacturer);
      }
      break;
    case "tlayer":
      valuesManufacturerID = [];
      valuesManufacturer = [];
      for (var i in frequency) {
        valuesManufacturerID.push(frequency[i].TypeOfLayer);
        valuesManufacturer.push(frequency[i].Manufacturer);
      }
      break;
    default:
      valuesManufacturerID = [];
      for (var i in frequency) {
        valuesManufacturerID.push(frequency[i].BeachID);
      }
  }

  //Combine Array to form 2d array
  valuesCombinedManufacturer = valuesManufacturerID.map(function (v, i) {
    return [v, valuesManufacturer[i], valuesManufacturerCount[i]];
  });

  valuesManufacturerTop_chart_filter = [];
  valuesCountManufacturerTop_chart_filter = [];
  for (var i in valuesCombinedManufacturer) {
    if (valuesCombinedManufacturer[i][0] == filterValue) {
      valuesManufacturerTop_chart_filter.push(valuesCombinedManufacturer[i][1]);
      valuesCountManufacturerTop_chart_filter.push(parseInt(valuesCombinedManufacturer[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombinedManufacturer_filter = valuesCountManufacturerTop_chart_filter.map(function (v, i) {
    return [v, valuesManufacturerTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let mapManufacturer = ((m, a) => (
    valuesCombinedManufacturer_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombinedManufacturer_filter);

  let resultManufacturer = [...mapManufacturer.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  resultManufacturer = resultManufacturer.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  resultManufacturer = resultManufacturer.slice(0, 10);

  //Second split array and empty arrays
  valuesManufacturerTop_filter = [];
  valuesCountManufacturerTop_filter = [];

  for (var i in resultManufacturer) {
    valuesManufacturerTop_filter.push(resultManufacturer[i][1].substring(0,15));
    valuesCountManufacturerTop_filter.push(resultManufacturer[i][0]);
  }

  var data = barChartTopManufacturers.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = "Top 10 "+ filterValue+' Materials leading in pollution.';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Top 10 Manufacturers Leading in Polution at "+filterValue+' Beach';
  }
  if (filterDropdownName == "tproduct") {
    data.datasets[0].label = "Top 10 "+ filterValue+' Materials Manufacturers Leading in Polution';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = "Top 10 "+ filterValue+' Materials Manufacturers Leading in Polution';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = "Top 10 "+ filterValue+' Materials Manufacturers Leading in Polution';
  }
  data.datasets[0].data = valuesCountManufacturerTop_filter;
  data.labels = valuesManufacturerTop_filter;
  barChartTopManufacturers.update();
}
