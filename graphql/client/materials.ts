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
  query GetMaterialsByUser {
    materialsByUser {
      id
      name
      price
      createdAt
    }
  }
`;

const CREATE_MATERIAL = gql`
  mutation CreateMaterial($name: String!, $price: Int!) {
    createMaterial(name: $name, price: $price) {
      id
      name
      price
      createdAt
    }
  }
`;

export { GET_ALL_MATERIALS, GET_MATERIALS_BY_USER, CREATE_MATERIAL };
