<?php

$conn =
mysqli_connect(
"localhost",
"root",
"",
"campusx"
);

$notes =
mysqli_fetch_assoc(
mysqli_query(
$conn,
"SELECT COUNT(*) total FROM notes"
));

$events =
mysqli_fetch_assoc(
mysqli_query(
$conn,
"SELECT COUNT(*) total FROM events"
));

$complaints =
mysqli_fetch_assoc(
mysqli_query(
$conn,
"SELECT COUNT(*) total FROM complaints"
));

echo json_encode(

[
"notes"=>$notes['total'],
"events"=>$events['total'],
"complaints"=>$complaints['total']

]

);

?>