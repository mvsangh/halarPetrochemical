import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Zap,
  Award,
  Globe,
  FlaskConical,
  Package,
  Shield,
  Building2,
  AlertTriangle,
  FileText,
  Beaker,
  Droplets,
  Thermometer,
  Cpu,
  Factory,
  Users,
  Truck,
  Clock,
  Scale,
  HardHat,
} from "lucide-react";

import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { products } from "@/data/products";

/* -------------------------------- animations -------------------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

/* ----------------------------------------------------------------------------- */

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const relatedProducts = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

  // Helper function to render specifications
  const renderSpecifications = () => {
    if (!product.specifications) return null;

    const specs = product.specifications;
    const specItems = [];

    if (specs.purity) specItems.push({ label: "Purity", value: specs.purity, icon: <Beaker className="w-4 h-4" /> });
    if (specs.casNumber) specItems.push({ label: "CAS Number", value: specs.casNumber, icon: <FileText className="w-4 h-4" /> });
    if (specs.formula) specItems.push({ label: "Chemical Formula", value: specs.formula, icon: <FlaskConical className="w-4 h-4" /> });
    if (specs.packaging) specItems.push({ label: "Packaging", value: specs.packaging, icon: <Package className="w-4 h-4" /> });

    return specItems;
  };

  return (
    <Layout>
      <SEO
        title={`${product.name} - ${product.category} | Petrochemical Products`}
        description={product.fullDescription.slice(0, 155)}
        keywords={`${product.name}, ${product.category}, industrial chemicals, ${product.industries?.join(', ')}`}
      />

      {/* Hero Section */}
      <section
        className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16"
        style={{
          backgroundImage: product.backgroundImage
            ? `url(${product.backgroundImage})`
            : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="container-custom relative z-10">
          <Breadcrumbs
            items={[
              { label: "Products", href: "/products" },
              { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
            dark={true}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-xl bg-white/90 flex items-center justify-center text-accent mb-6">
              {product.icon}
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {product.name}
            </h1>

            <p className="text-lg text-white/90">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* ============================= MAIN CONTENT ============================ */}

      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          {/* ============================= LEFT ============================= */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-3xl font-display font-bold mb-4">
                  Product Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
              </div>
            </ScrollReveal>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <Zap className="w-6 h-6 text-accent" />
                    Key Features
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-4"
                  >
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn}
                        className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </ScrollReveal>
            )}

            {/* Specifications */}
            {product.specifications && (
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <Scale className="w-6 h-6 text-accent" />
                    Technical Specifications
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {renderSpecifications()?.map((spec, i) => (
                      <div key={i} className="p-4 bg-secondary/30 rounded-xl">
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          {spec.icon}
                          <span className="text-sm">{spec.label}</span>
                        </div>
                        <p className="font-semibold">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Certifications */}
            {product.certifications && product.certifications.length > 0 && (
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <Award className="w-6 h-6 text-accent" />
                    Certifications & Standards
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {product.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Industries */}
            {product.industries && product.industries.length > 0 && (
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <Building2 className="w-6 h-6 text-accent" />
                    Target Industries
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.industries.map((industry, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                        <Factory className="w-4 h-4 text-accent" />
                        <span className="text-sm">{industry}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Applications */}
            <ScrollReveal>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-display font-semibold mb-6">
                  Industrial Applications
                </h3>

                <ul className="grid md:grid-cols-2 gap-5">
                  {product.uses.map((use, i) => (
                    <motion.li
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className="relative overflow-hidden rounded-xl border border-border bg-secondary/30 p-5"
                    >
                      <CheckCircle className="w-6 h-6 text-accent mb-2" />
                      <p className="font-medium">{use}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Handling & Safety */}
            {product.handling && (
              <ScrollReveal>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6 flex items-center gap-2">
                    <HardHat className="w-6 h-6 text-accent" />
                    Handling & Safety
                  </h3>

                  <div className="p-5 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-xl">
                    <div className="flex gap-4">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{product.handling}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Product DNA - Enhanced with new data */}
            <ScrollReveal>
              <div className="border-l border-border pl-8 space-y-10">
                {product.features?.slice(0, 3).map((feature, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative"
                  >
                    <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-accent" />
                    <h4 className="font-semibold text-lg">Key Feature {i + 1}</h4>
                    <p className="text-muted-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Prev / Next */}
            <div className="flex justify-between border-t pt-8">
              {prevProduct ? (
                <Link
                  to={prevProduct.href}
                  className="flex gap-3 items-center group hover:text-accent transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>{prevProduct.name}</span>
                </Link>
              ) : (
                <div />
              )}

              {nextProduct && (
                <Link
                  to={nextProduct.href}
                  className="flex gap-3 items-center group hover:text-accent transition-colors"
                >
                  <span>{nextProduct.name}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </div>

          {/* ============================= SIDEBAR ============================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Quick Info Card */}
              <div className="bg-card border rounded-2xl p-6">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-accent" />
                  Quick Info
                </h4>

                <div className="space-y-3 text-sm">
                  {product.specifications?.purity && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Purity:</span>
                      <span className="font-medium">{product.specifications.purity}</span>
                    </div>
                  )}

                  {product.specifications?.casNumber && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">CAS:</span>
                      <span className="font-medium">{product.specifications.casNumber}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </div>

                  {product.certifications && (
                    <div className="pt-3 border-t">
                      <span className="text-muted-foreground block mb-2">Certified:</span>
                      <div className="flex flex-wrap gap-2">
                        {product.certifications.slice(0, 3).map((cert, i) => (
                          <span key={i} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-8 text-white bg-gradient-to-br from-accent to-pink-600">
                <h3 className="text-xl font-bold mb-3">Need this product?</h3>
                <p className="text-sm text-white/90 mb-4">
                  Request a quote and get technical specifications instantly.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Truck className="w-4 h-4" />
                    <span>Global shipping available</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Users className="w-4 h-4" />
                    <span>Technical support included</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block text-center bg-white text-accent font-semibold py-3 rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Request Quote
                </Link>
              </div>

              {/* Related Products */}
              <div className="bg-card border rounded-2xl p-6">
                <h4 className="font-bold mb-4">Related Products</h4>
                <div className="space-y-3">
                  {relatedProducts.length > 0 ? (
                    relatedProducts.map((p) => (
                      <Link
                        key={p.slug}
                        to={p.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <span className="w-8 h-8 flex items-center justify-center bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                          {p.icon}
                        </span>
                        <span className="flex-1 text-sm font-medium">{p.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">No related products found</p>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Floating CTA */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 hidden lg:block z-50"
      >
        <Link
          to="/contact"
          className="bg-accent text-white px-6 py-4 rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-2 group"
        >
          <span>Get Pricing</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </Layout>
  );
};

export default ProductDetail;