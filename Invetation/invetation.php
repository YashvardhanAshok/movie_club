<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    try {
        $id = $_POST["id"];
        // $name = $_POST["name"];
        // $table = $_POST["table"];
        echo "Received id: " . $id . "\n";
    
    // Check if the "movie1" checkbox was checked
    $m1 = isset($_POST["movie1"]) && $_POST["movie1"] == "1" ? 1 : '';
    $m2 = isset($_POST["movie2"]) && $_POST["movie2"] == "1" ? 1 : '';
    $m3 = isset($_POST["movie3"]) && $_POST["movie3"] == "1" ? 1 : '';
    $m4 = isset($_POST["movie4"]) && $_POST["movie4"] == "1" ? 1 : '';
    $m5 = isset($_POST["movie5"]) && $_POST["movie5"] == "1" ? 1 : '';
    $m6 = isset($_POST["movie6"]) && $_POST["movie6"] == "1" ? 1 : '';


    $serverid = "localhost";
    $PhPid = "BROWSER1";
    $password = "~]TmYCf[AEEV";
    $database = "MAIN_DATA_BASE_FOR_MOVIE_CLUB";
    // Create a connection
    try {
        $conn = new PDO("mysql:host=$serverid;dbname=$database", $PhPid, $password);
        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Check if the id already exists
        $stmt = $conn->prepare("SELECT * FROM movies_c WHERE id = :id");
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $existingUser = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($existingUser) {
            // If the id exists, update the existing row
            $stmt = $conn->prepare("UPDATE movies_c SET movie1 = :movie1, movie2 = :movie2, 
                                    movie3 = :movie3, movie4 = :movie4, movie5 = :movie5, movie6 = :movie6
                                    WHERE id = :id");
        } else {
            // If the id does not exist, insert a new row
            $stmt = $conn->prepare("INSERT INTO movies_c (id, movie1, movie2, movie3, movie4, movie5, movie6)
                                    VALUES (:id, :movie1, :movie2, :movie3, :movie4, :movie5, :movie6)");
        }

        // Bind parameters
        $stmt->bindParam(':id', $id);
        $stmt->bindParam(':movie1', $m1);
        $stmt->bindParam(':movie2', $m2);
        $stmt->bindParam(':movie3', $m3);
        $stmt->bindParam(':movie4', $m4);
        $stmt->bindParam(':movie5', $m5);
        $stmt->bindParam(':movie6', $m6);

        // Execute the statement
        $stmt->execute();

        if ($existingUser) {
            echo "Existing record updated successfully";
        } else {
            echo "New record created successfully";
        }
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
    $conn = null;


} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
}
?>
