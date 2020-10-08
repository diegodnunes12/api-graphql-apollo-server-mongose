const mongoose = require("mongoose");
const TeacherSchema = mongoose.Schema({
   name: String,
   students: {
      name: String,
      age: String,
   },
});
module.exports = mongoose.model("Teacher", TeacherSchema);