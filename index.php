<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from motaadmin.dexignlab.com/xhtml/index-4.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 29 May 2023 12:25:37 GMT -->

<head>

    <!-- Meta -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Mobile Specific -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- PAGE TITLE HERE -->
    <title>Lakes Analysis Dashboard</title>

    <!-- FAVICONS ICON -->
    <link rel="shortcut icon" type="image/png" href="images/favicon.png">

    <link href="css/jqvmap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/chartist.min.css">
    <link href="css/bootstrap-select.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/LineIcons.css" rel="stylesheet">

    <!-- Chart js libraries -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2.2.0/dist/chartjs-plugin-datalabels.min.js"
        integrity="sha256-IMCPPZxtLvdt9tam8RJ8ABMzn+Mq3SQiInbDmMYwjDg=" crossorigin="anonymous"></script>
    
    <!-- Leaflets Libraries -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossorigin="" />

    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        crossorigin=""></script>


    <!-- Charts -->
    <script src="dashboard/js/filterByBrandBarChart.js"></script>
    <script src="dashboard/js/filterByProductPieChart.js"></script>
    <script src="dashboard/js/filterByLayerPolarChart.js"></script>
    <script src="dashboard/js/filterByCountryBarChart.js"></script>
    <script src="dashboard/js/filterByCategoryBarChart.js"></script>
    <script src="dashboard/js/filterByManufacturerBarChart.js"></script>
    <script src="dashboard/js/filterByMaterialDoughnutChart.js"></script>


    <!-- dbms connection configurations-->
    <?php
        include "dashboard/php/config-pdo.php";
        require "dashboard/php/chart_queries_defaults.php";
    ?>

    <?php

        $json = file_get_contents('json/macro_branding_lakes.json');
        $json_data_brands = json_decode($json, true);
        // print_r($json_data_brands);

        $json = file_get_contents('json/macro_counts_lakes.json');
        $json_data_counts = json_decode($json, true);
        //print_r($json_data_counts);

        $json = file_get_contents('json/beaches.json');
        $json_data_beaches = json_decode($json, true);
        //print_r($json_data_beaches);

    ?>

</head>

