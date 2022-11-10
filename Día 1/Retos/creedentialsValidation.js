const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    address: String,
    email: String,
    phone: {
                type: String,
                validate: [
                function(phone)
                {
                  return phone[0] == '6';
                },
               'Introduza un teléfono válido'],
                select: false
              }
})


UserSchema.pre('save', function(next) 
{
  console.log("Middleware de entrada");
  if (this.email.includes('@'))
  {      
    console.log("Has introducido un email válido")
    next();
  }
  else
    console.log("Has introducido un email inválido")
});

module.exports = mongoose.model("CreedentialsValidation", UserSchema, "Credenciales");
