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
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Section Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-gray-400 text-sm tracking-[0.2em] font-bold lowercase">our products</span>
                    </div>
                    <div className="relative w-16 h-[2px] bg-red-600">
                        <motion.div
                            className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-red-600 rounded-full"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
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
                                    <div className="relative w-full h-[1px] bg-red-600/30 mb-6 overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-red-600 origin-left"
                                            variants={{
                                                initial: { scaleX: 0 },
                                                hover: { scaleX: 1 }
                                            }}
                                            animate={activeCategory === cat ? { scaleX: 1 } : undefined}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <motion.div
                                            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-red-600 rounded-full z-10"
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
                                                {cat.split("").map((char, i) => (
                                                    <motion.span
                                                        key={i}
                                                        variants={{
                                                            initial: { y: 0, color: "inherit" },
                                                            hover: {
                                                                y: [0, -4, 0],
                                                                color: "#dc2626",
                                                                transition: {
                                                                    delay: i * 0.02,
                                                                    duration: 0.4,
                                                                    ease: "easeInOut"
                                                                }
                                                            }
                                                        }}
                                                        className={`inline-block ${char === " " ? "mr-[0.25em]" : ""}`}
                                                    >
                                                        {char}
                                                    </motion.span>
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
                                            <ArrowRight className="text-red-600 w-5 h-5" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </SheetTrigger>

                            <SheetContent side="right" className="w-full sm:max-w-xl p-0 border-l-0 shadow-2xl bg-white overflow-hidden flex flex-col">
                                <SheetHeader className="p-8 sm:p-12 pb-6 border-b border-gray-100 relative">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-[2px] bg-red-600" />
                                            <span className="text-gray-400 text-xs font-black uppercase tracking-[0.3em]">discover product catalogue</span>
                                        </div>
                                        <SheetTitle className="text-4xl sm:text-5xl font-black text-primary uppercase text-left leading-tight tracking-tight">
                                            <SplitText text={cat} />
                                        </SheetTitle>
                                    </div>
                                </SheetHeader>

                                <div className="flex-1 overflow-y-auto p-8 sm:p-12 space-y-12">
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
                                                        <div className="hidden sm:block w-32 h-32 rounded-2xl overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100 relative group-hover/item:border-red-600/30 transition-colors duration-500">
                                                            <img
                                                                src={product.backgroundImage}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover grayscale group-hover/item:grayscale-0 transition-all duration-700"
                                                            />
                                                            <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <div className="w-12 h-[2px] bg-red-600 mb-4 group-hover/item:w-20 transition-all duration-500 ease-in-out" />
                                                            <h5 className="text-2xl font-black text-primary group-hover/item:text-red-600 transition-colors mb-3 uppercase tracking-tight">
                                                                <SplitText text={product.name} />
                                                            </h5>
                                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-6 group-hover/item:text-gray-900 transition-colors">
                                                                {product.description}
                                                            </p>
                                                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover/item:text-red-600 transition-colors">
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
                                    <div className="pt-12 border-t border-gray-100">
                                        <Link
                                            to="/products"
                                            className="flex items-center justify-between group/btn bg-primary text-white p-8 rounded-3xl overflow-hidden relative shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all duration-300"
                                        >
                                            <div className="relative z-10">
                                                <span className="text-white/60 text-xs font-bold uppercase tracking-widest block mb-2">complete portfolio</span>
                                                <span className="text-2xl font-black uppercase tracking-tight">View Full Catalog</span>
                                            </div>
                                            <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-primary transition-colors duration-500">
                                                <ArrowRight className="w-6 h-6" />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity" />
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
