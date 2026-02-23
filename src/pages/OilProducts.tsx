import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import SplitText from '@/components/ui/SplitText';
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
                    <Breadcrumbs items={[{ label: 'Products', href: '/products' }, { label: 'Oil' }]} dark={true} />

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl pt-12"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tight">
                            <SplitText text="Oil" /> <span className="text-red-600"><SplitText text="Portfolio" /></span>
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                            Discover our range of high-performance fuel and industrial oils designed for reliability and efficiency.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container-custom">
                    <ScrollReveal>
                        <div className="flex items-center gap-6 mb-12">
                            <div className="h-[1px] w-12 bg-red-600" />
                            <h2 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
                                Petrochemical Oils
                            </h2>
                            <div className="flex-grow h-[1px] bg-gray-100 ml-4 hidden md:block" />
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
