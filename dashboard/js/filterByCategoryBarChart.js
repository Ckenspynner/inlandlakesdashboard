var valuesCategory = [];
var valuesCategoryCount = [];
var valuesCategoryID = [];

var valuesCategoryTop = [];
var valuesCountCategoryTop = [];

var valuesCategoryTop_chart = [];
var valuesCountCategoryTop_chart = [];

var valuesCategoryTop_filter = [];
var valuesCountCategoryTop_filter = [];

var valuesCategoryTop_chart_filter = [];
var valuesCountCategoryTop_chart_filter = [];

var valuesCombinedCategory;
var valuesCombinedCategory_filter;

var filterValue;

function updateCategoryChartDetails() {

  switch (filterDropdownName) {
    case "tbeach":
      valuesCategoryID = [];
      valuesCategory = [];
      for (var i in frequency_counts) {
        valuesCategoryID.push(frequency_counts[i].BeachID);
        valuesCategory.push(frequency_counts[i].KMFRICategory);
      }
      break;
    case "tcategory":
      valuesCategoryID = [];
      valuesCategory = [];
      for (var i in frequency_counts) {
        valuesCategoryID.push(frequency_counts[i].KMFRICategory);
        valuesCategory.push(frequency_counts[i].BeachID.substring(0, 10));
      }
      //console.log(valuesCategory);
      break;
    case "tproduct":
      valuesCategoryID = [];
      valuesCategory = [];
      break;
    case "tmaterial":
      valuesCategoryID = [];
      valuesCategory = [];
      for (var i in frequency) {
        valuesCategoryID.push(frequency[i].TypeOfMaterial);
        valuesCategory.push(frequency[i].KMFRICategory);
      }
      break;
    case "tlayer":
      valuesCategoryID = [];
      valuesCategory = [];
      for (var i in frequency) {
        valuesCategoryID.push(frequency[i].TypeOfLayer);
        valuesCategory.push(frequency[i].KMFRICategory);
      }
      break;
    default:
      valuesCategoryID = [];
      for (var i in frequency) {
        valuesCategoryID.push(frequency[i].BeachID);
      }
  }

  //Combine Array to form 2d array
  valuesCombinedCategory = valuesCategoryID.map(function (v, i) {
    return [v, valuesCategory[i], valuesCategoryCount[i]];
  });

  valuesCategoryTop_chart_filter = [];
  valuesCountCategoryTop_chart_filter = [];
  for (var i in valuesCombinedCategory) {
    if (valuesCombinedCategory[i][0] == filterValue) {
      valuesCategoryTop_chart_filter.push(valuesCombinedCategory[i][1]);
      valuesCountCategoryTop_chart_filter.push(parseInt(valuesCombinedCategory[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombinedCategory_filter = valuesCountCategoryTop_chart_filter.map(function (v, i) {
    return [v, valuesCategoryTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let mapCategory = ((m, a) => (
    valuesCombinedCategory_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombinedCategory_filter);

  let resultCategory = [...mapCategory.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  resultCategory = resultCategory.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  resultCategory = resultCategory.slice(0, 10);

  //Second split array and empty arrays
  valuesCategoryTop_filter = [];
  valuesCountCategoryTop_filter = [];

  for (var i in resultCategory) {
    valuesCategoryTop_filter.push(resultCategory[i][1]);
    valuesCountCategoryTop_filter.push(resultCategory[i][0]);
  }

  var data = barChartTopCategory.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = "Top 10 Beaches Polluted By "+ filterValue+' Materials.';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Top 10 Categories Poluting "+filterValue+' Beach';
  }
  if (filterDropdownName == "tproduct") {
    data.datasets[0].label = 'No Record Found';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = 'No Record Found';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = 'No Record Found';
  }
  data.datasets[0].data = valuesCountCategoryTop_filter;
  data.labels = valuesCategoryTop_filter;
  barChartTopCategory.update();
}