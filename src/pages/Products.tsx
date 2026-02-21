import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
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
        className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16"
        style={{
          backgroundImage: `url(${heroRefinery})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: title }]} dark={true} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {categoryFilter ? (
                <>
                  {categoryFilter} <span className="text-gold">Products</span>
                </>
              ) : (
                <>
                  Petrochemical <span className="text-gold">Products</span>
                </>
              )}
            </h1>
            <p className="text-lg text-white/90">
              Discover our comprehensive range of high-quality petrochemical products designed
              to meet the diverse needs of industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex flex-nowrap md:flex-wrap gap-3 justify-start md:justify-center min-w-max md:min-w-0 px-4">
              <Link
                to="/products"
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${!categoryFilter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/products?category=${encodeURIComponent(category)}`}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${categoryFilter === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {categoryFilter ? `Our ${categoryFilter} Portfolio` : 'Global Product Portfolio'}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {categoryFilter
                  ? `Specialized solutions for the ${categoryFilter} industry meeting international standards.`
                  : 'From refined petrochemicals to specialty industrial chemicals, explore our comprehensive range of high-quality solutions.'}
              </p>
            </div>
          </ScrollReveal>

          {categoryFilter ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="space-y-20">
              {categories.map((category, catIndex) => {
                const catProducts = products.filter(p => p.category === category);
                return (
                  <div key={category} className="relative">
                    <ScrollReveal>
                      <div className="flex items-center gap-4 mb-8">
                        <div className="h-8 w-1.5 bg-primary rounded-full" />
                        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                          {category}
                        </h3>
                        <div className="flex-grow h-[1px] bg-border ml-4 hidden md:block" />
                      </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">No products found in this category.</p>
              <Link to="/products" className="text-primary hover:underline mt-4 inline-block">
                View all products
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Can't find exactly what you're looking for? Contact us to discuss your specific
                requirements and discover how we can help.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;