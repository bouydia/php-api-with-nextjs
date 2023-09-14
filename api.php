<?php
header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");
// Check if the request method is GET
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Define your data
    $data = array(
        'message' => 'This is a PHP API endpoint',
        'timestamp' => date('Y-m-d H:i:s'),
    );

    // Set the response content type to JSON
    header('Content-Type: application/json');

    // Encode the data as JSON and send it as the response
    echo json_encode($data);
} else {
    // If the request method is not GET, respond with an error
    header('HTTP/1.1 405 Method Not Allowed');
    echo json_encode(array('error' => 'Method Not Allowed'));
}
