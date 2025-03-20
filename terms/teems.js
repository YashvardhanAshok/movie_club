// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';}
  else{menuContainer.style.display = 'none';}
});