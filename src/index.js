const express = require("express")
const parser = require('body-parser')
const app = express()
const usuarioRoutes = require('./routes/usuario.js')
const authRoutes = require('./routes/registroUsuario')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(parser.urlencoded({extended: false}))
app.use(parser.json())
app.use('/api', usuarioRoutes)
app.use('/api', authRoutes)
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI)
        .then(() => console.log('Exitoso'))
        .catch((error) => console.log(error))

app.use(express.static('./public'))

app.listen(3000, () => {
    console.log("server listening...")
})