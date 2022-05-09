//CALCULADORA
function aritmetica(A, B) {
    this.A = A;
    this.B = B;
    this.suma = function () {
        suma = A + B;
        console.log(`LA SUMA ES ` + suma);
    }
    this.rest = function () {
        rest = A - B;
        console.log(`LA RESTA ES` + rest);
    }
    this.mult = function () {
        mult = A * B;
        console.log(`MULTIPLICACION` + mult);
    }
    this.div = function () {
        div = A / B;
        console.log(`LA DIVICION ES` + div);
    }
}

var obj = new aritmetica(5, 2)
obj.suma();
obj.rest();
obj.mult();
obj.div();

// ARREGLO
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
//mayor y menor
var obj = new Arreglos([4, 1, 7, 8, 5, 3, 2, 4]);
console.log(obj.suma());
console.log(obj.promedio());
console.log(obj.mayor());
console.log(obj.menor());


//funcion que indica cuales son los divisores
var n = numero => {
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            console.log(`${divisor} es divisor de ${numero}`);
        }
    }
}
console.log(n(200));

// fecha  que diga si es antes actual o despues

var f = function (fecha1, fecha2) {
    if (fecha1 < fecha2) {
        return `la fecha ${fecha2} es posterior a la fecha actual ${fecha1}`;
    } else if (fecha1.getTime() === fecha2.getTime()) {
        return 'es la misma fecha'
        // return '1'
    } else {
        //
        return `La fecha  es ${fecha2} es anterior a la fecha actual ${fecha1}`
        // return '2'
    }

}
// console.log(f(new Date(),new Date('May 03 2022'))); // es posterior a la actual
console.log(f(new Date(), new Date())); // es la misma
// console.log(f(new Date(),new Date('Apr 02 2022'))); // es anterior a la actual
