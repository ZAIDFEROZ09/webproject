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
$uploader = $_POST['uploader'];
$category = $_POST['category'];

$sql = "INSERT INTO notes(title,uploader,category)
VALUES('$title','$uploader','$category')";

if(mysqli_query($conn,$sql))
{
    echo "Note Added Successfully";
}
else
{
    echo "Failed";
}

?>