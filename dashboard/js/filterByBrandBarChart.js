var valuesBrand = [];
var valuesCount = [];
var valuesBeachID = [];

var valuesBrandTop = [];
var valuesCountTop = [];

var valuesBrandTop_chart = [];
var valuesCountTop_chart = [];

var valuesBrandTop_filter = [];
var valuesCountTop_filter = [];

var valuesBrandTop_chart_filter = [];
var valuesCountTop_chart_filter = [];

var valuesCombined;
var valuesCombined_filter;

var filterValue;

var filterDropdownName;

function updateBrandChartDetails() {
  //Combine Array to form 2d array

  switch (filterDropdownName) {
    case "tbeach":
      valuesBeachID = [];
      valuesBrand = [];
      for (var i in frequency) {
        valuesBeachID.push(frequency[i].BeachID);
        valuesBrand.push(frequency[i].Brand);
      }
      break;
    case "tcategory":
      valuesBeachID = [];
      valuesBrand = [];
      valuesCount = [];
      for (var i in frequency_counts) {
        valuesBeachID.push(frequency_counts[i].KMFRICategory);
        valuesCount.push(frequency_counts[i].Count);
        valuesBrand.push(frequency_counts[i].Location);
      }
      //console.log(valuesBrand);
      break;
    case "tproduct":
      valuesBeachID = [];
      valuesBrand = [];
      for (var i in frequency) {
        valuesBeachID.push(frequency[i].TypeOfProduct);
        valuesBrand.push(frequency[i].Locations);
      }
      break;
    case "tmaterial":
      valuesBeachID = [];
      valuesBrand = [];
      for (var i in frequency) {
        valuesBeachID.push(frequency[i].TypeOfMaterial);
        valuesBrand.push(frequency[i].Locations);
      }
      break;
    case "tlayer":
      valuesBeachID = [];
      valuesBrand = [];
      for (var i in frequency) {
        valuesBeachID.push(frequency[i].TypeOfLayer);
        valuesBrand.push(frequency[i].Locations);
      }
      break;
    default:
      valuesBeachID = [];
      for (var i in frequency) {
        valuesBeachID.push(frequency[i].BeachID);
      }
  }
//Combine Array to form 2d array
  valuesCombined = valuesBeachID.map(function (v, i) {
    return [v, valuesBrand[i], valuesCount[i]];
  });

  //console.log(valuesCombined);

  valuesBrandTop_chart_filter = [];
  valuesCountTop_chart_filter = [];
  for (var i in valuesCombined) {
    if (valuesCombined[i][0] == filterValue) {
      valuesBrandTop_chart_filter.push(valuesCombined[i][1]);
      valuesCountTop_chart_filter.push(parseInt(valuesCombined[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombined_filter = valuesCountTop_chart_filter.map(function (v, i) {
    return [v, valuesBrandTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let map = ((m, a) => (
    valuesCombined_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombined_filter);

  let result = [...map.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  result = result.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  result = result.slice(0, 10);

  //Second split array and empty arrays
  valuesBrandTop_filter = [];
  valuesCountTop_filter = [];

  for (var i in result) {
    valuesBrandTop_filter.push(result[i][1].substring(0,15));
    valuesCountTop_filter.push(result[i][0]);
  }

  var data = barChartTopBrands.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = "Top 10 Locations Polluted by "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Top 10 Brands Polluting "+ filterValue+' Beach';
  }
  if (filterDropdownName == "tproduct") {
    data.datasets[0].label = "Top 10 Locations Polluted by "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = "Top 10 Locations Polluted by "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = "Top 10 Locations Polluted by "+ filterValue+' Materials';
  }
  data.datasets[0].data = valuesCountTop_filter;
  data.labels = valuesBrandTop_filter;
  barChartTopBrands.update();
}
