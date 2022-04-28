// Función tradicional

function saludar(nombre) {
    //console.log("Hola");
    return `Hola ${nombre}
    `;//este salto se imprime gracias a las comillas francesas
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
var factor=(n,m)=>{
    if (n%m==0||m%n==0) {
        return "uno es factor del otro"
    } else {
        return "no es factor"
    }
}
console.log(factor(7,10));

var f=(n,m)=>n>m?`${n} es mayor`:`${m} es mayor`;
console.log(f(20,3))

//Bonus

if (x>y) {
    console.log(`${x} es mayor`);
} else {
    console.log(`${y} es mayor`);
}
var x=100,y=50;
x>y?console.log(`${x} es mayor`):console.log(`${y} es mayor`)

