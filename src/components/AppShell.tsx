'use client';

import { useContext } from 'react';
import { NavbarContext } from './navbar/NavContext';
import Navbar from './navbar/Navbar';
import NavComponent from './navbar/NavComponent';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  const navContext = useContext(NavbarContext);

  if (!navContext) {
    throw new Error('AppShell must be used within NavContextProvider');
  }

  const { navOpen } = navContext;

  return (
    <>
      {!navOpen &&<Navbar />}
      {navOpen && <NavComponent />}
      {children}
    </>
  );
};

export default AppShell;
