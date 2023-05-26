import { Sidebar } from '@components/Sidebar';
import Drawer from '@mui/material/Drawer';
import { LayoutContext } from 'contexts/LayoutContext';
import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

export function Layout({ children }: LayoutProps) {

  const { setShowLeftMenu, showLeftMenu } = useContext(LayoutContext);
   
  return <>
    <div className='flex h-screen w-full bg-[#EAF3D8] items-start'>

      <Drawer className='block md:hidden'
        anchor={'left'}
        open={showLeftMenu}
        onClose={() => setShowLeftMenu(false)}        
      >
        <Sidebar/>
      </Drawer>

      <div className='hidden md:block'>
        <Sidebar/>
      </div>

      <div className='flex flex-col h-full w-full'>

        {/* PHONE'S HEADER */}
        <div className='block md:hidden w-full items-center justify-start px-2'>
          <IconButton color="primary" aria-label="add to shopping cart" onClick={() => setShowLeftMenu(true)}>
            <MenuIcon />
          </IconButton>
        </div>

        <div className='max-w-3/4 flex flex-col items-center'>{children}</div>

      </div>

    </div>
  </>

};

