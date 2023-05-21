import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      id
      name
      email
      createdAt
      role {
        name
      }
    }
  }
`;

const GET_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      name
      email
      role {
        name
      }
    }
  }
`;

const UPDATE_USER_ROLE = gql`
  mutation UpdateUserRole($userId: ID!, $role: RoleName!) {
    updateUserRole(id: $userId, role: $role) {
      name
      email
      role {
        name
      }
    }
  }
`;

export { GET_USERS, GET_USER, UPDATE_USER_ROLE };
