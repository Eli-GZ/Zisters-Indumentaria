//BUSCADOR
document.addEventListener("keyup", e=>{

  if(e.target.matches("#buscador")){

    document.querySelectorAll(".product-card").forEach(ropa=>{

      ropa.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ? ropa.classList.remove("filtro") : ropa.classList.add("filtro")
    });

  }
  
});