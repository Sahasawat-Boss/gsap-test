'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-30 flex items-center justify-between">
                {/* Respawn Logo */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Dot Box */}
                    <div className="w-7 h-7 bg-black flex flex-wrap items-center justify-center rounded-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full m-[1.5px]"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full m-[1.5px]"></div>
                        <div className="w-1.5 h-1.5 bg-white rounded-full m-[1.5px]"></div>
                    </div>
                    {/* Text */}
                    <div className="leading-tight">
                        <div className="font-bold text-xl text-gray-900 tracking-tight">respawn</div>
                        <div className="text-orange-500 text-xs font-semibold tracking-widest">ENTERTAINMENT</div>
                    </div>
                </Link>

                {/* Navigation Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    <Link href="#">Games</Link>
                    <Link href="#">Studio</Link>
                    <Link href="#">Culture</Link>
                    <Link href="#">Careers</Link>
                    <Link href="#">Internships</Link>
                    <Link href="#">News</Link>
                </nav>
            </div>
        </header>
    );
}
