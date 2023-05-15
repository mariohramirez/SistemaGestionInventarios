import React from 'react'
import Image from 'next/image';
import picture from '../public/picture.png';
import logo from '../public/logo.png';
import inventario2 from '../public/inventario2.png';
import cart from '../public/cart.png';
import user from '../public/user.png';
import { useRouter } from 'next/router';



const Sidebar = () => {

    const router = useRouter();

    const handleInventarioClick = () => {
        router.push('/inventario');
    };

    const handleMaterialClick = () => {
        router.push('/material');
    };

    const handleUsuarioClick = () => {
        router.push('/usuario');
    };


    return (
        <div className='bg-[#004737] h-[1024px] w-[292px]'>
            <div className='grid justify-items-center'>
                <Image src={picture} alt='Picture' className='pt-[49px]' />
                <div className='pt-[18px] text-white text-xl font-poppins'>Ava Williams</div>
                <div className='pt-[65px]'></div>
                <button
                    className='bg-[#5EFEA9] h-[65px] w-[226px] rounded-xl text-xl font-poppins transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-500'
                    onClick={handleInventarioClick}
                >
                    <div className='flex justify-center'>
                        <Image src={inventario2} alt='Inventario' className='ml-[-60px] mr-[10px]' />
                        Inventarios
                    </div>
                </button>
                <div className='pt-[65px]'></div>
                <button
                    className='h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#5EFEA9]'
                    onClick={handleMaterialClick}
                >
                    <div className='flex justify-center'>
                        <Image src={cart} alt='cart' className='ml-[-60px] mr-[10px]' />
                        Materiales
                    </div>
                </button>
                <div className='pt-[65px]'></div>
                <button
                    className='h-[65px] w-[226px] rounded-xl text-white text-xl font-poppins transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#5EFEA9]'
                    onClick={handleUsuarioClick}
                >
                    <div className='flex justify-center'>
                        <Image src={user} alt='user' className='ml-[-60px] mr-[10px]' />
                        Usuarios
                    </div>
                </button>
                <Image src={logo} alt='Logo' className='pl-[47px] pr-[47px] pt-[280px]' />
            </div>
        </div>
    )
}

export default Sidebar