'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!footerRef.current) return;

        gsap.fromTo(
            footerRef.current,
            { y: 60, opacity: 1 },
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top bottom',
                    toggleActions: 'play reverse play reverse', 
                },
            }
        );
    }, []);

    return (
        <footer
            ref={footerRef}
            className="bg-[#131313] text-yellow-500 text-center text-sm py-10 px-4"
        >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 max-w-7xl mx-auto">
                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 tracking-widest font-semibold text-xs text-white">
                    <a href="#" className="hover:underline">PRIVACY</a>
                    <a href="#" className="hover:underline">TERMS</a>
                    <a href="#" className="hover:underline">DO NOT SELL MY PERSONAL INFORMATION</a>
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-6 text-gray-400 text-xl">
                    <a href="#" aria-label="Instagram">
                        <i className="fab fa-instagram" />
                    </a>
                    <a href="#" aria-label="X / Twitter">
                        <i className="fab fa-x-twitter" />
                    </a>
                    <a href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className="mt-6 text-xs tracking-wide">
                © 2025 Boss Entertainment.
            </p>
        </footer>
    );
};

export default Footer;
