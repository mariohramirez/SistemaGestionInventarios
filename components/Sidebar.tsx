import Image from 'next/image';
import user from '@public/png/user.png';
import { PrivateComponent } from '@components/PrivateComponent';
import { SidebarLink } from '@components/SidebarLink';
import { signOut } from 'next-auth/react';
import picture from '@public/png/picture.png';
import logo from '@public/png/logo.png';
import inventario from '@public/png/inventario.png';
import inventario2 from '@public/png/inventario2.png';
import cart from '@public/png/cart.png';

const Sidebar = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: 'http://localhost:3000/login' });
  };

  return (
    <div className='sticky bottom-0 left-0 top-0 h-screen w-[292px] bg-[#004737]'>
      <div className='flex h-full w-[292px] flex-col items-center justify-between'>
        <div className='grid justify-items-center'>
          <Image src={picture} alt='Picture' className='pt-[49px]' />
          <div className='pt-[18px] font-poppins text-xl text-white'>
            Ava Williams
          </div>
        </div>
        <div className='mt-10 flex h-full flex-col items-center justify-between pb-5'>
          <div className='flex flex-col gap-4'>
            <SidebarLink
              title='Inventarios'
              href='/inventario'
              image={inventario}
              imageActive={inventario2}
            />
            <SidebarLink
              title='Materiales'
              href='/material'
              image={cart}
              imageActive={cart}
            />
            <PrivateComponent role='ADMIN'>
              <SidebarLink
                title='Usuarios'
                href='/usuario'
                image={user}
                imageActive={user}
              />
            </PrivateComponent>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <button
              className='flex items-center justify-center gap-1'
              onClick={handleLogout}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='white'
                className='h-6 w-6'
                width={31}
                height={31}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75'
                />
              </svg>
              <span className='pl-1 text-xl text-white'>Cerrar sesión</span>
            </button>
            <Image src={logo} alt='Logo' className='pl-[47px] pr-[47px]' />
          </div>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
