var x = 3;
var y = 4;
if (x > y) {
  console.log("x es mayor a y");
} else {
  console.log("x no es mayor a y");
}

var dia = new Date().getDay();
switch (dia) {
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 6:
    console.log("Hoy es Sabado");
    break;
  default:
    console.log("Default " + new Date().getDay());
}
