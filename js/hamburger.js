document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.menu');
  let hamOn = false;

  hamburgerBtn.addEventListener('click', function() {
    if (!hamOn) {
      mobileMenu.classList.toggle('hide');
      mobileMenu.style.top = (mobileMenu.style.top === "0px") ? "-42vh" : "0";

      // Cambiar el ícono del menú hamburguesa cuando se muestra el menú
      hamburgerBtn.classList.toggle('open');

      // Deshabilitar temporalmente el botón para evitar múltiples clics
      hamburgerBtn.disabled = true;
      setTimeout(() => {
        hamOn = false;
        hamburgerBtn.disabled = false;
      }, 100); 
    }
  });
});