
// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';}
  else{menuContainer.style.display = 'none';}
});

const headOfSigningUp = document.querySelector('.head_of_signing_up');
const signingUpText = document.querySelector('.SIGNING_UP__text');
const loginText = document.querySelector('.LOGIN__text');
// login and sin up

function toggleText() {
  // Get the elements by their class names
  const headOfSigningUp = document.querySelector('.head_of_signing_up');
  const signingUpText = document.querySelector('.SIGNING_UP__text');
  const have_signingUpText = document.querySelector('.have_SIGNING_UP__text');

  // mainbox
  const formPusser = document.querySelector('.formPusser');
  const LOGIN_NAME = document.querySelector('.LOGIN_NAME');
  const formPusser2 = document.querySelector('.formPusser2');

  const nameChange = document.querySelector('.nameChange');
  const nameChange2 = document.querySelector('.nameChange2');
  


  

  // Add a click event listener to the "head_of_signing_up" element
  headOfSigningUp.addEventListener('click', () => {
      // Toggle the 'active' class on the text elements
      signingUpText.classList.toggle('active');
      have_signingUpText.classList.toggle('active');

      LOGIN_NAME.classList.toggle('active');
      formPusser.classList.toggle('active');
      formPusser2.classList.toggle('active');

      nameChange.classList.toggle('active');
      nameChange2.classList.toggle('active');

      
  });
}


toggleText();


// sinup setting
document.addEventListener("DOMContentLoaded", function() {
  var sumetBuLink = document.querySelector(".SUMET_BU");
  var fNameInput = document.querySelector(".f_Name");
  var lNameInput = document.querySelector(".l_Name");
  var emailInput = document.querySelector(".email_Name");
  var passInput = document.querySelector(".pass_Name");

  
var inputs = [fNameInput, lNameInput, emailInput, passInput];

  sumetBuLink.addEventListener("click", function(event) {
      var anyEmpty = inputs.some(function(input) {
          return input && input.value.trim() === "";
      });

      if (anyEmpty) {
          event.preventDefault(); 
          sumetBuLink.classList.add("grayed-out"); 
      }
  });

  inputs.forEach(function(input) {
      input.addEventListener("input", function() {
          var anyEmpty = inputs.some(function(input) {
              return input && input.value.trim() === "";
          });

          if (anyEmpty) {
              sumetBuLink.classList.add("grayed-out");
          } else {
              sumetBuLink.classList.remove("grayed-out");
          }
      });
  });

  // press of s_but_su
  
  sumetBuLink.addEventListener("click", function() {
    const fName = document.querySelector(".f_Name").value;
    const lName = document.querySelector(".l_Name").value;
    const email = document.querySelector(".email_Name").value;
    const password = document.querySelector(".pass_Name").value;

    const data = new FormData();
    data.append('fName', fName);
    data.append('lName', lName);
    data.append('email', email);
    data.append('password', password);

    fetch('php123.php', {
        method: 'POST',
        body: data
    })
    .then(response => response.text()) 
    .then(result => {
        console.log(result);
        if (result === "Email is already in use.") {
            console.log("Email is already in use.");
        } else if (result === "Data inserted successfully!") {
            console.log("Data inserted successfully!");
            window.location.href = "../AFTER_LOGIN/AFTER_LOGIN.html?email=" + email + "&Fname=" + fName;
        }
    })
    
    .catch(error => {
        console.error('Error:', error);
    });
});

    //end_press of s_but_su




});




// login
document.addEventListener("DOMContentLoaded", function() {
    const l_sumetBuLink = document.querySelector(".l_SUMET_BU");
    const l_emailInput = document.querySelector(".l_email_Name");
    const l_passInput = document.querySelector(".l_pass_Name");
  
    
  const inputs = [l_emailInput, l_passInput];
  
    l_sumetBuLink.addEventListener("click", function(event) {
        const anyEmpty = inputs.some(function(input) {
            return input && input.value.trim() === "";
        });
  
        if (anyEmpty) {
            event.preventDefault(); 
            l_sumetBuLink.classList.add("grayed-out"); 
        }
    });
  
    inputs.forEach(function(input) {
        input.addEventListener("input", function() {
            const anyEmpty = inputs.some(function(input) {
                return input && input.value.trim() === "";
            });
  
            if (anyEmpty) {
                l_sumetBuLink.classList.add("grayed-out");
            } else {
                l_sumetBuLink.classList.remove("grayed-out");
            }
        });
    });
  
    // press of s_but_su
    
    l_sumetBuLink.addEventListener("click", function() {
      const email = document.querySelector(".l_email_Name").value;
      const password = document.querySelector(".l_pass_Name").value;
  
      const data = new FormData();
      data.append('email', email);
      data.append('password', password);
  
      fetch('login123.php', {
          method: 'POST',
          body: data
      })
      .then(response => response.text()) 
      .then(result => {
          console.log(result);
          if (result === "Email is already in use.") {
              console.log("Email is already in use.");
          } else if (result.includes("Data_successfully")) {
            var substringToRemove = "Data_successfully";
            // Use the replace method to remove the substring
            var modifiedString = result.replace(substringToRemove, "");

            console.log(modifiedString); 
            window.location.href = "../Invetation/invetation.html?id=" + modifiedString;
          }
      })
      
      .catch(error => {
          console.error('Error:', error);
      });
  });
  
  
  
  
  
  });
  
  
  
  