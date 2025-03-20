// menu
const menuCheckbox = document.querySelector('.menu');
const menuContainer = document.querySelector('.menucontanerbox');
const loginId = document.querySelector('.loginId');

menuCheckbox.addEventListener('change', function() {
  const isChecked = this.checked;
  if (isChecked==true) {menuContainer.style.display = 'block';}
  else{menuContainer.style.display = 'none';}
});


$(document).ready(function() {
  $.ajax({
      url: 'FAQ.php',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
          // Loop through the data and create accordion items
          data.forEach(function(item, index) {
              var accordionItem = `
                  <div class="accordion">
                    <div class="accordion-item">
                        <button id="accordion-button-${index + 1}" aria-expanded="false">
                            <span class="accordion-title">${item.title}</span>
                            <span class="icon" aria-hidden="true"></span>
                        </button>
                        <div class="accordion-content">
                            <p>${item.content}</p>
                        </div>
                    </div>
                  </div>
              `;

              // Append the accordion item to the container
              $('#faq_BOX_Q_id').append(accordionItem);
              const items = document.querySelectorAll(".accordion button");
              // Add a click listener to the button
              $(`#accordion-button-${index + 1}`).click(function() {
                const itemToggle = this.getAttribute('aria-expanded');
                console.log("1")
                for (i = 0; i < items.length; i++) {
                  items[i].setAttribute('aria-expanded', 'false');
                console.log("2")
              
                }
                
                if (itemToggle == 'false') {
                  this.setAttribute('aria-expanded', 'true');
                  
                }
              });
          });
      },
      error: function() {
          console.error('Failed to fetch accordion data.');
      }
  });
});


