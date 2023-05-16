import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import card from '../public/card.png';
import Sidebar from './Sidebar';
import ModalMovimiento from './ModalMovimiento';
import TablaInventario from './TablaInventario';

const Inventario = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    //Pruebas para cuando se tenga el backend
    //const [materiales, setMateriales] = useState([]);

    /*useEffect(() => {
        fetch('/api/materiales')
          .then(response => response.json())
          .then(data => setMateriales(data))
          .catch(error => console.error(error));
      }, []);*/

    const [materialSeleccionado, setMaterialSeleccionado] = useState(null);

    const materialesPrueba = [
        { id: 1, nombre: 'Material 1' },
        { id: 2, nombre: 'Material 2' },
        { id: 3, nombre: 'Material 3' },
    ];

    const [materiales, setMateriales] = useState(materialesPrueba);


    return (
        <div className='bg-[#EAF3D8] h-[1024px] w-[1440px]'>
            <Sidebar></Sidebar>
            <div className='pl-[292px] mt-[-930px] w-[1440px] grid justify-items-center'>
                <div className='w-[460px] text-center text-5xl font-poppins'>Inventarios</div>
                <div className='pt-[77px] flex space-x-[526px]'>
                    <select className='bg-green-200 h-16 w-64 rounded-lg text-xl font-poppins border-black border-2 hover:bg-green-300 focus:outline-none focus:border-green-500'>
                        <option>Selecciona un material</option>
                        {materiales.map(material => (
                            <option key={material.id}>{material.nombre}</option>
                        ))}
                    </select>
                    <button onClick={handleOpenModal} className='bg-[#004737] h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins transition duration-500 ease-in-out shadow-md hover:bg-[#007f5f]'>
                        Agregar movimiento
                    </button>
                </div>
                <TablaInventario></TablaInventario>
            </div>
            <ModalMovimiento isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Inventario;
