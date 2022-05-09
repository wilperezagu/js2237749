// TABLA DE MULTIPLICAR 
var tabla = (n) => {
  for (let i = 1; i <= 20; i++) {
    multi = n * i;
    console.log(n + "x" + i + "=" + multi);
  }
}
console.log(tabla(7));

//Leer dos vectores.
//Hallar de cada uno del promedio y retornar el vector con mayor promedio


//CONTEO REPETICION DE UN NUMERO 
var array = ['1', '3', '2', '4', '6', '2', '3', '1', '8', '1'];
var repetidos = []
var cont = 0
for (var i = 0; i < array.length; i++) {
  for (var j = 0; j < array[i].length; j++) {
    if (array[i][j] === array[i][j]) {
      cont++;
      if (cont > 1) {
        console.log(array[i][j])
        repetidos.push(array[i][j])
        cont = 0
      }
    }
  }
}
console.log(repetidos)

//Leer un arreglo numérico y retornar desviación estandar