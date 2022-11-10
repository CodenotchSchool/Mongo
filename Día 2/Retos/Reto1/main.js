let mongoose = require("mongoose");
let library = require("./photoFunctions");


mongoose.connect('mongodb+srv://dani_vera:codenotch@codenotch.gpt2bzv.mongodb.net/Photos', 
                  {useNewUrlParser: false, useUnifiedTopology: false } )
                  
// library.savePhoto("Dani","URL","En casita","Día de limpieza");

library.getFotos("Dani")
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

// library.putPhoto("En casita", "Día de play");

// library.delPhotos("Dani");

// library.delPhoto("Dani","En casita")

