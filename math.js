function add(a, b) {
    return (a + b)
}

function subtraction(a, b) {
    return (a - b)
}

function multiply(a, b) {
    return (a * b)
}

function divide(a, b) {
    if (b === 0) {
        return "no se puede dividir por CERO"
    } else {
        return (a / b)
    }
}

// EXPORTANDO LAS FUNCIONES (U OBJETOS) 
// UNA POSIBILIDAD ES EXPORTAR FUNCION POR FUNCION
// exports.add = add
// exports.subtraction = subtraction
// exports.multiply = multiply
// exports.divide = divide

// OTRA POSIBILIDAD ES CREAR UN OBJETO QUE CONTENGA TODAS LAS FUNCIONES A EXPORTAR 
let math = {}
math.add = add
math.substraction = subtraction
math.multiply = multiply
math.divide = divide

module.exports = math