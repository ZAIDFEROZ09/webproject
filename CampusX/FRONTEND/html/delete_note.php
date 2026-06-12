<?php

$conn = mysqli_connect(
    "localhost",
    "root",
    "",
    "campusx"
);

$id = $_POST['id'];

mysqli_query(
    $conn,
    "DELETE FROM notes WHERE id='$id'"
);

echo "Deleted";

?>