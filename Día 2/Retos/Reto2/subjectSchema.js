let mongoose = require("mongoose");
const TeacherSchema = require("./teacherSchema");

const SubjectSchema = new mongoose.Schema(
    {
        title: String,
        teachers: [TeacherSchema]
    }
)

module.exports = SubjectSchema;