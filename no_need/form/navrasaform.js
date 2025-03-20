$(document).ready(function() {
    $("#myForm").submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting traditionally

        // Serialize the form data into a format that can be sent via AJAX
        var formData = $(this).serialize();

        // Send the data to the PHP script using AJAX
        $.ajax({
            type: "POST",
            url: "submit.php", // URL of your PHP script
            data: formData,
            success: function(response) {
                // Display the response from the PHP script
                $("#response").html(response);
            }
        });
    });
});