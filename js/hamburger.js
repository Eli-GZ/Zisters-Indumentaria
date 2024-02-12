document.addEventListener('DOMContentLoaded', function() {
  const mediaQuery = window.matchMedia('(max-width: 400px)');
  const hamburgerBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.menu');
  let hamOn = false;

  const handleClick = () => {
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
  };

 
  if (mediaQuery.matches) {
    hamburgerBtn.addEventListener('click', handleClick);
  }

  // Agregar un event listener para manejar los cambios en el tamaño de la pantalla
  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      hamburgerBtn.addEventListener('click', handleClick);
    } else {
      hamburgerBtn.removeEventListener('click', handleClick);
    }
  });
});