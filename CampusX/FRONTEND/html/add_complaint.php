<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "campusx"
);

if (!$conn) {
    die("Connection Failed");
}

$title = $_POST['title'];
$department = $_POST['department'];
$status = $_POST['status'];

$sql = "INSERT INTO complaints(title,department,status)
VALUES('$title','$department','$status')";

if(mysqli_query($conn,$sql))
{
    echo "Complaint Submitted Successfully";
}
else
{
    echo "Failed";
}

?>