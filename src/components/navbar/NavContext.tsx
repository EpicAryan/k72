'use client'

import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useMemo, useState } from 'react'

type NavbarContextType = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type NavbarColorContextType = {
  navColor: string;
  setNavColor: React.Dispatch<React.SetStateAction<string>>;
};

export const NavbarContext = createContext<NavbarContextType | undefined>(undefined);
export const NavbarColorContext = createContext<NavbarColorContextType | undefined>(undefined)
const NavContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [navColor, setNavColor] = useState('white')
    const locate  = usePathname()

    useEffect(function(){
        if(locate == '/projets' || locate == '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])

    const contextValue = useMemo(() => ({
        navOpen,
        setNavOpen
    }), [navOpen]);
    return (
        <NavbarContext.Provider value={contextValue}>
            <NavbarColorContext.Provider value={{ navColor, setNavColor }}>
                {children}
            </NavbarColorContext.Provider>
        </NavbarContext.Provider>
    )
}

export default NavContextProvider
