import { Sidebar } from '@components/Sidebar';
import Drawer from '@mui/material/Drawer';
import { LayoutContext } from 'contexts/LayoutContext';
import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: LayoutProps) => {
  const { setShowLeftMenu, showLeftMenu } = useContext(LayoutContext);

  return (
    <>
      <div className='flex h-screen w-full items-start bg-[#EAF3D8]'>
        <Drawer
          className='block md:hidden'
          anchor={'left'}
          open={showLeftMenu}
          onClose={() => setShowLeftMenu(false)}
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
              onClick={() => setShowLeftMenu(true)}
            >
              <MenuIcon />
            </IconButton>
          </div>

          <div className='w-full max-w-3/4 h-full flex flex-col items-center overflow-y-auto pb-10'>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export { Layout };
