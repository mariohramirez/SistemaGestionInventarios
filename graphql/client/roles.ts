import { gql } from '@apollo/client';

const GET_ROLES = gql`
  query Roles {
    roles {
      name
      id
    }
  }
`;

export { GET_ROLES };
