<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once'dabase.php';


$method = $_SERVER['REQUEST_METHOD'];
// print_r($method);
// echo '<pre>';
// print_r($_POST);
// print_r($_FILES);
// echo '</pre>';

switch($method){
    case 'POST':
       if(isset($_FILES['fileName'])){
            $productName = $_POST['productName'];
            $productDescription = $_POST['productDescription'];
            $categoryId = $_POST['categoryId'];
            $filename = $_FILES['fileName']['name'];
            $filename = str_replace(' ', '_', $filename);
            $unique_filename = time() . '_' . uniqid() . '_' . $filename;
            $file_temp = $_FILES['fileName']['tmp_name'];
            $path =  $_SERVER['DOCUMENT_ROOT'].'/demoreactexample/src/Product/images'."/".$unique_filename;

            $result = mysqli_query($con,"INSERT INTO `productItem`(`id`, `categoryId`, `productName`, `productDescription`, `productImage`) VALUES (NULL,'$categoryId','$productName','$productDescription','$unique_filename')");
            if($result ){
                move_uploaded_file($file_temp,$path);
                echo json_encode(["success"=>"Data Inserted Successfully"]);
                return;
            }
            else{
                echo json_encode(["error"=>"Data Not Inserted "]);
                return;
            }
       }
       else{
            echo json_encode(["dataEmpty"=>"Data Not Correct"]);
            return;
       }
       break;
    case 'GET':
        $path = explode('/',$_SERVER['REQUEST_URI']);
        if(isset($path[6]) && is_numeric($path[6])){
            $image_path =  $_SERVER['DOCUMENT_ROOT'].'/demoreactexample/src/Product/images'."/";
            $allrow = mysqli_query($con,"SELECT * FROM `productItem` WHERE id= $path[6]");
            if(mysqli_num_rows($allrow)>0){
                while($row = mysqli_fetch_array($allrow)){
                    $jspn_array["categoryData"][]=array("id"=>$row['id'],"categoryId"=>$row['categoryId'],"productName"=>$row['productName'],"productDescription"=>$row['productDescription'],"productImage"=>$row['productImage']);
                }
                echo json_encode($jspn_array["categoryData"]);
                return;
            }
            else{
                echo json_encode(["result"=>"Please Check the data" ]);
                // echo json_encode($jspn_array[]);
                return;
            }
        }
        else{
            $image_path =  $_SERVER['DOCUMENT_ROOT'].'/demoreactexample/src/Product/images'."/";

            $categorydata = mysqli_query($con, "SELECT `id`, `categoryName` FROM `category`;");
            $categoryRow = [];
            if (mysqli_num_rows($categorydata) > 0) {
                while ($row = mysqli_fetch_array($categorydata)) {
                    $categoryRow[$row['id']] = $row['categoryName'];
                }
            }

            $allrow = mysqli_query($con,"SELECT * FROM `productItem`");
            if(mysqli_num_rows($allrow)>0){
                while($row = mysqli_fetch_array($allrow)){
                    $categoryName = isset($categoryRow[$row['categoryId']]) ? $categoryRow[$row['categoryId']] : "Unknown Category";
                    $jspn_array["categoryData"][]=array("id"=>$row['id'],
                                                        "categoryId"=>$row['categoryId'],
                                                        "categoryName" => $categoryName,
                                                        "productName"=>$row['productName'],
                                                        "productDescription"=>$row['productDescription'],
                                                        "productImage"=>$row['productImage']);
                }
                echo json_encode($jspn_array["categoryData"]);
                return;
            }
            else{
                // echo json_encode(["result"=>"Please Check the data" ]);
                $jspn_array='';
                echo json_encode($jspn_array);
                return;
            }
        }        
        break;
    case 'PUT':
        echo json_encode(["result"=>"Please Check the data" ]);
        return;
    default :
       echo "data Empty"; return;
}