'use client';

import { useEffect, useState } from 'react';

const games = [
    { id: 'titanfall2', name: 'TITANFALL 2' },
    { id: 'horizon', name: 'HORIZON ZERO DAWN' },
    { id: 'valorant', name: 'VALORANT' },
    { id: 'apex', name: 'APEX LEGENDS' },
];


export default function SidebarMenu() {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        games.forEach(game => {
            const section = document.getElementById(game.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <aside className="fixed top-22 right-0 z-40 bg-[#ff4c2e] text-white py-10 px-12 w-90 space-y-8 font-bold uppercase text-sm shadow-lg shadow-black/25 tracking-wide">
            {games
                .slice()
                // .reverse()
                .map((game) => (
                    <div
                        key={game.id}
                        className={`relative transition-all duration-300 ${activeId === game.id ? 'text-black' : ''
                            }`}
                    >
                        {activeId === game.id && (
                            <div className="absolute -left-5 top-1 flex flex-col gap-[2px]">
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                                <div className="w-2 h-2 bg-black rounded-full"></div>
                            </div>
                        )}
                        {game.name}
                    </div>
                ))}
        </aside>
    );
}
