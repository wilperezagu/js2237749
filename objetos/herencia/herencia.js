class Recurso{//super clase o clase padre
    constructor(nombre,categoria){
        this._nombre=nombre;
        this._categoria=categoria;
    }    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
       this._nombre=nombre;     
    }
    get categoria(){
        return this._nombre;
    }
    set categoria(categoria){
       this._categoria=categoria;     
    }   
}
//var rr=new Recurso("aa","bb","cc",123);
//console.log(typeof(rr));
class Libro extends Recurso{//sub clase o clase hija
    constructor(nombre,categoria,paginas,editor){
        super(nombre,categoria);
        this._paginas=paginas;
        this._editor=editor;                   
        
    }    

}
var lib1=new Libro("la odisea","epico",250,"oveja negra");
var lib2=new Libro("la iliada","epico",500,"oveja negra");
//console.log(lib1);
//Relación tiene un con un atributo sencillo
class Mochila{
    constructor(propietario,libro){
        this._propietario=propietario;
        this._libro=libro;
    }
}
var x=new Mochila("juan",lib1);
//console.log(x);

class Seccion{
    constructor(nombre,coleccion){
        this._nombre=nombre;
        this._coleccion=coleccion;
    }
    almacenar(libro){
        this._coleccion.push(libro)
    }

    getColeccion(){
        return this._coleccion;
    }
}

var colection=[];
var lib3=new Libro("Javascript 1","software",250,"McGrawHill");
console.log(`El nombre del libro es ${lib3.nombre}`)
lib3.nombre="Javascript Básico";
console.log(`El nombre del libro es ${lib3.nombre}`)
var lib4=new Libro("Fundamentos de JS","software",500,"Tomson");
var seccion1=new Seccion("Software",colection);

seccion1.almacenar(lib3);
seccion1.almacenar(lib4);
console.log(seccion1.getColeccion());