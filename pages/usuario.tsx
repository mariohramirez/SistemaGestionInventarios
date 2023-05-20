import { useState } from 'react';
import { TablaUsuario } from '@components/TablaUsuario';
import { ModalUsuario } from '@components/ModalUsuario';
import { PrivateRoute } from '@components/PrivateRoute';
import { Layout } from '@layouts/Layout';

const Usuario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
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
          <TablaUsuario></TablaUsuario>
        </>
        <ModalUsuario
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Layout>
    </PrivateRoute>
  );
};

export default Usuario;
