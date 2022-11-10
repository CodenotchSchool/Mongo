
const PhotoSchema = require("../models/photos");

const getPhoto = (req, res) => {
    let respuesta = {error: true, codigo: 500, result : []}

    if(req.query.id){
        PhotoSchema.findById(req.query.id)
        .then(photo => {
            respuesta.result.push(photo);
            respuesta.codigo = 204;
            respuesta.error = false
            res.send(respuesta)
        })
        .catch(err =>{
            console.log(err);
            process.exit(-1)
        })
    } else {
        PhotoSchema.find({})
        .then(photos => {
            respuesta.result = photos;
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

const postPhoto = (req,res) => {
    let photo = new PhotoSchema({
        nombreUsuario:req.body.nombre,
        url:req.body.url,
        titulo:req.body.titulo,
        descripcion:req.body.descripcion
    })

    photo.save()
    .then(photo => {
        console.log(photo);
        res.send(photo)
        console.log("Photo añadida correctamente");
    })
    .catch(err => console.log(err));
}

const putPhoto = (req,res) => {
    
    PhotoSchema.updateOne({titulo: req.body.titulo}, {descripcion: req.body.descripcion})
    .then((data)=> {
        console.log(data)
        console.log("Descripción actualizada");
        res.send(data)
    })
    .catch((err) => console.log(err))
}


const delPhoto = (req,res) => {

    if(req.body.titulo){
        PhotoSchema.deleteOne({nombreUsuario: req.body.nombre, titulo: req.body.titulo})
        .then((data)=> {
            console.log(data)
            console.log("Foto eliminada");
            res.send(data)
        })
        .catch((err) => console.log(err))
    }else{
        PhotoSchema.deleteMany({nombreUsuario: req.body.nombre})
        .then((data)=> {
            console.log(data)
            console.log("Fotos eliminadas");
            res.send(data)
        })
        .catch((err) => console.log(err))
    }
}
module.exports = {postPhoto,getPhoto, putPhoto, delPhoto}