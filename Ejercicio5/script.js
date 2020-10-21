
let addButton = document.getElementById('addButton');
let keywordElement = document.getElementById('keyword');
let valElement = document.getElementById('value');

debug_pintar_dato();

addButton.addEventListener('click', function () {
    localStorage.setItem(keywordElement.value, valElement.value);
    console.log("hubo un cambio");
    debug_pintar_dato();
});

function debug_pintar_dato() {
    let data = localStorage.getItem('nombre_variable');
    if (data) {
        console.log("Dato: ", data);
    }
}