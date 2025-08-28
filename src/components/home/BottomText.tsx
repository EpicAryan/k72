import Link from 'next/link'
import React from 'react'

const BottomText = () => {
  return (
    <div className='font-font2 flex items-center justify-center gap-4'>
        <div className='leading-[0.7] border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full pt-7 px-8 pb-0'>
            <Link 
                href="/projets"
                className='text-[6.5vw]  uppercase'
            >
                Projets
            </Link>
        </div>
        <div className='leading-[0.7] border-3 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full pt-7 px-8 pb-0'>
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
