const ProfesionalSchema = require("../models/profesionales")

const getProf = (req, res) => {
    let respuesta = {error: true, codigo: 500, result : []}

    if(req.query.id){
        ProfesionalSchema.findById(req.query.id)
        .then(profesional => {
            respuesta.result.push(profesional);
            respuesta.codigo = 204;
            respuesta.error = false
            res.send(respuesta)
        })
        .catch(err =>{
            console.log(err);
            process.exit(-1)
        })
    } else {
        ProfesionalSchema.find({})
        .then(profesionales => {
            respuesta.result = profesionales;
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

const postProf = (req,res) => {
    let prof = new ProfesionalSchema({
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        profesion:req.body.profesion,
        nacionalidad:req.body.nacionalidad,
        cantidadOscars:req.body.cantidadOscars
    })

    prof.save()
    .then(profesional => {
        console.log(profesional);
        res.send(profesional)
        console.log("profesional añadido correctamente");
    })
    .catch(err => console.log(err));
}

const putProf = (req,res) => {
    let cambios = {
        nombre:req.body.nombre,
        apellidos:req.body.apellidos,
        profesion:req.body.profesion,
        nacionalidad:req.body.nacionalidad,
        cantidadOscars:req.body.cantidadOscars
    }
    console.log("Cantidad de oscars:")
    console.log(req.body.cantidadOscars);
    console.log(typeof req.body.cantidadOscars);
    cambios.nombre != "" ? console.log(cambios.nombre): delete cambios.nombre;
    cambios.apellidos != "" ? console.log(cambios.apellidos): delete cambios.apellidos;
    cambios.profesion != "" ? console.log(cambios.profesion): delete cambios.profesion;
    cambios.nacionalidad != "" ? console.log(cambios.nacionalidad): delete cambios.nacionalidad;
    cambios.cantidadOscars != "" ? console.log(cambios.cantidadOscars): delete cambios.cantidadOscars;
    ProfesionalSchema.findByIdAndUpdate(req.body.id, cambios)
    .then((data)=> {
        console.log(data)
        console.log("Profesional actualizado");
        res.send(data)
    })
    .catch((err) => console.log(err))
}


const delProf = (req,res) => {

    ProfesionalSchema.findByIdAndDelete(req.body.id)
    .then((data)=> {
        console.log(data)
        console.log("Profesional eliminado");
        res.send(data)
    })
    .catch((err) => console.log(err))

}

module.exports = {getProf, postProf, putProf, delProf}