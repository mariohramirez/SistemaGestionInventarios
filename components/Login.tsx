import React from 'react'
import logo from '../public/logo.png';
import Image from 'next/image';
import { BreakPoint } from 'pages/components/breakpoint';

const inputClasses = "w-full rounded-xl placeholder-[#EAF3D8] placeholder:italic placeholder:pl-[20px] placeholder:text-lg h-12 mt-2";

const Login = () => {
    return (
        <div className='bg-[#EAF3D8] h-screen w-full border border-red-600 flex flex-col  md:flex-row'>


            {/*  Left side on desktop screems */}
            <div className='bg-[#004737] w-full max-w-3xl md:w-1/2 px-3 py-6 border border-red-600 flex flex-col justify-center'>
                <div className='grid justify-items-center'>
                    <Image src={logo} alt='Logo' />
                    <div className='text-white text-center text-3xl lg:text-5xl font-poppins pt-6'>
                        Sistema de gestión de inventarios
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/2 pt-6 border border-red-600 flex flex-col justify-center px-8 items-center'>

                {/* <BreakPoint></BreakPoint> */}

                {/* LABEL */}
                <div className='text-center text-3xl lg:text-5xl font-poppins '>
                    Iniciar Sesión
                </div>


                <div className='w-full max-w-lg mb-4 '>
                    <div className='text-xl font-poppins'>Correo</div>
                    <input className={`${inputClasses}`}
                        type="email"
                        placeholder="Ingrese su correo"
                    />
                </div>


                <div className='w-full max-w-lg'>
                    <div className='text-xl font-poppins'>Contraseña</div>
                    <input className={`${inputClasses}`}
                        type="password"
                        placeholder="Ingrese su contraseña"
                    />
                </div>


                <div className='w-full max-w-lg mt-6'>
                    <button className='bg-[#004737] rounded-xl text-xl text-white font-poppins w-full h-12'>
                        Iniciar Sesión
                    </button>
                </div>

            </div>

        </div>
    )

}

export default Login