"use client";

import React, { useContext, useRef } from "react";
import { NavbarContext } from "./NavContext";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const NavComponent = () => {
    const navContext = useContext(NavbarContext);
    const fullNavLinksRef = useRef<HTMLDivElement>(null);
    const fullScreenRef = useRef<HTMLDivElement>(null);

    

    if (!navContext) {
        throw new Error(
            "SomeComponent must be used within a NavContextProvider"
        );
    }

    const { navOpen, setNavOpen } = navContext;

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        
        tl.from('.stairing',{
            height: 0,
            stagger: {
                amount: -0.3
            }
        })

        tl.from('.menu', {
            translateX: 40,
            opacity: 0
        })
        tl.from('.link', {
            opacity: 1,
            rotateX: 90,
            stagger: {
                amount: 0.2
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }

    function gsapReverseAnimation() {
        const tl = gsap.timeline()

        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing',{
            height: 0,
            stagger: {
                amount: -0.1
            }
        })

        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none'
        })
    }


    useGSAP(function () {
        console.log("enterign useGSAP->", navOpen)
        if(navOpen){
            gsapAnimation()
        }else{
            gsapReverseAnimation()
        }
    },[navOpen])
    

    return (
        <div ref={fullScreenRef} id='fullscreennav' className="fullscreennav absolute h-screen w-full text-white  z-50 overflow-hidden">
            <div className="h-screen w-full fixed">
                <div className="h-full w-full flex">
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                    <div className="stairing h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className="h-full w-full relative flex flex-col justify-between">
                <div className="navlink flex w-full justify-between items-start p-3">
                    <div className="lg:w-32 w-24 ">
                        <svg
                            className="w-full"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 103 44"
                        >
                            <path
                                fill="white"
                                fillRule="evenodd"
                                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
                            ></path>
                        </svg>
                    </div>
                    <div
                        onClick={() => setNavOpen(!navOpen)}
                        className="menu group size-20 lg:size-28 relative cursor-pointer "
                    >
                        <div className="lg:h-38 h-28 w-0.5 -rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50] transition-all duration-200 ease-in-out"></div>
                        <div className="lg:h-38 h-28 w-0.5 right-0 rotate-45 origin-top absolute bg-white group-hover:bg-[#D3FD50] transition-all duration-200 ease-in-out"></div>
                    </div>
                </div>

                <div>
                    <div className="link relative origin-top border-t-[0.5px] border-gray-500 hover:border-t-0">
                        <h1 className="font-font2 text-[8vw] text-center uppercase leading-[0.8] pt-8">
                            Projets
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="link relative origin-top border-t-[0.5px] border-gray-500 hover:border-t-0">
                        <h1 className="font-font2 text-[8vw] text-center uppercase leading-[0.8] pt-8">
                            Agence
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="link relative origin-top border-t-[0.5px] border-gray-500 hover:border-t-0">
                        <h1 className="font-font2 text-[8vw] text-center uppercase leading-[0.8] pt-8">
                           Contact
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="link relative origin-top border-y-[0.5px] border-gray-500 hover:border-y-0">
                        <h1 className="font-font2 text-[8vw] text-center uppercase leading-[0.8] pt-8">
                           Blogs
                        </h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                            <div className='moveX flex items-center gap-4'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout Savoir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="case-study"
                                />
                               <h2 className='whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-8 pt-4 uppercase'>Pour Tout voir</h2>
                                <Image
                                    src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                                    width={500}
                                    height={300}
                                    className="lg:h-28 h-14 rounded-full shrink-0 lg:w-84 w-32 object-cover"
                                    alt="pjc"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex items-center justify-between font-font1">
                    <div>
                        <p>MONTREAL_07:52:32</p>
                    </div>
                    <div className="flex gap-2">
                        <p>Politique de confidentialité</p>
                        <p>Avis de confidentialité</p>
                        <p>Rapport éthique</p>
                        <p>Options de consentement</p>
                    </div>
                    <div className="flex gap-2">
                        <div>FB</div>
                        <div>IG</div>
                        <div>IN</div>
                        <div>BE</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;
