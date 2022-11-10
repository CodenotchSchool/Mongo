const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: {
            type: String,
            enum: ["Pepe", "Pepa", "Pepito","Pepote"]
          },
    password: {
                type: String,
                validate: [
                function(password)
                {
                  return password.length >= 6;
                },
               'El password deberia de ser mas largo'],
                select: false
              }
})

module.exports = mongoose.model("UserValidation", UserSchema, "usuarios");
