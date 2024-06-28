<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once'dabase.php';

$datas = $_GET;
$id  = $datas['id'];
echo $id;
// DELETE FROM `usertable` WHERE `id`=$id


$query = "DELETE FROM `usertable` WHERE `id`=$id";
$query_run = mysqli_query($con, $query);
if ($query_run) {
    $massage =  "Delete successful";
    $status = 1;
} else {
    $massage  =  "Delete failed ! Please Try Again";
    $status = 0;
}

$response['status_id']=$status;
$response['message']= $massage;
echo json_encode($response);