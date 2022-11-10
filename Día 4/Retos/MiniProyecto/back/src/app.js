const express = require("express");
const cors = require("cors");
const errorHandling = require("./error/errorHandling");
const profRouter = require("./routers/profesional.router");
const peliRouter = require("./routers/peliculas.router");
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(profRouter)
app.use(peliRouter)
app.use((req, res, next)=>{
    res.status(404).json({
        error:true,
        codigo: 404,
        mensaje:"Endpoint no encontrado"
    })
})

app.use(errorHandling);

module.exports= app;