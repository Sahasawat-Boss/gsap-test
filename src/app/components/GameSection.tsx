'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GameSectionProps {
    image: string;
    title: string;
    release: string;
    bgColor?: string;
}

export default function GameSection({ image, title, release, bgColor = "#fff" }: GameSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sectionRef.current) { //Refers to the actual DOM element (section) you're animating.
            gsap.fromTo( //Creates an animation that starts from certain values and animates to others.
                sectionRef.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        }
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-screen flex flex-col md:flex-row items-center justify-center text-black"
            style={{ backgroundColor: bgColor }}
        >
            <div className="w-full md:w-1/2 p-6 flex justify-center">
                <img src={image} alt={title} className="w-full max-w-md rounded shadow-xl" />
            </div>
            <div className="w-full md:w-1/2 p-10">
                <p className="uppercase text-sm text-orange-600 tracking-widest mb-2">{release}</p>
                <h2 className="text-5xl md:text-6xl font-bold">{title}</h2>
            </div>
        </section>
    );
}
