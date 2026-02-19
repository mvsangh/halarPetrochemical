import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

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
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <img src={logo} alt="Halar Petrochem" className="h-24 sm:h-32 w-auto brightness-0 invert" />
                        </motion.div>

                        {/* Brand Name */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-center mb-12"
                        >
                            <h1 className="text-white text-2xl sm:text-3xl font-bold tracking-[0.2em] mb-2 uppercase font-display">
                                HALAR <span className="text-accent">PETROCHEM</span>
                            </h1>
                            <p className="text-white/40 text-xs sm:text-sm tracking-[0.4em] uppercase">
                                Leading Petrochemical Supplier
                            </p>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full relative overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-accent"
                                initial={{ width: 0 }}
                                animate={{ width: `${percent}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        {/* Percentage Text */}
                        <motion.span
                            className="text-white/60 text-[10px] font-medium tracking-widest mt-4 tabular-nums"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            {percent}%
                        </motion.span>
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
