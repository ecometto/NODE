const personasRoute = require('express').Router()
let personas = require('../ddbb/personas.json').personas

//consultando
personasRoute.get(('/'), (req, res) => {
    res.send(personas)
})

// consultando una sola persona por id
personasRoute.get('/:id', (req, res) => {
    let persona = personas.find(per => per.id = req.params.id)
    res.send(persona)

})

// agregando
personasRoute.post(('/nuevo'), (req, res) => {
    let { nombre, edad, userName, pass } = req.body
    let ids = personas.map(p => p.id)
    let newId = Math.max(...ids) + 1
    if (!personas.find((user) => user.userName === userName)) {
        let newPersona = {
            "id": newId,
            "nombre": nombre,
            "edad": edad,
            "userName": userName,
            "pass": pass
        }
        personas.push(newPersona)
        return res.send(userName + " agregado correctamente")
    }
    res.send("nombre de usuario no valido o duplicado")
    
})


// modificando
personasRoute.put(('/modificar'), (req, res) => {
    let id = (req.body.id) - 1
    let nombre = req.body.nombre
    let edad = req.body.edad
    let userName = req.body.userName

    personas[id].nombre = nombre
    personas[id].edad = edad
    personas[id].userName = userName

    res.send(userName + " modificado correctamente")
})

// eliminando
personasRoute.delete(('/eliminar/:id'), (req, res) => {
    let id = parseInt(req.params.id)
    const persona = personas.find(p => p.id === id)
    let newPersonas = []

    persona ? (newPersonas = personas.filter(p => p.id !== id),
        personas = [...newPersonas],
        res.send(persona.userName + " eliminada correctamente")
    ) : (
        res.send("No se pudo encontrare el ID")
    )
}
)



module.exports = personasRoute