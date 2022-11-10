const PeliculasSchema = require("../models/peliculas")

const getPeli = (req, res) => {
    let respuesta = {error: true, codigo: 500, result : []}

    if(req.query.id){
        PeliculasSchema.findById(req.query.id)
        .then(pelicula => {
            respuesta.result.push(pelicula);
            respuesta.codigo = 204;
            respuesta.error = false
            res.send(respuesta)
        })
        .catch(err =>{
            console.log(err);
            process.exit(-1)
        })
    } else {
        PeliculasSchema.find({})
        .then(peliculas => {
            respuesta.result = peliculas;
            respuesta.codigo = 204;
            respuesta.error = false
            res.send(respuesta)
        })
        .catch(err =>{
            console.log(err);
            process.exit(-1)
        })
    }
}

const postPeli = (req,res) => {
    let peli = new PeliculasSchema({
        titulo:req.body.titulo,
        anyoLanzamiento:req.body.anyoLanzamiento,
        actores:req.body.actores,
        nacionalidad:req.body.nacionalidad,
        directores:req.body.directores,
        escritores:req.body.escritores,
        lengua: req.body.lengua,
        plataforma:req.body.plataforma,
        esMCU: req.body.esMCU,
        personajePrincipal: req.body.personajePrincipal,
        productor: req.body.productor,
        distribuidor: req.body.distribuidor,
        genero: req.body.genero
    })

    peli.save()
    .then(peli => {
        console.log(peli);
        res.send(peli)
        console.log("Película añadida correctamente");
    })
    .catch(err => console.log(err));
}

const putPeli = (req,res) => {
    let cambios = {
        titulo:req.body.titulo,
        anyoLanzamiento:req.body.anyoLanzamiento,
        actores:req.body.actores,
        nacionalidad:req.body.nacionalidad,
        directores:req.body.directores,
        escritores:req.body.escritores,
        lengua: req.body.lengua,
        plataforma:req.body.plataforma,
        esMCU: req.body.esMCU,
        personajePrincipal: req.body.personajePrincipal,
        productor: req.body.productor,
        distribuidor: req.body.distribuidor,
        genero: req.body.genero
    }
    PeliculasSchema.findByIdAndUpdate(req.body.id, cambios)
    .then((data)=> {
        console.log(data)
        console.log("Película actualizada");
        res.send(data)
    })
    .catch((err) => console.log(err))
}


const delPeli = (req,res) => {

    PeliculasSchema.findByIdAndDelete(req.body.id)
    .then((data)=> {
        console.log(data)
        console.log("Profesional eliminado");
        res.send(data)
    })
    .catch((err) => console.log(err))

}

module.exports = {getPeli, postPeli, putPeli, delPeli}