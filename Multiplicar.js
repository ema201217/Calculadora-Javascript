function multiplicar(number1,number2) {
    if(number1 === 0 || number2 === 0){
        return 0;
    }
    let resultado = number1 * number2;
    return resultado;
}

module.exports = multiplicar;