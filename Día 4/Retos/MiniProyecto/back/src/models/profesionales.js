const mongoose = require("mongoose");

const ProfesionalSchema = new mongoose.Schema({
    nombre:String,
    apellidos:String,
    profesion:String,
    nacionalidad:String,
    cantidadOscars:Number
})

module.exports = mongoose.model("Profesional", ProfesionalSchema, "profesionales");