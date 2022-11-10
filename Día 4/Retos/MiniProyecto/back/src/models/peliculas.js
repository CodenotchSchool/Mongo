const mongoose = require("mongoose");

const PeliculaSchema = new mongoose.Schema({
    titulo:String,
    anyoLanzamiento:Number,
    actores:[String],
    nacionalidad:String,
    directores:[String],
    escritores:[String],
    lengua: String,
    plataforma:String,
    esMCU: Boolean,
    personajePrincipal: String,
    productor: String,
    distribuidor: String,
    genero: String
})

module.exports = mongoose.model("Pelicula", PeliculaSchema, "peliculas");