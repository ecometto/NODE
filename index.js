// // IMPORTANDO Y UTILIZANDO FUNCIONES PROPIAS
// const math = require('./math.js')

// // diferentes formas de mostrar en consola 
// console.log(`la suma es: ${math.add(7,6)}`)
// console.log('la multiplicacion es: ', math.add(7,6))
// console.log("La division es: " + math.divide(5,2))

// // IMPORTANDO Y UTILIZANDO FUNCIONES POR DEFECTO DE NODE "OS"
// const os = require('os')
// console.log('MEMORIA TOTAL: ' + os.totalmem);
// console.log('MEMORIA DISPONIBLE: ' + os.freemem());
// console.log('MEMORIA UTILIZADA: ' + (os.totalmem - os.freemem));


// // IMPORTANDO Y UTILIZANDO FUNCIONES POR DEFECTO DE NODE "FILE SISTEM"
// const fs = require('fs')
// fs.writeFile('./test.txt', "Esto es una prueba desde Node", ()=> console.log('archivo creado'))
// // luego para leer: 
// fs.readFile('./test.txt', (err, data)=> console.log( data.toString() ))


// // IMPORTANDO Y UTILIZANDO FUNCIONES POR DEFECTO DE NODE "HTTP"
// const http = require('http')
// const server = http.createServer((req, res)=>{
//     res.write("HOLA MUNDO FROM NODE JS. SERVIDOR CREADO Y FUNCIONANDO")
//     res.end()
// })
// server.listen(3001)


