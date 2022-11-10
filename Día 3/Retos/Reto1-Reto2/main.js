let mongoose = require("mongoose");
const MarkModel = require("../models/markSchema");

mongoose.connect('mongodb+srv://dani_vera:codenotch@codenotch.gpt2bzv.mongodb.net/Students', 
{useNewUrlParser: false, useUnifiedTopology: false } )

let nota1 = new MarkModel(
    {
        date: new Date("2022, 01, 14"), 
        mark: 10,
        studentFirstName: "Rocio",
        studentLastName: "Garcia",
        groupName: "Bootcamp Invierno",
        subjectName: "HTML",
        teachers:[{firstName: "Jose", lastName: "Herrera"},
                   {firstName: "Menchu", lastName: "Martin"}],
    })

let nota2 = new MarkModel(
    {
        date: new Date("2020, 02, 14"), 
        mark: 8.6,
        studentFirstName: "Juana",
        studentLastName: "Gomez",
        groupName: "Bootcamp Verano",
        subjectName: "Mongo",
        teachers:[{firstName: "Daniel", lastName: "Vera"},
                  {firstName: "Menchu", lastName: "Martin"}],
    })

let nota3 = new MarkModel(
    {
        date: new Date("2020, 02, 14"), 
        mark: 8.6,
        studentFirstName: "Francisco",
        studentLastName: "Alvarez",
        groupName: "Bootcamp Invierno",
        subjectName: "Mongo",
        teachers:[{firstName: "Jose", lastName: "Herrera"},
                    {firstName: "Menchu", lastName: "Martin"}],
    })

let nota4 = new MarkModel(
    {
        date: new Date("2021, 02, 14"), 
        mark: 7,
        studentFirstName: "Jacinto",
        studentLastName: "Garcia",
        groupName: "Bootcamp Primavera",
        subjectName: "Mongo",
        teachers:[{firstName: "Jose", lastName: "Herrera"},
                    {firstName: "Daniel", lastName: "Vera"}],
    })


// nota1.save();
// nota2.save();
// nota3.save();
// nota4.save();

// Nota media de alumnos de una asignatura concreta.
// MarkModel
// .aggregate([{$match:{subjectName:"Mongo"}},
//             {$group: {"_id": null, "Nota Media": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Numero total de alumnos del bootcamp.
// MarkModel
// .aggregate([{$count: "Numero de Alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Listar el nombre y apellidos de todos los alumnos.
// MarkModel
// .aggregate([{$project: {studentFirstName: 1, studentLastName:1, _id:0}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Listar el nombre y apellidos de todos los profesores.
// MarkModel
// .aggregate([{$unwind: "$teachers"},
//             {$project: {"teachers.firstName": 1, "teachers.lastName":1, _id:0}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })


// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
// MarkModel
// .aggregate([{$group: {"_id": "$groupName", "Numero Alumnos": {"$sum": 1}}},
//             {$sort: {_id: -1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Obtén  el top 5 de los  nombres  de  las asignaturas cuya  nota media sea mayor que 5.
// MarkModel
// .aggregate([{$group: {"_id": "$subjectName", "Media Por Asignatura": {"$avg": "$mark"}}},
//             {$match: {"Media Por Asignatura": {"$gt": 5}}},
//             {$sort: {"Media Por Asignatura": -1}},
//             {$limit: 5}
//             ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

//Calcular  el numero  de profesores que hay por  cada asignatura incluyendo repetidos.
// MarkModel
// .aggregate([{$unwind: "$teachers"},
//             {$group: {"_id": "$subjectName", 
//                       "Profes/Asigntura": {"$sum": 1}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Obtén  el  nombre, apellido  y  la  nota  de  los  alumnos  que  tengan una nota mayor  de 8 o la nota tenga fecha del año pasado o anterior.
// MarkModel
// .aggregate([
//             {$match: {"$or":[{mark: {"$gt": 8}},
//                              {date: {"gl":new Date("2022, 01, 01")}}]
//                       }
//             },
//             {$project: {mark:1, studentFirstName: 1, studentLastName:1, _id:0}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Obtén la  media de las notas que se han  dado en el último  año por asignatura
// MarkModel
// .aggregate([{$match: {"$and":[{date: {"$gte": new Date("2021, 01, 01")}},
//                               {date: {"$lt": new Date("2022, 01, 01")}}]}},
//             {$group: {"_id": "$subjectName", "Media Por Asignatura": {"$avg": "$mark"}}}
//            ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Obtén la  media  aritmética de las notas que se han  dado en el último  año  por nombre de alumno.
// MarkModel
// .aggregate([{$match: {"$and":[{date: {"$gte": new Date("2021, 01, 01")}},
//                               {date: {"$lt": new Date("2022, 01, 01")}}]}},
//             {$group: {"_id": "$studentFirstName", "Media Por Alumno": {"$avg": "$mark"}}}
//            ])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// Listar el nombre y apellidos del profesor que elijas 
MarkModel
.aggregate([{$unwind: "$teachers"},
            {$match: {"teachers.firstName": "Jose"}},
            {$group: {"_id": "$studentFirstName", "Numero de Asignaturas": {"$sum": 1}}}
          ])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})