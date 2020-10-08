const Teacher = require("../models/Teacher");
const teacherResolver = {
   Query: {
      teachers() {
         return Teacher.find();
      },
      teacher(_, { id }) {
         return Teacher.findById(id);
      },
   },
   Mutation: {
      createTeacher(_, { teacher }) {
         const newTeacher = new Teacher(teacher);
         return newTeacher.save();
      },
      updateTeacher(_, { id, teacher }) {
         return Teacher.findByIdAndUpdate(id, teacher, {
            new: true,
            useFindAndModify: false,
         });
      },
      deleteTeacher(_, { id }) {
         return Teacher.findByIdAndRemove(id, {
            useFindAndModify: false,
         });
      },
   },
};
module.exports = teacherResolver;