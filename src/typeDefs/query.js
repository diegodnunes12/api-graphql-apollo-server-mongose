const { gql } = require("apollo-server");
const query = gql`
   type Query {
      teachers: [Teacher]
      teacher(id: ID!): Teacher
   }
`;
module.exports = query;