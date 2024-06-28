<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once'dabase.php';


// $stmt = $con->prepare("SELECT * FROM `usertable`");
// $stmt->execute();
// if($stmt->execute()){
//    $data =  $stmt->get_result()->fetch_assoc();
// }else{
//     $data = '';
// }
// print_r($data);
// echo json_encode($data);

$stmt = $con->prepare("SELECT * FROM `usertable`");
$stmt->execute();
$result = $stmt->get_result();

$data = array();

while ($row = $result->fetch_assoc()) {
    $data[] = $row;
}

echo json_encode($data);
