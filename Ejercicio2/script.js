let box = document.querySelector('div');
let colors = ["red", "white", "yellow"];

window.addEventListener('keydown', (event) => box.className = colors.filter(color => color[0] == event.key));