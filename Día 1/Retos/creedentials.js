const mongoose = require("mongoose");

const CredentialSchema = new mongoose.Schema({
    address: String,
    email: String,
    phone: Number
})

module.exports = mongoose.model("Credencial", CredentialSchema, "credenciales");