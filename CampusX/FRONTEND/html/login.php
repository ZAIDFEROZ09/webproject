<?php

$conn = new mysqli("localhost", "root", "", "campusx");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    $row = $result->fetch_assoc();

    if (password_verify($password, $row['password'])) {

        echo "<script>
            alert('Login successful!');
            window.location.href='dashboard.html';
        </script>";
    } else {
        echo "<script>alert('Wrong password'); window.location.href='login.html';</script>";
    }
} else {
    echo "<script>alert('User not found'); window.location.href='login.html';</script>";
}

$conn->close();
?>