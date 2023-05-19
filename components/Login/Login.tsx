import logo from '@public/logo.png';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  console.log(session);

  return (
    <div className='flex flex-row'>
      <div className='flex h-screen w-screen flex-col items-center justify-center bg-[#004737] text-center'>
        <Image src={logo} alt='Logo' />
        <div className='h-[116px] w-[494px] pt-[166px] text-center font-poppins text-5xl text-white'>
          Sistema de gestión de inventarios
        </div>
      </div>
      <div className='flex h-screen w-screen flex-col items-center justify-center bg-[#EAF3D8]'>
        <div className='pt-16 font-poppins text-5xl'>Iniciar Sesión</div>
        <div className='pt-24'></div>
        <button
          className='h-[65px] w-[460px] rounded-xl bg-[#004737] font-poppins text-xl text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white'
          onClick={() => signIn()}
        >
          Iniciar Sesión
        </button>
        <div className='pt-6'></div>
        <button
          className='h-[65px] w-[460px] rounded-xl bg-[#004737] font-poppins text-xl text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white'
          onClick={() => signOut()}
        >
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
