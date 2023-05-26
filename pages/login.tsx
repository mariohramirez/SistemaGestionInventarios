import logo from '@public/png/logo.png';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import useUserData from '@hooks/useUserData';

const Login = () => {
  const { session } = useUserData();
  const router = useRouter();

  if (session) {
    router.push('/');
  }

  return (
    <div className='flex flex-col md:flex-row h-screen'>

      <div className='flex px-4 h-3/6 md:h-screen w-full flex-col items-center justify-center bg-[#004737] text-center'>
        <Image src={logo} alt='Logo' className='pb-8' />
        <div className='text-center font-poppins text-3xl md:text-5xl text-white'>
          Sistema de gestión de inventarios
        </div>
        
      </div>

      <div className='flex h-screen w-full flex-col items-center justify-start md:justify-center bg-[#EAF3D8]'>
                
        <div className='font-poppins text-5xl pb-10 pt-10 md:pt-0'>
          Iniciar Sesión
        </div>
        
        <button
          className='py-6 px-24 rounded-xl bg-[#004737] font-poppins text-xl text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white'
          onClick={() => signIn()}
        >
          Iniciar Sesión
        </button>
        <div className='pt-6'></div>
        {/* <button
          className='h-[65px] w-[460px] rounded-xl bg-[#004737] font-poppins text-xl text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white'
          onClick={() => signOut()}
        >
          Cerrar Sesión
        </button> */}
      </div>

    </div>
  );
};

export default Login;
