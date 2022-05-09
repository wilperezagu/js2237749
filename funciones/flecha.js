// Función tradicional

function saludar(nombre) {
    //console.log("Hola");
    return `Hola ${nombre}
    `; //este salto se imprime gracias a las comillas francesas
}

var x = saludar('Maria');
var y = saludar('Jose');
var z = saludar('Juan');
var w = saludar('Ana');
var a = saludar('Pedro');
console.log(x + y + z + w + a);

// Función flecha

var saludar = nombre => console.log(`Hola, ${nombre}`)
console.log(saludar("Maria, Jose, Juan, Ana y Pedro"));

var saludar = () => 'Hola Maria, Jose, Juan, Ana y Pedro';
console.info(saludar());

///////////////////////////////

//sin parametros
var sinpar = () => "Hola";
console.log(sinpar());

//un solo parametro
var cuadrado = function (num) {
    return num * num;
}
console.log(cuadrado(10));

var cuadradito = num => num * num;
console.log(cuadradito(10));

//mas de un parametro
var factor = (n, m) => {
    if (n % m == 0 || m % n == 0) {
        return "uno es factor del otro"
    } else {
        return "no es factor"
    }
}
console.log(factor(7, 10));

var f = (n, m) => n > m ? `${n} es mayor` : `${m} es mayor`;
console.log(f(20, 3))

//Bonus

if (x > y) {
    console.log(`${x} es mayor`);
} else {
    console.log(`${y} es mayor`);
}
var x = 100,
    y = 50;
x > y ? console.log(`${x} es mayor`) : console.log(`${y} es mayor`)

//////////////////////////


//TALLER
//1. funcion que reciba un valor que representa una cantidad en dinero y y hallar su porcentaje
var d = dinero =>
    dinero * 0.10;

console.log("El 10% es $" + d(50000));

//2. funcion que reciba un numero y de el indicar cuales son los divisores
var n = numero => {
    for (let divisor = 1; divisor < numero; divisor++) {
        if (numero % divisor == 0) {
            console.log(divisor + " es divisor de " + numero);
        }
    }
}
console.log(n(10));

//3. Ingrese una fecha e indicar si la fecha es anterior, posterior o actual
/*var f = ()=>
    f = Date();
    var fa = new Date().toLocaleDateString();
    switch (fa) {
        case f>fa:
            `La fecha ${f} es posterior a ${fa}`;
        break;

        case f<fa:
            `La fecha ${f} es inferior a ${fa}`;
        break;
    
        default:
            `La fecha ${f} es actual`;
        break;
    }
console.log(f());
//
var Date = (f,fa)=>f>fa ? `${f} es mayor`:`${f} es menor`
console.log(f,toLocaleDateString);*/


var mensaje = "Dirección cra 32 # 31-99";
var numeroLetras = mensaje.length;
console.log(mensaje.length);

//contar mayusculas

var contar = 0;
var cadena = "CaDena con MayUsCulAs";
var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (var i = 0; i < mayusculas.length; i++) {
    for (var x = 0; x < cadena.length; x++) {
        if (cadena[x] == mayusculas[i]) {
            contar += 1;
        }
    }
}
console.log("Se encontraron: " + contar + " Mayusculas");

function Cadena(texto) {
    this.texto = texto;
    this.mayuscula = function () {
        var contar = 0;
        var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        for (var i = 0; i < mayusculas.length; i++) {
            for (var x = 0; x < texto.length; x++) {
                if (texto[x] == mayusculas[i]) {
                    contar += 1;
                }
            }

            return ("Se encontraron: " + contar + " Mayusculas");
        }
    }
    this.minus = function () {
        var contar = 0;
        var minusculas = "abcdefghijklmnopqrestuvwxyz";
        for (var i = 0; i < minusculas.length; i++) {
            for (var x = 0; x < texto.length; x++) {
                if (texto[x] == minusculas[i]) {
                    contar += 1;
                }
            }
        }
        return ("Se encontraron: " + contar + " minusculas");
    }
}


var obj = new Cadena("HOLAAAAAAkhgjhjgkjhdkj");
// console.log(obj.mayuscula());
console.log(obj.minus());


//////////////////////////////////////////


function contarOcurrencias(datos) {
    if (!Array.isArray(datos)) {
        //throw TypeError('El argumento debe ser un arreglo.');
    }

    return datos.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1, a), {});
}

let numeros = [3, 5, 2, 3, 7, 5, 5, 3, 3, 11, 13, 11, 2];

try {
    console.log(contarOcurrencias(numeros));

} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(contarOcurrencias('texto'));
} catch (e) {
    console.log(`Error: ${e.message}`);
}

//////////////////////////////