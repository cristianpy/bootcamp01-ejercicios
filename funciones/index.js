console.log("hola mundo");

function suma() {
  var x = 1;
  var y = 2;
  console.log(x+y);
}

suma();


function restar(x, y) {
  console.log(x-y);
}

restar(4, 2);

function miFuncion(nombre, apellido) {
  var nombreCompleto = nombre + " " + apellido;
  return nombreCompleto;
}

var nombreCompleto = miFuncion("Cristian", "Paniagua");
console.log(nombreCompleto);


// Funciones anónimas
var miFuncion = function() {
  return 5 + 4;
}
console.log(miFuncion());

//Funcion anonima ES6
console.log(function(a, b){return a - b}(5,1));
//() => {return "Arrow Function"}()
