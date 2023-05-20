import { Sidebar } from '@components/Sidebar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <div className='flex h-full w-full bg-[#EAF3D8]'>
    <Sidebar />
    <div className='mt-10 grid h-full w-[1440px] justify-items-center pl-[292px]'>
      {children}
    </div>
  </div>
);

export { Layout };
