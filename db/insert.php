<?php

$ip=$_REQUEST['ip'];
$ip_decimal=$_REQUEST['ip_decimal'];
$country=$_REQUEST['country'];
$country_iso=$_REQUEST['country_iso'];
$country_eu=$_REQUEST['country_eu'];
$city=$_REQUEST['city'];
$region_name=$_REQUEST['region_name'];
$regioncode=$_REQUEST['regioncode'];
$zipcode=$_REQUEST['zipcode'];
$timezone=$_REQUEST['time_zone'];
$latitude=$_REQUEST['latitude'];
$longitude=$_REQUEST['longitude'];
$asn=$_REQUEST['asn'];
$asn_org=$_REQUEST['asn_org'];




$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'ip';
$conn = mysqli_connect( $servername, $username, $password, $dbname );
$sql = "CREATE TABLE IF NOT EXISTS `ip_details`(ip varchar(500) NOT NULL UNIQUE,ip_decimal varchar(500),country varchar(500),country_iso varchar(500),country_eu varchar(500),region_name varchar(500),region_code varchar(500),zip_code varchar(500),city varchar(500),latitude varchar(500),longitude varchar(500),time_zone varchar(500),asn varchar(500),asn_org varchar(500))";
$result = mysqli_query( $conn, $sql );
$sql = "INSERT INTO `ip_details`(`ip`, `ip_decimal`, `country`, `country_iso`, `country_eu`, `region_name`, `region_code`, `zip_code`, `city`, `latitude`, `longitude`, `time_zone`, `asn`, `asn_org`) VALUES ('$ip','$ip_decimal','$country','$country_iso','$country_eu','$region_name','$regioncode','$zipcode','$city','$latitude','$longitude','$timezone','$asn','$asn_org')";
$result = mysqli_query( $conn, $sql );
var_dump($result)
?>