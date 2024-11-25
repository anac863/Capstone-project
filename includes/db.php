<?php
$host = getenv('DB_HOST') ?: 'localhost';
$dbname = getenv('DB_NAME') ?: 'render_db';
$username = getenv('DB_USER') ?: 'render_user';
$password = getenv('DB_PASS') ?: 'render_password';

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
