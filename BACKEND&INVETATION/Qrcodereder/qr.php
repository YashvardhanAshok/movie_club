<?php
// Establish a database connection
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "md_database"; 



$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the data from the POST request
$data = $_POST['data'];

// Parse the data to extract the tableName value
$matches = [];
preg_match('/tableName:(\w+)/', $data, $matches);
$tableName = $matches[1];

preg_match('/id:(\w+)/', $data, $matches);
$id = $matches[1];
$id=1;

if (count($matches) !== 2) {
    die("Invalid data format");
}


// Query the database to retrieve all rows from the specified table
$sql = "select *from user_data where id=$id ";
$result = $conn->query($sql);
    

// if ($result->num_rows === 1) {
// // Fetch and return the name as JSON
// $row = $result->fetch_assoc();
// $response = [
//  'name' => $row['name'],
//  'email' => $row['email'],
//  'pass_send' => $row['pass'],
//  'movie1' => $row['movie1'],
//  'movie2' => $row['movie2'],
//  'movie3' => $row['movie3'],
//  'movie4' => $row['movie4'],
//  'movie5' => $row['movie5'],
//  'movie6' => $row['movie6'],
 
// ];
// echo json_encode($response);
// } else {
// echo "No records found in the table.";
// }
    





$conn->close();
?>
