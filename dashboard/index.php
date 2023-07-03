<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!-- Chart js libraries -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"
        integrity="sha256-IMCPPZxtLvdt9tam8RJ8ABMzn+Mq3SQiInbDmMYwjDg=" crossorigin="anonymous"></script>

    <!-- Charts -->
    <script src="js/filterByBrandBarChart.js"></script>
    <script src="js/filterByProductPieChart.js"></script>
    <script src="js/filterByLayerPolarChart.js"></script>
    <script src="js/filterByCountryBarChart.js"></script>
    <script src="js/filterByCategoryBarChart.js"></script>
    <script src="js/filterByManufacturerBarChart.js"></script>
    <script src="js/filterByMaterialDoughnutChart.js"></script>


    <?php
        include "php/config-pdo.php";
        require "php/chart_queries_defaults.php";
    ?>

</head>

<body>

    <div class="container">

        <li><a class="has-arrow ai-icon" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                    height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <rect id="Rectangle-20" fill="#000000" opacity="0.3" x="4" y="5" width="16" height="2" rx="1" />
                        <rect id="Rectangle-20-Copy-3" fill="#000000" opacity="0.3" x="4" y="13" width="16" height="2"
                            rx="1" />
                        <path
                            d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                            id="Combined-Shape" fill="#000000" />
                    </g>
                </svg>
                <span class="nav-text">Filter By Beach</span>
            </a>
            <ul aria-expanded="false">
                <li><a class="has-arrow" aria-expanded="false">Kenya</a>
                    <ul id='myid' aria-expanded="false"></ul>
                </li>
            </ul>
        </li>

        <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                    height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path
                            d="M18.5,6 C19.3284271,6 20,6.67157288 20,7.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 C17.6715729,20 17,19.3284271 17,18.5 L17,7.5 C17,6.67157288 17.6715729,6 18.5,6 Z M12.5,11 C13.3284271,11 14,11.6715729 14,12.5 L14,18.5 C14,19.3284271 13.3284271,20 12.5,20 C11.6715729,20 11,19.3284271 11,18.5 L11,12.5 C11,11.6715729 11.6715729,11 12.5,11 Z M6.5,15 C7.32842712,15 8,15.6715729 8,16.5 L8,18.5 C8,19.3284271 7.32842712,20 6.5,20 C5.67157288,20 5,19.3284271 5,18.5 L5,16.5 C5,15.6715729 5.67157288,15 6.5,15 Z"
                            id="Combined-Shape" fill="#000000" />
                    </g>
                </svg>
                <span class="nav-text">Filter By Category</span>
            </a>
            <ul aria-expanded="false">
                <li><a class="has-arrow" href="javascript:void()" aria-expanded="false">Kenya</a>
                    <ul id='tcategory' aria-expanded="false">
                        <li><a>Building & Contruction</a></li>
                        <li><a>Paper & Cardboard</a></li>
                        <li><a>Processed Wood</a></li>
                        <li><a>Clothing-Covid</a></li>
                        <li><a>Clothing</a></li>
                        <li><a>Rubber</a></li>
                        <li><a>Plastic</a></li>
                        <li><a>Glass</a></li>
                        <li><a>Metal</a></li>
                    </ul>
                </li>
            </ul>
        </li>

        <li class="nav-label">Extra Filters</li>
        <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                    height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path
                            d="M4.00246329,12.2004927 L13,14 L13,4.06189375 C16.9463116,4.55399184 20,7.92038235 20,12 C20,16.418278 16.418278,20 12,20 C7.64874861,20 4.10886412,16.5261253 4.00246329,12.2004927 Z"
                            id="Combined-Shape" fill="#000000" opacity="0.3" />
                        <path
                            d="M3.0603968,10.0120794 C3.54712466,6.05992157 6.91622084,3 11,3 L11,11.6 L3.0603968,10.0120794 Z"
                            id="Combined-Shape-Copy" fill="#000000" />
                    </g>
                </svg>

                <span class="nav-text">Type Of Products</span>
            </a>
            <ul id='tproduct' aria-expanded="false">
                <li><a>FP</a></li>
                <li><a>HP</a></li>
                <li><a>O</a></li>
                <li><a>PC</a></li>
                <li><a>PF</a></li>
                <li><a>SM</a></li>
            </ul>
        </li>
        <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                    height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <rect id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13"
                            rx="1.5" />
                        <rect id="Rectangle-62-Copy-2" fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8"
                            rx="1.5" />
                        <path
                            d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                            id="Path-95" fill="#000000" fill-rule="nonzero" />
                        <rect id="Rectangle-62-Copy-4" fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6"
                            rx="1.5" />
                    </g>
                </svg>
                <span class="nav-text">Type Of Materials</span>
            </a>
            <ul id='tmaterial' aria-expanded="false">
                <li><a>HDPE</a></li>
                <li><a>LDPE</a></li>
                <li><a>O</a></li>
                <li><a>PET</a></li>
                <li><a>PP</a></li>
            </ul>
        </li>
        <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px"
                    height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <rect id="bound" x="0" y="0" width="24" height="24" />
                        <path
                            d="M5.5,6 C6.32842712,6 7,6.67157288 7,7.5 L7,18.5 C7,19.3284271 6.32842712,20 5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,7.5 C4,6.67157288 4.67157288,6 5.5,6 Z M11.5,11 C12.3284271,11 13,11.6715729 13,12.5 L13,18.5 C13,19.3284271 12.3284271,20 11.5,20 C10.6715729,20 10,19.3284271 10,18.5 L10,12.5 C10,11.6715729 10.6715729,11 11.5,11 Z M17.5,15 C18.3284271,15 19,15.6715729 19,16.5 L19,18.5 C19,19.3284271 18.3284271,20 17.5,20 C16.6715729,20 16,19.3284271 16,18.5 L16,16.5 C16,15.6715729 16.6715729,15 17.5,15 Z"
                            id="Combined-Shape" fill="#000000" />
                    </g>
                </svg>
                <span class="nav-text">Type Of Layers</span>
            </a>
            <ul id='tlayer' aria-expanded="false">
                <li><a>ML</a></li>
                <li><a>SL</a></li>
            </ul>
        </li>

        <h4>BRANDING</h4>
        <!-- Total number of records -->
        <h5 class="mb-1">Total Macro Branding Samples <?=$total_records?></h5>

        <!-- Total number of records -->
        <h5 class="mb-1">Total Macro Counts Samples <?=$total_records_counts?></h5>

        <!-- Total number of records -->
        <h5 class="mb-1">Total Locations <?=$distint_locations?></h5>

        <!-- Total number of records -->
        <h5 class="mb-1">Total Brands <?=$distint_Brand?></h5>

        <!-- Total number of classes -->
        <h5 class="mb-1">Total Manufacturers <?=$distint_Manufacturer?></h5>

        <!-- Total number of classes -->
        <h5 class="mb-1">Total Beaches <?=$distint_beach?></h5>

        <div class="container">
            <div class="row ">
                <div class="col-xs-6 " style="background-color:aliceblue;height: 350px;">
                    <canvas id="barChartTopBrands"></canvas>
                </div>
                <div class="col-xs-6" style="background-color:aliceblue;height: 350px;">
                    <canvas id="barChartTopManufacturers"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6" style="background-color:aliceblue;height: 350px;">
                    <canvas id="barChartTopCategory"></canvas>
                </div>
                <div class="col-xs-6" style="background-color:aliceblue;height: 350px;">
                    <canvas id="barChartTopCountry"></canvas>
                </div>
            </div>
            <div class="row ">
                <div class="col-xs-6 " style="background-color:aliceblue;height: 350px;">
                    <canvas id="TypeOfProduct"></canvas>
                </div>
                <div class="col-xs-6" style="background-color:aliceblue;height: 350px;">
                    <canvas id="TypeOfMaterial"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6" style="background-color:aliceblue;height: 350px;">
                    <canvas id="TypeOfLayers"></canvas>
                </div>
                <div class="col-xs-6" style="background-color:aliceblue;height: 350px;">
                    <canvas id="barChartTopCountry"></canvas>
                </div>
            </div>
        </div>

    </div>



    <!--JS Data Source Scripts -->
    <script type="text/javascript">
    //Data source macro brandings
    var frequency = <?= json_encode($php_data_array) ?>
    //Data source macro counts
    var frequency_counts = <?= json_encode($php_data_array1) ?>
    //Data source macro counts
    var distintCountryBeaches = <?= json_encode($php_data_array2) ?>
   
    //Register Chart Data labels
    Chart.register(ChartDataLabels);
    </script>

    <!-- Chart Configurations -->
    <script src="config/brand.js"></script>
    <script src="config/manufacturer.js"></script>
    <script src="config/categories.js"></script>
    <script src="config/country.js"></script>
    <script src="config/product.js"></script>
    <script src="config/material.js"></script>
    <script src="config/layers.js"></script>
    <script src="config/eventHandleFunctions.js"></script>


</body>

</html>