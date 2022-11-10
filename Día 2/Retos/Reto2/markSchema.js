let mongoose = require("mongoose");
const SubjectSchema = require("./subjectSchema")
const MarkSchema = new mongoose.Schema(
    {
        date: Date,
        mark: Number,
        subject: SubjectSchema
    }
)

module.exports = MarkSchema;