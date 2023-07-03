<!-- From Script Data Source -->
<?Php
    //$step_query = "SELECT * FROM `macro_branding_lakes`;";
    $step_query = "SELECT * FROM macro_branding_lakes";
    $step=$dbo->prepare($step_query);

    if($step->execute()){
    $php_data_array=$step->fetchAll();
    //print_r($php_data_array);
    }

     //$step_query = "SELECT * FROM `macro_branding_lakes`;";
     $step_query1 = "SELECT * FROM macro_counts_lakes";

     $step1=$dbo->prepare($step_query1);
 
     if($step1->execute()){
     $php_data_array1=$step1->fetchAll();
     //print_r($php_data_array);
     }

//------------------------------------------------------------------------------------------Count Records
    //Count query parameters
    $query_count_data="SELECT sum(counts) FROM macro_branding_lakes";

    // Counts the number of records in the database
    $total_records = $dbo->query($query_count_data)->fetchColumn(); 

    //Count query parameters
    $query_count_data1="SELECT sum(count) FROM macro_counts_lakes";

    // Counts the number of records in the database
    $total_records_counts = $dbo->query($query_count_data1)->fetchColumn(); 

//------------------------------------------------------------------------------------------Count Distint Countries
    //Count query parameters
    $query_count_distint="SELECT count(DISTINCT Country) FROM macro_branding_lakes";

    // Counts the number of records in the database
    $distint_countries = $dbo->query($query_count_distint)->fetchColumn(); 

//------------------------------------------------------------------------------------------Count Distint Locations
    //Count query parameters
    $query_count_distint_locations="SELECT count(DISTINCT Locations) FROM macro_branding_lakes";

    // Counts the number of records in the database
    $distint_locations = $dbo->query($query_count_distint_locations)->fetchColumn(); 

//------------------------------------------------------------------------------------------Count Distint Manufacturer
    //Count query parameters
    $query_count_distint_Manufacturer="SELECT count(DISTINCT Manufacturer) FROM macro_branding_lakes";

    // Counts the number of records in the database
    $distint_Manufacturer = $dbo->query($query_count_distint_Manufacturer)->fetchColumn(); 

//------------------------------------------------------------------------------------------Count Distint Brand 
  //SELECT Brand, sum(Counts) as Counts FROM `macro_branding_lakes` GROUP BY Brand;
  //UPDATE macro_branding_lakes SET Brand = 'Steam Energy Drink' WHERE Brand = 'Steam Energy%';

    //Count query parameters
    $query_count_distint_Brand="SELECT count(DISTINCT Brand) FROM macro_branding_lakes";

    // Counts the number of records in the database
    $distint_Brand = $dbo->query($query_count_distint_Brand)->fetchColumn(); 
//------------------------------------------------------------------------------------------Count Distint Beach in all countries
    //Count query parameters
    $query_count_distint_beach="SELECT count(DISTINCT `BeachID`) as count FROM macro_branding_lakes";

    // Counts the number of records in the database
    $distint_beach = $dbo->query($query_count_distint_beach)->fetchColumn();   

//------------------------------------------------------------------------------------------Select Distint Beach in all countries
    //Select distint_beach in all countries
    $step_query2 = "SELECT DISTINCT `BeachID` FROM macro_branding_lakes";

    $step2=$dbo->prepare($step_query2);

    if($step2->execute()){
    $php_data_array2=$step2->fetchAll();
    //print_r($php_data_array2);
    }  


?>