import { useQuery } from '@apollo/client';
import { GET_USER } from '@graphql/client/users';
import { useSession } from 'next-auth/react';
import { UserWithRole } from 'types';

const useUserData = () => {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;

  const { data, loading } = useQuery<{ user: UserWithRole }>(GET_USER, {
    variables: {
      email: userEmail,
    },
  });

  return { data, loading, status, session, role: data?.user?.role?.name };
};

export default useUserData;
