
let objeto_audio = document.querySelector('audio');

objeto_audio.addEventListener('pause', funcion_audio);

function funcion_audio()
{
   window.alert("En pausa!");
}



