<?php
$servername = "your-server-name";
$username = "your-username";
$password = "your-password";
$database = "your-database-name";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
?>