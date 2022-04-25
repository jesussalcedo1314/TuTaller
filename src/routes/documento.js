const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/documentos");

//Nuevo documento(taller)
router.post("/documentos", (req, res) => {
        const documento = documentoSchema(req.body);
        documento
            .save()
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    });
    module.exports = router;

    //ver documentos
    router.get("/documentos", (req, res) => {
            documentoSchema.find()
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }));
        });

    //buscar por titutlo
    router.get("/documentos/:titulo", (req, res) => {
            const { titulo } = req.params;
            documentoSchema
                .findById(titulo)
                .then((data) => res.json(data))
                .catch((error) => res.json({ message: error }));
        
    });

//Modificar el documento por su titulo
router.put("/documentos/:titulo", (req, res) => {
        const { id } = req.params; //manejador, revisar para
    
        const { titulo, subtitulo, parrafo, tabla } = req.body;
        documentoSchema
            .updateOne({ _id: id }, {
                $set: { nombre, edad, tipo }
            })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    
    });

//Eliminar un documento por su titulo
router.delete("/documentos/:titulo", (req, res) => {
        const { titulo } = req.params;
        documentoSchema
            .remove({ _id: id })
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));
    
    });
