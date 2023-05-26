import { gql } from '@apollo/client';

const GET_MOVEMENTS_BY_MATERIAL = gql`
  query Query($materialId: ID!) {
    movementsByMaterial(materialId: $materialId) {
      id
      quantity
      createdAt
      movementType {
        name
      }
      material {
        name
        id
      }
    }
  }
`;

const CREATE_MOVEMENT = gql`
  mutation Mutation(
    $materialId: ID!
    $quantity: Int!
    $type: MovementTypeName!
  ) {
    createMovement(materialId: $materialId, quantity: $quantity, type: $type) {
      id
      createdAt
      material {
        name
      }
      movementType {
        name
      }
    }
  }
`;

export { GET_MOVEMENTS_BY_MATERIAL, CREATE_MOVEMENT };
