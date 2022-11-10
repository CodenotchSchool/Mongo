let mongoose = require("mongoose");
let Photo = require("./photos");

const savePhoto = (nombre, url, titulo, descripcion) =>{
    
    let data = {
        nombreUsuario:nombre,
        url:url,
        titulo:titulo,
        descripcion:descripcion
    }

    Photo.create(data)
        .then((res)=>console.log(res))
        .catch((err) => console.log(err))
}

const getFotos = (nombre) =>{
    
    return Photo.find({nombreUsuario:nombre})
    .then((res)=> res)
    .catch((err) => console.log(err))
}

// getFotos("Pepe")
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))

const putPhoto = (titulo, descripcion) =>{
    
    Photo.updateOne({titulo: titulo}, {descripcion: descripcion})
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))
}

const delPhoto = (nombre, titulo) =>{
    Photo.deleteOne({nombreUsuario: nombre, titulo: titulo})
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))
}

const delPhotos = (nombre) =>{
    Photo.deleteMany({nombreUsuario:nombre})
    .then((res)=> console.log(res))
    .catch((err) => console.log(err))
}

module.exports = {getFotos, savePhoto, delPhoto, delPhotos, putPhoto}