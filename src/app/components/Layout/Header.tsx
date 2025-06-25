'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#111] border-b border-neutral-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-24 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Dot Box */}
                    <div className="w-12 h-12 bg-black flex flex-wrap items-center justify-center rounded-sm border border-white">
                        <div className="w-1.5 h-1.5 bg-white rounded-full m-[1.5px]"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full m-[1.5px]"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full m-[1.5px]"></div>
                    </div>
                    {/* Text */}
                    <div className="leading-tight">
                        <div className="font-bold text-3xl text-white tracking-tight">Boss</div>
                        <div className="text-orange-400 text-lg font-semibold tracking-widest">ENTERTAINMENT</div>
                    </div>
                </Link>

                {/* Navigation Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white uppercase tracking-wider">
                    <Link href="#" className="hover:text-orange-400 transition-colors">Games</Link>
                    <Link href="#" className="hover:text-orange-400 transition-colors">Studio</Link>
                    <Link href="#" className="hover:text-orange-400 transition-colors">Culture</Link>
                    <Link href="#" className="hover:text-orange-400 transition-colors">Careers</Link>
                    <Link href="#" className="hover:text-orange-400 transition-colors">Internships</Link>
                    <Link href="#" className="hover:text-orange-400 transition-colors">News</Link>
                </nav>
            </div>
        </header>
    );
}
