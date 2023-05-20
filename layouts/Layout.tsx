import { Sidebar } from '@components/Sidebar';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => (
  <div className='flex h-full w-full bg-[#EAF3D8]'>
    <Sidebar />
    <div className='mt-10 flex h-full w-full justify-center'>
      <div className='max-w-3/4 flex flex-col items-center'>{children}</div>
    </div>
  </div>
);

export { Layout };
