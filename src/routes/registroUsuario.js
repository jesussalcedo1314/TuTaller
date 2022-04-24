const express = require('express')
const router = express.Router()
const usuarioSchema = require('../models/usuario.js')

router.post('/usuarios', async(req, res) => {
    const {nombre, clave} = usuarioSchema(req.body)
    const usuario = new usuarioSchema({
        nombre: nombre,
        clave: clave
    })
    usuario.clave = await usuario.encryptClave(usuario.clave)
    await usuario.save()
    res.json(usuario)
})

module.exports = router