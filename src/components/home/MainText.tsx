import React from 'react'
import Video from './Video'

const MainText = () => {
  return (
    <div className='font-font1 text-center pt-4 flex flex-col items-center'>
        <div className='text-[9.5vw] uppercase leading-[8.5vw]'>
            L'étincelle
        </div>
        <div className='text-[9.5vw] flex items-center uppercase leading-[8.5vw]'>
            qui
            <div className='h-[7vw] w-[16vw] -mt-5 rounded-full overflow-hidden'>
                <Video/>
            </div>
            génère
        </div>
        <div className='text-[9.5vw] uppercase leading-[8vw]'>
            la créativité
        </div>
    </div>
  )
}

export default MainText
