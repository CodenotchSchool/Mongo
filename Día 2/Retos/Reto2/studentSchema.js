let mongoose = require("mongoose");
const MarkSchema = require("./markSchema")

const StudentSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        marks: [MarkSchema]
    
    }
)

module.exports = mongoose.model("StudentArbol", StudentSchema);
