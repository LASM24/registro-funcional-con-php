<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$regUsername = $_POST['regUsername'];
$regPassword = $_POST['regPassword'];
$hashedPassword = password_hash($regPassword, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuarios (username, password) VALUES ('$regUsername', '$hashedPassword')";

if ($conn->query($sql) === TRUE) {
    echo "Usuario registrado con éxito";
} else {
    echo "Error al registrar el usuario: " . $conn->error;
}

$conn->close();
?>
