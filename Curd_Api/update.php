<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once'dabase.php';
$id = $_GET['id'];
// echo $id; 
$data = json_decode(file_get_contents('php://input'), true);

$currentdate = date('Y-m-d H:i:s');
$status ='';
$status_id = 1;
$allValuesNotEmpty = true;

//Check Empty data and values 
    if (!empty($data)) {
        foreach ($data as $key => $value) {  if (empty($value)) {  $allValuesNotEmpty = false;  break;  }  }
    }
//End Check Empty data and values 


if ($allValuesNotEmpty) {
    $stmt = $con->prepare("UPDATE `usertable` SET `fname`=?, `lname`=?, `email`=?, `mobile`=?, `department`=?, `date`=? WHERE `id`=?");
    $stmt->bind_param("ssssssi", $data['fname'], $data['lname'], $data['email'], $data['mobile'], $data['department'], $currentdate, $id);

    if($stmt->execute()){
        $status ='Update has been successful.';
        $status_id = 1;
    } else {
        $status ='Sorry!! Server issues. Please try again later.';
        $status_id = 2;
    }
} else {
    $status ='Values are empty. Please Check And Try Again !!';
    $status_id =0;
}
$response['status_id']=$status_id;
$response['message']= $status;
echo json_encode($response);