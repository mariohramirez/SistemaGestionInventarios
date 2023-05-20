import Image from 'next/image';
import picture from '@public/picture.png';
import logo from '@public/logo.png';
import inventario2 from '@public/inventario2.png';
import cart from '@public/cart.png';
import user from '@public/user.png';
import { PrivateComponent } from '@components/PrivateComponent';
import Link from 'next/link';

const Sidebar = () => (
  <div className='h-[1024px] w-[292px] bg-[#004737]'>
    <div className='grid justify-items-center'>
      <Image src={picture} alt='Picture' className='pt-[49px]' />
      <div className='pt-[18px] font-poppins text-xl text-white'>
        Ava Williams
      </div>
      <div className='pt-[65px]'></div>
      <Link
        className='h-[65px] w-[226px] transform rounded-xl bg-[#5EFEA9] font-poppins text-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-green-500'
        href={'/inventario'}
      >
        <div className='flex justify-center'>
          <Image
            src={inventario2}
            alt='Inventario'
            className='ml-[-60px] mr-[10px]'
          />
          Inventarios
        </div>
      </Link>
      <div className='pt-[65px]'></div>
      <Link
        className='h-[65px] w-[226px] transform rounded-xl font-poppins text-xl text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#5EFEA9]'
        href={'/material'}
      >
        <div className='flex justify-center'>
          <Image src={cart} alt='cart' className='ml-[-60px] mr-[10px]' />
          Materiales
        </div>
      </Link>
      <div className='pt-[65px]'></div>
      <PrivateComponent role='ADMIN'>
        <Link
          className='h-[65px] w-[226px] transform rounded-xl font-poppins text-xl text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-[#5EFEA9]'
          href={'/usuario'}
        >
          <div className='flex justify-center'>
            <Image src={user} alt='user' className='ml-[-60px] mr-[10px]' />
            Usuarios
          </div>
        </Link>
      </PrivateComponent>
      <Image src={logo} alt='Logo' className='pl-[47px] pr-[47px] pt-[280px]' />
    </div>
  </div>
);
export { Sidebar };
