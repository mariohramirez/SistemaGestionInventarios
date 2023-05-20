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
      <Link href='/inventario'>
        <button>Ir a la app</button>
      </Link>
    </>
  );
};

export default Home;
