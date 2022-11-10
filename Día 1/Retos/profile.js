const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    role: String
})

module.exports = mongoose.model("Perfil", ProfileSchema, "perfiles");