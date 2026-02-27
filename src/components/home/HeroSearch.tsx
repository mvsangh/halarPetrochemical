import { useState, useMemo } from "react";
import { products } from "@/data/products";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSearch = () => {
    const navigate = useNavigate();
    const [selectedIndustry, setSelectedIndustry] = useState("");
    const [selectedProduct, setSelectedProduct] = useState("");

    // Get unique industries from all products
    const industriesList = useMemo(() => {
        const industries = new Set<string>();
        products.forEach(product => {
            product.industries?.forEach(industry => {
                industries.add(industry);
            });
        });
        return Array.from(industries).sort();
    }, []);

    // Get products based on selected industry or all if none selected
    const filteredProducts = useMemo(() => {
        if (!selectedIndustry) return products.sort((a, b) => a.name.localeCompare(b.name));
        return products
            .filter(product => product.industries?.includes(selectedIndustry))
            .sort((a, b) => a.name.localeCompare(b.name));
    }, [selectedIndustry]);

    const handleSearch = () => {
        if (selectedProduct) {
            const product = products.find(p => p.name === selectedProduct);
            if (product) {
                navigate(product.href);
            }
        } else if (selectedIndustry) {
            // If only industry is selected, navigate to products page with category/industry filter
            // For now, let's just go to products
            navigate(`/products`);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-5xl mx-auto -mt-12 sm:-mt-20 relative z-20 px-4"
        >
            <div className="bg-background rounded-2xl shadow-2xl p-4 sm:p-8 flex flex-col md:flex-row gap-4 items-end border border-secondary/20">
                <div className="flex-1 w-full space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-foreground/50 uppercase tracking-widest pl-1">
                        Industry Name
                    </label>
                    <select
                        value={selectedIndustry}
                        onChange={(e) => {
                            setSelectedIndustry(e.target.value);
                            setSelectedProduct(""); // Reset product when industry changes
                        }}
                        className="w-full bg-secondary/10 border-none rounded-xl h-12 px-4 text-foreground text-sm focus:ring-2 focus:ring-accent/50 transition-all appearance-none cursor-pointer"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='hsl(var(--primary))'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.25rem'
                        }}
                    >
                        <option value="">Select Industry</option>
                        {industriesList.map(industry => (
                            <option key={industry} value={industry}>{industry}</option>
                        ))}
                    </select>
                </div>

                <div className="flex-1 w-full space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold text-foreground/50 uppercase tracking-widest pl-1">
                        Product Name
                    </label>
                    <select
                        value={selectedProduct}
                        onChange={(e) => {
                            const productName = e.target.value;
                            setSelectedProduct(productName);
                            if (productName) {
                                const product = products.find(p => p.name === productName);
                                if (product) {
                                    navigate(product.href);
                                }
                            }
                        }}
                        disabled={!selectedIndustry} // Disable product dropdown if no industry selected
                        className="w-full bg-secondary/10 border-none rounded-xl h-12 px-4 text-foreground text-sm focus:ring-2 focus:ring-accent/50 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='hsl(var(--primary))'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.25rem'
                        }}
                    >
                        <option value="">
                            {selectedIndustry ? "Select Product" : "Select industry first"}
                        </option>
                        {selectedIndustry && filteredProducts.map(product => (
                            <option key={product.name} value={product.name}>{product.name}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleSearch}
                    disabled={!selectedProduct} // Only require product selection
                    className="w-full md:w-auto bg-accent hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed text-accent-foreground px-10 h-12 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20"
                >
                    <Search className="w-4 h-4" />
                    Explore Product
                </button>
            </div>
        </motion.div>
    );
};

export default HeroSearch;
