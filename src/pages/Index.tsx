import { useState, useRef, useEffect } from "react";
import WorldMap from '@/components/home/WorldMap';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
} from 'lucide-react';

// Assets
import heroVideo from '@/assets/herovideo (online-video-cutter.com).mp4';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    setTimeout(() => {
      sliderRef.current?.slickGoTo(0);
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    cssEase: "ease-in-out",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          swipeToSlide: true,
          adaptiveHeight: true,
        },
      },
    ],
  };

  return (
    <Layout>
      <SEO
        title="HALAR PETROCHEM FZC - Leading Petrochemical Supplier"
        description="Global supplier of premium petrochemical products including fuel oil, gas oil, naphtha, white spirit, glycols, and lubricant oils."
        keywords="petrochemicals, fuel oil, gas oil, naphtha, white spirit, glycols, lubricant oil, industrial chemicals"
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span className="text-sm font-medium">Leading Petrochemical Supplier</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="block">HALAR</span>
                <span className="block text-accent">PETROCHEM FZC</span>
              </motion.h1>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Link
                  to="/products"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Quote
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Section Header */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 text-primary font-semibold mb-4"
                >
                  <div className="w-6 h-[2px] bg-primary" />
                  ABOUT OUR COMPANY
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                >
                  Global Petrochemical
                  <span className="text-primary block">Supply Experts</span>
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
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
                className="space-y-4"
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
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
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
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg group"
                >
                  Learn More About Us
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="aspect-[4/5] rounded-2xl"
                  style={{
                    backgroundImage: `url(${Aboutimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <WorldMap />

      {/* Parallax Background Section */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${heroRefinery})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8">
              Reliable Energy Solutions for a <span className="text-accent">Sustainable Future</span>
            </h2>
            <p className="text-xl text-white/90 mb-12">
              We are committed to responsible sourcing and efficient distribution, minimizing environmental impact while maximizing value for our global partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg">
              <div className="w-4 sm:w-5 md:w-6 h-[2px] bg-primary" />
              OUR PRODUCTS
            </div>
            <h2 className="text-2xl xs:text-2.5xl sm:text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl 
                     font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-5 leading-tight tracking-tight">
              Premium Petrochemical
              <span className="text-primary block">Products</span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl 
                    max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-0">
              We supply a comprehensive range of high-quality petrochemical products
              to meet diverse industrial needs across the globe.
            </p>
          </motion.div>

          {/* Slider Wrapper */}
          <div className="relative w-full">
            {/* Progress Bar */}
            <div className="absolute -bottom-1 sm:bottom-0 md:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10 w-full max-w-[280px] xs:max-w-xs sm:max-w-sm px-4">
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  animate={{
                    width: `${((currentSlide + 1) / products.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
                {currentSlide + 1} / {products.length}
              </span>
            </div>

            {/* Slider */}
            <Slider ref={sliderRef} {...sliderSettings} className="pb-16 sm:pb-20 md:pb-24 lg:pb-28">
              {products.map((product, index) => (
                <div key={product.name} className="w-full px-1.5 xs:px-2 sm:px-2.5 md:px-3 lg:px-4 py-2 xs:py-2.5 sm:py-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0.9,
                      scale: currentSlide === index ? 1 : 0.97,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col">
                      <div className="relative h-36 xs:h-40 sm:h-44 md:h-52 lg:h-56 xl:h-60 overflow-hidden">
                        <img
                          src={product.backgroundImage}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                        <span className="inline-block px-2.5 xs:px-3 py-1 mb-2 bg-primary/10 text-primary text-xs xs:text-sm font-medium rounded-full w-fit">
                          {product.category}
                        </span>
                        <h3 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1.5">
                          {product.name}
                        </h3>
                        <p className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-600 mb-3 flex-1">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-between border-t pt-3 mt-auto">
                          <Link to={product.href} className="text-primary font-semibold flex items-center gap-1.5 text-sm xs:text-base">
                            View Details <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link to="/contact" className="w-8 h-8 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300">
                            <MessageSquare className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-6"
          >
            <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-lg hover:scale-105 transition-all shadow-lg">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                Reach out to our expert team for quotes, product specifications, and logistics solutions.
              </p>
              <Link to="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg inline-block">
                Contact Us Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;