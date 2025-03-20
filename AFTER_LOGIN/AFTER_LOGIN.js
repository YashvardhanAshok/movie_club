// menu  
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';loginId.style.display = 'block';}
  else{menuContainer.style.display = 'none';loginId.style.display = 'none';}
});

// login and singup
var url = window.location.href;
var urlParams = new URLSearchParams(url);
var unValue = urlParams.get("email");
var fnameValue = "";

if (unValue === null) {
    var queryString = url.split("?")[1];
    var params = queryString.split("&");
    var emailParam = params.find(param => param.startsWith("email="));
    var fnameParam = params.find(param => param.startsWith("Fname="));

    if (emailParam) {
        unValue = emailParam.substring(6); // Adjust the number to match the length of "email="
    }
    if (fnameParam) {
        fnameValue = fnameParam.substring(6); // Adjust the number to match the length of "Fname="
        fnameValue = fnameValue.toUpperCase(); // Convert fnameValue to uppercase
    }
}

var result1 = queryString.split('&');
var result = result1
    .filter(element => !element.startsWith('Fname=')) 
    .map(function (element) {
        if (element.startsWith('email=')) {
            return element.substring(6); // Adjust the number to match the length of "email="
        } else {
            return element;
        }
    });

console.log("Value of 'array':", result);
console.log("Value of 'email':", result[0] );
console.log("Value of 'fname':", fnameValue);

var name_change_for_name_for_s = document.querySelector(".name_for_s");
name_change_for_name_for_s.textContent = fnameValue;


// php

  // Add an event listener to the form to capture form submission
//   document.getElementById('myForm').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent the form from submitting

//     // Log the input values
//     // const phone = document.querySelector('input[name="phone"]').value;
//     // const dob = document.querySelector('input[name="dob"]').value;
//     // const occupation = document.querySelector('input[name="occupation"]').value;
//     // const address = document.querySelector('input[name="address"]').value;
//     // const aadhar = document.querySelector('input[name="aadhar"]').value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;

//     // Log the values to the console
//     // console.log('Phone:', phone);
//     // console.log('D.O.B:', dob);
//     // console.log('Occupation:', occupation);
//     // console.log('Address:', address);
//     // console.log('Adar No.:', aadhar);
//     console.log('Gender:', gender);
// });


document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    // Get the selected gender value
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const occupation = document.querySelector('input[name="occupation"]').value;
    const address = document.querySelector('input[name="address"]').value;
    const aadhar = document.querySelector('input[name="aadhar"]').value;
    const dob = document.querySelector('input[name="dob"]').value;
    const xhr = new XMLHttpRequest();
    const phpUrl = 'after.php';

    // Prepare the data to send
    const data = new FormData();
    data.append('gender', gender);
    data.append('phone', phone);  
    data.append('email', result[0]);
    
    data.append('occupation', occupation);
    data.append('address', address);
    data.append('dob', dob);
    data.append('aadhar', aadhar);

    // Configure the request
    xhr.open('POST', phpUrl, true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            var response = xhr.responseText;
        
            if (!isNaN(response)) {
                var id = parseInt(response, 10);
                window.location.href = "../Invetation/invetation.html?id=" + id;
            } else {
                console.log("Received string response: " + response);
            }
        }
    };

    xhr.send(data);
});

