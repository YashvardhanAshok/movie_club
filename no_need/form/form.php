<?php
    $serverid = "localhost";
    $PhPid = "root";
    $password = "";
    $database = "md_database"; 

    $conn = new mysqli($serverid, $PhPid, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    // Handle form submission
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve data from the form
        $email = $_POST["Email"];
        $name = $_POST["name"];
        $phone = $_POST["Phone"];
        $dob = $_POST["Date_of_Birth"];
        $occupation = $_POST["Occupation"];
        $address = $_POST["Address"];
        $adarNo = $_POST["Adar_No"];
        
        // Insert data into the database
        $sql = "INSERT INTO new (email, name, phone, Date_of_Birth, Occupation, Address, Adar_No)
        VALUES ('$email', '$name', '$phone', '$dob', '$occupation', '$address', '$adarNo')";
    
        if ($conn->query($sql) === TRUE) {
            echo "Data inserted successfully!";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    
    // Close the database connection
    $conn->close();
    ?>
?>