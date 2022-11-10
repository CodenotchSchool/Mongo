let mongoose = require("mongoose");
const StudentModel = require("./studentSchema")

mongoose.connect('mongodb+srv://dani_vera:codenotch@codenotch.gpt2bzv.mongodb.net/Students', 
{useNewUrlParser: false, useUnifiedTopology: false } )


let alumno1 = new StudentModel(
    {
        firstName: "Juan",
        lastName: "Garcia",
        marks: [{
                  date: new Date("2020, 01, 21"),
                  mark: 10,
                  subject: {
                            title: "Mongo",
                            teachers: [{
                                          firstName: "Jose",
                                          lastName: "Herrera",
                                          groups: ["BootCamp Verano", "Bootcamp Invierno"]
                                      }
                                      ]
                          }
                },
                {
                  date: new Date("2020, 01, 21"),
                  mark: 8,
                  subject: {
                            title: "SQL",
                            teachers: [{
                                          firstName: "Menchu",
                                          lastName: "Martín",
                                          groups: ["BootCamp Verano", "Bootcamp Invierno"]
                                      }
                                      ]
                          }
                },
              
              
              ]
   })

// alumno1.save()
// .then((result) =>
// {
//     console.log("Alumno1 guardado");
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

StudentModel.findOne({firstName: "Juan"})
.then((result) =>
{
    console.log(result.marks);  // Todas las notas
    for (let notas of result.marks) // Todas las asignaturas
    {    
        console.log(notas.subject);
        console.log(notas.subject.teachers)
    }

})
.catch((error) =>
{
    console.log(error);
})
