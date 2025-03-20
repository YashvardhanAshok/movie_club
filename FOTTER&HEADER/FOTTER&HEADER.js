// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');
const menu_text = document.querySelector('.menu_text');
const txt_menu = document.querySelector('.txt_menu');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';
  // menu_text.style.backgroundColor = 'white';
  // txt_menu.style.color = 'black';
  // menuCheckbox.style.color = 'black';.menu
const root = document.documentElement;

// Change the value of the --c variable
root.style.setProperty('--c', 'black');


  
  }
  else{menuContainer.style.display = 'none';}
});

const headOfSigningUp = document.querySelector('.head_of_signing_up');
const signingUpText = document.querySelector('.SIGNING_UP__text');
const loginText = document.querySelector('.LOGIN__text');
