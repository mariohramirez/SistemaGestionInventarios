import { useState } from 'react';
import { TablaUsuario } from '@components/TablaUsuario';
import { ModalUsuario } from '@components/ModalUsuario';
import { PrivateRoute } from '@components/PrivateRoute';
import { Layout } from '@layouts/Layout';
import { UserWithRole } from 'types';
import { GET_USERS } from '@graphql/client/users';
import { useQuery } from '@apollo/client';

const Usuario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, loading, error, refetch } = useQuery<{
    users: UserWithRole[];
  }>(GET_USERS, {
    fetchPolicy: 'cache-first',
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    refetch();
  };

  return (
    <PrivateRoute role='ADMIN'>
      <Layout>
        <>
          <div className='w-[460px] text-center font-poppins text-5xl'>
            Usuarios
          </div>
          <div className='flex space-x-[526px] pt-[77px]'>
            <button
              onClick={handleOpenModal}
              className='h-[65px] w-[226px] rounded-xl bg-[#004737] font-poppins text-xl text-white shadow-md transition duration-500 ease-in-out hover:bg-[#007f5f]'
            >
              Editar usuario
            </button>
          </div>
          <TablaUsuario data={data?.users} loading={loading} error={error} />
        </>
        <ModalUsuario isOpen={isModalOpen} onClose={handleCloseModal} />
      </Layout>
    </PrivateRoute>
  );
};

export default Usuario;
