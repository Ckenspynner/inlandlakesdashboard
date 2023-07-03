//===============================================================================================Populates Dropdown
let data = [];

for(i in distintCountryBeaches){data.push(distintCountryBeaches[i].BeachID);}
    

let list = document.getElementById("tbeach");
for (i = 0; i < data.length; ++i) {
    var li = document.createElement('li');
    var alink = document.createElement('a');

    alink.textContent = data[i];
    li.appendChild(alink);

    list.appendChild(li);
}

//================================================================================================Gets selected item Beach
$(document).ready(function() {

    $("ul[id*=tbeach] a").click(function() {
        filterDropdownName = 'tbeach';
        filterValue = $(this).text();
        updateBrandChartDetails();
        updateManufacturerChartDetails();
        updateCategoryChartDetails();
        updateCountryChartDetails();
        updateProductChartDetails();
        updateMaterialChartDetails();
        updateLayersChartDetails();
        positionMap();
    });

});

//================================================================================================Gets selected item Category

$(document).ready(function() {
    tproduct

    $("ul[id*=tcategory] a").click(function() {
        filterDropdownName = 'tcategory';
        filterValue = $(this).text();
        //alert(filterValue + ' ' + filterDropdownName);
        updateBrandChartDetails();
        updateManufacturerChartDetails();
        updateCategoryChartDetails();
        updateCountryChartDetails();
        updateProductChartDetails();
        updateMaterialChartDetails();
        updateLayersChartDetails();
        positionMap();
    });

});

//================================================================================================Gets selected item Product

$(document).ready(function() {

    $("ul[id*=tproduct] a").click(function() {
        filterDropdownName = 'tproduct';
        filterValue = $(this).text();
        //alert(filterValue + ' ' + filterDropdownName);
        updateBrandChartDetails();
        updateManufacturerChartDetails();
        updateCategoryChartDetails();
        updateCountryChartDetails();
        updateProductChartDetails();
        updateMaterialChartDetails();
        updateLayersChartDetails();
        positionMap();
    });

});

//================================================================================================Gets selected item Material

$(document).ready(function() {

    $("ul[id*=tmaterial] a").click(function() {
        filterDropdownName = 'tmaterial';
        filterValue = $(this).text();
        //alert(filterValue + ' ' + filterDropdownName);
        updateBrandChartDetails();
        updateManufacturerChartDetails();
        //updateCategoryChartDetails();
        updateCountryChartDetails();
        updateProductChartDetails();
        updateMaterialChartDetails();
        updateLayersChartDetails();
        positionMap();
    });

});

//================================================================================================Gets selected item Material

$(document).ready(function() {

    $("ul[id*=tlayer] a").click(function() {
        filterDropdownName = 'tlayer';
        filterValue = $(this).text();
        //alert(filterValue + ' ' + filterDropdownName);
        updateBrandChartDetails();
        updateManufacturerChartDetails();
        //updateCategoryChartDetails();
        updateCountryChartDetails();
        updateProductChartDetails();
        updateMaterialChartDetails();
        updateLayersChartDetails();
        positionMap();
    });

});

//==========================================================================================================function