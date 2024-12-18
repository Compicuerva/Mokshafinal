const botones = document.querySelectorAll(" #boton");//capturo el boton
const parrafos = document.querySelectorAll(" #mensaje");
botones.forEach((boton,index) => {
    boton.addEventListener("click",()=>{
    parrafos[index].textContent = "Agregaste al carrito "
    });
   }) //manipulo el boton para añadir un evento, estoy a la escucha de lo que pasa con el boton


  