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
  chemicalCatalogPart4 
} from "../../msds/msds";

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

  const chemicalProduct = fullChemicalCatalog.find(
    (c) => c.id === (product.chemicalId || product.slug)
  );

  const currentIndex = products.findIndex((p) => p.slug === slug);
  const prevProduct = currentIndex > 0 ? products[currentIndex - 1] : null;
  const nextProduct =
    currentIndex < products.length - 1 ? products[currentIndex + 1] : null;

  const relatedProducts = products
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

  // Helper function for technical metrics
  const technicalMetrics = [
    { label: "Purity Index", value: chemicalProduct?.details?.purity || product.specifications?.purity || "99.9%" },
    { label: "Density", value: chemicalProduct?.details?.density || product.specifications?.density || "Standard" },
    { label: "Batch ID", value: chemicalProduct?.identifiers?.batchNumber || `#${Math.floor(Math.random() * 9000) + 1000}` },
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
                  <p className="text-xl text-primary/70 leading-relaxed font-light first-letter:text-6xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left mb-6">
                    {chemicalProduct?.details?.introduction || product.fullDescription}
                  </p>

                  {/* Physicochemical Properties Grid */}
                  {chemicalProduct?.details && Object.keys(chemicalProduct.details).filter(k => k !== 'introduction').length > 0 && (
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 mt-6 border-t border-primary/10">
                        {chemicalProduct.details.appearance && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Appearance</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.appearance}</div>
                           </div>
                        )}
                        {chemicalProduct.details.odor && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Odor</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.odor}</div>
                           </div>
                        )}
                        {chemicalProduct.details.meltingPoint && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Melting Point</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.meltingPoint}</div>
                           </div>
                        )}
                        {chemicalProduct.details.boilingPoint && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Boiling Point</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.boilingPoint}</div>
                           </div>
                        )}
                        {chemicalProduct.details.solubility && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Solubility</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.solubility}</div>
                           </div>
                        )}
                        {chemicalProduct.details.density && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Density</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.density}</div>
                           </div>
                        )}
                        {chemicalProduct.details.steamPressure && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Steam Pressure</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.steamPressure}</div>
                           </div>
                        )}
                        {chemicalProduct.details.relativeMolecularMass && (
                           <div className="space-y-1">
                              <div className="text-[10px] font-black uppercase tracking-widest text-primary/40">Relative Molecular Mass</div>
                              <div className="text-sm font-medium text-primary">{chemicalProduct.details.relativeMolecularMass}</div>
                           </div>
                        )}
                     </div>
                  )}
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
                    {(chemicalProduct?.applications?.length ? chemicalProduct.applications : product.uses).map((use, i) => (
                      <div key={i} className="flex items-center gap-6 p-8 bg-[#f8f9fa] rounded-2xl border border-primary/5 group hover:border-accent transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-lg font-bold text-primary tracking-tight leading-snug">{use}</span>
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

                  <div className="space-y-5">
                    {/* Identifiers */}
                    {(chemicalProduct?.identifiers?.casNumber || product.specifications?.casNumber) && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">CAS Registry</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct?.identifiers?.casNumber || product.specifications?.casNumber}</div>
                      </div>
                    )}
                    {(chemicalProduct?.identifiers?.chemicalFormula || product.specifications?.formula) && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Molecular Struct.</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct?.identifiers?.chemicalFormula || product.specifications?.formula}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.molecularWeight && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Molecular Weight</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.molecularWeight}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.ecNumber && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">EC Number</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.ecNumber}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.productCode && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Product Code</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.productCode}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.batchNumber && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Batch Number</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.batchNumber}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.mdlNumber && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">MDL Number</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.mdlNumber}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.hsnCode && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">HSN Code</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.hsnCode}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.inciName && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">INCI Name</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.inciName}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.beilsteinRegistryNo && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Beilstein No.</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.beilsteinRegistryNo}</div>
                      </div>
                    )}
                    {chemicalProduct?.identifiers?.dangerousGoodsNumber && (
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">DG Number</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.identifiers.dangerousGoodsNumber}</div>
                      </div>
                    )}
                    
                    {/* Metadata */}
                    {chemicalProduct?.origin && (
                      <div className="space-y-1 border-t border-primary/10 pt-4">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Origin</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.origin}</div>
                      </div>
                    )}
                    {chemicalProduct?.brandNames && chemicalProduct.brandNames.length > 0 && (
                      <div className="space-y-1 border-t border-primary/10 pt-4">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Brand/Manufacturer</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.brandNames.join(', ')}</div>
                      </div>
                    )}
                    {chemicalProduct?.packaging && chemicalProduct.packaging.length > 0 && (
                      <div className="space-y-1 border-t border-primary/10 pt-4">
                        <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Packaging Available</span>
                        <div className="text-sm font-black text-primary tracking-tighter">{chemicalProduct.packaging.join(', ')}</div>
                      </div>
                    )}
                    
                    {/* Dates */}
                    {chemicalProduct?.dates && Object.keys(chemicalProduct.dates).length > 0 && (
                      <div className="space-y-3 border-t border-primary/10 pt-4">
                         {chemicalProduct.dates.mfgDate && (
                            <div className="flex justify-between items-center text-sm">
                               <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Mfg Date</span>
                               <span className="font-bold text-primary">{chemicalProduct.dates.mfgDate}</span>
                            </div>
                         )}
                         {chemicalProduct.dates.expDate && (
                            <div className="flex justify-between items-center text-sm">
                               <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Exp/Shelf Life</span>
                               <span className="font-bold text-primary">{chemicalProduct.dates.expDate}</span>
                            </div>
                         )}
                         {chemicalProduct.dates.retestDate && (
                            <div className="flex justify-between items-center text-sm">
                               <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Retest Date</span>
                               <span className="font-bold text-primary">{chemicalProduct.dates.retestDate}</span>
                            </div>
                         )}
                         {chemicalProduct.dates.samplingDate && (
                            <div className="flex justify-between items-center text-sm">
                               <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Sampling Date</span>
                               <span className="font-bold text-primary">{chemicalProduct.dates.samplingDate}</span>
                            </div>
                         )}
                      </div>
                    )}

                    <div className="space-y-1 border-t border-primary/10 pt-4">
                      <span className="text-[10px] font-mono tracking-widest text-primary/40 uppercase">Logistics Lead</span>
                      <div className="text-lg font-black text-primary tracking-tighter uppercase">{product.category}</div>
                    </div>
                  </div>

                  {product.msdsPdfKey ? (
                    <div className="pt-8 border-t border-primary/10">
                      <a 
                        href={`/msds/${product.msdsPdfKey}`}
                        download
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-5 bg-accent hover:bg-accent/90 rounded-2xl text-white transition-colors shadow-lg shadow-accent/20 cursor-pointer"
                      >
                        <span className="text-[12px] font-black uppercase tracking-widest">Download MSDS / COA</span>
                        <FileText className="w-5 h-5" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-8 border-t border-primary/10">
                      <div className="flex items-center gap-4 p-5 bg-primary rounded-2xl text-white">
                        <span className="text-[10px] font-black uppercase tracking-widest">Global Purity Certified</span>
                      </div>
                    </div>
                  )}
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