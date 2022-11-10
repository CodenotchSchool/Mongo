const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
    nombreUsuario:String,
    url:String,
    titulo:String,
    descripcion:String
})

module.exports = mongoose.model("Foto", PhotoSchema, "fotos");