import { useState, useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  Flame,
  Fuel,
  Droplets,
  FlaskConical,
  Beaker,
  Cylinder
} from 'lucide-react';

// Assets
import heroVideo from '@/assets/herovideo (online-video-cutter.com).mp4';
import Aboutimage from '@/assets/image.png';
import heroRefinery from "../assets/hero-refinery.jpg";

// Product Images
import fuelOilImg from '@/assets/products/fuel-oil.png';
import gasOilImg from '@/assets/products/gas-oil.png';
import naphthaImg from '@/assets/products/naphtha.png';
import whiteSpiritImg from '@/assets/products/white-spirit.png';
import glycolsImg from '@/assets/products/glycols.png';
import lubricantOilImg from '@/assets/products/lubricant-oil.png';
import paraffinOilImg from '@/assets/products/Paraffin Oil.png';
import usedCookingOilImg from '@/assets/products/used-cooking-oil.png.png';
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

  const products = [
    { 
      name: 'Fuel Oil', 
      description: 'High-quality fuel oils for industrial and commercial applications.', 
      href: '/products/fuel-oil', 
      icon: <Flame className="w-6 h-6" />, 
      image: fuelOilImg,
      category: 'Fuel Products',
      features: ['High combustion efficiency', 'Low sulfur content', 'ISO certified']
    },
    { 
      name: 'Gas Oil', 
      description: 'Premium gas oil products meeting international specifications.', 
      href: '/products/gas-oil', 
      icon: <Fuel className="w-6 h-6" />, 
      image: gasOilImg,
      category: 'Fuel Products',
      features: ['Euro 5 compliant', 'High cetane number', 'Clean burning']
    },
    { 
      name: 'Naphtha', 
      description: 'Versatile petrochemical feedstock for various industries.', 
      href: '/products/naphtha', 
      icon: <Droplets className="w-6 h-6" />, 
      image: naphthaImg,
      category: 'Petrochemicals',
      features: ['High purity grade', 'Multi-industry use', 'Stable composition']
    },
    { 
      name: 'White Spirit', 
      description: 'Industrial-grade solvent for paints and coatings.', 
      href: '/products/white-spirit', 
      icon: <FlaskConical className="w-6 h-6" />, 
      image: whiteSpiritImg,
      category: 'Solvents',
      features: ['Low odor', 'Fast evaporation', 'High solvency power']
    },
    { 
      name: 'Glycols', 
      description: 'Essential chemicals for antifreeze and industrial applications.', 
      href: '/products/glycols', 
      icon: <Beaker className="w-6 h-6" />, 
      image: glycolsImg,
      category: 'Chemicals',
      features: ['Food grade available', 'High thermal stability', 'Non-toxic']
    },
    { 
      name: 'Lubricant Oil', 
      description: 'High-performance lubricants for machinery and engines.', 
      href: '/products/lubricant-oil', 
      icon: <Cylinder className="w-6 h-6" />, 
      image: lubricantOilImg,
      category: 'Lubricants',
      features: ['Extended drain intervals', 'Temperature resistant', 'Anti-wear additives']
    },
    {
      name: 'Paraffin Oil',
      description: 'Highly refined mineral oil for pharmaceuticals and cosmetics.',
      href: '/products/paraffin-oil',
      icon: <Droplets className="w-6 h-6" />,
      image: paraffinOilImg,
      category: 'Chemicals',
      features: ['Pharmaceutical grade', 'Cosmetic applications', 'Food processing use']

    },
    {
      name: 'Used Cooking Oil',
      description: 'Eco-friendly recycled oil for biodiesel and sustainable applications.',
      href: '/products/used-cooking-oil',   
      icon: <Beaker className="w-6 h-6" />,
      image: usedCookingOilImg,
      category: 'Sustainable Products',
      features: ['Biodiesel feedstock', 'Renewable energy source', 'Circular economy solution']   

    }
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "10px",
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
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
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Background Image */}
                <div
                  className="aspect-[4/5] rounded-2xl"
                  style={{
                    backgroundImage: `url(${Aboutimage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />

                {/* Overlay Gradient */}
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
<section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
  <div className="container mx-auto px-4 md:px-8">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12 md:mb-16"
    >
      <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
        <div className="w-6 h-[2px] bg-primary" />
        OUR PRODUCTS
      </div>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Premium Petrochemical
        <span className="text-primary block">Products</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
        We supply a comprehensive range of high-quality petrochemical products
        to meet diverse industrial needs across the globe.
      </p>
    </motion.div>

{/* Slider Wrapper */}
<div className="relative overflow-hidden w-full">

  {/* Progress Bar */}
  <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-10 w-full max-w-xs px-4">
    <div className="flex-1 h-1.5 md:h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primary"
        animate={{ width: `${((currentSlide + 1) / products.length) * 100}%` }}
        transition={{ duration: 0.3 }}
      />
    </div>
    <span className="text-xs sm:text-sm font-semibold text-gray-700 whitespace-nowrap">
      {currentSlide + 1} / {products.length}
    </span>
  </div>

  {/* Slider */}
  <Slider 
    ref={sliderRef} 
    {...sliderSettings} 
    className="pb-12 md:pb-16 lg:pb-20"
  >
    {products.map((product, index) => (
      <div 
        key={product.name} 
        className="px-1 sm:px-2 md:px-3 lg:px-4 py-2 md:py-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0.85,
            scale: currentSlide === index ? 1 : 0.96,
          }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >

          {/* Card */}
          <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg 
                        sm:shadow-xl hover:shadow-2xl transition-all duration-500 
                        border border-gray-100 overflow-hidden 
                        active:scale-[0.98] h-full flex flex-col
                        min-h-[320px] sm:min-h-[400px] md:min-h-[450px]">

            {/* Image Section */}
            <div className="relative h-36 sm:h-44 md:h-52 lg:h-56 overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center 
                         transition-transform duration-700 
                         hover:scale-110"
                loading="lazy"
              />

              {/* Optional Icon */}
              {/* {product.icon && (
                <div className="absolute top-3 right-3 w-10 h-10 sm:w-12 sm:h-12 
                              md:w-14 md:h-14 bg-white/90 backdrop-blur 
                              rounded-lg sm:rounded-xl flex items-center 
                              justify-center text-primary shadow-lg z-20">
                  {product.icon}
                </div>
              )} */}
            </div>

            {/* Content Section */}
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col flex-1">

              {/* Category Badge */}
              <span className="inline-block px-2 py-1 sm:px-3 sm:py-1 
                             bg-primary/10 text-primary text-xs sm:text-sm 
                             font-medium rounded-full mb-2 sm:mb-3 w-fit">
                {product.category}
              </span>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-bold 
                           text-gray-900 mb-1 sm:mb-2 line-clamp-1">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 
                          mb-3 sm:mb-4 flex-1">
                {product.description}
              </p>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-5">
                  {product.features.slice(0, 2).map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start sm:items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-500"
                    >
                      <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span className="line-clamp-1">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 
                            border-t border-gray-100 mt-auto">
                <Link
                  to={product.href}
                  className="inline-flex items-center gap-1.5 sm:gap-2 
                           text-primary font-semibold text-sm sm:text-base 
                           hover:text-primary-dark transition-colors"
                >
                  View Details
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                           rounded-full bg-gray-100 hover:bg-primary 
                           hover:text-white flex items-center justify-center 
                           transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Contact about this product"
                >
                  <MessageSquare className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    ))}
  </Slider>

  {/* Navigation Arrows (Optional - if you want to add them) */}
  {/* <button
    onClick={() => sliderRef?.current?.slickPrev()}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 
               w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm 
               rounded-full flex items-center justify-center 
               shadow-lg hover:bg-white transition-all"
    aria-label="Previous slide"
  >
    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
  </button>
  <button
    onClick={() => sliderRef?.current?.slickNext()}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 
               w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm 
               rounded-full flex items-center justify-center 
               shadow-lg hover:bg-white transition-all"
    aria-label="Next slide"
  >
    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
  </button> */}
</div>

    {/* View All */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-center mt-1 md:mt-0"
    >
      <Link
        to="/products"
        className="inline-flex items-center gap-3 bg-primary text-white 
                   px-4 py-4 rounded-xl font-semibold text-lg 
                   hover:scale-105 transition shadow-lg"
      >
        View All Products
        <ArrowRight className="w-5 h-5" />
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
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
              >
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