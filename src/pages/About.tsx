import React, { useRef } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import {
  Target, Eye, Heart, Users, Lightbulb,
  Handshake, Calendar, Globe, ShieldCheck,
  Zap, ArrowRight
} from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import heroRefinery from "../assets/hero-refinery.jpg";
import placeholderAvatar from "../assets/hero-refinery.jpg";

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
// Unique effect: The large background year "1995" moves as you scroll
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(sectionScrollProgress, [0, 1], ["0%", "-80%"]);
  // Parallax for background EST.1995 text
  const xTransform = useTransform(sectionScrollProgress, [0, 1], [0, -600]);

  const milestones = [
    {
      year: "1995",
      title: "The Foundation",
      desc: "HALAR PETROCHEM was established with a vision to streamline energy trading in the Middle East."
    },
    {
      year: "2005",
      title: "Global Expansion",
      desc: "Expanded operations to over 20 countries, establishing key strategic storage hubs."
    },
    {
      year: "2012",
      title: "Digital Integration",
      desc: "Implemented AI-driven supply chain monitoring to ensure 100% logistics transparency."
    },
    {
      year: "2018",
      title: "Sustainability Pivot",
      desc: "Launched our low-carbon initiative, focusing on ethical sourcing and waste reduction."
    },
    {
      year: "2024",
      title: "Industry Leader",
      desc: "Now serving 50+ global ports with a commitment to reliability and innovation."
    }
  ];

  return (
    <Layout>
      <SEO
        title="About Us | Global Energy Solutions | HALAR PETROCHEM FZC"
        description="Learn how HALAR PETROCHEM FZC bridges the gap between global energy producers and industrial consumers with integrity and innovation."
      />

      {/* --- HERO SECTION (Unchanged as requested) --- */}
      <section
        className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16"
        style={{
          backgroundImage: `url(${heroRefinery})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} dark={true} />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-black text-white mb-6 uppercase tracking-tight">
              About
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light border-l-4 border-accent pl-6">
              Bridging global resources with industrial precision. HALAR PETROCHEM FZC is more than a supplier; we are the catalyst for your operational success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: THE DISRUPTION (Who We Are) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <span className="text-accent font-black tracking-[0.3em] uppercase text-sm mb-4 block">Our Identity</span>
                <h2 className="text-4xl md:text-5xl font-display font-black text-primary mb-8 leading-tight uppercase">
                  Engineered for <br /> Reliability.
                </h2>
                <div className="space-y-6 text-lg text-foreground/70">
                  <p className="first-letter:text-5xl first-letter:font-black first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    Founded in the strategic hub of Ras Al Khaimah, HALAR PETROCHEM FZC has evolved from a local trader into a global powerhouse. We don't just move products; we manage the complex heartbeat of global energy logistics.
                  </p>
                  <p>
                    By integrating cutting-edge supply chain intelligence with deep-rooted market expertise, we ensure that every drop of fuel, every chemical compound, and every lubricant reaches its destination with uncompromising quality.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 relative">
              <ScrollReveal delay={0.3}>
                <div className="relative z-10 bg-primary p-10 rounded-3xl text-white shadow-2xl">
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="bg-accent/20 p-3 rounded-lg"><Globe className="text-accent w-8 h-8" /></div>
                      <div>
                        <h4 className="text-3xl font-bold">50+</h4>
                        <p className="text-white/60 uppercase text-xs tracking-widest">Global Ports Served</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="bg-accent/20 p-3 rounded-lg"><ShieldCheck className="text-accent w-8 h-8" /></div>
                      <div>
                        <h4 className="text-3xl font-bold">100%</h4>
                        <p className="text-white/60 uppercase text-xs tracking-widest">Compliance & Safety</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="bg-accent/20 p-3 rounded-lg"><Zap className="text-accent w-8 h-8" /></div>
                      <div>
                        <h4 className="text-3xl font-bold">24hr</h4>
                        <p className="text-white/60 uppercase text-xs tracking-widest">Logistics Monitoring</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-3xl -z-10" />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE VISIONARY SPLIT (Vision & Mission) --- */}
      <section className="py-24 bg-secondary/10">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-0 rounded-[2rem] overflow-hidden shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-primary p-12 md:p-20 text-white relative overflow-hidden group"
            >
              <Eye className="absolute -right-10 -top-10 w-64 h-64 text-white/5 group-hover:rotate-12 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-accent font-bold uppercase tracking-widest mb-4 block underline decoration-accent decoration-4 underline-offset-8">The Future</span>
                <h3 className="text-4xl font-display font-black mb-6 uppercase">Our Vision</h3>
                <p className="text-xl text-white/70 font-light leading-relaxed">
                  To redefine the petrochemical landscape by becoming the world’s most agile energy partner—where sustainability meets industrial scale, and trust is the primary currency.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-12 md:p-20 text-primary relative overflow-hidden group border-y md:border-y-0 md:border-l border-primary/10"
            >
              <Target className="absolute -right-10 -top-10 w-64 h-64 text-primary/5 group-hover:-rotate-12 transition-transform duration-700" />
              <div className="relative z-10">
                <span className="text-accent font-bold uppercase tracking-widest mb-4 block underline decoration-accent decoration-4 underline-offset-8">The Action</span>
                <h3 className="text-4xl font-display font-black mb-6 uppercase">Our Mission</h3>
                <p className="text-xl text-foreground/70 font-light leading-relaxed">
                  We bridge global demand with ethical supply chains. Our mission is to deliver high-spec energy products through optimized logistics that minimize waste and maximize value for our partners.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE EVOLUTION (Sticky Horizontal Scroll) --- */}
      <section ref={sectionRef} className="relative h-[400vh] bg-white">
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
          {/* Header Area */}
          <div className="container-custom pt-24 pb-12 flex flex-col md:flex-row justify-between items-end gap-6 relative z-20">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-accent font-black tracking-widest uppercase text-sm mb-4 block"
              >
                Our Journey
              </motion.span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-primary uppercase leading-[0.9] tracking-tighter">
                The Evolution <br /> of Excellence
              </h2>
            </div>

            <motion.div
              style={{ x: xTransform }}
              className="text-primary font-black text-[12rem] md:text-[20rem] opacity-[0.03] absolute -right-20 -top-10 leading-none hidden lg:block select-none pointer-events-none"
            >
              EST.1995
            </motion.div>
          </div>

          {/* Horizontal Track */}
          <div className="flex-1 flex items-center relative overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-8 md:gap-12 px-[10vw] md:px-[15vw]"
            >
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="relative group min-w-[85vw] md:min-w-[70vw] lg:min-w-[45vw] aspect-[4/5] xs:aspect-[16/10] md:aspect-[16/9] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-primary"
                >
                  {/* Background Image with Overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                    style={{ backgroundImage: `url(${heroRefinery})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Card Content */}
                  <div className="absolute inset-0 p-12 flex flex-col justify-end">
                    <div className="flex items-baseline gap-4 mb-3 sm:mb-4">
                      <span className="text-accent font-black text-5xl xs:text-6xl md:text-8xl tracking-tighter leading-none group-hover:translate-x-4 transition-transform duration-500">
                        {m.year}
                      </span>
                      <div className="h-0.5 flex-1 bg-accent/30 hidden md:block" />
                    </div>

                    <h4 className="text-2xl xs:text-3xl md:text-4xl font-black text-white mb-2 sm:mb-4 uppercase tracking-tight group-hover:text-accent transition-colors duration-300">
                      {m.title}
                    </h4>
                    <p className="text-white/70 text-sm xs:text-base md:text-xl max-w-xl leading-relaxed font-light line-clamp-4 xs:line-clamp-none">
                      {m.desc}
                    </p>

                    {/* Progress Indicator inside card */}
                    <div className="mt-8 overflow-hidden h-1 w-24 bg-white/20 rounded-full">
                      <motion.div
                        className="h-full bg-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Visual Accent */}
                  <div className="absolute top-10 right-10 w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                    <ArrowRight className="text-white w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              ))}

              {/* Final Spacer Card เพื่อให้ card สุดท้ายเห็นชัด */}
              <div className="min-w-[20vw] h-1" />
            </motion.div>
          </div>

          {/* Bottom Progress Bar for the whole section */}
          <div className="container-custom pb-12">
            <div className="h-1 w-full bg-secondary/20 rounded-full overflow-hidden">
              <motion.div
                style={{ scaleX: sectionScrollProgress }}
                className="h-full bg-accent origin-left"
              />
            </div>
            <div className="flex justify-between mt-4 text-[10px] uppercase tracking-[0.3em] font-black text-primary/40">
              <span>Foundation</span>
              <span>Present Day</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: CORE VALUES (Interactive Timeline) --- */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative">
          <div className="flex flex-col lg:flex-row lg:items-start gap-16">
            {/* Left Column - Sticky Header */}
            <div className="lg:w-1/3 lg:sticky lg:top-24 lg:self-start">
              <span className="text-accent font-mono text-sm tracking-wider mb-4 block">/ 01 • FOUNDATION</span>
              <h2 className="text-6xl font-display font-black uppercase tracking-tighter leading-none mb-6">
                The Core
                <span className="block text-accent mt-2">Of Who We Are</span>
              </h2>
              <div className="h-1 w-24 bg-accent mb-8"></div>
              <p className="text-white/70 text-lg leading-relaxed">
                Four pillars that define our approach, guide our decisions,
                and shape the future of logistics.
              </p>
            </div>

            {/* Right Column - Interactive Vertical Timeline */}
            <div className="lg:w-2/3 relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>

              {[
                {
                  icon: <ShieldCheck />,
                  title: "Integrity",
                  desc: "Radical transparency in every contract and shipment.",
                  metric: "100%",
                  metricLabel: "Transparency Score"
                },
                {
                  icon: <Users />,
                  title: "Customer Centric",
                  desc: "We solve for the customer, then for ourselves.",
                  metric: "24/7",
                  metricLabel: "Customer Support"
                },
                {
                  icon: <Lightbulb />,
                  title: "Innovation",
                  desc: "Adopting AI in logistics to predict market volatility.",
                  metric: "15+",
                  metricLabel: "AI Models Deployed"
                },
                {
                  icon: <Handshake />,
                  title: "Reliability",
                  desc: "When the market shakes, we remain steady.",
                  metric: "99.9%",
                  metricLabel: "On-Time Delivery"
                }
              ].map((v, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="relative pl-24 pr-8 py-8 mb-8 group hover:bg-white/5 rounded-2xl transition-all duration-500 cursor-pointer">
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full group-hover:scale-150 transition-transform duration-500">
                      <div className="absolute inset-2 bg-primary rounded-full"></div>
                    </div>

                    {/* Year/Step Indicator */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white/20 font-mono font-black text-7xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {(i + 1).toString().padStart(2, '0')}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-accent transition-colors duration-500">
                          {React.cloneElement(v.icon as React.ReactElement, { size: 32, className: "group-hover:text-primary transition-colors" })}
                        </div>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-black mb-2 uppercase tracking-wide group-hover:text-accent transition-colors">
                          {v.title}
                        </h3>
                        <p className="text-white/60 group-hover:text-white/80 transition-colors text-base leading-relaxed mb-4">
                          {v.desc}
                        </p>

                        {/* Metric Badge */}
                        <div className="inline-flex items-center gap-3">
                          <span className="text-3xl font-black text-accent group-hover:scale-110 transition-transform">
                            {v.metric}
                          </span>
                          <span className="text-xs uppercase tracking-wider text-white/40">
                            {v.metricLabel}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION 5: LEADERSHIP (The Professionals) --- */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="text-accent font-black uppercase tracking-widest text-sm">Expertise at the Helm</span>
            <h2 className="text-4xl font-display font-black text-primary uppercase mt-4">The Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Ahmed Al-Mansoori", role: "Chairman", bio: "A veteran of Middle Eastern energy markets with over 30 years of strategic foresight." },
              { name: "Sarah Jenkins", role: "Managing Director", bio: "Leading our digital transformation and global expansion strategies with surgical precision." },
              { name: "Marcus Chen", role: "Operations Head", bio: "The architect of our 'Zero-Delay' logistics framework across 50+ international ports." }
            ].map((l, i) => (
              <ScrollReveal key={i} delay={i * 0.2}>
                <div className="flex flex-col group">
                  <div className="relative overflow-hidden rounded-3xl mb-6 bg-secondary/20 aspect-[4/5]">
                    <img
                      src={placeholderAvatar}
                      alt={l.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white text-sm italic">"Excellence is not an act, but a habit."</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-primary uppercase">{l.name}</h3>
                  <span className="text-accent font-bold uppercase text-xs tracking-[0.2em] mb-4">{l.role}</span>
                  <p className="text-foreground/60 text-sm leading-relaxed">{l.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 bg-accent text-primary">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-3xl md:text-4xl font-display font-black uppercase leading-tight text-center md:text-left">
            Ready to fuel <br /> your next venture?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest rounded-full flex items-center gap-4 hover:shadow-2xl transition-all"
          >
            Partner With Us <ArrowRight />
          </motion.button>
        </div>
      </section>
    </Layout>
  );
};

export default About;