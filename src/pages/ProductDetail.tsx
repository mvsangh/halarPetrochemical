import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { products } from './Products';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const product = products.find(p => p.slug === slug);
  const currentIndex = products.findIndex(p => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct = currentIndex < products.length - 1 ? products[currentIndex + 1] : null;
  
  // Get related products (excluding current)
  const relatedProducts = products
    .filter(p => p.slug !== slug)
    .slice(0, 3);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <Layout>
      <SEO
        title={`${product.name} - Petrochemical Products`}
        description={`${product.fullDescription.slice(0, 155)}...`}
        keywords={`${product.name.toLowerCase()}, petrochemical product, ${product.uses.slice(0, 3).join(', ')}`}
      />

      {/* Hero Section */}
 {/* Hero Section */}
<section
  className="relative flex items-center min-h-[70vh] md:min-h-[80vh] pt-28 pb-20"
  style={{
    backgroundImage: product.backgroundImage
      ? `url(${product.backgroundImage})`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

  <div className="container-custom relative z-10">
    <Breadcrumbs
      items={[
        { label: 'Products', href: '/products' },
        { label: product.name },
      ]}
    />

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <div className="w-16 h-16 rounded-xl bg-white/90 flex items-center justify-center text-gold mb-6">
        {product.icon}
      </div>

      <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
        {product.name}
      </h1>

      <p className="text-lg text-white/90">
        {product.description}
      </p>
    </motion.div>
  </div>
</section>


      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <article>
                  <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                    Product Overview
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {product.fullDescription}
                  </p>

                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    Industrial Applications
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {product.uses.map((use, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{use}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-secondary rounded-xl p-6 mt-8">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      Quality Assurance
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      All our {product.name.toLowerCase()} products meet international quality standards 
                      and specifications. We provide complete documentation including certificates of 
                      analysis, material safety data sheets, and quality certificates upon request.
                    </p>
                  </div>
                </article>
              </ScrollReveal>

              {/* Navigation */}
              <ScrollReveal delay={0.2}>
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                  {prevProduct ? (
                    <Link 
                      to={prevProduct.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-sm">{prevProduct.name}</span>
                    </Link>
                  ) : <div />}
                  
                  {nextProduct && (
                    <Link 
                      to={nextProduct.href}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="text-sm">{nextProduct.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <aside>
              <ScrollReveal delay={0.3}>
                <div className="sticky top-28">
                  {/* CTA Card */}
                  <div className="bg-primary rounded-xl p-6 text-primary-foreground mb-6">
                    <h3 className="text-lg font-semibold mb-3">Interested in this product?</h3>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      Contact us for pricing, specifications, and availability.
                    </p>
                    <Link to="/contact" className="btn-accent block text-center text-sm">
                      Request a Quote
                    </Link>
                  </div>

                  {/* Related Products */}
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Related Products</h3>
                    <ul className="space-y-3">
                      {relatedProducts.map((related) => (
                        <li key={related.slug}>
                          <Link 
                            to={related.href}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                          >
                            <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center text-primary">
                              {related.icon}
                            </div>
                            <span className="text-sm">{related.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/products"
                      className="inline-flex items-center gap-2 text-sm text-primary font-medium mt-4 hover:underline"
                    >
                      View all products
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
