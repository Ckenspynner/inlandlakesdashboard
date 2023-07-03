var valuesLayers = [];
var valuesLayersCount = [];
var valuesLayersID = [];

var valuesLayersTop = [];
var valuesCountLayersTop = [];

var valuesLayersTop_chart = [];
var valuesCountLayersTop_chart = [];

var valuesLayersTop_filter = [];
var valuesCountLayersTop_filter = [];

var valuesLayersTop_chart_filter = [];
var valuesCountLayersTop_chart_filter = [];

var valuesCombinedLayers;
var valuesCombinedLayers_filter;

var filterValue;

var filterDropdownName;

function updateLayersChartDetails() {

  switch (filterDropdownName) {
    case "tbeach":
      valuesLayersID = [];
      valuesLayers = [];
      for (var i in frequency) {
        valuesLayersID.push(frequency[i].BeachID);
        valuesLayers.push(frequency[i].TypeOfLayer);
      }
      break;
    case "tcategory":
      valuesLayersID = [];
      valuesLayers = [];
      for (var i in frequency) {
        valuesLayersID.push(frequency[i].KMFRICategory);
        valuesLayers.push(frequency[i].TypeOfLayer);
      }
      break;
    case "tLayers":
      valuesLayersID = [];
      for (var i in frequency) {
        valuesLayersID.push(frequency[i].TypeOfLayer);
      }
      break;
    case "tmaterial":
      valuesLayersID = [];
      for (var i in frequency) {
        valuesLayersID.push(frequency[i].TypeOfMaterial);
      }
      break;
    case "tlayer":
      valuesLayersID = [];
      for (var i in frequency) {
        valuesLayersID.push(frequency[i].TypeOfLayer);
      }
      break;
    default:
      valuesLayersID = [];
      for (var i in frequency) {
        valuesLayersID.push(frequency[i].BeachID);
      }
  }

  //Combine Array to form 2d array
  valuesCombinedLayers = valuesLayersID.map(function (v, i) {
    return [v, valuesLayers[i], valuesLayersCount[i]];
  });

  valuesLayersTop_chart_filter = [];
  valuesCountLayersTop_chart_filter = [];
  for (var i in valuesCombinedLayers) {
    if (valuesCombinedLayers[i][0] == filterValue) {
      valuesLayersTop_chart_filter.push(valuesCombinedLayers[i][1]);
      valuesCountLayersTop_chart_filter.push(parseInt(valuesCombinedLayers[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombinedLayers_filter = valuesCountLayersTop_chart_filter.map(function (v, i) {
    return [v, valuesLayersTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let mapLayers = ((m, a) => (
    valuesCombinedLayers_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombinedLayers_filter);

  let resultLayers = [...mapLayers.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  resultLayers = resultLayers.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  resultLayers = resultLayers.slice(0, 10);

  //Second split array and empty arrays
  valuesLayersTop_filter = [];
  valuesCountLayersTop_filter = [];

  for (var i in resultLayers) {
    valuesLayersTop_filter.push(resultLayers[i][1]);
    valuesCountLayersTop_filter.push(resultLayers[i][0]);
  }

  var data = polarChartTopLayers.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = "Total "+ filterValue+' under Type of Material';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Type of Layers Polluting "+filterValue+' Beach';
  }
  if (filterDropdownName == "tLayers") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = "Total "+ filterValue+' under Type of Material';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = "Total "+ filterValue+' Materials'; 
  }
  data.datasets[0].data = valuesCountLayersTop_filter;
  data.labels = valuesLayersTop_filter;
  polarChartTopLayers.update();
}
