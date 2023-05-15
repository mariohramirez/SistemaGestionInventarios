import { gql } from '@apollo/client';

const GET_ALL_MATERIALS = gql`
  query GetAllMaterials {
    materials {
      id
      name
      price
      createdAt
    }
  }
`;

const GET_MATERIALS_BY_USER = gql`
  query GetMaterialsByUser($user: ID!) {
    materialsByUser(user: $user) {
      id
      name
      price
      createdAt
    }
  }
`;

export { GET_ALL_MATERIALS, GET_MATERIALS_BY_USER };
