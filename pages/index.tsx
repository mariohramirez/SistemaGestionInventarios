import useUserData from '@hooks/useUserData';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const { session, loading } = useUserData();
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  if (!session) {
    router.push('/login');
  }

  return (
    <>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl'>Accede a la aplicación</h1>
        <Link
          href='/inventario'
          className='flex h-12 w-32 items-center justify-center rounded-lg bg-[#004737] text-center text-2xl text-white'
        >
          <span>Entrar</span>
        </Link>
      </div>
    </>
  );
};

export default Home;
