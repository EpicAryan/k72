'use client'

import React, { createContext, useMemo, useState } from 'react'

type NavbarContextType = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [navOpen, setNavOpen] = useState(false);
    const contextValue = useMemo(() => ({
        navOpen,
        setNavOpen
    }), [navOpen]);
    return (
        <NavbarContext.Provider value={contextValue}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavContextProvider
