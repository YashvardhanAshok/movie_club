// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');


menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';}
  else{menuContainer.style.display = 'none';}
});



  
  
  
  
const thirdCard = document.querySelector('.display_card:nth-of-type(3)');
const for_Card = document.querySelector('.display_card:nth-of-type(4)');

for_Card.addEventListener('mouseover', function() {
  // thirdCard.style.transform = 'rotate(0)';
  // thirdCard.style.transform = 'translatey(-100px)';
  // thirdCard.style.transform = 'rotateY(180deg)';

  
  thirdCard.style.transform = 'scale(1.06)';
  const secondCard = document.querySelector('.display_card:nth-of-type(2)');
  secondCard.style.transform = 'rotate(0)';
});

for_Card.addEventListener('mouseout', function() {
  thirdCard.style.transform = 'rotate(-5deg)';
  const secondCard = document.querySelector('.display_card:nth-of-type(2)');
  secondCard.style.transform = 'rotate(6deg)';
});

  
  
  
  
  
  
  
  