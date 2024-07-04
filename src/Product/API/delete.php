<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");
  require_once'dabase.php';
  $method = $_SERVER['REQUEST_METHOD'];
  $path= explode('/', $_SERVER["REQUEST_URI"]);

  if(!empty($path[7]) && $path[7] == 'productlist'){
    $result= mysqli_query($con, "DELETE FROM productitem WHERE id= '$path[6]' ");
    if($result)
    {
      echo json_encode(["success"=>"User Record Deleted Successfully"]);
      return;
    } else {
      echo json_encode(["Please Check the User Data!"]);
      return;
    }
  }
  else{
    $result= mysqli_query($con, "DELETE FROM category WHERE id= '$path[6]' ");
    if($result)
    {
      echo json_encode(["success"=>"User Record Deleted Successfully"]);
      return;
    } else {
      echo json_encode(["Please Check the User Data!"]);
      return;
    }
  }