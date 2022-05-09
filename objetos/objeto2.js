//Funciones también son clases
function Aprendiz(nombre = "aun no tiene", documento = 0) {
    this.nombre = nombre;
    this.documento = documento;
    this.prueba = function () {
        return 1;
    }
    this.metodo1 = function () {
        return "soy un método de la función Aprendiz"
    }
}

var ob1 = new Aprendiz("Pablo Marmol", 123456);
var ob2 = new Aprendiz();
console.log(ob2.nombre)
//************************************************** */
let q = {}

function AnimalDomestico(nombre = "Aun sin nombre") {
    this.nombre = nombre;
    this.getNombre = function () {
        return this.nombre
    }
}

var t = new AnimalDomestico("Perro");
var r = new AnimalDomestico();
console.log(t.nombre);
console.log(r.nombre);


function Animal(nombre, especie) {
    var nombre = nombre;
    this.especie = especie;
    this.getNombre = function () {
        return nombre
    }
    this.getEspecie = function () {
        return especie
    }
    this.prueba = function () {
        return "soy funcion anidada";
    }
}

var s = new Animal("Gato", "felino");
console.log(s.getNombre());
console.log(s.nombre)
console.log(s.getEspecie());
console.log(s.especie)
console.log(s.prueba());