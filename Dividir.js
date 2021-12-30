function dividir(number1,number2){
    if(number1 === 0 || number2 === 0){
        return "No se puede dividir por 0 !!!";        
    }else{
    let resultado = number1 / number2;
    return resultado;
    }
}
module.exports = dividir;