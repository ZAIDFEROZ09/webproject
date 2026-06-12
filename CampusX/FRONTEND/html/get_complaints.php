<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "campusx"
);

$result = mysqli_query(
    $conn,
    "SELECT * FROM complaints ORDER BY id DESC"
);

$data = [];

while($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

echo json_encode($data);

?>