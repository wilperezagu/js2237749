//objetos literales - no se instancian

var ob = {
    nombre: "Daniel",
    documento: 123456,
    ficha: 2237749,
    datos: function () {
        return `Soy ${this.nombre},
    identificado con el documento numero ${this.documento},
    de la ficha ${this.ficha}
    mi telefono es ${this.telefono}`
    },
    ciudad: "Soacha"
}


console.log(ob.datos());
ob.nombre = "Santi"
console.log(ob.datos());
ob.telefono = 2223344;
console.log(ob.datos());

///////////////////////////////////////

function fraccion(num1, den1, num2, den2) {
    this.num1 = num1;
    this.num2 = num2;
    this.den1 = den1;
    this.den2 = den2;
    this.suma = function () {
        if (den1 > den2) {
            suma += num1, num2;
            console.log(``)

        } else {
            suma = ((num1 + num2) / den1);
        }

    }

}
var total = new fraccion(1, 3, 2, 3)
console.log(total.suma())