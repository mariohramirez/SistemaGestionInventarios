import useUserData from '@hooks/useUserData';
import { Enum_RoleName } from '@prisma/client';
import Link from 'next/link';

interface PrivateRouteProps {
  role?: Enum_RoleName;
  children: JSX.Element | JSX.Element[];
}

const PrivateRoute = ({ role, children }: PrivateRouteProps) => {
  const { status, loading, session, role: userRole } = useUserData();

  if (status === 'loading' || loading) return <div>Cargando...</div>;

  if (!session) {
    return (
      <div className='flex h-screen w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl'>Esta ruta require autenticación.</h1>
        <h2 className='text-2xl'>Por favor inicia sesión</h2>
        <Link
          href='/login'
          className='flex h-12 w-48 items-center justify-center rounded-lg bg-[#004737] text-center text-2xl text-white'
        >
          Iniciar sesión
        </Link>
      </div>
    );
  }

  if (role && role !== userRole) {
    return (
      <div className='flex h-screen w-full flex-col items-center justify-center gap-5'>
        <h1 className='text-6xl'>No tienes permiso para ir a esta ruta.</h1>
        <Link
          href='/inventario'
          className='flex h-12 w-32 items-center justify-center rounded-lg bg-[#004737] text-center text-2xl text-white'
        >
          Ir a Inventarios
        </Link>
      </div>
    );
  }

  return <>{children}</>;
};
export { PrivateRoute };
