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
import { 
  chemicalCatalog, 
  chemicalCatalogPart2, 
  chemicalCatalogPart3, 
  chemicalCatalogPart4,
  ChemicalProduct 
} from "../../msds/msds";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ProductPDF from "@/components/product/ProductPDF";

const fullChemicalCatalog = [
  ...chemicalCatalog,
  ...chemicalCatalogPart2,
  ...chemicalCatalogPart3,
  ...chemicalCatalogPart4,
];

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const product = products.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const chemicalProductData: ChemicalProduct = fullChemicalCatalog.find(
    (c) => c.id === (product.chemicalId || product.slug)
  ) || {
    id: product.slug,
    productName: product.name,
    identifiers: {
      casNumber: product.specifications?.casNumber,
      chemicalFormula: product.specifications?.formula,
    },
    details: {
      introduction: product.fullDescription,
      appearance: product.specifications?.appearance,
      purity: product.specifications?.purity,
    },
    specifications: [],
    applications: product.uses || [],
    packaging: [product.specifications?.packaging || "Standard Industrial Packaging"],
  };

  const chemicalProduct = chemicalProductData;

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const relatedProducts = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

  // Helper function for technical metrics
  const technicalMetrics = [
    { label: "Purity Index", value: chemicalProduct?.details?.purity || product.specifications?.purity || "98.5% minimum distillate fuel content" },
    { label: "Density", value: chemicalProduct?.details?.density || product.specifications?.density || "Standard" },
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

              <div className="grid grid-cols-2 gap-1px bg-white/10 p-px rounded-2xl overflow-hidden max-w-2xl">
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
      <section className="py-20 md:py-32 bg-white text-primary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-24">
            {/* Main Information */}
            <div className="lg:col-span-8 space-y-32">

              {/* 01. Overview - Vibrant Brand Theme */}
              <ScrollReveal>
                <div className="relative group overflow-hidden bg-primary rounded-[2rem] sm:rounded-[3rem] p-8 md:p-16 border border-white/10 shadow-2xl mx-[-1rem] sm:mx-0">
                  {/* Decorative Industrial Pattern */}
                  <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32 opacity-30" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  <div className="relative z-10 space-y-10 sm:space-y-12">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div className="space-y-4">
                        <span className="text-white/60 font-mono text-[10px] tracking-[0.5em] uppercase block font-bold">Module // 01</span>
                        <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[1.1]">Product <br /> <span className="text-accent underline decoration-white/20 underline-offset-8">Infrastructure.</span></h2>
                      </div>
                      <div className="hidden sm:block text-right">
                        <div className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">Quality Grade</div>
                        <div className="text-xl font-black text-white">{chemicalProduct?.specifications?.[0]?.result || "Industrial"}</div>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light first-letter:text-5xl md:first-letter:text-6xl first-letter:font-black first-letter:text-accent first-letter:mr-3 first-letter:float-left mb-6">
                        {chemicalProduct?.details?.introduction || product.fullDescription}
                      </p>
                    </div>

                    {/* Physicochemical Properties Grid - Refined Matrix Look */}
                    {chemicalProduct?.details && Object.keys(chemicalProduct.details).filter(k => k !== 'introduction').length > 0 && (
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 pt-10 border-t border-white/20">
                          {Object.entries(chemicalProduct.details).map(([key, val], idx) => {
                            if (key === 'introduction') return null;
                            const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                            return (
                              <div key={idx} className="space-y-2 group/prop">
                                <div className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 group-hover/prop:text-accent transition-colors">{label}</div>
                                <div className="text-base font-bold text-white tracking-tight leading-none">{val}</div>
                                <div className="h-0.5 w-4 bg-white/10 group-hover/prop:w-full group-hover/prop:bg-accent transition-all duration-500" />
                              </div>
                            );
                          })}
                       </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* 01.5. Technical Specifications */}
              {chemicalProduct?.specifications && chemicalProduct.specifications.length > 0 && (
                <ScrollReveal>
                  <div className="space-y-12">
                    <div className="flex items-center gap-6">
                      <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Technical Specifications</h2>
                    </div>
                    <div className="overflow-x-auto bg-[#f8f9fa] border border-primary/10 rounded-2xl md:rounded-3xl p-3 md:p-6 -mx-4 md:mx-0">
                      <table className="w-full text-left border-collapse min-w-[320px]">
                        <thead>
                          <tr className="border-b border-primary/10">
                            <th className="py-3 px-3 md:py-4 md:px-6 text-[10px] md:text-sm font-black uppercase tracking-widest text-primary/50">Parameter</th>
                            <th className="py-3 px-3 md:py-4 md:px-6 text-[10px] md:text-sm font-black uppercase tracking-widest text-primary/50">Specification</th>
                            <th className="py-3 px-3 md:py-4 md:px-6 text-[10px] md:text-sm font-black uppercase tracking-widest text-primary/50">Result</th>
                          </tr>
                        </thead>
                        <tbody>
                          {chemicalProduct.specifications.map((spec, i) => (
                            <tr key={i} className="border-b border-primary/5 hover:bg-white transition-colors">
                              <td className="py-3 px-3 md:py-4 md:px-6 text-xs md:text-base font-bold text-primary align-top leading-tight break-words">{spec.parameter}</td>
                              <td className="py-3 px-3 md:py-4 md:px-6 text-xs md:text-base text-primary/70 align-top leading-tight break-words">{spec.requirement}</td>
                              <td className="py-3 px-3 md:py-4 md:px-6 text-xs md:text-base text-primary/70 align-top leading-tight break-words">{spec.result} {spec.uom || ""}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* 01.7. Safety & Handling Data */}
              {chemicalProduct?.safetyInfo && Object.keys(chemicalProduct.safetyInfo).length > 0 && (
                <ScrollReveal>
                  <div className="space-y-8 p-10 bg-red-50/50 border border-red-100 rounded-[2rem]">
                    <div className="flex items-center gap-4 text-red-600 mb-6">
                      <AlertTriangle className="w-8 h-8" />
                      <h2 className="text-3xl font-black uppercase tracking-tighter">Safety & Handling</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-sm">
                      {chemicalProduct.safetyInfo.hazards && chemicalProduct.safetyInfo.hazards.length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">Hazards Identification</h4>
                          <ul className="list-disc pl-4 text-red-900/80 space-y-1">
                            {chemicalProduct.safetyInfo.hazards.map((hazard, i) => (
                              <li key={i}>{hazard}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {chemicalProduct.safetyInfo.firstAid && Object.keys(chemicalProduct.safetyInfo.firstAid).length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">First Aid Measures</h4>
                          <div className="space-y-2 text-red-900/80">
                            {Object.entries(chemicalProduct.safetyInfo.firstAid).map(([key, val], i) => (
                              <div key={i}><span className="font-bold capitalize">{key}:</span> {val}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {chemicalProduct.safetyInfo.symptoms && Object.keys(chemicalProduct.safetyInfo.symptoms).length > 0 && (
                        <div className="space-y-3">
                          <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">Symptoms</h4>
                          <div className="space-y-2 text-red-900/80">
                            {Object.entries(chemicalProduct.safetyInfo.symptoms).map(([key, val], i) => (
                              <div key={i}><span className="font-bold capitalize">{key}:</span> {val}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {chemicalProduct.safetyInfo.preventiveMeasures && Object.keys(chemicalProduct.safetyInfo.preventiveMeasures).length > 0 && (
                        <div className="space-y-3 md:col-span-2">
                          <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">Preventive Measures</h4>
                          <div className="space-y-2 text-red-900/80">
                            {Object.entries(chemicalProduct.safetyInfo.preventiveMeasures).map(([key, val], i) => (
                              <div key={i}><span className="font-bold capitalize">{key}:</span> {val}</div>
                            ))}
                          </div>
                        </div>
                      )}

                      {chemicalProduct.safetyInfo.fireExtinguisher && (
                         <div className="space-y-1 md:col-span-2">
                           <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">Fire Extinguisher</h4>
                           <p className="text-red-900/80">{chemicalProduct.safetyInfo.fireExtinguisher}</p>
                         </div>
                      )}

                      {chemicalProduct.safetyInfo.spillage && (
                         <div className="space-y-1 md:col-span-2">
                           <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">Spillage Guidelines</h4>
                           <p className="text-red-900/80">{chemicalProduct.safetyInfo.spillage}</p>
                         </div>
                      )}

                      {chemicalProduct.safetyInfo.storageInfo && (
                         <div className="space-y-1 md:col-span-2">
                           <h4 className="font-black uppercase tracking-widest text-red-800 text-[10px]">Storage Notes</h4>
                           <p className="text-red-900/80">{chemicalProduct.safetyInfo.storageInfo}</p>
                         </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* 02. Features Grid - Brand Primary Theme */}
              {product.features && (
                <ScrollReveal>
                  <div className="bg-primary rounded-[2rem] sm:rounded-[3rem] p-8 md:p-20 relative overflow-hidden mx-[-1rem] sm:mx-0 border border-white/10 shadow-2xl">
                    <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/20 rounded-full blur-[100px] -mr-32 -mt-32 opacity-40" />
                    
                    <div className="relative z-10 space-y-12 md:space-y-16">
                      <div className="space-y-4">
                        <span className="text-white/60 font-serif italic text-xl md:text-2xl block">Product Performance</span>
                        <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[1] md:leading-[0.9]">Technical <br /> <span className="text-accent underline underline-offset-12 decoration-white/20">Advantages.</span></h2>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                        {product.features.map((feature, i) => (
                          <div key={i} className="bg-primary/40 backdrop-blur-md p-10 space-y-8 hover:bg-white transition-all duration-700 group">
                            <span className="font-mono text-[10px] text-white/30 group-hover:text-primary/30 uppercase tracking-widest">ADV // 0{i + 1}</span>
                            <div className="space-y-4">
                              <h4 className="text-2xl font-black text-white group-hover:text-primary uppercase tracking-tight leading-none">{feature}</h4>
                              <p className="text-sm text-white/60 group-hover:text-primary/60 font-light leading-relaxed">Engineered for peak industrial performance and operational reliability.</p>
                            </div>
                            <div className="h-px w-0 group-hover:w-full bg-accent transition-all duration-700" />
                          </div>
                        ))}
                      </div>
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
                    {(chemicalProduct?.applications?.length ? chemicalProduct.applications : product.uses).map((use, i) => (
                      <div key={i} className="flex items-center gap-6 p-8 bg-[#f8f9fa] rounded-2xl border border-primary/5 group hover:border-accent transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-lg font-bold text-primary tracking-tight leading-snug">{use}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* SIDEBAR: TECHNICAL DOSSIER */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">

                {/* Reference Card */}
                <div className="bg-[#f8f9fa] border-2 border-primary/5 rounded-[2.5rem] p-10 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">Technical Assets</h4>
                    <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full animate-ping" />
                    </div>
                  </div>

                  <PDFDownloadLink
                    document={<ProductPDF product={chemicalProduct} />}
                    fileName={`${product.name.replace(/\s+/g, '_')}_Specifications.pdf`}
                    className="flex items-center justify-between p-5 bg-accent hover:bg-accent/90 rounded-2xl text-white transition-colors shadow-lg shadow-accent/20 cursor-pointer w-full"
                  >
                    {({ loading }) => (
                      <>
                        <span className="text-[12px] font-black uppercase tracking-widest">
                          {loading ? "Preparing PDF..." : "Download MSDS / COA"}
                        </span>
                        <FileText className="w-5 h-5" />
                      </>
                    )}
                  </PDFDownloadLink>
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
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/30">Category Portfolio</h4>
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

            {/* Navigation: Prev / Next */}
            <div className="lg:col-span-8 pt-16 lg:pt-32 border-t border-primary/10 flex flex-col md:flex-row justify-between gap-12">
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
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;