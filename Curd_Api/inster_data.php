<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once'dabase.php';

$data = json_decode(file_get_contents('php://input'), true);
// print_r($data);
$currentdate = date('Y-m-d H:i:s');
$status ='';
$status_id = 1;
$allValuesNotEmpty = true;

//Check Empty data and values 
    if (!empty($data)) {
        foreach ($data as $key => $value) {  if (empty($value)) {  $allValuesNotEmpty = false;  break;  }  }
    }
    // else{ 
    //     $allValuesNotEmpty = false;       
    // }
//End Check Empty data and values 


if ($allValuesNotEmpty) {
    $stmt =$con->prepare("INSERT INTO `usertable`(`id`, `fname`, `lname`, `email`, `mobile`, `department`, `date`) VALUES (NULL,?,?,?,?,?,?)");
    $stmt->bind_param("ssssss",$data['fname'],$data['lname'],$data['email'],$data['mobile'],$data['department'],$currentdate);
    if($stmt->execute()){
        $status ='Registration has been Success.';
        $status_id =1;
    }else{
        $status ='Sorry!!  Server Issues Please Try Again For Some Time .';
        $status_id =2;
    }
    // $status ='Registration has been Success.';
    // $status_id =1;
   
} else {
    $status ='Values are empty. Please Check And Try Again !!';
    $status_id =0;
}

$response['status_id']=$status_id;
$response['message']= $status;
echo json_encode($response);