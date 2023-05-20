import { useState } from 'react';
import { ModalMovimiento } from '@components/ModalMovimiento';
import { TablaInventario } from '@components/TablaInventario';
import { PrivateRoute } from '@components/PrivateRoute';
import { Layout } from '@layouts/Layout';

const Inventario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

  const materialesPrueba = [
    { id: 1, nombre: 'Material 1' },
    { id: 2, nombre: 'Material 2' },
    { id: 3, nombre: 'Material 3' },
  ];

  const [materiales, setMateriales] = useState(materialesPrueba);

  return (
    <PrivateRoute>
      <Layout>
        <>
          <div className='w-[460px] text-center font-poppins text-5xl'>
            Inventarios
          </div>
          <div className='flex space-x-[526px] pt-[50px]'>
            <select className='h-16 w-64 rounded-lg border-2 border-black bg-green-200 font-poppins text-xl hover:bg-green-300 focus:border-green-500 focus:outline-none'>
              <option>Selecciona un material</option>
              {materiales.map((material) => (
                <option key={material.id}>{material.nombre}</option>
              ))}
            </select>
            <button
              onClick={handleOpenModal}
              className='h-[65px] w-[226px] rounded-xl bg-[#004737] font-poppins text-xl text-white shadow-md transition duration-500 ease-in-out hover:bg-[#007f5f]'
            >
              Agregar movimiento
            </button>
          </div>
          <TablaInventario></TablaInventario>
        </>
        <ModalMovimiento
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Layout>
    </PrivateRoute>
  );
};

export default Inventario;
