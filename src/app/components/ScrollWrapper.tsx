'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GameSection from './GameSection';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollWrapper() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = gsap.utils.toArray('section');

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom bottom',
            snap: 1 / (sections.length - 1), // snap to each full section
            scrub: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="pt-16">
            <GameSection
                title="Titanfall 2"
                release="Released October 2016"
                image="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/05/titanfall-2.jpg"
                bgColor="#f8f8f8"
            />
            <GameSection
                title="Star Wars Jedi: Survivor"
                release="Released April 2023"
                image="https://cdn1.epicgames.com/offer/5a2ea5980ac147c195775039195a3081/EGS_STARWARSJediSurvivorStandardEdition_RespawnEntertainment_S1_2560x1440-f9e8bb0209bb9ec26636838fbc3dcd85"
                bgColor="#f0f0ff"
            />
            <GameSection
                title="Apex Legends"
                release="Released February 2019"
                image="https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/header.jpg"
                bgColor="#fff"
            />
        </div>
    );
}
