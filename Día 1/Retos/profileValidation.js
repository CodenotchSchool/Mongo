const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:    String,
    surname: String,
    comments: {
                type: String,
                validate: [
                function(comments)
                {
                  return comments.length < 101;
                },
               'El comentario no puede tener más de 100 caracteres']
              },
    dateOfBirth: {
                    type: Date,
                    required: true
                },
    verified: Boolean,
    role: {
            type: String,
            enum: ["Admin", "User"]
        }
})

module.exports = mongoose.model("ProfileValidation", UserSchema, "Perfiles");
