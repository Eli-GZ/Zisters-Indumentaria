document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.menu');
  let hamOn = false;

  hamburgerBtn.addEventListener('click', function() {
    if (!hamOn) {
      mobileMenu.classList.toggle('hide');
      mobileMenu.style.top = (mobileMenu.style.top === "0px") ? "-33vh" : "0";

      hamburgerBtn.classList.toggle('open');

     
      hamburgerBtn.disabled = true;
      setTimeout(() => {
        hamOn = false;
        hamburgerBtn.disabled = false;
      }, 100); 
    }
  });
});