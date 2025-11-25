<?php
$conexion = new mysqli("localhost", "root", "", "trivia_db");

if ($conexion->connect_error) {
  die("Error de conexión: " . $conexion->connect_error);
}

$categoria = $_GET["categoria"];

$stmt = $conexion->prepare("SELECT nombre, puntos FROM ranking WHERE categoria = ? ORDER BY puntos DESC, fecha ASC LIMIT 100");
$stmt->bind_param("s", $categoria);
$stmt->execute();
$resultado = $stmt->get_result();

$ranking = [];

while ($fila = $resultado->fetch_assoc()) {
  $ranking[] = $fila;
}

echo json_encode($ranking);

$stmt->close();
$conexion->close();
?>
