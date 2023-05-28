import { Sidebar } from '@components/Sidebar';
import Drawer from '@mui/material/Drawer';
import { useSidebarContext } from 'contexts/LayoutContext';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  const { openSidebar, setOpenSidebar } = useSidebarContext();

  return (
    <>
      <div className='flex h-screen w-full items-start bg-[#EAF3D8]'>
        <Drawer
          className='block md:hidden'
          anchor={'left'}
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
        >
          <Sidebar />
        </Drawer>

        <div className='hidden md:block'>
          <Sidebar />
        </div>

        <div className='flex h-full w-full flex-col'>
          {/* PHONE'S HEADER */}
          <div className='block w-full items-center justify-start px-2 md:hidden'>
            <IconButton
              color='primary'
              aria-label='add to shopping cart'
              onClick={() => setOpenSidebar(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div className='max-w-3/4 flex h-full w-full flex-col items-center overflow-y-auto pb-10'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };
