<?php
// Replace with your database credentials

$serverid = "localhost";
$PhPid = "BROWSER1";
$password = "~]TmYCf[AEEV";
$database = "MAIN_DATA_BASE_FOR_MOVIE_CLUB";



// Create a connection
$conn = new mysqli($serverid, $PhPid, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from the database
$sql = "SELECT title, content FROM accordion_data";
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

// Close the database connection
$conn->close();

// Return the data as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
