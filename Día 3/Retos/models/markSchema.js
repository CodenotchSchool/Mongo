let mongoose = require("mongoose");
const TeacherSchema = require("./teacherSchema")

const MarkSchema = new mongoose.Schema(
    {
        date: Date,
        mark: Number,
        studentFirstName: String,
        studentLastName: String,
        groupName: String,
        subjectName: String,
        teachers: [TeacherSchema]
    }
)

module.exports = mongoose.model("MarkAggregate", MarkSchema);