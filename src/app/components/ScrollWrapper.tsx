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
            snap: {
                snapTo: 1 / (sections.length - 1),
                duration: 0.5,
                ease: 'power1.inOut',
            },
            scrub: true,
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className="pt-16">
            <GameSection
                id="apex"
                title="Apex Legends"
                release="Released February 2019"
                image="https://cdn1.epicgames.com/spt-assets/5dcd88f4e2094a698ebffa43438edc33/apex-legends-1ugyx.jpg"
                bgColor="#fff"
            />
            <GameSection
                id="titanfall2"
                title="Titanfall 2"
                release="Released October 2016"
                image="https://s.isanook.com/ga/0/ud/195/978275/01.jpg"
                bgColor="#f8f8f8"
            />
            <GameSection
                id="horizon"
                title="Horizon Zero Dawn"
                release="Released August 2020"
                image="https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg"
                bgColor="#f3f3f3"
            />
            <GameSection
                id="valorant"
                title="Valorant"
                release="Released June 2020"
                image="https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Wallpaper-Boys-Dark-Display.jpg"
                bgColor="#f7f7f7"
            />
        </div>
    );
}
