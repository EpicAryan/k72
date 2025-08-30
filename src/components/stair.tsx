'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef } from 'react'
import { usePathname } from 'next/navigation'

interface StairProps {
  children: React.ReactNode;
}

export const Stair = ({ children }: StairProps) => {
    const currentPath = usePathname()

    const stairParentRef = useRef(null);
    const pageRef = useRef(null);
    useGSAP(function(){
        const tl = gsap.timeline()

        tl.to(stairParentRef.current, {
            display: 'block'
        })
        tl.from('.stair', {
            height: 0,
            duration: 0.3,
            stagger: {
                amount:-0.25
            }
        })
        tl.to('.stair', {
            y: '100%',
            duration: 0.3,
            stagger: {
                amount:-0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3,
            scale: 1.2
        })
    },[currentPath])

    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-20 top-0'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    )
}
