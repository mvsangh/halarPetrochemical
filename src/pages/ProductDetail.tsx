import { useParams, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  Monitor,
  Activity,
  Layers
} from "lucide-react";

import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import SplitText from "@/components/ui/SplitText";
import { products } from "@/data/products";

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

  // Helper function for technical metrics
  const technicalMetrics = [
    { label: "Purity Index", value: product.specifications?.purity || "99.9%" },
    { label: "Compliance", value: "ISO 9001" },
    { label: "Batch ID", value: `#${Math.floor(Math.random() * 9000) + 1000}` },
  ];

  return (
    <Layout>
      <SEO
        title={`${product.name} - ${product.category} | Petrochemical Products`}
        description={product.fullDescription.slice(0, 155)}
        keywords={`${product.name}, ${product.category}, industrial chemicals, ${product.industries?.join(', ')}`}
      />

      {/* --- CINEMATIC PRODUCT HERO --- */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#050c0e]">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${product.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050c0e] via-[#050c0e]/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#050c0e] to-transparent" />

          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        </div>

        <div className="container-custom relative z-10 w-full">
          <Breadcrumbs
            items={[
              { label: "Portfolio", href: "/products" },
              { label: product.category, href: `/products?category=${encodeURIComponent(product.category)}` },
              { label: product.name },
            ]}
            dark={true}
          />

          <div className="grid lg:grid-cols-12 gap-12 mt-16">
            <div className="lg:col-span-8 space-y-12">

              <h1 className="text-6xl sm:text-8xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8] max-w-4xl">
                <SplitText text={product.name} />
              </h1>

              <div className="grid sm:grid-cols-3 gap-1px bg-white/10 p-px rounded-2xl overflow-hidden max-w-2xl">
                {technicalMetrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="bg-[#050c0e] p-6 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-white/30">
                      <span className="text-[10px] font-black uppercase tracking-widest">{metric.label}</span>
                    </div>
                    <div className="text-xl font-black text-white tracking-tight">{metric.value}</div>
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-xl text-white/50 leading-relaxed max-w-xl font-light"
              >
                {product.description}
              </motion.p>
            </div>

            {/* Visual Decoration Column */}
            <div className="lg:col-span-4 hidden lg:flex items-end justify-end">
              <div className="w-1 h-32 bg-accent opacity-30 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL ANALYSIS SECTION --- */}
      <section className="py-32 bg-white text-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-24">
            {/* Main Information */}
            <div className="lg:col-span-8 space-y-32">

              {/* 01. Overview */}
              <ScrollReveal>
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Product Infrastructure</h2>
                    <div className="flex-grow h-px bg-primary/10" />
                  </div>
                  <p className="text-xl text-primary/70 leading-relaxed font-light first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    {product.fullDescription}
                  </p>
                </div>
              </ScrollReveal>

              {/* 02. Features Grid */}
              {product.features && (
                <ScrollReveal>
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Technical Advantages</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      {product.features.map((feature, i) => (
                        <div key={i} className="p-10 border border-primary/10 rounded-[2rem] hover:bg-[#f8f9fa] transition-all duration-500 group">
                          <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
                            <div className="w-2 h-2 rounded-full bg-accent group-hover:bg-white" />
                          </div>
                          <h4 className="text-xl font-black uppercase tracking-tight mb-4">{feature}</h4>
                          <div className="h-0.5 w-8 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* 03. Industrial Scale Applications */}
              <ScrollReveal>
                <div className="space-y-12">
                  <div className="flex items-center gap-6">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Sector Integration</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.uses.map((use, i) => (
                      <div key={i} className="flex items-center gap-6 p-8 bg-[#f8f9fa] rounded-2xl border border-primary/5 group hover:border-accent transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-lg font-bold text-primary uppercase tracking-tight">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Navigation: Prev / Next */}
              <div className="pt-32 border-t border-primary/10 flex flex-col md:flex-row justify-between gap-12">
                {prevProduct && (
                  <Link to={prevProduct.href} className="group">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-2 text-accent font-black uppercase tracking-[0.2em] text-[10px]">
                        <ArrowLeft className="w-3 h-3 group-hover:-translate-x-2 transition-transform" />
                        Previous Product
                      </div>
                      <span className="text-3xl font-black uppercase tracking-tight group-hover:text-accent transition-colors">{prevProduct.name}</span>
                    </div>
                  </Link>
                )}
                {nextProduct && (
                  <Link to={nextProduct.href} className="group md:text-right">
                    <div className="flex flex-col gap-4 md:items-end">
                      <div className="flex items-center gap-2 text-accent font-black uppercase tracking-[0.2em] text-[10px]">
                        Next Product
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                      </div>
                      <span className="text-3xl font-black uppercase tracking-tight group-hover:text-accent transition-colors">{nextProduct.name}</span>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* SIDEBAR: TECHNICAL DOSSIER */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">

                {/* Reference Card */}
                <div className="bg-[#f8f9fa] border-2 border-primary/5 rounded-[2.5rem] p-10 space-y-10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">Technical Dossier</h4>
                    <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                    </div>
                  </div>

                  <div className="space-y-8">
                    {product.specifications?.casNumber && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">CAS Registry</span>
                        <div className="text-2xl font-black text-primary tracking-tighter">{product.specifications.casNumber}</div>
                      </div>
                    )}
                    {product.specifications?.formula && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Molecular Struct.</span>
                        <div className="text-2xl font-black text-primary tracking-tighter">{product.specifications.formula}</div>
                      </div>
                    )}
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Logistics Lead</span>
                      <div className="text-2xl font-black text-primary tracking-tighter uppercase">{product.category}</div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-primary/10">
                    <div className="flex items-center gap-4 p-5 bg-primary rounded-2xl text-white">
                      <span className="text-[10px] font-black uppercase tracking-widest">Global Purity Certified</span>
                    </div>
                  </div>
                </div>

                {/* Procurement CTA */}
                <div className="relative overflow-hidden bg-primary text-white rounded-[2.5rem] p-12 group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-10 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-1000" />
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-6">Strategic Procurement.</h3>
                  <p className="text-sm text-white/60 mb-10 leading-relaxed font-light">
                    Deploy this high-standard chemical solution to your industrial workflow.
                    Contact our UAE-based logistics desk.
                  </p>
                  <Link
                    to="/contact"
                    className="flex items-center justify-between bg-accent text-white font-black uppercase tracking-[0.2em] text-[10px] py-6 px-10 rounded-full hover:bg-white hover:text-primary transition-all duration-500"
                  >
                    Request Analysis
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Quick Related Portfolio Links */}
                <div className="p-10 space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">Segment Portfolio</h4>
                  <div className="space-y-6">
                    {relatedProducts.map((p) => (
                      <Link key={p.slug} to={p.href} className="group flex items-center justify-between">
                        <span className="text-sm font-black uppercase tracking-tight text-primary/60 group-hover:text-primary transition-colors">{p.name}</span>
                        <ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;