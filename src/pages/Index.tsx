import { useState, useRef, useEffect } from "react";
import WorldMap from '@/components/home/WorldMap';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import HeroSearch from '@/components/home/HeroSearch';
import IndustriesSection from '@/components/home/IndustriesSection';
import CategoryProducts from '@/components/home/CategoryProducts';

// Assets
import heroVideo from '@/assets/mainvideo.mp4';
import Aboutimage from '@/assets/image.png';
import heroRefinery from "../assets/hero-refinery.jpg";
import { products } from '@/data/products';

const features = [
  'Global Supply Chain Network',
  'Quality Certified Products',
  'Competitive Market Pricing',
  'Reliable Logistics Support',
  'Technical Expertise',
  '24/7 Customer Service'
];

const Index = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <Layout>
      <SEO
        title="HALAR PETROCHEM FZC - Leading Petrochemical Supplier"
        description="Global supplier of premium petrochemical products including fuel oil, gas oil, naphtha, white spirit, glycols, and lubricant oils."
        keywords="petrochemicals, fuel oil, gas oil, naphtha, white spirit, glycols, lubricant oil, industrial chemicals"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40 lg:to-primary/30" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col justify-center min-h-[70vh] py-20 lg:py-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6 sm:space-y-8 max-w-4xl"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Leading Petrochemical Supplier</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
              >
                <span className="block">HALAR</span>
                <span className="block text-accent">PETROCHEM FZC</span>
              </motion.h1>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <Link
                  to="/products"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-accent/20"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white/50 hover:bg-white hover:text-primary text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hero Search */}
      <HeroSearch />

      {/* About Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Section Header */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 text-primary font-bold mb-4 tracking-widest uppercase text-sm"
                >
                  <div className="w-8 h-[2px] bg-primary" />
                  ABOUT OUR COMPANY
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                >
                  Global Petrochemical
                  <span className="text-primary block mt-2">Supply Experts</span>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                HALAR PETROCHEM FZC is a premier petrochemical trading company based in
                Ras Al Khaimah Free Trade Zone, UAE. With strategic global partnerships
                and decades of industry expertise, we deliver premium quality products
                to clients worldwide.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid sm:grid-cols-2 gap-x-8 gap-y-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-700 font-semibold text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-4"
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 group"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative lg:mt-0 mt-8"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <div
                  className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${Aboutimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <IndustriesSection />

      {/* World Map Section */}
      <WorldMap />

      {/* Parallax Background Section */}
      <section
        className="relative py-24 sm:py-32 lg:py-48 bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage: `url(${heroRefinery})`,
        }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center text-white max-w-5xl mx-auto"
          >
            <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              Reliable Energy Solutions for a <span className="text-accent">Sustainable Future</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              We are committed to responsible sourcing and efficient distribution, minimizing environmental impact while maximizing value for our global partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-accent/20"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Slider Section - UPDATED with new slider design */}
      {/* Products by Category Section - Replaces the old slider */}
      <CategoryProducts />


      {/* Footer CTA */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-14 lg:p-20 text-center text-white overflow-hidden relative shadow-2xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[100px]" />

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Ready to Get <span className="text-accent underline decoration-accent/30 underline-offset-8">Started?</span></h2>
              <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Reach out to our expert team for quotes, product specifications, and logistics solutions. We operate 24/7 to serve your needs.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="bg-accent text-white hover:bg-accent/90 px-10 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 shadow-xl shadow-accent/30 inline-flex items-center gap-3 group">
                  Contact Us Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;