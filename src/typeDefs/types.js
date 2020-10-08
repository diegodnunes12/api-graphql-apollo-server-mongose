const { gql } = require("apollo-server");
const types = gql`
   type Teacher {
      id: ID!
      name: String
      students: Students
   }
   type Students {
      name: String
      age: String
   }
`;
module.exports = types;