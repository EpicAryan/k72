'use client'

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image'
import React, { useRef, useState } from 'react'

const Agence = () => {
    
    gsap.registerPlugin(ScrollTrigger)

    const imageDivRef = useRef(null);
      const [currentSrc, setCurrentSrc] = useState(
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'
    );


    const imageArray = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
    ]

    useGSAP(function () {
        if (!imageDivRef.current) return;

        gsap.to(imageDivRef.current, {

            scrollTrigger:{
                trigger:imageDivRef.current,
                start: 'top 10%',
                end: 'top -110%',
                pin: true,
                pinSpacing: true,
                pinReparent: true,
                pinType: 'transform',
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    let index;
                    if(self.progress<1){
                        index = Math.floor(self.progress * imageArray.length);
                    }else{
                        index = imageArray.length-1
                    }
                    setCurrentSrc(imageArray[index]);
                },
            }        
        })
    })

    return (
        <div className=''>
            <div className='section1'>
                <div 
                    ref={imageDivRef}
                    className='absolute h-[30vw] lg:h-[20vw] w-[25vw] lg:w-[15vw] top-88 lg:top-84 left-[30vw] rounded-xl lg:rounded-3xl overflow-hidden'
                >
                    <Image
                        src={currentSrc}
                        alt='dynamic image'
                        width={400}
                        height={400}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className='relative font-font2 text-black'>
                    <div className='pt-[50vh] lg:pt-[55vh]'>
                        <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>
                            Soixan7e <br/> Douze
                        </h1>
                    </div>
                    <div className='flex justify-end mt-4'>
                        <p className='text-xl lg:text-6xl w-[60%] indent-[16vw]'>
                            Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C&apos;est pour ça qu&apos;on s&apos;engage à donner de la perspective, pour bâtir des marques influentes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='section2 h-screen'>

            </div>
        </div>
    )
}

export default Agence
