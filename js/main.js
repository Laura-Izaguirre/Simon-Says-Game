import '../assets/styles/style.scss';

//Patron del juego
let gameP = [];

//Patron del click
let gameClickP = [];

//Funcion para iniciar el juego
let start = false;
let level = 0;

//Evento para que registre una tecla e inicie el juego
$(document).keydown(() => {
  if(!start) {
    $('#level-title').text('level' + level);
    start = true;
  }
});

//Funcion para crear la secuencia del juego 
function nextSequence() {
  //Reiniciar los clicks
  gameClickP = [];

  //Actualizar el nivel 
  level++;
  $('#level-title').text('level' + level);

  //Números aleatorios para el patron
  let randomNumber = Math.random()*4;
  randomNumber = Math.floor(randomNumber);

}