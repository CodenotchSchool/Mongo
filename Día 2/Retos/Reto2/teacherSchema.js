let mongoose = require("mongoose");


const TeacherSchema = new mongoose.Schema(
    {
        firstName:String,
        lastName: String,
        groups: [String]
    })

module.exports = TeacherSchema;