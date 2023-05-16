import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import TablaMaterial from './TablaMaterial';
import ModalMaterial from './ModalMaterial';

const Material = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='bg-[#EAF3D8] h-[1024px] w-[1440px]'>
            <Sidebar></Sidebar>
            <div className='pl-[292px] mt-[-930px] w-[1440px] grid justify-items-center'>
                <div className='w-[460px] text-center text-5xl font-poppins'>Materiales</div>
                <div className='pt-[77px] flex space-x-[526px]'>
                    <button onClick={handleOpenModal} className='bg-[#004737] h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins transition duration-500 ease-in-out shadow-md hover:bg-[#007f5f]'>
                        Agregar Material
                    </button>
                </div>
                <TablaMaterial></TablaMaterial>
            </div>
            <ModalMaterial isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Material;
