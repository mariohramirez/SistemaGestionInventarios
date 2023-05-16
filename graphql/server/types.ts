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
    image: String
    role:Role
  }

  type Material {
    id: ID
    name: String
    createdAt: DateTime
    price: Int
  }

  type Query {
    users: [User]!
    user(id: ID!): User!
    user(email:String!): User!
    materials: [Material]
    materialsByUser(user: ID!): [Material]
  }

  type Mutation {
    updateUser(id: ID!, name: String, email: String): User
    createUser(name: String!, email: String!, password: String!): User
    deleteUser(id: ID!): Boolean
    createMaterial(name: String!, price: Int!, user: ID!): Material
  }
`;

export { typeDefs };
