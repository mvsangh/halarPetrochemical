import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import heroRefinery from "../assets/hero-refinery.jpg";
import { products } from '@/data/products';

const OilProducts = () => {
    const oilProducts = products.filter(p => p.category === 'Petrochemicals');

    return (
        <Layout>
            <SEO
                title="Oil Products - HALAR PETROCHEM"
                description="Premium fuel oils, gas oils, and lubricants for industrial and marine applications."
                keywords="fuel oil, gas oil, lubricant oil, paraffin oil, used cooking oil"
            />

            <section
                className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16"
                style={{
                    backgroundImage: `url(${heroRefinery})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

                <div className="container-custom relative z-10">
                    <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Oil' }]} dark={true} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Oil <span className="text-gold">Portfolio</span>
                        </h1>
                        <p className="text-lg text-white/90">
                            Discover our range of high-performance fuel and industrial oils designed for reliability and efficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section-padding bg-background">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-10 w-2 bg-primary rounded-full" />
                            <h2 className="text-2xl md:text-4xl font-display font-bold text-foreground">
                                Petrochemical Oils
                            </h2>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {oilProducts.map((product, index) => (
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
            </section>
        </Layout>
    );
};

export default OilProducts;
