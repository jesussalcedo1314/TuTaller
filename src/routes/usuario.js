const express = require('express')
const router = express.Router()
const usuarioSchema = require('../models/usuario.js')

router.post('/usuarios', (req, res) => {
    const usuario = usuarioSchema(req.body)
    usuario.save()
           .then((data) => res.json(data))
           .catch((error) => res.json({message: error}))
})

module.exports = router