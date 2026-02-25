import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import SplitText from '@/components/ui/SplitText';
import heroRefinery from "../assets/hero-refinery.jpg";
import { products } from '@/data/products';

const ChemicalProducts = () => {
    const chemicalProducts = products.filter(p => p.category !== 'Petrochemicals');

    // Group products by category
    const groupedProducts = chemicalProducts.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {} as Record<string, typeof products>);

    const categories = Object.keys(groupedProducts);

    return (
        <Layout>
            <SEO
                title="Chemical Products - HALAR PETROCHEM"
                description="Industrial-grade solvents, detergent raw materials, food chemicals, and specialty industrial compounds."
                keywords="solvents, water treatment chemicals, food chemicals, industrial raw materials, UAE chemicals"
            />

            <section
                className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16 overflow-hidden"
                style={{
                    backgroundImage: `url(${heroRefinery})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

                <div className="container-custom relative z-10">
                    <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Chemicals' }]} dark={true} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl pt-12"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tight leading-[0.9]">
                            <SplitText text="Chemical" /> <span className="text-primary"><SplitText text="Portfolio" /></span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                            Explore our comprehensive range of high-purity chemical solutions categorized by industry application.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-background">
                <div className="container-custom">
                    {categories.map((category, catIndex) => (
                        <div key={category} className={catIndex > 0 ? "mt-32" : ""}>
                            <ScrollReveal>
                                <div className="flex items-center gap-6 mb-12">
                                    <div className="h-[1px] w-12 bg-primary" />
                                    <h2 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
                                        {category}
                                    </h2>
                                    <div className="flex-grow h-[1px] bg-secondary/10 ml-4 hidden md:block" />
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {groupedProducts[category].map((product, index) => (
                                    <ProductCard
                                        key={product.name}
                                        name={product.name}
                                        description={product.description}
                                        href={product.href}
                                        icon={product.icon}
                                        index={index}
                                        backgroundImage={product.backgroundImage}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
};

export default ChemicalProducts;
