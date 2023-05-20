import Image from 'next/image';
import picture from '@public/picture.png';
import logo from '@public/logo.png';
import inventario from '@public/inventario.png';
import inventario2 from '@public/inventario2.png';
import cart from '@public/cart.png';
import user from '@public/user.png';
import { PrivateComponent } from '@components/PrivateComponent';
import { SidebarLink } from '@components/SidebarLink';

const Sidebar = () => (
  <div className='sticky bottom-0 top-0 h-screen w-[292px] bg-[#004737]'>
    <div className='grid w-[292px] justify-items-center'>
      <Image src={picture} alt='Picture' className='pt-[49px]' />
      <div className='pt-[18px] font-poppins text-xl text-white'>
        Ava Williams
      </div>
      <div className='mt-10 flex h-full flex-col items-center gap-[70px]'>
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
        <div className='absolute bottom-6'>
          <Image src={logo} alt='Logo' className='pl-[47px] pr-[47px]' />
        </div>
      </div>
    </div>
  </div>
);
export { Sidebar };
