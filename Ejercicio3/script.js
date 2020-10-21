let objeto_boton = document.querySelector('button');

objeto_boton.addEventListener("click", funcion_boton_click);

function funcion_boton_click(evento) {
  
  evento.preventDefault();
  window.alert("alert");
}