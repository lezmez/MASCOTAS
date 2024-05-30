<?php
require_once 'includes/db_connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM Users WHERE Username = '$username' AND Password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $roleId = $row['RoleId'];

        // Verificar el rol del usuario y redirigir a la página correspondiente
        if ($roleId == 1) {
            // Redirigir al administrador
        } else {
            // Redirigir al usuario estándar
        }
    } else {
        echo "Nombre de usuario o contraseña incorrectos";
    }

    $conn->close();
}
?>