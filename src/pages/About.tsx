import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Lightbulb, Handshake } from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import heroRefinery from "../assets/hero-refinery.jpg";

// Import images if using Next.js Image component, but for background we use CSS
// If you want to optimize with Next.js Image, you'll need a different approach

const values = [
  { icon: <Heart className="w-6 h-6" />, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards.' },
  { icon: <Users className="w-6 h-6" />, title: 'Customer Focus', description: 'Our clients\' success is our priority. We listen, understand, and deliver.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', description: 'We continuously improve our processes and solutions to stay ahead.' },
  { icon: <Handshake className="w-6 h-6" />, title: 'Reliability', description: 'We deliver on our promises with consistency and dependability.' },
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Learn about HALAR PETROCHEM FZC, a leading petrochemical supplier based in UAE. Discover our vision, mission, and commitment to excellence in the global petrochemical industry."
        keywords="about HALAR PETROCHEM, petrochemical company UAE, oil trading company, petrochemical supplier"
      />

      {/* Hero Section with Background Image */}
  <section
  className="pt-32 pb-16 relative"
  style={{
    backgroundImage: `url(${heroRefinery})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>

        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              About <span className="text-gold">HALAR PETROCHEM FZC</span>
            </h1>
            <p className="text-lg text-white/90">
              A trusted name in the global petrochemical industry, committed to excellence and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview with Subtle Background Pattern */}
      <section 
        className="section-padding relative"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url('/assets/overview-industrial.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    HALAR PETROCHEM FZC is a premier petrochemical trading and distribution company 
                    headquartered in the Ras Al Khaimah Free Trade Zone, United Arab Emirates. With 
                    a strategic location at the crossroads of international trade routes, we serve 
                    as a vital link between global producers and consumers of petrochemical products.
                  </p>
                  <p>
                    Our company has built a strong reputation for reliability, quality, and customer 
                    service in the competitive petrochemical market. We work with leading refineries 
                    and manufacturers to source high-quality products that meet the stringent 
                    requirements of our diverse clientele.
                  </p>
                  <p>
                    From fuel oils and gas oils to specialty chemicals and lubricants, we offer a 
                    comprehensive portfolio of products tailored to meet the unique needs of industries 
                    including energy, manufacturing, construction, agriculture, and transportation.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden border border-white/20"
              >
                <div className="grid gap-8 relative z-10">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Product Categories</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Quality Commitment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Customer Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission with Industrial Background */}
      <section 
        className="section-padding relative"
        style={{
    backgroundImage: `url(${heroRefinery})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div 
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 h-full border border-white/20 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center text-primary-foreground mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/80 leading-relaxed">
                  To be the most trusted and preferred petrochemical trading partner globally, 
                  recognized for our commitment to quality, reliability, and sustainable business 
                  practices. We aspire to drive positive change in the industry by setting new 
                  standards of excellence and innovation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div 
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 h-full border border-white/20 relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center text-accent-foreground mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/80 leading-relaxed">
                  To provide our customers with high-quality petrochemical products at competitive 
                  prices, supported by exceptional service and reliable supply chain solutions. 
                  We are dedicated to building long-term partnerships based on trust, transparency, 
                  and mutual growth.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values with Modern Background */}
      <section 
        className="section-padding relative"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.97), rgba(255, 255, 255, 0.97)), url('/assets/values-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <div 
                  className="bg-white/90 backdrop-blur-sm border border-border rounded-xl p-6 h-full card-hover relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;