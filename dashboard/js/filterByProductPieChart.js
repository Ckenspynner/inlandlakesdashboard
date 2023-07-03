var valuesProduct = [];
var valuesProductCount = [];
var valuesProductID = [];

var valuesProductTop = [];
var valuesCountProductTop = [];

var valuesProductTop_chart = [];
var valuesCountProductTop_chart = [];

var valuesProductTop_filter = [];
var valuesCountProductTop_filter = [];

var valuesProductTop_chart_filter = [];
var valuesCountProductTop_chart_filter = [];

var valuesCombinedProduct;
var valuesCombinedProduct_filter;

var filterValue;

var filterDropdownName;

function updateProductChartDetails() {

  switch (filterDropdownName) {
    case "tbeach":
      valuesProductID = [];
      valuesProduct = [];
      for (var i in frequency) {
        valuesProductID.push(frequency[i].BeachID);
        valuesProduct.push(frequency[i].TypeOfProduct);
      }
      break;
    case "tcategory":
      valuesProductID = [];
      valuesProduct = [];
      for (var i in frequency) {
        valuesProductID.push(frequency[i].KMFRICategory);
        valuesProduct.push(frequency[i].TypeOfProduct);
      }
      break;
    case "tproduct":
      valuesProductID = [];
      for (var i in frequency) {
        valuesProductID.push(frequency[i].TypeOfProduct);
      }
      break;
    case "tmaterial":
      valuesProductID = [];
      for (var i in frequency) {
        valuesProductID.push(frequency[i].TypeOfMaterial);
      }
      break;
    case "tlayer":
      valuesProductID = [];
      for (var i in frequency) {
        valuesProductID.push(frequency[i].TypeOfLayer);
      }
      break;
    default:
      valuesProductID = [];
      for (var i in frequency) {
        valuesProductID.push(frequency[i].BeachID);
      }
  }

  //Combine Array to form 2d array
  valuesCombinedProduct = valuesProductID.map(function (v, i) {
    return [v, valuesProduct[i], valuesProductCount[i]];
  });

  valuesProductTop_chart_filter = [];
  valuesCountProductTop_chart_filter = [];
  for (var i in valuesCombinedProduct) {
    if (valuesCombinedProduct[i][0] == filterValue) {
      valuesProductTop_chart_filter.push(valuesCombinedProduct[i][1]);
      valuesCountProductTop_chart_filter.push(parseInt(valuesCombinedProduct[i][2]));
    } else continue;
  }

  //Combine Array to form 2d array
  valuesCombinedProduct_filter = valuesCountProductTop_chart_filter.map(function (v, i) {
    return [v, valuesProductTop_chart_filter[i]];
  });

  //Reduce the array by summing duplicate values
  let mapProduct = ((m, a) => (
    valuesCombinedProduct_filter.forEach((c) => {
      let [num, str] = c;
      m.set(str, (m.get(str) || 0) + num);
    }),
    m
  ))(new Map(), valuesCombinedProduct_filter);

  let resultProduct = [...mapProduct.entries()].map(([a, b]) => [b, a]);

  //Sort Array WITH SECOND COLUMN
  resultProduct = resultProduct.sort((a, b) => b[0] - a[0]);

  //Get to 10 elements
  resultProduct = resultProduct.slice(0, 10);

  //Second split array and empty arrays
  valuesProductTop_filter = [];
  valuesCountProductTop_filter = [];

  for (var i in resultProduct) {
    valuesProductTop_filter.push(resultProduct[i][1]);
    valuesCountProductTop_filter.push(resultProduct[i][0]);
  }

  var data = pieChartTopProducts.config.data;
  if (filterDropdownName == "tcategory") {
    data.datasets[0].label = "Top 10 Type of Products under "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tbeach") {
    data.datasets[0].label = "Top 10 Type of Products Polluting "+filterValue+' Beach';
  }
  if (filterDropdownName == "tproduct") {
    data.datasets[0].label = "Total "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tmaterial") {
    data.datasets[0].label = "Top 10 Type of Products under "+ filterValue+' Materials';
  }
  if (filterDropdownName == "tlayer") {
    data.datasets[0].label = "Top 10 Countries Producing "+ filterValue+' Materials';
  }
  data.datasets[0].data = valuesCountProductTop_filter;
  data.labels = valuesProductTop_filter;
  pieChartTopProducts.update();
}
