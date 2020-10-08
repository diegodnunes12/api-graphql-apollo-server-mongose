const { gql } = require("apollo-server");
const mutation = gql`
   type Mutation {
      createTeacher(teacher: TeacherInput): Teacher
      updateTeacher(id: String, teacher: TeacherInput): Teacher
      deleteTeacher(id: String): Teacher
   }
   input TeacherInput {
      name: String
      students: StudentsInput
   }
   input StudentsInput {
      name: String
      age: String
   }
`;
module.exports = mutation;