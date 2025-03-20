// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';loginId.style.display = 'block';}
  else{menuContainer.style.display = 'none';loginId.style.display = 'none';}
});

const headOfSigningUp = document.querySelector('.head_of_signing_up');
const signingUpText = document.querySelector('.SIGNING_UP__text');
const loginText = document.querySelector('.LOGIN__text');