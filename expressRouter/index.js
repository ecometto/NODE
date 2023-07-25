const express = require('express')

const app = express()
app.use(express.json())

const personasRoute = require('./routes/personas')
app.use('/personas', personasRoute)

app.listen(3000, ()=>{
    console.log("conectado...")
})

