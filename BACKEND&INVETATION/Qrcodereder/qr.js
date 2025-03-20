    // Get the <select> element by its ID
    const selectElement = document.getElementById("cars");

    // Add an event listener to listen for changes in the selected value
    selectElement.addEventListener("change", function() {
        const selectedValue = selectElement.value;
        console.log("Selected value: " + selectedValue);
    });

    // Log the initial selected value when the page loads
    console.log("Initial selected value: " + selectElement.value);

  
  
  
  const videoElement = document.getElementById("qr-video");
  const canvasElement = document.getElementById("qr-canvas");
  const qrResultElement = document.getElementById("qr-result");
  
  // Apply CSS classes to elements
  videoElement.classList.add("video-container");
  canvasElement.classList.add("qr-canvas");
  qrResultElement.classList.add("qr-result");
  
  navigator.mediaDevices
      .getUserMedia({ video: { facingMode: "environment" } })
      .then(function (stream) {
          videoElement.srcObject = stream;
          videoElement.play();
      })
      .catch(function (error) {
          console.error("Error accessing the camera: " + error);
      });
  
  videoElement.addEventListener("loadedmetadata", function () {
      canvasElement.width = videoElement.videoWidth;
      canvasElement.height = videoElement.videoHeight;
  });
  
  function tick() {
    canvasElement.getContext("2d").drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
    const imageData = canvasElement.getContext("2d").getImageData(0, 0, canvasElement.width, canvasElement.height);
    let code;

    try {
        code = jsQR(imageData.data, imageData.width, imageData.height);
    } catch (error) {
        // console.error("An error occurred while decoding the QR code:", error);
        requestAnimationFrame(tick);

    }

    if (code) {
        qrResultElement.innerHTML = "QR Code Detected: " + code.data;
        phpcaller(code.data);
        
    } else {
        qrResultElement.innerHTML = "No QR code detected.";
        requestAnimationFrame(tick);
    }
}

tick();

function phpcaller(dataToSend) {
    // const dataToSend = "id:1, name:yash, tableName:old";

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', 'qr.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    // Define a callback function to handle the response
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Parse the response from the PHP script
            const response = JSON.parse(xhr.responseText);
            
            // Check if the response contains the name
            if (response.hasOwnProperty('name')) {
                // Display the name in the specified div
                const nameDiv = document.getElementById('nameDiv');
                nameDiv.innerHTML = '<b>MEMBER</b><br>' + response.name;
                var a;
                var movelist = "";
                const cmovies = document.getElementById('cmovies');
                
                if (response.movie1 == '1' || response.movie2 == '1' || response.movie3 == '1') {
                    movelist = "Day1 <br>";
                    if (response.movie1 == '1') { movelist = movelist + "movie1, "; }
                    if (response.movie2 == '1') { movelist = movelist + "movie2, "; }
                    if (response.movie3 == '1') { movelist = movelist + "movie3, "; }
                    a = 0;
                }
                
                if (response.movie4 == '1' || response.movie5 == '1' || response.movie6 == '1') {
                    movelist += "<br> Day2 <br>";
                    if (response.movie4 == '1') { movelist = movelist + "movie4, "; }
                    if (response.movie5 == '1') { movelist = movelist + "movie5, "; }
                    if (response.movie6 == '1') { movelist = movelist + "movie6, "; }
                    a = 0;
                }

                
                
                
                if (a === 0) {
                    cmovies.innerHTML ='<b>CONFORMED MOVIES:</b><br>' + movelist;
                    // if (selectElement.value == 1) {
                    //     const moviesENTRY = document.getElementById('moviesENTRY');
                    //     moviesENTRY.innerHTML ='<b>CONFORMED</b>';
                    // }


                } else {
                    cmovies.innerHTML = '<b>MOVIES:</b> <br>TICKIT CONFORMED' ;
                }
            
            } else {
                console.error('Name not found in response.');
            }
        } else {
            // Handle errors here
            console.error('Request failed:', xhr.status, xhr.statusText);
        }





        
    };

    // Send the data to the PHP script
    xhr.send("data=" + encodeURIComponent(dataToSend));
}




// document.getElementById('getDataButton').addEventListener('click', function () {
//     // Prepare the data to be sent
//     const dataToSend = "id:1, name:yash, tableName:old";

//     // Create a new XMLHttpRequest object
//     const xhr = new XMLHttpRequest();

//     // Configure the request
//     xhr.open('POST', 'qr.php', true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//     // Define a callback function to handle the response
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             // Parse the response from the PHP script
//             const response = JSON.parse(xhr.responseText);
            
//             // Check if the response contains the name
//             if (response.hasOwnProperty('name')) {
//                 // Display the name in the specified div
//                 const nameDiv = document.getElementById('nameDiv');
//                 nameDiv.innerHTML = '<b>MEMBER</b><br>' + response.name;
//                 var a;
//                 var movelist = "";
//                 const cmovies = document.getElementById('cmovies');
                
//                 if (response.movie1 == '1' || response.movie2 == '2' || response.movie3 == '3') {
//                     movelist = "Day1 <br>";
//                     if (response.movie1 == '1') { movelist = movelist + "movie1, "; }
//                     if (response.movie2 == '2') { movelist = movelist + "movie2, "; }
//                     if (response.movie3 == '3') { movelist = movelist + "movie3, "; }
//                     a = 0;
//                 }
                
//                 if (response.movie4 == '4' || response.movie5 == '5' || response.movie6 == '6') {
//                     movelist += "<br> Day2 <br>";
//                     if (response.movie4 == '4') { movelist = movelist + "movie4, "; }
//                     if (response.movie5 == '5') { movelist = movelist + "movie5, "; }
//                     if (response.movie6 == '6') { movelist = movelist + "movie6, "; }
//                     a = 0;
//                 }
                
//                 console.log(response.movie1);
                
//                 if (a === 0) {
//                     cmovies.innerHTML ='<b>CONFORMED MOVIES:</b><br>' + movelist;
//                 } else {
//                     cmovies.innerHTML = '<b>DID NOT SELECT ANY MOVIES</b><br>' ;
//                 }
            
//             } else {
//                 console.error('Name not found in response.');
//             }
//         } else {
//             // Handle errors here
//             console.error('Request failed:', xhr.status, xhr.statusText);
//         }





        
//     };

//     // Send the data to the PHP script
//     xhr.send("data=" + encodeURIComponent(dataToSend));
// });
