const button = document.querySelector('.booknow');
const element = document.querySelector('.my_class');

button.addEventListener('click', function () {
    element.classList.toggle('active');
});

// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';}
  else{menuContainer.style.display = 'none';}
});

// clickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclickclick
document.addEventListener('DOMContentLoaded', () => {
  const m1Elements = document.querySelectorAll('.mov1'); // Select checkbox labels
  m1Elements.forEach(label => {
    const checkbox = label.querySelector('input[type="checkbox"]'); // Select the checkbox input inside the label
    label.addEventListener('click', () => {
      checkbox.checked = !checkbox.checked; // Toggle the checkbox's checked state
      label.classList.toggle('selected', checkbox.checked); // Toggle the "selected" class based on the checkbox state
    });
  });
});







// form // form // form // form // form // form // form // form // form // form // form // form // form // form // form // form // form 
function submitForm() {
  var url = window.location.href;
  var urlParams = new URLSearchParams(url);
  var unValue = urlParams.get("un");

  if (unValue === null) {
    var queryString = url.split("?")[1];
    var params = queryString.split("&");
    var unParam = params.find(param => param.startsWith("un="));
    if (unParam) {
      unValue = unParam.substring(3);
    }
  }
  var result1 = queryString.split('&');
  var result = result1.map(function (element) {
    // Check if the element starts with 'un='
    if (element.startsWith('id=')) {
      // If it starts with 'un=', remove the prefix
      return element.substring(3);
    } else {
      // If it doesn't start with 'un=', leave it unchanged
      return element;
    }
  });
  console.log("Value of 'array':", result);
  console.log("Value of 'ID':", result[1]);

  var form = document.getElementById("checkboxForm");
  var formData = new FormData(form);

  // Remove the check for result[0] !== null, as it's not necessary in this context

  // Append the values you want to send to the PHP script
  formData.append("id", result[0]);

  // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Define the PHP script URL where you want to send the data
  const phpUrl = "invetation.php";

  // Configure the request
  xhr.open("POST", phpUrl, true);

  // Set up the callback function when the request is complete
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Response from PHP script: " + xhr.responseText);
    }
  };

  // Send the data to the PHP script
  xhr.send(formData);
}




// toggle for last page
const su_button = document.querySelector('.booknow');
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const goBackParagraph = document.querySelector('.p_goback');

su_button.addEventListener('click', function () {
    page1.classList.toggle('active');
    page2.classList.toggle('active');
});

goBackParagraph.addEventListener('click', function () {
    page1.classList.toggle('active');
    page2.classList.toggle('active');
});



