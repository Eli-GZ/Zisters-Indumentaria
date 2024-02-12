//CARRUCEL
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerwidth = containerDimensions.width;
  let isScrolling = false;

  nxtBtn[i].addEventListener('click', () => {
    if (!isScrolling) {
      isScrolling = true;
      item.scrollLeft += containerwidth;
     
      nxtBtn[i].disabled = true;
      setTimeout(() => {
        isScrolling = false;
        nxtBtn[i].disabled = false;
      }, 500); 
    }
  });

  preBtn[i].addEventListener('click', () => {
    if (!isScrolling) {
      isScrolling = true;
      item.scrollLeft -= containerwidth;
      preBtn[i].disabled = true;
      setTimeout(() => {
        isScrolling = false;
        preBtn[i].disabled = false;
      }, 500); 
    }
  });
});

