import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      name
      email

    }
  }
`;

const GET_USER = gql`
  query User {
    users(email:$email) {
      name
      email
        rol{
            name
        }
      
    }
  }
`;

export { GET_USERS, GET_USER };