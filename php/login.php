<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$loginUsername = $_POST['loginUsername'];
$loginPassword = $_POST['loginPassword'];

$sql = "SELECT * FROM usuarios WHERE username='$loginUsername'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($loginPassword, $row['password'])) {
        echo "success";
    } else {
        echo "Invalid credentials";
    }
} else {
    echo "Invalid credentials";
}

$conn->close();
?>
