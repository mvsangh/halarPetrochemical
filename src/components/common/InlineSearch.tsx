import { useState, useRef, useEffect } from "react";
import { Search, X, Fuel, Droplets, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const InlineSearch = ({ isMobile = false, onExpandChange }: { isMobile?: boolean, onExpandChange?: (expanded: boolean) => void }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<typeof products>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (onExpandChange) {
            onExpandChange(isExpanded);
        }
    }, [isExpanded, onExpandChange]);

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }

        const filtered = products.filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered.slice(0, 6));
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
                setQuery("");
            }
        };

        if (isExpanded) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isExpanded]);

    const handleExpand = () => {
        setIsExpanded(true);
        setTimeout(() => inputRef.current?.focus(), 100);
    };

    return (
        <div ref={containerRef} className={cn("relative flex items-center justify-end", isMobile ? "w-full" : "w-auto")}>
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    <motion.div
                        key="input"
                        initial={{ width: 44, opacity: 0 }}
                        animate={isExpanded ? { width: isMobile ? "100%" : (window.innerWidth < 640 ? "calc(100vw - 4rem)" : 320), opacity: 1 } : { width: 44, opacity: 0 }}
                        exit={{ width: 44, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={cn(
                            "flex items-center bg-secondary/10 rounded-2xl border border-secondary/20 overflow-hidden",
                            !isMobile && "max-w-[calc(100vw-9rem)] sm:max-w-none"
                        )}
                    >
                        <Search size={16} className="ml-4 text-primary/40" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="SEARCH PORTFOLIO..."
                            className="w-full bg-transparent border-none focus:ring-0 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] p-3 h-11 sm:h-12 placeholder:text-primary/20 text-primary"
                        />
                        <button
                            onClick={() => {
                                setIsExpanded(false);
                                setQuery("");
                            }}
                            className="p-2 mr-1.5 hover:bg-secondary/20 rounded-xl transition-colors text-primary/40"
                        >
                            <X size={14} />
                        </button>
                    </motion.div>
                ) : (
                    <motion.button
                        key="icon"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleExpand}
                        className={cn(
                            "p-3 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2",
                            "bg-primary text-white hover:bg-accent"
                        )}
                    >
                        <Search size={18} />
                        {!isMobile && <span className="text-[10px] font-black uppercase tracking-widest pr-2 hidden sm:inline">Search</span>}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Results Dropdown */}
            <AnimatePresence>
                {isExpanded && query.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        className={cn(
                            "bg-background/95 backdrop-blur-md rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.2)] border border-secondary/20 overflow-hidden z-[110]",
                            // Mobile: fixed positioning to center on screen and avoid cutting
                            "fixed inset-x-4 top-24 sm:absolute sm:inset-auto sm:top-full sm:right-0 sm:mt-3 sm:w-[500px]"
                        )}
                    >
                        <div className="p-2 sm:p-3 overflow-y-auto max-h-[60vh] scrollbar-hide">
                            {results.length > 0 ? (
                                <div className="space-y-1">
                                    {results.map((product) => (
                                        <Link
                                            key={product.slug}
                                            to={product.href}
                                            onClick={() => {
                                                setIsExpanded(false);
                                                setQuery("");
                                            }}
                                            className="flex items-center gap-4 px-5 py-4 rounded-3xl hover:bg-secondary/10 transition-all group border border-transparent hover:border-secondary/20"
                                        >
                                            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-secondary/10 flex items-center justify-center text-accent shrink-0">
                                                {product.category === "Oil" ? <Fuel size={16} /> : <Droplets size={16} />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[12px] sm:text-[14px] font-black uppercase tracking-tight text-primary truncate leading-none mb-1.5">{product.name}</p>
                                                <p className="text-[9px] sm:text-[10px] font-bold text-primary/40 uppercase tracking-[0.2em]">{product.category} Portfolio</p>
                                            </div>
                                            <ArrowRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-12 px-6 text-center space-y-3">
                                    <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center mx-auto">
                                        <Search size={20} className="text-primary/20" />
                                    </div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/30">No matches found for "{query}"</p>
                                </div>
                            )}
                        </div>

                        {results.length > 0 && (
                            <div className="bg-secondary/5 p-4 sm:p-5 border-t border-secondary/10 text-center">
                                <Link
                                    to="/products"
                                    className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] text-accent hover:text-primary transition-colors inline-flex items-center gap-2 group/all"
                                    onClick={() => {
                                        setIsExpanded(false);
                                        setQuery("");
                                    }}
                                >
                                    Browse Complete Catalog
                                    <ArrowRight size={12} className="group-hover/all:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default InlineSearch;
