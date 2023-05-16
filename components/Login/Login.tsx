import React from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
    const { data: session } = useSession();
    const router = useRouter()
    
    console.log(session);

    return (
        <div className='flex flex-row'>
            <div className='bg-[#004737] h-screen w-screen items-center flex flex-col justify-center text-center'>
                <Image src={logo} alt='Logo' />
                <div className='h-[116px] w-[494px] pt-[166px] text-white text-center text-5xl font-poppins'>
                    Sistema de gestión de inventarios
                </div>
            </div>
            <div className='bg-[#EAF3D8] h-screen w-screen flex flex-col justify-center items-center'>
                <div className='pt-16 text-5xl font-poppins'>Iniciar Sesión</div>
                <div className='pt-24'></div>
                <button className='bg-[#004737] h-[65px] w-[460px] rounded-xl text-xl text-white font-poppins hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out' onClick={() => signIn()}>
                    Iniciar Sesión
                </button>
                <div className='pt-6'></div>
                <button className='bg-[#004737] h-[65px] w-[460px] rounded-xl text-xl text-white font-poppins hover:bg-gray-800 hover:text-white transition-all duration-300 ease-in-out' onClick={() => signOut()}>
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
};

export default Login;
