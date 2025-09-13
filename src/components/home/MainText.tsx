import React from 'react'
import Video from './Video'

const MainText = () => {
  return (
    <div className='font-font1 text-center pt-4 flex flex-col items-center mt-64 lg:mt-0'>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8.5vw] leading-[10vw] '>
            L&apos;étincelle
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] flex items-center uppercase lg:leading-[8.5vw] leading-[10vw]'>
            qui
            <div className='h-[7vw] w-[16vw] -mt-2 lg:-mt-5 rounded-full overflow-hidden'>
                <Video/>
            </div>
            génère
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] uppercase lg:leading-[8vw] leading-[10vw]'>
            la créativité
        </div>
    </div>
  )
}

export default MainText
