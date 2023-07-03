var valuesCountry = [];
var valuesCountryCount = [];
var valuesCountryID = [];

var valuesCountryTop = [];
var valuesCountCountryTop = [];

var valuesCountryTop_chart = [];
var valuesCountCountryTop_chart = [];

var valuesCountryTop_filter = [];
var valuesCountCountryTop_filter = [];

var valuesCountryTop_chart_filter = [];
var valuesCountCountryTop_chart_filter = [];

var valuesCombinedCountry;
var valuesCombinedCountry_filter;

var filterValue;

var filterDropdownName;

function updateCountryChartDetails() {

  switch (filterDropdownName) {
    case "tbeach":
      valuesCountryID = [];
      valuesCountry = [];
      for (var i in frequency) {
        valuesCountryID.push(frequency[i].BeachID);
        valuesCountry.push(frequency[i].Country);
      }
      break;
    case "tcategory":
      valuesCountryID = [];
      valuesCountry = [];
      break;
    case "tproduct":
      valuesCountryID = [];
      valuesCountry = [];
      for (var i in frequency) {
        valuesCountryID.push(frequency[i].TypeOfProduct);
        valuesCountry.push(frequency[i].Country);
      }
      break;
    case "tmaterial":
      valuesCountryID = [];
      valuesCountry = [];
      for (var i in frequency) {
        valuesCountryID.push(frequency[i].TypeOfMaterial);
        valuesCountry.push(frequency[i].Country);
      }
      break;
    case "tlayer":
      valuesCountryID = [];
      valuesCountry = [];
      for (var i in frequency) {
        valuesCountryID.push(frequency[i].TypeOfLayer);
        valuesCountry.push(frequency[i].Country);
      }
      break;
    default:
      valuesCountryID = [];
      for (var i in frequency) {
        valuesCountryID.push(frequency[i].BeachID);
      }
  }

  //Combine Array to form 2d array
  valuesCombinedCountry = valuesCountryID.map(function (v, i) {
    return [v, valuesCountry[i], valuesCountryCount[i]];
  });

  valuesCountryTop_chart_filter = [];
  valuesCountCountryTop_chart_filter = [];
  for (var i in valuesCombinedCountry) {
    if (valuesCombinedCountry[i][0] == filterValue) {
      valuesCountryTop_chart_filter.push(valuesCombinedCountry[i][1]);
      valuesCountCountryTop_chart_filter.push(parseInt(valuesCombinedCountry[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombinedCountry_filter = valuesCountCountryTop_chart_filter.map(function (v, i) {
    return [v, valuesCountryTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let mapCountry = ((m, a) => (
    valuesCombinedCountry_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombinedCountry_filter);

  let resultCountry = [...mapCountry.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  resultCountry = resultCountry.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  resultCountry = resultCountry.slice(0, 10);

  //Second split array and empty arrays
  valuesCountryTop_filter = [];
  valuesCountCountryTop_filter = [];

  for (var i in resultCountry) {
    valuesCountryTop_filter.push(resultCountry[i][1]);
    valuesCountCountryTop_filter.push(resultCountry[i][0]);
  }

  var data = barChartTopCountry.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = 'No Record Found';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Top 10 Countries whose products are polluting "+filterValue+' Beach';
  }
  if (filterDropdownName == "tproduct") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  data.datasets[0].data = valuesCountCountryTop_filter;
  data.labels = valuesCountryTop_filter;
  barChartTopCountry.update();
}
