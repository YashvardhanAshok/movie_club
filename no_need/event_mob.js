// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';loginId.style.display = 'block';}
  else{menuContainer.style.display = 'none';loginId.style.display = 'none';}
});


// Function to check if an element is near the center of the screen
function isNearCenter(element) {
    const rect = element.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    return rect.top <= screenHeight / 2 && rect.bottom >= screenHeight / 2;
  }
  
  // Function to check if an element is near the top of the screen
  function isNearTop(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 0;
  }
  
  // Function to check if an element is near the bottom of the screen
  function isNearBottom(element) {
    const rect = element.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    return rect.bottom >= screenHeight;
  }
  
  // Get all the card elements
  const cards = document.querySelectorAll('.card');
  
  // Add scroll event listener to the window
  window.addEventListener('scroll', () => {
    cards.forEach((card) => {
    //   const flipAngle = card.getAttribute('data-flip-angle') || '30deg'; // Default flip angle
      if (isNearCenter(card)) {
        card.style.transform = `rotateY(0deg)`;
        card.style.backgroundColor = 'red'; // Change color when near center
        card.style.width = '90%'; // Set the width to 80%
        card.style.height = '465px'; // Reset the width to 90% when near top or bottom
    //   } else if (isNearTop(card) || isNearBottom(card)) {
    } else if (isNearBottom(card)) {
        card.style.transform = 'rotateY(180deg)';
        card.style.backgroundColor = 'green'; // Change color when near top or bottom
        card.style.width = '80%'; // Reset the width to 90% when near top or bottom
        card.style.height = '440px'; // Reset the width to 90% when near top or bottom
      }
    });
  });
  
  