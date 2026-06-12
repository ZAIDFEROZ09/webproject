<?php

$conn = new mysqli("localhost", "root", "", "campusx");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$email = $_POST['email'];
$department = $_POST['department'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

if ($password !== $confirm_password) {
    echo "<script>alert('Passwords do not match!'); window.location.href='signup.html';</script>";
    exit();
}

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (full_name, email, department, password)
VALUES ('$full_name', '$email', '$department', '$hashed_password')";

if ($conn->query($sql) === TRUE) {
    echo "<script>
        alert('Signup successful!');
        window.location.href='login.html';
    </script>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>