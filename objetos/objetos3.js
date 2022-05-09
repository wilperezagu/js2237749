// constructor
class carro {
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }
    set marca(marca) {
        this._marca = marca;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get marca() {
        return this._marca;
    }
    get modelo() {
        return this._modelo;
    }
    infocarro() {
        return `Automovil ${this._marca} modelo ${this._modelo}`;
    }
}

//instancia
var a = new carro();
var b = new carro("chevrolet", "onix");
a.marca = "dodge";
b.modelo = "journey"
console.log(a);
console.log(b);

//libro
class libro {
    constructor(titulo, editorial, año_de_publicacion, autor, numero_de_paginas) {
        this._titulo = titulo;
        this._editorial = editorial;
        this._año_de_publicacion = año_de_publicacion;
        this._autor = autor;
    }
    set titulo(titulo) {
        this._titulo = titulo;
    }
    set editorial(editorial) {
        this._editorial = editorial;
    }
    set año_de_publicacion(año_de_publicacion) {
        this._año_de_publicacion = año_de_publicacion;
    }
    set autor(autor) {
        this._autor = autor;
    }
    set numero_de_paginas(numero_de_paginas) {
        this._numero_de_paginas = numero_de_paginas;
    }
    get titulo() {
        return this._titulo;
    }
    get editorial() {
        return this._editorial;
    }
    get año_de_publicacion() {
        return this._año_de_publicacion;
    }
    get autor() {
        return this._autor;
    }
    get numero_de_paginas() {
        return this._numero_de_paginas;
    }
}

var a = new libro();
var b = new libro("Asesinato en el Orient Express", "Collins Crime Club", "4 de enero de 1934", "Agatha Christie");
var c = new libro("Asesinato en el Orient Express", "Collins Crime Club", "4 de enero de 1934", "Agatha Christie");
var d = new libro("Asesinato en el Orient Express", "Collins Crime Club", "4 de enero de 1934", "Agatha Christie");
var e = new libro("Asesinato en el Orient Express", "Collins Crime Club", "4 de enero de 1934", "Agatha Christie");

a.titulo = "Asesinato en el Orient Express";
b.editorial = "Collins Crime Club"
c.año_de_publicacion = "4 de enero de 1934"
d.autor = "Agatha Christie"
e.numero_de_paginas = "256"
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
//////////////////////////

//varibale que dice si un libro debe cambiarse  o no

