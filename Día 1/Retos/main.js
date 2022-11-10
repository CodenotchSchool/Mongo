let mongoose = require("mongoose");
let User = require("./user");
let Profile = require("./profile")
let Creedentials = require("./creedentials")

mongoose.connect('mongodb+srv://dani_vera:codenotch@codenotch.gpt2bzv.mongodb.net/Codenotch', 
                  {useNewUrlParser: false, useUnifiedTopology: false } ) 

let userDocument = new User({
    login: "albaricoque86",
    password: "123456"
});

let profileDocument = new Profile({
    name: "Paco",
    surname: "Salmón",
    dateOfBirth: new Date(1993,05,05),
    comments: "Soñador, apasionado, y tengo coche propio",
    role: "Admin"
});

let creedentialDocument = new Creedentials({
    address: "Calle de la piruleta 85",
    email: "superpaco84@albaricoque.com",
    phone: 653654885
});

userDocument.save(checkRespuesta);
profileDocument.save(checkRespuesta);
creedentialDocument.save(checkRespuesta);

function checkRespuesta(err, res) 
{
    if (err) 
        console.log("Error: " + err)
    else 
    {
        console.log("Documento guardado correctamente")
        console.log(res)
        //mongoose.disconnect();
    }
}