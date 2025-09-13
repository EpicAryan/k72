import Link from 'next/link'
import React from 'react'

const BottomText = () => {
  return (
    <div className='font-font2 flex items-center justify-center gap-4'>
        <p className='absolute xl:w-[15vw] w-64 lg:right-6 right-2 bottom-28  xl:bottom-40 font-[font1] xl:text-base lg:text-sm text-xs lg:leading-snug leading-tight'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l&apos;étincelle pour générer de l&apos;émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.
        </p>
        <div className='leading-[0.7] lg:border-3 border-2 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full pt-2 lg:pt-7 px-4 lg:px-8 pb-0'>
            <Link 
                href="/projets"
                className='text-[6.5vw]  uppercase'
            >
                Projets
            </Link>
        </div>
        <div className='leading-[0.7] lg:border-3 border-2 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full pt-2 lg:pt-7 px-4 lg:px-8 pb-0'>
            <Link 
                href="/agence"
                className='text-[6.5vw] uppercase'
            >
                Agence
            </Link>
        </div>
    </div>
  )
}

export default BottomText
