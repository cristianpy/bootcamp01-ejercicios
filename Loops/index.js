for (var i = 0; i < 10; i++) {
  console.log("Indice: " + i);
}

console.log("-----------------");

var persona = {fname:"Juan", lname:"Jose", edad:25};
var dato = "";
for (var x in persona) {//x es atributo o indice
  console.log(persona[x]);
  dato += persona[x] + " ";
}
console.log(dato);

console.log("-----------------");

/* var persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 23,
  nombreCompleto: function(){ return this.nombre+""+this.apellido}};
}*/

var post = [
  {
    titulo: "Programacion en javascript",
    texto: "Javascript is the programmig language of html and the web"
  },
  {
    titulo: "Intro a linux",
    texto: "Javascript is the programmig language of html and the web"
  },
  {
    titulo: "No usen windows pirata",
    texto: "Javascript is the programmig language of html and the web"
  }
]

post.map(function(post){
  console.log(post);
  var titulo = post.titulo;
  console.log(titulo);
  var texto = post.texto;
  console.log(texto);
})
