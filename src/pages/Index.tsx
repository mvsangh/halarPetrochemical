import WorldMap from '@/components/home/WorldMap';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Shield, Globe, Award, TrendingUp,
  Droplets, Flame, Beaker, FlaskConical, Fuel, Cylinder,
  ChevronRight, CheckCircle
} from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import heroVideo from '@/assets/herovideo.mp4';
import Aboutimage from '@/assets/image.png';

// Product Images
import fuelOilImg from '@/assets/products/fuel-oil.png';
import gasOilImg from '@/assets/products/gas-oil.png';
import naphthaImg from '@/assets/products/naphtha.png';
import whiteSpiritImg from '@/assets/products/white-spirit.png';
import glycolsImg from '@/assets/products/glycols.png';
import lubricantOilImg from '@/assets/products/lubricant-oil.png';

const products = [
  { name: 'Fuel Oil', description: 'High-quality fuel oils for industrial and commercial applications.', href: '/products/fuel-oil', icon: <Flame className="w-6 h-6" />, image: fuelOilImg },
  { name: 'Gas Oil', description: 'Premium gas oil products meeting international specifications.', href: '/products/gas-oil', icon: <Fuel className="w-6 h-6" />, image: gasOilImg },
  { name: 'Naphtha', description: 'Versatile petrochemical feedstock for various industries.', href: '/products/naphtha', icon: <Droplets className="w-6 h-6" />, image: naphthaImg },
  { name: 'White Spirit', description: 'Industrial-grade solvent for paints and coatings.', href: '/products/white-spirit', icon: <FlaskConical className="w-6 h-6" />, image: whiteSpiritImg },
  { name: 'Glycols', description: 'Essential chemicals for antifreeze and industrial applications.', href: '/products/glycols', icon: <Beaker className="w-6 h-6" />, image: glycolsImg },
  { name: 'Lubricant Oil', description: 'High-performance lubricants for machinery and engines.', href: '/products/lubricant-oil', icon: <Cylinder className="w-6 h-6" />, image: lubricantOilImg },
];

const features = [
  'Global Supply Chain Network',
  'Quality Certified Products',
  'Competitive Market Pricing',
  'Reliable Logistics Support',
  'Technical Expertise',
  '24/7 Customer Service'
];

const Index = () => {
  return (
    <Layout>
      {/* ... (existing SEO and Hero) */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* ... (existing Hero content same as before) */}
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
        {/* ... (existing About content) */}
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

      {/* NEW: World Map Section */}
      <WorldMap />

      {/* NEW: Parallax Background Section */}
      <section
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{
          // Using a high-res industrial image for parallax effect
          backgroundImage: 'url("https://images.unsplash.com/photo-1542382156-97851d45143a?q=80&w=2070&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
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
      <section className="py-20 bg-gray-50">
        {/* ... (existing Products content) */}
        <div className="container mx-auto px-4 md:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold mb-4">
              <div className="w-6 h-[2px] bg-primary" />
              OUR PRODUCTS
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Premium Petrochemical
              <span className="text-primary block">Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We supply a comprehensive range of high-quality petrochemical products
              to meet diverse industrial needs across the globe.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full border border-gray-100">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-lg">
                      {product.icon}
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <Link
                      to={product.href}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold group/link"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer CTA (replaced the gradient one with a simple clean one since we have parallax now) */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary rounded-3xl p-12 text-center text-white overflow-hidden relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                Reach out to our expert team for quotes, product specifications, and logistics solutions.
              </p>
              <Link
                to="/contact"
                className="bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
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