//suma
// function aritmetica(num1, num2) {
//     this.num1 = 25;
//     this.num2 = 5;
//     sumar = num1 + num2;
// }
// console.log(la suma es : "+sumar");

/////////////////////


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

///////////////////////////////////////
function sumar(num1, num2, num3) {
    var resultado;
    resultado = num1 + num2 + num3;
    return resultado;
}

console.log("La suma es:" + sumar(25, 10, 54));

//////////fracciones///////////////////////
class Fraccion {
    /*
            https://parzibyte.me/blog
    */
    constructor(numerador, denominador) {
        this.setNumerador(numerador);
        this.setDenominador(denominador);
    }

    setNumerador(numerador) {
        this.numerador = numerador;
    }
    setDenominador(denominador) {
        if (denominador === 0) {
            throw "El denominador debe ser distinto de 0";
        }
        this.denominador = denominador;
    }
    // Ayudantes

    maximoComunDivisor(a, b) {
        let temporal;//Para no perder b
        while (b != 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    }

    minimoComunMultiplo(a, b) {
        return (a * b) / this.maximoComunDivisor(a, b);
    }
    // Operaciones

    suma(otra) {
        const mcm = this.minimoComunMultiplo(this.denominador, otra.denominador);
        const diferenciaFraccionActual = mcm / this.denominador;
        const diferenciaOtraFraccion = mcm / otra.denominador;
        const resultado = new Fraccion();
        resultado.setNumerador(
            (diferenciaFraccionActual * this.numerador) + (diferenciaOtraFraccion * otra.numerador));
        resultado.setDenominador(mcm);
        return resultado;
    }

    resta(otra) {
        const mcm = this.minimoComunMultiplo(this.denominador, otra.denominador);
        const diferenciaFraccionActual = mcm / this.denominador;
        const diferenciaOtraFraccion = mcm / otra.denominador;
        const resultado = new Fraccion();
        resultado.setNumerador(
            (diferenciaFraccionActual * this.numerador) - (diferenciaOtraFraccion * otra.numerador));
        resultado.setDenominador(mcm);
        return resultado;
    }

    producto(otra) {
        return new Fraccion(this.numerador * otra.numerador, this.denominador * otra.denominador);
    }

    cociente(otra) {
        return new Fraccion(this.numerador * otra.denominador, this.denominador * otra.numerador);
    }

    inversa() {
        return new Fraccion(this.denominador, this.numerador);
    }

    potencia(exponente) {
        return new Fraccion(Math.pow(this.numerador, exponente), Math.pow(this.denominador, exponente));
    }

    simplifica() {
        const mcd = this.maximoComunDivisor(this.numerador, this.denominador);
        return new Fraccion(this.numerador / mcd, this.denominador / mcd);
    }

    aMixta() {
        return FraccionMixta.desdeImpropia(this);
    }

    toString() {
        return `${this.numerador}/${this.denominador}`;
    }

    equals(otra) {
        return this.numerador === otra.numerador && this.denominador === otra.denominador;
    }
}

class FraccionMixta {

    constructor(entero, fraccion) {
        this.entero = entero;
        this.fraccion = fraccion;
    }
    aImpropia() {
        let numerador = this.fraccion.numerador;
        if (this.entero) {
            numerador = numerador + (this.fraccion.denominador * this.entero);
        }
        return new Fraccion(numerador, this.fraccion.denominador);
    }

    static desdeImpropia(fraccion) {
        let entero = 0;
        if (fraccion.numerador >= fraccion.denominador) {
            entero = Math.floor(fraccion.numerador / fraccion.denominador);
            const residuo = fraccion.numerador % fraccion.denominador;
            if (residuo > 0) {
                fraccion = new Fraccion(residuo, fraccion.denominador);
            } else {
                fraccion = null;
            }
        }
        return new FraccionMixta(entero, fraccion);
    }

    toString() {
        let resultado = "";
        if (this.entero) {
            resultado = resultado.concat(this.entero);
            if (this.fraccion) {
                resultado = resultado.concat(" + ");
            }
        }
        if (this.fraccion) {
            resultado = resultado.concat(this.fraccion.toString());
        }
        return resultado;
    }
}

// Implementación    
const f = new Fraccion(5, 6);
const f2 = new Fraccion(7, 24);
console.log(`${f.toString()} + ${f2.toString()} = ${f.suma(f2).toString()}`);
console.log(`${f.toString()} - ${f2.toString()} = ${f.resta(f2).toString()}`);
console.log(`${f.toString()} * ${f2.toString()} = ${f.producto(f2).toString()}`);
console.log(`${f.toString()} / ${f2.toString()} = ${f.cociente(f2).toString()}`);
console.log(`Inversa de ${f.toString()} = ${f.inversa().toString()}`);
const exponente = 3;
console.log(`Potencia de ${f.toString()} con exponente ${exponente} = ${f.potencia(exponente).toString()}`);
const fraccionParaSimplificar = new Fraccion(80, 120);
console.log(`Simplificar ${fraccionParaSimplificar.toString()}  = ${fraccionParaSimplificar.simplifica().toString()}`);
const f3 = new Fraccion(1, 5);
const f4 = new Fraccion(1, 3);
const f5 = new Fraccion(1, 5);
console.log(`${f3.toString()} es igual a ${f4.toString()}? ${f3.equals(f4)}`);
console.log(`${f3.toString()} es igual a ${f5.toString()}? ${f3.equals(f5)}`);
console.log(`${f4.toString()} es igual a ${f5.toString()}? ${f4.equals(f5)}`);

const fraccionesParaMixta = [
    new Fraccion(7, 3),
    new Fraccion(2, 3),
    new Fraccion(5, 5),
    new Fraccion(10, 5),
    new Fraccion(1, 5),
    new Fraccion(7, 5),
    new Fraccion(71, 5),
];
fraccionesParaMixta.forEach(fraccion => {
    console.log(`${fraccion.toString()} a mixta es: ${fraccion.aMixta().toString()}`);
});

const fraccionesParaImpropia = [
    new FraccionMixta(1, new Fraccion(3, 5)),
    new FraccionMixta(0, new Fraccion(3, 5)),
    new FraccionMixta(2, new Fraccion(3, 5)),
    new FraccionMixta(1, new Fraccion(2, 5)),
    new FraccionMixta(14, new Fraccion(1, 5)),
    new FraccionMixta(0, new Fraccion(1, 1)),
];
fraccionesParaImpropia.forEach(fraccionMixta => {
    console.log(`${fraccionMixta.toString()} a impropia es: ${fraccionMixta.aImpropia().toString()}`);
});