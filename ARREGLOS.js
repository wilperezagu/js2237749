var x = 0;
var z = "r";

const arreglo = [];
console.log(typeof (x));
console.log(typeof (z));
console.log(typeof (arreglo));
console.log(`tamaño= ${arreglo.length}`);
arreglo.push(100);
console.log(`tamaño= ${arreglo.length}`);
console.log(arreglo);
arreglo[1] = 23;
console.log(arreglo);

/////////////////////////////////////
function Arreglos(arr) {

    this.arr = arr;

    this.suma = function () {

        var sum = 0;

        for (let i = 0; i < arr.length; i++) {

            sum += arr[i];

        }

        return (`La suma de los número del arreglo es ${sum}`);

    }

    this.promedio = function () {

        var sum = 0;

        var pro = arr.length;

        for (let i = 0; i < arr.length; i++) {

            sum += arr[i];

        }

        return (`El promedio de los número del arreglo es ${sum / pro}`)

    }

    this.mayor = function () {

        var mayor = Math.max(...arr);

        return (`El número mayor de los número del arreglo es ${mayor}`)

    }

    this.menor = function () {

        var menor = Math.min(...arr);

        return (`El número menor de los número del arreglo es ${menor}`)

    }

}


var obj = new Arreglos([4, 1, 7, 8, 5, 3, 2, 4]);

console.log(obj.suma());

console.log(obj.promedio());

console.log(obj.mayor());

console.log(obj.menor());