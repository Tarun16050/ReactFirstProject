<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once'dabase.php';


    $method = $_SERVER['REQUEST_METHOD'];
    $timestamp = time();
    $CurrentDate = date("Y-m-d H:i:s", $timestamp);



    $id =$_POST['id'];
    $categoryName = $_POST['categoryName'];
    $categoryfile = !empty($_POST['fileName']) ?$_POST['fileName']  :'';

    $filename = !empty($_FILES['fileName']['name']) ? $_FILES['fileName']['name']: '';
    $filename = str_replace(' ', '_', $filename);
    $unique_filename = time() . '_' . uniqid() . '_' . $filename;
    $file_temp = !empty($_FILES['fileName']['tmp_name']) ?$_FILES['fileName']['tmp_name']:'';

    $path =  $_SERVER['DOCUMENT_ROOT'].'/demoreactexample/src/Product/images'."/".$unique_filename;

    if(!empty($categoryfile)){
        $result = mysqli_query($con,"UPDATE `category` SET `categoryName`='$categoryName',`categoryImage`='$categoryfile',`update_at`='$CurrentDate' WHERE id = $id");
        if($result){    
            echo json_encode(["success"=>"Data Inserted Successfully"]);
            return;
        }
        else{
            echo json_encode(["error"=>"Data Not Inserted "]);
            return;
    
        }
    }
    else{
        $result_success = mysqli_query($con,"UPDATE `category` SET `categoryName`='$categoryName',`categoryImage`='$unique_filename',`update_at`='$CurrentDate' WHERE id = $id");
        if($result_success){
            move_uploaded_file($file_temp,$path);
            echo json_encode(["success"=>"Data Inserteds Successfully"]);
            return;
        }
        else{
            echo json_encode(["error"=>"Data Not Inserted "]);
            return;
    
        }
    }


