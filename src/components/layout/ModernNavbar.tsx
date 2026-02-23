import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Droplets, Fuel, Globe, Zap } from 'lucide-react';
import logo from '@/assets/logo.png';
import fuelOilImg from '@/assets/products/fuel-oil.png';
import naphthaImg from '@/assets/products/naphtha.png';
import { cn } from '@/lib/utils';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    {
        name: 'Products',
        href: '/products',
        type: 'mega-menu',
        children: [
            {
                name: 'Oils',
                href: '/products/Oil',
                image: fuelOilImg,
                icon: <Fuel className="w-5 h-5" />,
                description: 'High-performance fuel oils, gas oils, and specialty lubricants for industrial power and marine applications.'
            },
            {
                name: 'Chemicals',
                href: '/products/Chemical',
                image: naphthaImg,
                icon: <Droplets className="w-5 h-5" />,
                description: 'Elite petrochemical feedstocks, industrial solvents, and essential chemical compounds for processing.'
            },
        ],
    },
    { name: 'Contact', href: '/contact' },
];

const ModernNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const onScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false);
            else setIsVisible(true);
            setLastScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 20);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastScrollY]);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [location.pathname]);

    const isActive = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
            !isVisible && "-translate-y-full opacity-0",
            isScrolled ? "py-1" : "py-3"
        )}>
            {/* Scroll Progress Bar */}
            <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-500 origin-left z-[110]" style={{ scaleX }} />

            <div className="max-w-7xl mx-auto px-4">
                <nav className={cn(
                    "relative flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-300 bg-white shadow-xl border border-neutral-100"
                )}>

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group z-10 py-1">
                        <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
                        <div className="hidden sm:block">
                            <p className="text-sm font-black tracking-widest uppercase leading-none text-slate-900">Halar</p>
                            <p className="text-[10px] font-bold tracking-widest text-amber-500 uppercase italic">Petrochem</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="group/nav"
                                onMouseEnter={() => {
                                    if (item.children) setActiveDropdown(item.name);
                                }}
                                onMouseLeave={() => {
                                    setActiveDropdown(null);
                                }}
                            >
                                <Link
                                    to={item.href}
                                    className={cn(
                                        "px-4 py-3 text-xs md:text-[13px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all duration-200",
                                        "text-slate-600 hover:text-amber-500",
                                        isActive(item.href) && "text-amber-500"
                                    )}
                                >
                                    {item.name}
                                    {item.children && <ChevronDown size={14} className={cn("transition-transform duration-300", activeDropdown === item.name && "rotate-180")} />}
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* MEGA MENU DROPDOWN - Centered relative to entire Nav */}
                    <AnimatePresence>
                        {activeDropdown && navigation.find(n => n.name === activeDropdown)?.children && (
                            <motion.div
                                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                                onMouseEnter={() => setActiveDropdown(activeDropdown)}
                                onMouseLeave={() => setActiveDropdown(null)}
                                className="absolute top-full left-0 right-0 pt-4 pointer-events-auto flex justify-center z-50"
                            >
                                <div className="w-[850px] bg-white rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] border border-neutral-100 overflow-hidden ring-1 ring-black/5 mx-4">
                                    <div className="p-7 bg-white">
                                        <div className="grid grid-cols-2 gap-6">
                                            {navigation.find(n => n.name === activeDropdown)?.children?.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.href}
                                                    className="group/product flex flex-col items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-neutral-50/80 border border-transparent hover:border-neutral-100"
                                                >
                                                    {/* Properly Sized Image Container - cinematic 16:8 ratio */}
                                                    <div className="w-full aspect-[16/8] rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 relative shadow-sm">
                                                        <img
                                                            src={child.image}
                                                            alt={child.name}
                                                            className="w-full h-full object-cover group-hover/product:scale-105 transition-transform duration-700 ease-in-out"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />

                                                        <div className="absolute bottom-3 left-3">
                                                            <div className="p-2 bg-white/95 backdrop-blur-md rounded-lg shadow-lg text-amber-600">
                                                                {child.icon}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1.5 px-0.5 w-full">
                                                        <div className="flex items-center justify-between w-full">
                                                            <h4 className="font-black text-lg text-slate-900 group-hover/product:text-amber-600 transition-colors uppercase tracking-tight">
                                                                {child.name}
                                                            </h4>
                                                            <ArrowRight size={14} className="text-amber-600 opacity-0 group-hover/product:opacity-100 transition-all -translate-x-2 group-hover/product:translate-x-0" />
                                                        </div>
                                                        <p className="text-sm text-slate-500 leading-snug font-medium line-clamp-2">
                                                            {child.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Professional Footer - More Compact */}
                                        <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center justify-between">
                                            <div className="flex gap-8">
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                                        <Globe size={15} />
                                                    </div>
                                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">Global Logistics</span>
                                                </div>
                                                <div className="flex items-center gap-2.5">
                                                    <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                                                        <Zap size={15} />
                                                    </div>
                                                    <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">ISO 9001 Certified</span>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex flex-col items-end opacity-20">
                                                <span className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] select-none">
                                                    HALAR
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* CTA Section */}
                    <div className="flex items-center gap-4 z-10">
                        <Link to="/contact" className={cn(
                            "hidden md:flex px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg",
                            "bg-slate-900 text-white hover:bg-amber-500 hover:shadow-amber-500/20 active:scale-95"
                        )}>
                            Get a Quote
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2.5 text-slate-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-white z-[150] flex flex-col p-8 pt-32 lg:hidden"
                    >
                        {/* Mobile Header Branding & Close Button */}
                        <div className="absolute top-8 left-8 right-8 flex items-center justify-between">
                            <img src={logo} alt="Logo" className="h-10 w-auto" />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full text-slate-900 transition-all active:scale-90"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-8">
                            {navigation.map((item, idx) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 + 0.2 }}
                                >
                                    <Link
                                        to={item.href}
                                        className="text-5xl font-black text-slate-900 hover:text-amber-500 transition-colors uppercase tracking-tight"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.children && (
                                        <div className="mt-6 ml-4 flex flex-col gap-5 border-l-3 border-amber-500/20 pl-8">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.href}
                                                    className="group flex items-center gap-3 text-xl font-bold text-slate-500 hover:text-amber-500 transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <span className="w-2 h-2 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-10 border-t border-neutral-100">
                            <Link
                                to="/contact"
                                className="w-full bg-slate-900 text-white py-6 rounded-[2rem] flex items-center justify-center font-black uppercase tracking-widest text-sm shadow-xl shadow-slate-900/10 active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Get Professional Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ModernNavbar;