var valuesMaterial = [];
var valuesMaterialCount = [];
var valuesMaterialID = [];

var valuesMaterialTop = [];
var valuesCountMaterialTop = [];

var valuesMaterialTop_chart = [];
var valuesCountMaterialTop_chart = [];

var valuesMaterialTop_filter = [];
var valuesCountMaterialTop_filter = [];

var valuesMaterialTop_chart_filter = [];
var valuesCountMaterialTop_chart_filter = [];

var valuesCombinedMaterial;
var valuesCombinedMaterial_filter;

var filterValue;

var filterDropdownName;

function updateMaterialChartDetails() {

  switch (filterDropdownName) {
    case "tbeach":
      valuesMaterialID = [];
      valuesMaterial = [];
      for (var i in frequency) {
        valuesMaterialID.push(frequency[i].BeachID);
        valuesMaterial.push(frequency[i].TypeOfMaterial);
      }
      break;
    case "tcategory":
      valuesMaterialID = [];
      valuesMaterial = [];
      for (var i in frequency) {
        valuesMaterialID.push(frequency[i].KMFRICategory);
        valuesMaterial.push(frequency[i].TypeOfMaterial);
      }
      break;
    case "tproduct":
      valuesMaterialID = [];
      for (var i in frequency) {
        valuesMaterialID.push(frequency[i].TypeOfMaterial);
      }
      break;
    case "tmaterial":
      valuesMaterialID = [];
      for (var i in frequency) {
        valuesMaterialID.push(frequency[i].TypeOfMaterial);
      }
      break;
    case "tlayer":
      valuesMaterialID = [];
      for (var i in frequency) {
        valuesMaterialID.push(frequency[i].TypeOfLayer);
      }
      break;
    default:
      valuesMaterialID = [];
      for (var i in frequency) {
        valuesMaterialID.push(frequency[i].BeachID);
      }
  }

  //Combine Array to form 2d array
  valuesCombinedMaterial = valuesMaterialID.map(function (v, i) {
    return [v, valuesMaterial[i], valuesMaterialCount[i]];
  });

  valuesMaterialTop_chart_filter = [];
  valuesCountMaterialTop_chart_filter = [];
  for (var i in valuesCombinedMaterial) {
    if (valuesCombinedMaterial[i][0] == filterValue) {
      valuesMaterialTop_chart_filter.push(valuesCombinedMaterial[i][1]);
      valuesCountMaterialTop_chart_filter.push(parseInt(valuesCombinedMaterial[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombinedMaterial_filter = valuesCountMaterialTop_chart_filter.map(function (v, i) {
    return [v, valuesMaterialTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let mapMaterial = ((m, a) => (
    valuesCombinedMaterial_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombinedMaterial_filter);

  let resultMaterial = [...mapMaterial.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  resultMaterial = resultMaterial.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  resultMaterial = resultMaterial.slice(0, 10);

  //Second split array and empty arrays
  valuesMaterialTop_filter = [];
  valuesCountMaterialTop_filter = [];

  for (var i in resultMaterial) {
    valuesMaterialTop_filter.push(resultMaterial[i][1]);
    valuesCountMaterialTop_filter.push(resultMaterial[i][0]);
  }

  var data = pieChartTopMaterials.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = "Top 10 Type of Materials under "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Top 10 Type of Materials Polluting "+filterValue+' Beach';
  }
  if (filterDropdownName == "tMaterial") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = 'Total '+filterValue+' Materials';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  data.datasets[0].data = valuesCountMaterialTop_filter;
  data.labels = valuesMaterialTop_filter;
  pieChartTopMaterials.update();
}
