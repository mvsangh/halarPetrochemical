import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                    <div className="relative flex flex-col items-center">
                        {/* The Energy, Chemicals, & Petrol Core */}
                        <div className="mb-16 relative flex items-center justify-center w-64 h-64">
                            {/* Glowing Background */}
                            <motion.div
                                className="absolute inset-0 bg-accent/20 rounded-full blur-[60px]"
                                animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Outer Energy Rings (ENERGY) */}
                            <svg viewBox="0 0 250 250" className="absolute inset-[-20px] w-[calc(100%+40px)] h-[calc(100%+40px)] pointer-events-none text-accent z-20">
                                {/* Lightning dashed ring */}
                                <motion.circle
                                    cx="125" cy="125" r="115"
                                    fill="none" stroke="currentColor" strokeWidth="2.5"
                                    strokeDasharray="15 100 30 150" strokeLinecap="round"
                                    animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                                    transition={{ rotate: { duration: 3, ease: "linear", repeat: Infinity }, scale: { duration: 1.5, repeat: Infinity } }}
                                    className="origin-center drop-shadow-[0_0_10px_rgba(var(--accent-rgb),1)]"
                                />
                                {/* Inner tracking ring */}
                                <motion.circle
                                    cx="125" cy="125" r="105"
                                    fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"
                                    strokeDasharray="5 15"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, ease: "linear", repeat: Infinity }}
                                    className="origin-center"
                                />
                                {/* Outer boundary ring */}
                                <circle cx="125" cy="125" r="120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                            </svg>

                            {/* Middle Chemical Hexagon (CHEMICALS) */}
                            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full pointer-events-none text-white/40 z-10">
                                <motion.g animate={{ rotate: 360 }} transition={{ duration: 40, ease: "linear", repeat: Infinity }} className="origin-center">
                                    {/* Main Outer Hexagon */}
                                    <polygon points="100,10 177.9,55 177.9,145 100,190 22.1,145 22.1,55" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                    {/* Connecting bonds */}
                                    <line x1="100" y1="10" x2="100" y2="45" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                                    <line x1="22.1" y1="145" x2="60" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                                    <line x1="177.9" y1="145" x2="140" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
                                </motion.g>

                                <motion.g animate={{ rotate: -360 }} transition={{ duration: 50, ease: "linear", repeat: Infinity }} className="origin-center">
                                    {/* Inner chemical lattice */}
                                    <polygon points="100,30 160.6,65 160.6,135 100,170 39.4,135 39.4,65" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                                    {/* Nodes */}
                                    <circle cx="100" cy="30" r="3" fill="currentColor" />
                                    <circle cx="160.6" cy="65" r="3" fill="currentColor" />
                                    <circle cx="160.6" cy="135" r="3" fill="currentColor" />
                                    <circle cx="100" cy="170" r="3" fill="currentColor" />
                                    <circle cx="39.4" cy="135" r="3" fill="currentColor" />
                                    <circle cx="39.4" cy="65" r="3" fill="currentColor" />
                                </motion.g>
                            </svg>

                            {/* Central Oil Drop (PETROL) */}
                            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full z-15 pointer-events-none">
                                <defs>
                                    <clipPath id="dropClip">
                                        <path d="M 100 45 C 100 45 55 110 55 145 C 55 169.8 75.2 190 100 190 C 124.8 190 145 169.8 145 145 C 145 110 100 45 100 45 Z" />
                                    </clipPath>
                                    <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgb(var(--accent-rgb))" stopOpacity="1" />
                                        <stop offset="100%" stopColor="rgb(var(--accent-rgb))" stopOpacity="0.4" />
                                    </linearGradient>
                                </defs>

                                {/* Drop Outline Glow */}
                                <path
                                    d="M 100 45 C 100 45 55 110 55 145 C 55 169.8 75.2 190 100 190 C 124.8 190 145 169.8 145 145 C 145 110 100 45 100 45 Z"
                                    fill="rgba(255,255,255,0.02)"
                                    stroke="rgba(255,255,255,0.4)"
                                    strokeWidth="2"
                                    className="drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] backdrop-blur-sm"
                                />

                                {/* Liquid Fill masked by Drop */}
                                <g clipPath="url(#dropClip)">
                                    <motion.div
                                        initial={{ y: 200 }}
                                        animate={{ y: Math.max(45, 190 - (percent * 1.45)) }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                        <motion.path
                                            d="M -100 0 Q -50 -15 0 0 T 100 0 T 200 0 T 300 0 L 300 200 L -100 200 Z"
                                            fill="url(#liquidGrad)"
                                            animate={{ x: [0, -100] }}
                                            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                                        />
                                        {/* Bright surface line */}
                                        <motion.path
                                            d="M -100 0 Q -50 -15 0 0 T 100 0 T 200 0 T 300 0"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeOpacity="0.6"
                                            animate={{ x: [0, -100] }}
                                            transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                                        />
                                    </motion.div>
                                </g>

                                {/* Inner shine for glass drop effect */}
                                <path
                                    d="M 65 140 C 65 165 80 180 100 185"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    className="opacity-40 mix-blend-overlay"
                                />
                            </svg>
                        </div>

                        {/* Cinematic Typography Reveal */}
                        <div className="relative flex flex-col items-center z-20 mb-12 sm:mb-16">
                            {/* VANTARA */}
                            <div className="overflow-hidden mb-2 sm:mb-3">
                                <motion.h1
                                    initial={{ y: "100%", opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-white text-5xl sm:text-7xl font-black tracking-[0.25em] ml-[0.25em] font-display uppercase leading-none drop-shadow-2xl"
                                >
                                    VANTARA
                                </motion.h1>
                            </div>

                            {/* ENERGY */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.1em" }}
                                animate={{ opacity: 1, scale: 1, letterSpacing: "0.6em" }}
                                transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-8 sm:w-16 h-[1px] bg-accent/60" />
                                <span className="text-accent text-[10px] sm:text-xs font-bold uppercase ml-[0.6em]">
                                    ENERGY
                                </span>
                                <div className="w-8 sm:w-16 h-[1px] bg-accent/60" />
                            </motion.div>
                        </div>

                        {/* Minimalist Progress Indicator */}
                        <div className="absolute bottom-16 sm:bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 w-full">
                            <div className="text-white/40 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-mono flex items-center gap-3">
                                <span>System <span className="text-accent">Booting</span></span>
                                <span className="text-white font-bold tabular-nums">
                                    {percent.toString().padStart(3, '0')}%
                                </span>
                            </div>

                            {/* Thin Cybernetic Loading Bar */}
                            <div className="w-48 sm:w-80 h-[1px] bg-white/10 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-accent/0 via-accent/50 to-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: `${percent - 100}%` }}
                                    transition={{ duration: 0.1, ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Decorative Lines */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