<body>

    <script>Chart.register(ChartDataLabels);</script>

    <!--*******************
        Preloader start
    ********************-->
    <div id="preloader">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
    <!--*******************
        Preloader end
    ********************-->


    <!--**********************************
        Main wrapper start
    ***********************************-->
    <div-- id="main-wrapper">

        <!--**********************************
            Nav header start
        ***********************************-->
        <div class="nav-header">
            <a href="index.html" class="brand-logo">
                <img class="logo-abbr" src="images/logo2.png" alt="">
                <img class="logo-compact" src="images/logo_text.png" alt="">
                <img class="brand-title" src="images/logo_text.png" alt="">
            </a>

            <div class="nav-control">
                <div class="hamburger">
                    <span class="line"></span><span class="line"></span><span class="line"></span>
                </div>
            </div>
        </div>
        <!--**********************************
            Nav header end
        ***********************************-->

        <!--**********************************
            Chat box start
        ***********************************-->

        <!--**********************************
            Chat box End
        ***********************************-->

        <!--**********************************
            Header start
        ***********************************-->
        <div class="header">
            <div class="header-content">
                <nav class="navbar navbar-expand">
                    <div class="collapse navbar-collapse justify-content-between">
                        <div class="header-left">
                            <div class="search_bar dropdown">
                                <span class="search_icon p-3 c-pointer" data-bs-toggle="dropdown">
                                    <i class="mdi mdi-magnify"></i>
                                </span>
                                <div class="dropdown-menu p-0 m-0">
                                    <form>
                                        <input class="form-control" type="search" placeholder="Search"
                                            aria-label="Search">
                                    </form>
                                </div>
                            </div>
                        </div>

                        <ul class="navbar-nav header-right">

                            <li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link bell dz-theme-mode" href="javascript:void(0);">
                                    <i id="icon-light" class="fas fa-sun"></i>
                                    <i id="icon-dark" class="fas fa-moon"></i>

                                </a>
                            </li>
                            <li class="nav-item dropdown notification_dropdown">
                                <a class="nav-link bell dz-fullscreen" href="#">
                                    <svg id="icon-full" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor"
                                        stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        class="css-i6dzq1">
                                        <path
                                            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                        </path>
                                    </svg>
                                    <svg id="icon-minimize" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-minimize">
                                        <path
                                            d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3">
                                        </path>
                                    </svg>
                                </a>
                            </li>
                            <li class="nav-item right-sidebar">
                                <a class="nav-link bell ai-icon" href="#">
                                    <svg id="icon-menu" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                                        stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"
                                        class="css-i6dzq1">
                                        <rect x="3" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="3" width="7" height="7"></rect>
                                        <rect x="14" y="14" width="7" height="7"></rect>
                                        <rect x="3" y="14" width="7" height="7"></rect>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!--**********************************
            Header end ti-comment-alt
        ***********************************-->

        <!--**********************************
            Sidebar start
        ***********************************-->
        <div class="deznav" style="z-index: 2;">
            <div class="deznav-scroll" >
                <ul class="metismenu" id="menu">
                    <li class="nav-label first">Main Menu</li>
                    <li><a class="ai-icon" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect x="0" y="0" width="24" height="24" />
                                    <rect fill="#000000" x="4" y="4" width="7" height="7" rx="1.5" />
                                    <path
                                        d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                        fill="#000000" opacity="0.3" />
                                </g>
                            </svg>
                            <span class="nav-text">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-label">Filters</li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <path
                                        d="M5,4 L19,4 C19.2761424,4 19.5,4.22385763 19.5,4.5 C19.5,4.60818511 19.4649111,4.71345191 19.4,4.8 L14,12 L14,20.190983 C14,20.4671254 13.7761424,20.690983 13.5,20.690983 C13.4223775,20.690983 13.3458209,20.6729105 13.2763932,20.6381966 L10,19 L10,12 L4.6,4.8 C4.43431458,4.5790861 4.4790861,4.26568542 4.7,4.1 C4.78654809,4.03508894 4.89181489,4 5,4 Z"
                                        id="Path-33" fill="#000000" />
                                </g>
                            </svg>
                            <span class="nav-text">Filter By Country</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a>Kenya</a></li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <rect id="Rectangle-20" fill="#000000" opacity="0.3" x="4" y="5" width="16"
                                        height="2" rx="1" />
                                    <rect id="Rectangle-20-Copy-3" fill="#000000" opacity="0.3" x="4" y="13" width="16"
                                        height="2" rx="1" />
                                    <path
                                        d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                                        id="Combined-Shape" fill="#000000" />
                                </g>
                            </svg>
                            <span class="nav-text">Filter By Beach</span>
                        </a>
                        <ul aria-expanded="false">
                            <li><a class="has-arrow" aria-expanded="false">Kenya</a>
                                <ul id='tbeach' aria-expanded="false"></ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="has-arrow ai-icon" href="javascript:void()" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
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
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
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
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="bound" x="0" y="0" width="24" height="24" />
                                    <rect id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="12" y="4" width="3"
                                        height="13" rx="1.5" />
                                    <rect id="Rectangle-62-Copy-2" fill="#000000" opacity="0.3" x="7" y="9" width="3"
                                        height="8" rx="1.5" />
                                    <path
                                        d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                                        id="Path-95" fill="#000000" fill-rule="nonzero" />
                                    <rect id="Rectangle-62-Copy-4" fill="#000000" opacity="0.3" x="17" y="11" width="3"
                                        height="6" rx="1.5" />
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
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="kt-svg-icon">
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
                    <li class="nav-label"></li>

                    </li>
                </ul>
            </div>


        </div>
        <!--**********************************
            Sidebar end
        ***********************************-->

        <!--**********************************
            Content body start
        ***********************************-->
        <div class="content-body">
            <!-- row -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-3 col-xxl-3 col-lg-6 col-sm-6">
                        <div class="card overflow-hidden">
                            <div class="card-body pb-0 px-4 pt-4">
                                <div class="row">
                                    <div class="col">
                                        <!-- <h5 class="mb-1"><?=$total_records?></h5> -->
                                        <h5 class="mb-1">1761</h5>
                                        <span class="text-success">Total Macro Branding Samples </span>
                                    </div>
                                </div>
                            </div>
                            <div class="chart-wrapper">
                                <canvas id="areaChart_2" class="chartjs-render-monitor  style-1" height="90"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-xxl-3 col-lg-6 col-sm-6">
                        <div class="card bg-success	overflow-hidden">
                            <div class="card-body pb-0 px-4 pt-4">
                                <div class="row">
                                    <div class="col">
                                        <!-- <h5 class="text-white mb-1"><?=$total_records_counts?></h5> -->
                                        <h5 class="text-white mb-1">9299</h5>
                                        <span class="text-white">Total Macro Counts Samples</span>
                                    </div>
                                </div>
                            </div>
                            <div class="chart-wrapper" style="width:100%">
                                <span class="peity-line" data-width="100%">6,2,8,4,3,8,4,3,6,5,9,2</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-xxl-3 col-lg-6 col-sm-6">
                        <div class="card bg-primary overflow-hidden">
                            <div class="card-body pb-0 px-4 pt-4">
                                <div class="row">
                                    <div class="col text-white">
                                        <!-- <h5 class=" text-white mb-1"><?=$distint_beach?></h5> -->
                                        <h5 class=" text-white mb-1">27</h5>
                                        <span>Total Number of Beaches</span>
                                    </div>
                                </div>
                            </div>
                            <div class="chart-wrapper px-2">
                                <canvas id="chart_widget_2" height="100"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-xxl-3 col-lg-6 col-sm-6">
                        <div class="card bg-success overflow-hidden">
                            <div class="card-body pb-0 px-4 pt-4">
                                <div class="row">
                                    <div class="col text-white">
                                        <!-- <h5 class=" text-white mb-1"><?=$distint_locations?></h5> -->
                                        <h5 class=" text-white mb-1">12</h5>
                                        <span>Total Number of Locations</span>
                                    </div>
                                </div>
                            </div>
                            <div class="chart-wrapper" style="width:100%">
                                <span class="peity-line" data-width="100%">2,1,3,4,3,5,4,3,6,5,9,2</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Suryved Beaches Map</h4>
                                </div>
                            </div>
                            <div class="card-body" id="map" style="width: 100%; height: 500px; position: relative; z-index: 1; margin-top: 20px;"></div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div class="card">
                            <div class="card-header border-0 pb-0">
                                <h4 class="card-title">Type Of Layers Insights</h4>
                            </div>
                            <canvas id="TypeOfLayers" style="padding: 10px;"></canvas>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Collected Brands Report</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="user" role="tabpanel">
                                        <canvas id="barChartTopBrands" style="height: 500px;"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Collected Brand Manufacturers Report</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="user" role="tabpanel">
                                        <canvas id="barChartTopManufacturers" style="height: 500px;"></canvas>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Top Collected KMFRI Categories</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="user" role="tabpanel">
                                        <canvas id="barChartTopCategory" style="height: 500px;"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Waste Countries Of Origin</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="user" role="tabpanel">
                                        <canvas id="barChartTopCountry" style="height: 500px;"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Type Of Product Insights</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="user" role="tabpanel">
                                        <canvas id="TypeOfProduct" style="padding: 10px;"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-12 col-lg-12 col-md-12">
                        <div id="user-activity" class="card">
                            <div class="card-header border-0 pb-0 d-sm-flex d-block">
                                <div>
                                    <h4 class="card-title">Type Of Material Insights</h4>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="user" role="tabpanel">
                                        <canvas id="TypeOfMaterial" style="padding: 10px;"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--*********dy end
        ***************************************
            Content bo*********************-->


        <!--**********************************
            Foo*ter start
        **********************************-->
        <div class="footer">
            <div class="copyright">
                <marquee direction="up" scrollamount="1">
                    <p>Copyright © <a href="https://www.kmfri.co.ke/" target="_blank">Kenya Marine and Fisheries
                            Research Institute</a> 2023</p>
                </marquee>
            </div>
        </div>
        <!--**********************************
            Footer end
        ***********************************-->

        <!--**********************************
           Support ticket button start
        ***********************************-->

        <!--**********************************
           Support ticket button end
        ***********************************-->


        </div>
        <!--**********************************
        Main wrapper end
    ***********************************-->

        <!--**********************************
        Scripts
    ***********************************-->
        <!-- Required vendors -->
        <script src="js/global.min.js"></script>
        <script src="js/bootstrap-select.min.js"></script>
        <script src="js/chart.bundle.min.js"></script>
        <script src="js/custom.min.js"></script>
        <script src="js/deznav-init.js"></script>
        <!-- Apex Chart -->
        <script src="js/apexchart.js"></script>

        <!-- Vectormap -->
        <!-- Chart piety plugin files -->
        <script src="js/jquery.peity.min.js"></script>

        <!-- Chartist -->
        <script src="js/chartist.min.js"></script>

        <!-- Dashboard 1 -->
        <script src="js/dashboard-1.js"></script>
        <!-- Svganimation scripts -->
        <script src="js/vivus.min.js"></script>
        <script src="js/svg.animation.js"></script>

        <script>
        function getUrlParams(dParam) {
            var dPageURL = window.location.search.substring(1),
                dURLVariables = dPageURL.split('&'),
                dParameterName,
                i;

            for (i = 0; i < dURLVariables.length; i++) {
                dParameterName = dURLVariables[i].split('=');

                if (dParameterName[0] === dParam) {
                    return dParameterName[1] === undefined ? true : decodeURIComponent(dParameterName[1]);
                }
            }
        }

        (function($) {
            "use strict"

            var direction = getUrlParams('dir');
            if (direction != 'rtl') {
                direction = 'ltr';
            }

            var dezSettingsOptions = {
                typography: "roboto",
                version: "light",
                layout: "vertical",
                headerBg: "color_1",
                navheaderBg: "color_3",
                sidebarBg: "color_1",
                sidebarStyle: "full",
                sidebarPosition: "fixed",
                headerPosition: "fixed",
                containerLayout: "wide",
                direction: direction
            };

            new dezSettings(dezSettingsOptions);

            jQuery(window).on('resize', function() {

                var sidebar = 'full';
                var screenWidth = jQuery(window).width();
                if (screenWidth < 600) {
                    sidebar = 'overlay';
                } else if (screenWidth > 600 && screenWidth < 1199) {
                    sidebar = 'mini';
                }

                dezSettingsOptions.sidebarStyle = sidebar;

                new dezSettings(dezSettingsOptions);
            });

        })(jQuery);
        </script>

        <!--JS Data Source Scripts -->
        <script type="text/javascript">
        //Data source macro brandings
        var frequency = <?= json_encode($json_data_brands) ?>
        //Data source macro counts
        var frequency_counts = <?= json_encode($json_data_counts) ?>
        //Data source macro counts
        var distintCountryBeaches = <?= json_encode($json_data_beaches) ?>

        //Register Chart Data labels
        //Chart.register(ChartDataLabels);
        </script>
        

        <!-- Chart Configurations -->
        <script src="dashboard/config/brand.js"></script>
        <script src="dashboard/config/manufacturer.js"></script>
        <script src="dashboard/config/categories.js"></script>
        <script src="dashboard/config/country.js"></script>
        <script src="dashboard/config/product.js"></script>
        <script src="dashboard/config/material.js"></script>
        <script src="dashboard/config/layers.js"></script>
        <script src="dashboard/config/eventHandleFunctions.js"></script>
        <script src="dashboard/config/maps.js"></script>





</body>


</html>