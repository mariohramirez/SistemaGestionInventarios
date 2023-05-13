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
  }

  type Material {
    id: ID
    name: String
    createdAt: DateTime
    price: Int
  }

  type Query {
    users: [User]
    materials: [Material]
    materialsByUser(user: ID!): [Material]
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createMaterial(name: String!, price: Int!, user: ID!): Material
  }
`;

export { typeDefs };
