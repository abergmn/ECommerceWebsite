<?php

session_start();

$conn = new mysqli("localhost", "root", "", "ecommerce_site");

$email = $_POST["email"];
$password = $_POST["password"];

$result = $conn->query("SELECT * FROM users WHERE email='$email'");
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user["password"])) {
    $_SESSION["user"] = $user["name"];
    echo "Login successful! Welcome, " . $_SESSION["user"];
} else {
    echo "Invalid credentials";
}

?>