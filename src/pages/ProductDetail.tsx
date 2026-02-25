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
import SplitText from "@/components/ui/SplitText";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

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
            className="max-w-4xl pt-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                {product.icon}
              </div>
              <div className="h-[1px] w-24 bg-primary/50" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 uppercase tracking-tight leading-[0.9]">
              <SplitText text={product.name} />
            </h1>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">{product.description}</p>
          </motion.div>
        </div>
      </section>

      {/* ============================= MAIN CONTENT ============================ */}

      <section className="section-padding bg-background">
        <div className="container-custom grid lg:grid-cols-3 gap-16">
          {/* ============================= LEFT ============================= */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview */}
            <ScrollReveal>
              <div className="relative">
                <div className="w-16 h-[3px] bg-primary mb-8" />
                <h2 className="text-4xl font-black text-primary uppercase tracking-tight mb-8">
                  Product Overview
                </h2>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {product.fullDescription}
                </p>
              </div>
            </ScrollReveal>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <ScrollReveal>
                <div className="p-10 bg-secondary/10 rounded-3xl border border-secondary/20">
                  <h3 className="text-2xl font-black text-primary uppercase tracking-widest mb-10 flex items-center gap-4">
                    <Zap className="w-6 h-6 text-primary" />
                    Key Features
                  </h3>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-6"
                  >
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        variants={fadeIn}
                        className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-secondary/20 group hover:border-primary/30 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground/80">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </ScrollReveal>
            )}

            {/* Specifications */}
            {product.specifications && (
              <ScrollReveal>
                <div className="space-y-10">
                  <h3 className="text-2xl font-black text-primary uppercase tracking-widest flex items-center gap-4">
                    <Scale className="w-6 h-6 text-primary" />
                    Technical Specifications
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {renderSpecifications()?.map((spec, i) => (
                      <div key={i} className="p-6 border border-secondary/20 rounded-2xl group hover:border-primary/50 transition-all duration-300">
                        <div className="flex items-center gap-3 text-foreground/50 mb-3 group-hover:text-primary transition-colors">
                          {spec.icon}
                          <span className="text-xs font-black uppercase tracking-widest">{spec.label}</span>
                        </div>
                        <p className="text-xl font-black text-primary uppercase">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Applications */}
            <ScrollReveal>
              <div className="space-y-10">
                <h3 className="text-2xl font-black text-primary uppercase tracking-widest">
                  Industrial Applications
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {product.uses.map((use, i) => (
                    <motion.div
                      key={i}
                      className="group relative overflow-hidden rounded-2xl border border-secondary/20 bg-background p-6 transition-all duration-500 hover:shadow-xl"
                    >
                      <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
                      <CheckCircle className="w-6 h-6 text-primary mb-4" />
                      <p className="font-bold text-primary text-lg">{use}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Handling & Safety */}
            {product.handling && (
              <ScrollReveal>
                <div className="p-8 bg-primary/10 border border-primary/20 rounded-3xl">
                  <div className="flex gap-6">
                    <AlertTriangle className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="text-primary font-black uppercase text-xs tracking-widest mb-2">Safety Protocol</h4>
                      <p className="text-sm text-primary/80 leading-relaxed font-medium">{product.handling}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Prev / Next */}
            <div className="flex justify-between border-t border-secondary/20 pt-12">
              {prevProduct ? (
                <Link
                  to={prevProduct.href}
                  className="flex flex-col gap-2 group"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50 group-hover:text-primary transition-colors">Previous Product</span>
                  <div className="flex items-center gap-3 text-primary font-black uppercase tracking-tight text-xl">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                    {prevProduct.name}
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextProduct && (
                <Link
                  to={nextProduct.href}
                  className="flex flex-col gap-2 items-end group text-right"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/50 group-hover:text-primary transition-colors">Next Product</span>
                  <div className="flex items-center gap-3 text-primary font-black uppercase tracking-tight text-xl">
                    {nextProduct.name}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              )}
            </div>

            {/* Related Portfolio - Added to mobile as well */}
            <div className="lg:hidden mt-8">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/50 mb-6">Related Portfolio</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    to={p.href}
                    className="p-5 border border-secondary/20 rounded-2xl bg-background hover:border-primary/50 transition-all group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-black text-primary uppercase tracking-tight">
                        {p.name}
                      </span>
                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ============================= SIDEBAR ============================= */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* Quick Info Card */}
              <div className="bg-background border border-secondary/20 rounded-3xl p-8 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/50 mb-8 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Technical Brief
                </h4>

                <div className="space-y-6">
                  {product.specifications?.purity && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Purity</span>
                      <span className="text-lg font-black text-primary">{product.specifications.purity}</span>
                    </div>
                  )}

                  {product.specifications?.casNumber && (
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">CAS Reference</span>
                      <span className="text-lg font-black text-primary">{product.specifications.casNumber}</span>
                    </div>
                  )}

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/50">Classification</span>
                    <span className="text-lg font-black text-primary uppercase">{product.category}</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-3xl p-10 text-white bg-primary relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full -mr-16 -mt-16 opacity-20 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight relative z-10">Procurement Inquiry</h3>
                <p className="text-sm text-white/70 mb-8 relative z-10 leading-relaxed">
                  Connect with our technical sales division for comprehensive quotations and logistics support.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-primary text-white font-black uppercase tracking-widest text-xs px-8 py-5 rounded-full hover:bg-white hover:text-primary transition-all relative z-10 shadow-xl"
                >
                  Request Quotation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Portfolio */}
              <div className="bg-background border border-secondary/20 rounded-3xl p-8 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/50 mb-6">Related Portfolio</h4>
                <div className="space-y-4">
                  {relatedProducts.length > 0 ? (
                    relatedProducts.map((p) => (
                      <Link
                        key={p.slug}
                        to={p.href}
                        className="group flex flex-col gap-1 border-b border-secondary/10 pb-4 last:border-0"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-black text-primary uppercase tracking-tight group-hover:text-primary transition-colors">
                            <SplitText text={p.name} />
                          </span>
                          <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-foreground/50">No related products found</p>
                  )}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Floating CTA */}

    </Layout>
  );
};

export default ProductDetail;