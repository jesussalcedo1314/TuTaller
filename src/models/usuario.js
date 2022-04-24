const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    clave: {
        type: String,
        required: true
    }
})

usuarioSchema.methods.encryptClave = async(clave) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(clave, salt)
}

module.exports = mongoose.model('Usuario', usuarioSchema)