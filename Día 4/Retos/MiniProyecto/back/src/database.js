const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dani_vera:codenotch@codenotch.gpt2bzv.mongodb.net/IMDB', 
{useNewUrlParser: false, useUnifiedTopology: false } )
.then(db=>console.log("Daatabase conected on " + db.connection.host))
.catch(err => console.log(err))