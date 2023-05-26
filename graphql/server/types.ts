import gql from 'graphql-tag';

const typeDefs = gql`
  scalar DateTime

  enum RoleName {
    ADMIN
    USER
  }

  enum MovementTypeName {
    IN
    OUT
  }

  type Role {
    id: ID
    name: String
    users: [User]
  }

  type MovementType {
    id: ID
    name: String
    movements: [Movement]
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

  type Movement {
    id: ID
    material: Material
    quantity: Int
    movementType: MovementType
    createdAt: DateTime
  }

  type Query {
    users: [User]!
    user(email: String!): User!
    roles: [Role]
    materials: [Material]
    materialsByUser: [Material]
    movementsByUser: [Movement]
    movementsByMaterial(materialId: ID!): [Movement]
  }

  type Mutation {
    updateUserRole(id: ID!, role: RoleName!): User
    createMaterial(name: String!, price: Int!): Material
    createMovement(
      materialId: ID!
      quantity: Int!
      type: MovementTypeName!
    ): Movement
  }
`;

export { typeDefs };
