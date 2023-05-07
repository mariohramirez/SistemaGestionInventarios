import React from 'react'
import logo from '../public/logo.png';
import Image from 'next/image';

const Login = () => {
    return (
        <div className='bg-[#EAF3D8] h-[1024px] w-[1440px]'>

            <div className='bg-[#004737] h-[1024px] w-[720px]'>
                <div className='grid justify-items-center'>
                    <Image src={logo} alt='Logo' className='pt-[335px]' />
                    <div className='h-[116px] w-[494px] pt-[166px] text-white text-center text-5xl font-poppins'>Sistema de gestión de inventarios</div>
                </div>
            </div>
            <div className='pl-[866px] mt-[-791px] w-[460px] h-[1000px]'>
                <div className='w-[460px] text-center text-5xl font-poppins '>Iniciar Sesión</div>
                <div className='pt-[142px] pb-[12px] text-xl font-poppins'>Correo</div>
                <input className='h-[65px] w-[460px] rounded-xl placeholder-[#EAF3D8] placeholder:italic placeholder:pl-[20px] placeholder:text-lg' type="Correo" placeholder="Ingrese su correo" />
                <div className='pt-[33px]  pb-[12px] text-xl font-poppins'>Contraseña</div>
                <input className='h-[65px] w-[460px] rounded-xl placeholder-[#EAF3D8] placeholder:italic placeholder:pl-[20px] placeholder:text-lg' type="Contraseña" placeholder="Ingrese su contraseña" />
                <div className='pt-[122px]'></div>
                <button className='bg-[#004737] h-[65px] w-[460px] rounded-xl text-xl text-white font-poppins'>Iniciar Sesión</button>
            </div>
        </div>
    )

}

export default Login