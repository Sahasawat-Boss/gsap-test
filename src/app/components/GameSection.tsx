'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GameSectionProps {
    id: string;
    image: string;
    title: string;
    release: string;
    bgColor?: string;
}

export default function GameSection({ id, image, title, release, bgColor = "#fff" }: GameSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!sectionRef.current) return;

        const q = gsap.utils.selector(sectionRef);

        const section = sectionRef.current;

        // Image
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            onEnter: () => {
                gsap.fromTo(q('img'), { x: -50, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 1, ease: 'power2.out'
                });
            },
            onEnterBack: () => {
                gsap.fromTo(q('img'), { x: -50, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 1, ease: 'power2.out'
                });
            },
        });

        // Text
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            onEnter: () => {
                gsap.fromTo(q('.game-text'), { x: 55, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 1, ease: 'power2.out'
                });
            },
            onEnterBack: () => {
                gsap.fromTo(q('.game-text'), { x: 55, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 1, ease: 'power2.out'
                });
            },
        });

        // Button
        ScrollTrigger.create({
            trigger: section,
            start: 'top center',
            onEnter: () => {
                gsap.fromTo(q('.learn-btn'),
                    { y: 80, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power2.out',
                        onComplete: () => {
                            q('.learn-btn')[0]?.classList.add('float-animation');
                        },
                    }
                );
            },
            onEnterBack: () => {
                gsap.fromTo(q('.learn-btn'), { y: 60, opacity: 0 }, {
                    y: 50, opacity: 1, duration: 1.2, ease: 'power2.out'
                });
            },
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);


    return (
        <section
            id={id}
            ref={sectionRef}
            className="h-screen flex flex-col md:flex-row items-center justify-center text-black"
            style={{ backgroundColor: bgColor }}
        >

            {/* Left: Image 35% */}
            <div className="w-full md:w-[35%] relative h-full flex items-center justify-center">
                {/* background box */}
                <img
                    src="/images/game_controllers_transparent.png"
                    alt="Background"
                    className="absolute bg-[#00000050] inset-0 w-full h-full object-cover z-0 "
                />
                <div className="absolute inset-0 bg-[#e3551d] mix-blend-multiply z-0" />

                {/* Learn More Button - bottom fixed */}
                <div className="absolute bottom-55 left-126 z-20 flex items-center gap-4 learn-btn">
                    <button className="group relative flex items-center bg-white text-[#e3551d] font-semibold tracking-wide text-base py-4 pr-12 pl-18 rounded-md overflow-hidden transition-all duration-300 whitespace-nowrap hover:pl-36 hover:pr-14 shadow-xl shadow-black/50">
                        <span className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center bg-[#e3551d] rounded-l-md transition-all duration-300 group-hover:w-14">
                            <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-base">→</span>
                            </span>
                        </span>
                        Play Now
                    </button>
                </div>

                {/* Learn More Button - bottom fixed */}
                <div className="absolute bottom-38 left-146 z-20 flex items-center gap-4 learn-btn ">
                    <button className="group relative flex items-center bg-[#fcfbfa] text-[#e3551d] font-semibold tracking-wide text-base py-4 pr-12 pl-18 rounded-md overflow-hidden transition-all duration-300 whitespace-nowrap hover:pl-36 hover:pr-14 shadow-xl shadow-black/15">
                        <span className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center bg-[#e3551d] rounded-l-md transition-all duration-300 group-hover:w-14">
                            <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-base">→</span>
                            </span>
                        </span>
                        Learn More
                    </button>
                </div>



                {/* Game Image */}
                <div className="relative z-10 flex justify-center items-center">
                    <img
                        src={image}
                        alt={title}
                        className="max-w-[130%] ml-36 h-auto object-cover rounded shadow-xl shadow-black/30"
                    />
                </div>
            </div>


            {/* Right: Text 65% */}
            <div className="w-full md:w-[65%] relative h-full flex items-center text-left game-text">
                {/* Background image */}
                <img
                    src="/images/bg-white.png"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Orange overlay */}
                <div className="absolute inset-0 bg-[#f6efec] mix-blend-multiply z-0" />

                {/* Text Content */}
                <div className="relative z-10 px-8 md:pl-46">
                    <p className="uppercase text-md text-orange-600 tracking-widest mb-1">{release}</p>
                    <h2 className="text-5xl md:text-6xl font-bold">{title}</h2>
                </div>
            </div>
        </section>

    );
}
