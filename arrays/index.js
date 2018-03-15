var diasVacio = {};//Array vacio
var dias = ["domingo", "lunes", "martes", "miercoles", "jueves"];
console.log("dias: " + dias);
console.log("cantidad de dias: " + dias.length);
console.log(dias[0]);
console.log(dias[1]);
console.log(dias[2]);
console.log(dias[3]);
console.log(dias[4]);


console.log("Array Ordenado Asc: "+dias.sort());
console.log("Array Ordenado Desc: "+dias.sort().reverse());

/*var numeros = [2,34,6,8,1];
console.log(numeros);
console.log(numeros.sort());
console.log(numeros.reverse());*/

//Agregar elemento al Array
dias.push("Viernes"); //Trabaja con el ultimo
console.log(dias);
dias.pop();//Elimina el ultimo
console.log(dias);

//Eliminar primer elemento
dias.shift();
console.log(dias);

//Reemplazo mediante indice
dias[0] = "XXXX";
console.log(dias);

//Borrar elemento conociendo el indice
delete dias[0];
console.log(dias);

console.log(dias.sort());
