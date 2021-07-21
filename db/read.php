<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ip';
$conn = mysqli_connect($servername, $username, $password, $dbname );
$sql = "SELECT * FROM `ip_details` WHERE 1";
$result = mysqli_query( $conn, $sql );
$rows = array();
while($current_row = mysqli_fetch_assoc($result)) {
    $rows[] = $current_row;
}
header('Access-Control-Allow-Origin: *');
print json_encode($rows);

?>