import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const CategoryProducts = () => {
    const categories = useMemo(() => {
        const cats = new Set<string>();
        products.forEach(p => cats.add(p.category));
        return Array.from(cats).sort();
    }, []);

    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const activeProducts = useMemo(() => {
        if (!activeCategory) return [];
        return products.filter(p => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <section className="py-24 bg-background overflow-hidden text-foreground">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="mb-24">
                    <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 text-foreground/40 font-bold mb-6 tracking-[0.3em] uppercase text-xs"
                        >
                            <div className="w-10 h-[1px] bg-primary" />
                            OUR PRODUCTS
                            <div className="w-10 h-[1px] bg-primary" />
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-black text-primary mb-8 uppercase tracking-tighter leading-none"
                        >
                            The Material <span className="text-accent">Excellence</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-base sm:text-lg text-foreground/60 leading-relaxed font-light max-w-2xl mx-auto"
                        >
                            Bridging global energy demand with ethical supply chains. We deliver high-spec energy products through optimized logistics that minimize waste.
                        </motion.p>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                    {categories.map((cat) => (
                        <Sheet key={cat} onOpenChange={(open) => {
                            if (open) setActiveCategory(cat);
                        }}>
                            <SheetTrigger asChild>
                                <motion.div
                                    className="group cursor-pointer"
                                    onClick={() => setActiveCategory(cat)}
                                    whileHover="hover"
                                    initial="initial"
                                >
                                    <div className="relative w-full h-[1px] bg-primary/30 mb-6 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-primary origin-left"
                                            variants={{
                                                initial: { scaleX: 0 },
                                                hover: { scaleX: 1 }
                                            }}
                                            animate={activeCategory === cat ? { scaleX: 1 } : undefined}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <motion.div
                                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full z-10"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{
                                                opacity: activeCategory === cat ? 1 : 0,
                                                x: activeCategory === cat ? 0 : -10
                                            }}
                                            variants={{
                                                hover: { opacity: 1, x: 0 }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm sm:text-[15px] font-black uppercase tracking-[0.2em] text-primary transition-colors duration-300">
                                            <div className="flex flex-wrap overflow-hidden">
                                                {cat.split(" ").map((word, wordIdx) => (
                                                    <span key={wordIdx} className="inline-flex whitespace-nowrap mr-[0.25em] last:mr-0">
                                                        {word.split("").map((char, charIdx) => (
                                                            <motion.span
                                                                key={charIdx}
                                                                variants={{
                                                                    initial: { y: 0, color: "inherit" },
                                                                    hover: {
                                                                        y: [0, -4, 0],
                                                                        color: "hsl(var(--accent))",
                                                                        transition: {
                                                                            delay: (wordIdx * word.length + charIdx) * 0.02,
                                                                            duration: 0.4,
                                                                            ease: "easeInOut"
                                                                        }
                                                                    }
                                                                }}
                                                                className="inline-block"
                                                            >
                                                                {char}
                                                            </motion.span>
                                                        ))}
                                                    </span>
                                                ))}
                                            </div>
                                        </h3>
                                        <motion.div
                                            variants={{
                                                initial: { opacity: 0.3, x: -5 },
                                                hover: { opacity: 1, x: 0 }
                                            }}
                                            animate={activeCategory === cat ? { opacity: 1, x: 0 } : undefined}
                                            className="transition-all"
                                        >
                                            <ArrowRight className="text-primary w-5 h-5" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-l-0 shadow-2xl bg-background overflow-hidden flex flex-col">
                                <SheetHeader className="p-6 sm:p-10 md:p-12 pt-16 sm:pt-12 md:pt-14 pb-6 border-b border-secondary/20 relative">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-[2px] bg-primary" />
                                            <span className="text-foreground/40 text-xs font-black uppercase tracking-[0.3em]">discover product catalogue</span>
                                        </div>
                                        <SheetTitle className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-primary uppercase text-left leading-[1.1] tracking-tight">
                                            <SplitText text={cat} />
                                        </SheetTitle>
                                    </div>
                                </SheetHeader>

                                <div className="flex-1 overflow-y-auto p-6 sm:p-10 md:p-12 space-y-12">
                                    <div className="grid grid-cols-1 gap-12">
                                        {activeProducts.map((product, idx) => (
                                            <motion.div
                                                key={product.name}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 + 0.3 }}
                                                className="group/item"
                                            >
                                                <Link to={product.href} className="block group">
                                                    <div className="flex items-start gap-6">
                                                        <div className="hidden sm:block w-32 h-32 rounded-2xl overflow-hidden bg-secondary/10 flex-shrink-0 border border-secondary/20 relative group-hover/item:border-primary/30 transition-colors duration-500">
                                                            <img
                                                                src={product.backgroundImage}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-12 h-[2px] bg-primary mb-4 group-hover/item:w-20 transition-all duration-500 ease-in-out" />
                                                            <h5 className="text-xl sm:text-2xl font-black text-primary group-hover/item:text-secondary transition-colors mb-3 uppercase tracking-tight">
                                                                <SplitText text={product.name} />
                                                            </h5>
                                                            <p className="text-foreground/60 text-sm leading-relaxed line-clamp-2 mb-6 group-hover/item:text-foreground transition-colors">
                                                                {product.description}
                                                            </p>
                                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover/item:text-secondary transition-colors">
                                                                <span>Explore Specifications</span>
                                                                <ArrowRight className="w-4 h-4 group-hover/item:translate-x-2 transition-transform" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Action Footer for Panel */}
                                    <div className="pt-12 border-t border-secondary/20">
                                        <Link
                                            to="/products"
                                            className="flex items-center justify-between group/btn bg-primary text-white p-6 sm:p-8 rounded-3xl overflow-hidden relative shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all duration-300"
                                        >
                                            <div className="relative z-10">
                                                <span className="text-white/60 text-xs font-bold uppercase tracking-widest block mb-2">complete portfolio</span>
                                                <span className="text-xl sm:text-2xl font-black uppercase tracking-tight">View Full Catalog</span>
                                            </div>
                                            <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-primary transition-colors duration-500">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryProducts;
