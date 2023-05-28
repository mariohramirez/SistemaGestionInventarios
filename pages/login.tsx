import logo from '@public/png/logo.png';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import useUserData from '@hooks/useUserData';

const Login = () => {
  const { session } = useUserData();
  const router = useRouter();

  if (session) {
    router.push('/');
  }

  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='flex h-3/6 w-full flex-col items-center justify-center bg-[#004737] px-4 text-center md:h-screen'>
        <Image src={logo} alt='Logo' className='pb-8' />
        <div className='text-center font-poppins text-3xl text-white md:text-5xl'>
          Sistema de gestión de inventarios
        </div>
      </div>

      <div className='flex h-screen w-full flex-col items-center justify-start bg-[#EAF3D8] md:justify-center'>
        <div className='pb-10 pt-10 font-poppins text-5xl md:pt-0'>
          Iniciar Sesión
        </div>

        <button
          className='rounded-xl bg-[#004737] px-24 py-6 font-poppins text-xl text-white transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white'
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
