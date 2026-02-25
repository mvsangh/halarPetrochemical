import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import SplitText from '@/components/ui/SplitText';
import heroRefinery from "../assets/hero-refinery.jpg";
import { products } from '@/data/products';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');

  const filteredProducts = categoryFilter
    ? products.filter(product => product.category === categoryFilter)
    : products;

  const title = categoryFilter ? `${categoryFilter} Products` : 'Petrochemical Products';

  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <Layout>
      <SEO
        title={title}
        description="Explore HALAR PETROCHEM's comprehensive range of petrochemical products including fuel oil, gas oil, naphtha, white spirit, glycols, and more. Quality products for industrial applications."
        keywords="petrochemical products, fuel oil, gas oil, naphtha, white spirit, glycols, lubricant oil, UAE petrochemicals"
      />


      {/* Hero Section with Background Image */}
      <section
        className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16 overflow-hidden"
        style={{
          backgroundImage: `url(${heroRefinery})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: title }]} dark={true} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl pt-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-8 uppercase tracking-tight leading-[0.9]">
              {categoryFilter ? (
                <div className="flex flex-wrap gap-x-4">
                  <SplitText text={categoryFilter} /> <span className="text-primary"><SplitText text="Products" /></span>
                </div>
              ) : (
                <div className="flex flex-wrap gap-x-4">
                  <SplitText text="Industrial" /> <span className="text-primary"><SplitText text="Portfolio" /></span>
                </div>
              )}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Discover our comprehensive range of high-purity chemical solutions categorized by industry application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-20 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap gap-4 justify-start md:justify-center min-w-max md:min-w-0 px-4">
              <Link
                to="/products"
                className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${!categoryFilter
                  ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20'
                  : 'bg-secondary/10 text-foreground/50 hover:bg-secondary/20 hover:text-primary'
                  }`}
              >
                All Catalog
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${categoryFilter === category
                    ? 'bg-primary text-primary-foreground shadow-xl shadow-primary/20'
                    : 'bg-secondary/10 text-foreground/50 hover:bg-secondary/20 hover:text-primary'
                    }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="mb-16">
              <div className="w-12 h-[2px] bg-primary mb-6" />
              <h2 className="text-3xl md:text-5xl font-black text-primary uppercase tracking-tight">
                {categoryFilter ? `Active Selection: ${categoryFilter}` : 'Complete Material Portfolio'}
              </h2>
            </div>
          </ScrollReveal>

          {categoryFilter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProducts.map((product, index) => (
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
          ) : (
            <div className="space-y-32">
              {categories.map((category, catIndex) => {
                const catProducts = products.filter(p => p.category === category);
                return (
                  <div key={category} className="relative">
                    <ScrollReveal>
                      <div className="flex items-center gap-6 mb-12">
                        <div className="h-[1px] w-12 bg-primary" />
                        <h3 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
                          {category}
                        </h3>
                        <div className="flex-grow h-[1px] bg-secondary/10 ml-4 hidden md:block" />
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                      {catProducts.map((product, index) => (
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
                );
              })}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl font-bold text-foreground/40 uppercase tracking-widest mb-8">No matching materials found</p>
              <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs">
                Reset Selection
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full -mr-48 -mt-48 opacity-10" />
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
                Require Custom <span className="text-accent">Formulations?</span>
              </h2>
              <p className="text-white/60 text-xl mb-12 max-w-2xl leading-relaxed">
                Our technical laboratory specialized in developing tailored chemical solutions based on your industrial parameters.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-4 bg-background text-foreground px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl transition-transform hover:scale-105">
                Consult With Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

