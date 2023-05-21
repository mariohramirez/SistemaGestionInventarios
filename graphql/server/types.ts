import gql from 'graphql-tag';

const typeDefs = gql`
  scalar DateTime

  enum RoleName {
    ADMIN
    USER
  }

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
    role: Role
    createdAt: DateTime
  }

  type Material {
    id: ID
    name: String
    createdAt: DateTime
    price: Int
  }

  type Query {
    users: [User]!
    user(email: String!): User!
    roles: [Role]
    materials: [Material]
    materialsByUser: [Material]
  }

  type Mutation {
    updateUserRole(id: ID!, role: RoleName!): User
    createMaterial(name: String!, price: Int!): Material
  }
`;

export { typeDefs };
