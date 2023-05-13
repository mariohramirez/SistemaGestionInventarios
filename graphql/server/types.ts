import gql from 'graphql-tag';

const typeDefs = gql`
  scalar DateTime

  type Role {
    id: ID
    name: String
    users: [User]
  }

  type User {
    id: ID
    name: String
    email: String
    iamge: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
  }
`;

export { typeDefs };
