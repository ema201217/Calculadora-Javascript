const sumar = require("./Sumar");
const restar = require("./Restar");
const dividir = require("./Dividir");
const multiplicar = require("./Multiplicar");


console.log(sumar(10,30))  // 40
console.log(restar(10,30))  // -20

console.log(multiplicar(10,30)); //300
console.log(multiplicar(0,4));  //0
console.log(dividir(50,5));     //10
console.log(dividir(0,3));      //  No se puede dividir por 0 !!!

