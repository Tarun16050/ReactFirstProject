<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once'dabase.php';

$datas = $_GET;
$id  = $datas['id'];



$stmt = $con->prepare("SELECT * FROM `usertable` WHERE `id`=$id");
$stmt->execute();
$result = $stmt->get_result();

$data = $result->fetch_assoc();


echo json_encode($data);