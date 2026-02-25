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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

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
            <motion.div className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[110]" style={{ scaleX }} />

            <div className="max-w-7xl mx-auto px-4">
                <nav className={cn(
                    "relative flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-300 bg-background shadow-xl border border-secondary/20"
                )}>

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-3 group z-10 py-1">
                        <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto transition-transform group-hover:scale-105" />
                        <div className="hidden sm:block">
                            <p className="text-sm font-black tracking-widest uppercase leading-none text-primary">Halar</p>
                            <p className="text-[10px] font-bold tracking-widest text-accent uppercase italic">Petrochem</p>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => (
                            <div
                                key={item.name}
                                className="group/nav"
                                onMouseLeave={() => {
                                    // Use a small timeout to avoid flickering when moving between trigger and menu
                                    const timeoutId = setTimeout(() => {
                                        setActiveDropdown(null);
                                    }, 100);
                                    // Store timeout to clear if re-entered
                                    (window as any)._navbarTimeout = timeoutId;
                                }}
                            >
                                <Link
                                    to={item.href}
                                    onMouseEnter={() => {
                                        if ((window as any)._navbarTimeout) {
                                            clearTimeout((window as any)._navbarTimeout);
                                        }
                                        if (item.children) setActiveDropdown(item.name);
                                    }}
                                    className={cn(
                                        "px-4 py-3 text-xs md:text-[13px] font-bold uppercase tracking-widest flex items-center gap-1.5 transition-all duration-200",
                                        "text-foreground/80 hover:text-accent",
                                        isActive(item.href) && "text-accent"
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
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                onMouseEnter={() => {
                                    if ((window as any)._navbarTimeout) {
                                        clearTimeout((window as any)._navbarTimeout);
                                    }
                                    setActiveDropdown(activeDropdown);
                                }}
                                onMouseLeave={() => setActiveDropdown(null)}
                                className="absolute top-full left-0 right-0 pt-2 pointer-events-auto flex justify-center z-50"
                            >
                                <div className="max-w-[850px] w-[calc(100vw-2rem)] bg-background rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] border border-secondary/20 overflow-hidden ring-1 ring-primary/5 mx-4">
                                    <div className="p-5 sm:p-7 bg-background">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                            {navigation.find(n => n.name === activeDropdown)?.children?.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.href}
                                                    className="group/product flex flex-col items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-secondary/10 border border-transparent hover:border-secondary/20"
                                                >
                                                    {/* Properly Sized Image Container - cinematic 16:8 ratio */}
                                                    <div className="w-full aspect-[16/8] rounded-xl overflow-hidden bg-secondary/5 border border-secondary/20 relative shadow-sm">
                                                        <img
                                                            src={child.image}
                                                            alt={child.name}
                                                            className="w-full h-full object-cover group-hover/product:scale-105 transition-transform duration-700 ease-in-out"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />

                                                        <div className="absolute bottom-3 left-3">
                                                            <div className="p-1.5 sm:p-2 bg-background/95 backdrop-blur-md rounded-lg shadow-lg text-accent">
                                                                {child.icon}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1 sm:space-y-1.5 px-0.5 w-full">
                                                        <div className="flex items-center justify-between w-full">
                                                            <h4 className="font-black text-base sm:text-lg text-foreground group-hover/product:text-accent transition-colors uppercase tracking-tight">
                                                                {child.name}
                                                            </h4>
                                                            <ArrowRight size={14} className="text-accent opacity-0 group-hover/product:opacity-100 transition-all -translate-x-2 group-hover/product:translate-x-0" />
                                                        </div>
                                                        <p className="text-xs sm:text-sm text-foreground/60 leading-snug font-medium line-clamp-2">
                                                            {child.description}
                                                        </p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>

                                        {/* Professional Footer - More Compact */}
                                        <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-secondary/20 flex items-center justify-between">
                                            <div className="flex gap-4 sm:gap-8">
                                                <div className="flex items-center gap-2 sm:gap-2.5">
                                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                                        <Globe size={14} />
                                                    </div>
                                                    <span className="text-[9px] sm:text-[10px] font-black text-foreground uppercase tracking-widest leading-none">Global Logistics</span>
                                                </div>
                                                <div className="flex items-center gap-2 sm:gap-2.5">
                                                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                                        <Zap size={14} />
                                                    </div>
                                                    <span className="text-[9px] sm:text-[10px] font-black text-foreground uppercase tracking-widest leading-none">ISO 9001 Certified</span>
                                                </div>
                                            </div>
                                            <div className="hidden md:flex flex-col items-end opacity-20">
                                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em] select-none">
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
                            "hidden md:flex px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-lg",
                            "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-accent/20 active:scale-95"
                        )}>
                            Get a Quote
                        </Link>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 text-primary bg-secondary/10 hover:bg-secondary/20 rounded-xl transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
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
                        className="fixed inset-0 bg-background z-[150] lg:hidden overflow-y-auto overscroll-contain"
                    >
                        <div className="min-h-full flex flex-col p-6 sm:p-10 pt-24 sm:pt-32">
                            {/* Mobile Header Branding & Close Button */}
                            <div className="absolute top-6 sm:top-8 left-6 sm:left-10 right-6 sm:right-10 flex items-center justify-between">
                                <img src={logo} alt="Logo" className="h-8 sm:h-10 w-auto" />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 sm:p-3 bg-secondary/10 hover:bg-secondary/20 rounded-full text-primary transition-all active:scale-90"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 sm:gap-8">
                                {navigation.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 + 0.2 }}
                                    >
                                        <Link
                                            to={item.href}
                                            className="text-4xl sm:text-5xl font-black text-primary hover:text-accent transition-colors uppercase tracking-tight"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.children && (
                                            <div className="mt-4 sm:mt-6 ml-4 flex flex-col gap-4 sm:gap-5 border-l-2 sm:border-l-3 border-accent/20 pl-6 sm:pl-8">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        to={child.href}
                                                        className="group flex items-center gap-3 text-lg sm:text-xl font-bold text-foreground/50 hover:text-accent transition-colors"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-12 sm:mt-auto pt-8 pb-6 border-t border-secondary/20">
                                <Link
                                    to="/contact"
                                    className="w-full bg-primary text-primary-foreground py-5 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center font-black uppercase tracking-widest text-xs sm:text-sm shadow-xl shadow-primary/10 active:scale-95 transition-transform"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Get Professional Quote
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default ModernNavbar;