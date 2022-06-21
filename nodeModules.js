const os = require('os')

console.log(os.freemem())
console.log(os.totalmem())
console.log('La memoria ocupada es: ' + (os.totalmem() - os.freemem() ));

const math = require('./math')
let a = 5, b = 8
console.log('la suma de ' + a + ' + ' + b +' es: ' + math.add(3,9))
console.log(`la suma de ${a} + ${b} es: ${math.add(3,9)}`)