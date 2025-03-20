// animation
// Add an event listener to the window for the scroll event
function handleScroll() {
  const scrollPosition = window.scrollY;
  const scrollPositionInVh = (scrollPosition / window.innerHeight) * 100;
  const scrollPositionInt = parseInt(scrollPositionInVh);
  // console.log(scrollPositionInt);
  const navrasa_Titel = document.querySelector('.navrasa_Titel');
  const navrasa_Titel_active = document.querySelector('.navrasa_Titel.active');

  // pashse2
  const warpofwe1 = document.querySelector('.warpofwe1');
  const niceToMeetYOU_box = document.querySelector('.niceToMeetYOU_box');
  const niceToMeetYOU_box_active = document.querySelector('.niceToMeetYOU_box.active');
  const warpofwe1_active = document.querySelector('.warpofwe1.active');
  
  // pashse3
  const community = document.querySelector('.community');
  const unforgettable = document.querySelector('.unforgettable');

  //video
  const video_container = document.querySelector('.video-container');
  const video_container2 = document.querySelector('.video-container2');
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  
  


    //scrowll up
    if (scrollPositionInt <= 80 - 0.1) {
    // page1_.navrasa_Titel
    navrasa_Titel.classList.remove('active');

    // page1_phase_2
    warpofwe1.classList.remove('active');
    niceToMeetYOU_box.classList.remove('active');

    // video
    video2.pause();

    }

    //scrowll down
    if (scrollPositionInt >= 90 - 0.1 && scrollPositionInt <= 200 - 0.1) {
    // page1_.navrasa_Titel
    navrasa_Titel.classList.add('active');

    // page1_phase_2
    
    try{
      navrasa_Titel_active.classList.remove('remove');
      niceToMeetYOU_box_active.classList.remove('remove');
      warpofwe1_active.classList.remove('remove');


      // PHASE-3
      // community and unforgettable
      community.classList.remove('active');
      unforgettable.classList.remove('active');

      // video block
      video_container.classList.remove('active');
      video_container2.classList.remove('active');
      // video1.play();  
      video2.pause();
    }
    catch (error) {}
    warpofwe1.classList.add('active');
    niceToMeetYOU_box.classList.add('active');
    
  }

    if (scrollPositionInt >= 250 - 0.1 && scrollPositionInt <= 400 - 0.1) {
      // page1_.navrasa_Titel
      navrasa_Titel_active.classList.add('remove');
      niceToMeetYOU_box_active.classList.add('remove');
      warpofwe1_active.classList.add('remove');

      // PHASE-3
      // community and unforgettable
      community.classList.add('active');
      unforgettable.classList.add('active');

      // video block
      video_container.classList.add('active');
      video_container2.classList.add('active');
      video2.play();  
      // video1.pause();




    }

}

  



window.addEventListener("scroll", handleScroll);


window.addEventListener("load", function() {
  // Scroll the page to the top
  window.scrollTo(0, 0);
});








// video
// Function to check if an element is near the center of the screen
function isNearCenter(element) {
  const rect = element.getBoundingClientRect();
  const screenHeight = window.innerHeight;
  return rect.top <= screenHeight / 2 && rect.bottom >= screenHeight / 2;
}

function isNearTop(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= 0;
}

function isNearBottom(element) {
  const rect = element.getBoundingClientRect();
  const screenHeight = window.innerHeight;
  return rect.bottom >= screenHeight;
}

const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach((card) => {
  //   const flipAngle = card.getAttribute('data-flip-angle') || '30deg'; // Default flip angle
    if (isNearCenter(card)) {
      card.style.transform = `rotateY(0deg)`;
      card.style.width = '350px'; // Set the width to 80%
      card.style.height = '465px'; 
      card.classList.add('active');
  //   } else if (isNearTop(card) || isNearBottom(card)) {
  } else if (isNearBottom(card)) {
      card.style.transform = 'rotateY(180deg)';
      card.style.width = '330px'; // Reset the width to 90% when near top or bottom
      card.style.height = '465px'; // Reset the width to 90% when near top or bottom
      card.classList.remove('active');
    }
  });
});







