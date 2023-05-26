import { LayoutContext } from 'contexts/LayoutContext';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';

interface SidebarLinkProps {
  href: string;
  title: string;
  image: StaticImageData;
  imageActive: StaticImageData;
}

export function SidebarLink({ href, imageActive, image, title }: SidebarLinkProps){

  const { pathname } = useRouter();
  const { setShowLeftMenu } = useContext(LayoutContext);

  return (
    <>
      <Link
        className={`flex w-full h-14 transform rounded-xl ${pathname === href  ? 'bg-[#5EFEA9]' : 'text-white'} font-poppins text-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-green-500`}
        href={href}
        onClick={() => setShowLeftMenu(false)}
      >
        <div className='m-auto flex max-h-[31px] w-full justify-center'>
          <Image
            src={pathname === href ? imageActive : image}
            alt='Inventario'
            className='ml-[-60px] mr-[10px]'
          />
          <span className='pl-1'>{title}</span>
        </div>
      </Link>
    </>
  );
};
