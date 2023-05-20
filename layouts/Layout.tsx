import { Sidebar } from '@components/Sidebar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <div className='h-[1024px] w-[1440px] bg-[#EAF3D8]'>
    <Sidebar />
    <>{children}</>
  </div>
);

export { Layout };
