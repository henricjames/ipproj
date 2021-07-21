<?php

$ip = $_REQUEST['ip'];

$url = "https://ifconfig.co/?ip=$ip";
$headers=array( 'Accept: application/json');

$ch = curl_init();
curl_setopt( $ch, CURLOPT_URL, $url );
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
curl_setopt( $ch, CURLOPT_HTTPHEADER, $headers );
curl_setopt( $ch, CURLOPT_HEADER, false );
curl_setopt( $ch, CURLOPT_ENCODING, 'gzip' );
curl_setopt( $ch, CURLOPT_PROXY, '127.0.0.1:8888' );
$html = curl_exec( $ch );
sleep( 1 );
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo $html;

?>