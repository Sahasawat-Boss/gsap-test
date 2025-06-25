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
                gsap.fromTo(q('.learn-btn'), { y: 80, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 1.2, ease: 'power2.out'
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
                {/* Red background box */}
                <div className="absolute inset-0 bg-[#e3551d] mix-blend-multiply z-0" />

                {/* Learn More Button - bottom fixed */}
                <div className="absolute bottom-65 left-25 z-20 flex items-center gap-4 learn-btn ">
                    <button className="group relative flex items-center bg-white text-[#e3551d] font-extrabold tracking-wide text-sm py-4 pr-8 pl-20 rounded-md overflow-hidden transition-all duration-300 hover:pl-26 hover:pr-8">
                        <span className="absolute left-0 top-0 bottom-0 w-12 flex items-center justify-center bg-[#e3551d] rounded-l-md transition-all duration-300 group-hover:w-14">
                            <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                                <span className="text-white text-base">→</span>
                            </span>
                        </span>
                        LEARN MORE
                    </button>
                </div>

                {/* Centered Image */}
                <div className="relative z-10 p-6 flex justify-center items-center">
                    <img
                        src={image}
                        alt={title}
                        className="max-w-[125%] h-auto object-cover rounded shadow-xl"
                    />
                </div>
            </div>


            {/* Right: Text 65% */}
            <div className="w-full md:w-[65%] px-8 md:pl-20 md:pr-32 text-left game-text">
                <p className="uppercase text-sm text-orange-600 tracking-widest mb-6">{release}</p>
                <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
            </div>
        </section>

    );
}
