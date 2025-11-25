<?php
$conexion = new mysqli("localhost", "root", "", "trivia_db");

if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}

$nombre = $_POST["nombre"];
$categoria = $_POST["categoria"];
$puntos = $_POST["puntos"];

$stmt = $conexion->prepare("INSERT INTO ranking (nombre, categoria, puntos) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $nombre, $categoria, $puntos);
$stmt->execute();

if ($stmt->affected_rows > 0) {
  echo "Puntaje guardado";
} else {
  echo "Error al guardar";
}

$stmt->close();
$conexion->close();
?>
