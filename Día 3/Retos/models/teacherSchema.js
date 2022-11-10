let mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
    {
        firstName:String,
        lastName: String,
    })

module.exports = TeacherSchema;