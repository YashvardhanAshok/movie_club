<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["email"])) {
    // Get the values from the POST data
    $gender = $_POST["gender"];
    $email = $_POST["email"];
    $occupation = ($_POST["occupation"]);
    $address = ($_POST["address"]);
    $aadhar = ($_POST["aadhar"]);
    $phone = ($_POST["phone"]);
    $dob = ($_POST["dob"]);

    // Database connection parameters
    $servername = "localhost"; 
    $username = "root"; 
    $password = ""; 
    $dbname = "md_database"; 

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check for connection errors
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare the SQL update statement
    $sql = "UPDATE user_data SET 
    gender = '$gender',
    occupation = '$occupation',
    address = '$address',
    aadhar = '$aadhar',
    dob = '$dob',
    phone = '$phone'
    WHERE email = '$email'";

    // Execute the SQL statement
    if ($conn->query($sql) === TRUE) {
        // Fetch the ID of the updated record
        $result = $conn->query("SELECT id FROM user_data WHERE email = '$email'");
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $updatedId = $row["id"];
            echo "$updatedId";
        } else {
            echo "Record updated successfully, but ID not found.";
        }
    } else {
        echo "Error updating record: " . $conn->error;
    }

    // Close the database connection
    $conn->close();
} else {
    echo "Invalid request. Gender value not received.";
}


//img
// if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["email"])) {
//     // Get the values from the POST data
//     $gender = $_POST["gender"];
//     $email = $_POST["email"];
//     $occupation = ($_POST["occupation"]);
//     $address = ($_POST["address"]);
//     $aadhar = ($_POST["aadhar"]);
//     $phone = ($_POST["phone"]);
//     $dob = ($_POST["dob"]);

//     // Create the "img_store" directory if it doesn't exist
//     $imageDirectory = dirname(__FILE__) . "/img_store"; // Get the directory of the PHP script
//     if (!is_dir($imageDirectory)) {
//         mkdir($imageDirectory, 0777, true); // Recursively create the directory
//     }

//     // Handle image upload
//     if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
//         $image = $_FILES["image"];
//         $imageFileName = $image["name"];
//         $imagePath = $imageDirectory . "/" . $imageFileName; // Path to save the image
//         move_uploaded_file($image["tmp_name"], $imagePath);

//         // You can save the $imagePath in your database to store the image's path.
//         // Update the database with the image path
//         $conn = new mysqli($servername, $username, $password, $dbname);

//         // Check for connection errors
//         if ($conn->connect_error) {
//             die("Connection failed: " . $conn->connect_error);
//         }

//         // Prepare the SQL update statement
//         $sql = "UPDATE user_data SET 
//         gender = '$gender',
//         occupation = '$occupation',
//         address = '$address',
//         aadhar = '$aadhar',
//         dob = '$dob',
//         phone = '$phone',
//         image_path = '$imagePath' 
//         WHERE email = '$email'";

//         // Execute the SQL statement
//         if ($conn->query($sql) === TRUE) {
//             echo "Record updated successfully";
//         } else {
//             echo "Error updating record: " . $conn->error;
//         }

//         // Close the database connection
//         $conn->close();
//     }
// } else {
//     echo "Invalid request. Gender value not received.";
// }


// login


?>


