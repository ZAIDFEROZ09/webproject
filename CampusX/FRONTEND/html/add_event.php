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
$date = $_POST['date'];
$organizer = $_POST['organizer'];
$category = $_POST['category'];

$sql = "INSERT INTO events(title,event_date,organizer,category)
VALUES('$title','$date','$organizer','$category')";

if(mysqli_query($conn,$sql))
{
    echo "Event Added Successfully";
}
else
{
    echo "Failed";
}

?>