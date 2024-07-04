<?php
$server="localhost";
$name='root';
$psw="";
$db="reactProduct";
$con = mysqli_connect($server,$name,$psw,$db);
if(!$con){?><script>alert("Database is not Connect");</script><?php } else{
    ?>
    <?php
}