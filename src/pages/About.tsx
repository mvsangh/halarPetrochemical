import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Lightbulb, Handshake, Calendar, MapPin, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import heroRefinery from "../assets/hero-refinery.jpg";

// --- Placeholder Images (Replace with your actual images) ---
// It's recommended to import local images or use public URLs for team members.
import placeholderAvatar from "../assets//hero-refinery.jpg"; // Add a placeholder image to your assets

// --- Company Journey Milestones (Adapted from Petrocheme) ---
const journeyMilestones = [
  { year: "1995", title: "Inception of HALAR PETROCHEM", description: "Established in the Ras Al Khaimah Free Trade Zone, UAE, with a vision to transform petrochemical trading in the region." },
  { year: "2000", title: "Expansion of Operations", description: "Rapid growth in our product portfolio and client base, serving key industries across the Middle East." },
  { year: "2005", title: "Global Reach", description: "Extended our supply chain and partnerships to serve markets in Asia, Africa, and Europe." },
  { year: "2010", title: "Strengthening Infrastructure", description: "Enhanced our logistics and supply chain capabilities to ensure reliable, on-time deliveries worldwide." },
  { year: "2015", title: "Commitment to Quality", description: "Adopted stringent quality, health, and safety standards, reinforcing our commitment to excellence." },
  { year: "2020", title: "Digital Transformation", description: "Embraced innovation and digital solutions to better serve our global partners and streamline operations." },
  { year: "2023", title: "25 Years of Excellence", description: "Celebrated a quarter-century of trust, growth, and partnership in the global petrochemical industry." },
  { year: "2024", title: "Future Forward", description: "Continuing our journey as a premier partner, focused on sustainable growth and innovation." },
];

// --- Core Values (Enhanced with your existing values) ---
const values = [
  { icon: <Heart className="w-6 h-6" />, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical standards.' },
  { icon: <Users className="w-6 h-6" />, title: 'Customer Focus', description: 'Our clients\' success is our priority. We listen, understand, and deliver.' },
  { icon: <Lightbulb className="w-6 h-6" />, title: 'Innovation', description: 'We continuously improve our processes and solutions to stay ahead.' },
  { icon: <Handshake className="w-6 h-6" />, title: 'Reliability', description: 'We deliver on our promises with consistency and dependability.' },
];

// --- Leadership Team (Placeholder Data - Replace with your actual team) ---
const leadershipTeam = [
  {
    name: "Founder's Name",
    title: "Founder and Chairman",
    description: "Driven by passion and a need to succeed, [Founder's Name] established HALAR PETROCHEM FZC in [Year]. With a strong grasp on the dynamics of the chemical industry, their leadership has been the cornerstone of our success, building a reputation of trust and excellence.",
    image: placeholderAvatar,
  },
  {
    name: "Director's Name",
    title: "Managing Director",
    description: "As a hands-on leader, [Director's Name] brings energy and a forward-thinking vision to the Group. Focusing on business development, innovation, and building lasting relationships, they are shaping the future of HALAR PETROCHEM, ensuring sustainable success and growth.",
    image: placeholderAvatar,
  },
  {
    name: "CEO's Name",
    title: "Chief Executive Officer",
    description: "With decades of experience in the petrochemical trading industry, [CEO's Name] has been instrumental in driving the organization's global sales force and maintaining strong relationships with key manufacturers and suppliers worldwide.",
    image: placeholderAvatar,
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us - Our Story, Values & Leadership | HALAR PETROCHEM FZC"
        description="Discover the story of HALAR PETROCHEM FZC, a leading petrochemical supplier based in UAE. Learn about our journey, core values, vision, mission, and the experienced leadership team driving our commitment to excellence."
        keywords="about HALAR PETROCHEM, petrochemical company UAE, oil trading company, petrochemical supplier, leadership team UAE"
      />

      {/* Hero Section with Background Image */}
      <section
        className="relative flex items-center min-h-[60vh] md:min-h-[70vh] pt-28 pb-16"
        style={{
          backgroundImage: `url(${heroRefinery})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} dark={true} />

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

      {/* Company Overview */}
      <section className="section-padding relative bg-background">
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
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="grid gap-8">
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

      {/* Our Journey / Timeline Section - NEW */}
      <section className="section-padding relative bg-muted/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From our inception to the present day, our story is one of growth, partnership, and commitment to excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line (Hidden on mobile) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border" />

            <div className="space-y-8 md:space-y-0">
              {journeyMilestones.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:justify-between group`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} mb-4 md:mb-0`}>
                      <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                        <span className="text-sm font-bold text-primary mb-1 block">{milestone.year}</span>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center Icon (Timeline Node) */}
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center z-10">
                      <div className="w-10 h-10 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold">
                        <Calendar className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Empty space for layout */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        className="section-padding relative"
        style={{
          backgroundImage: `url(${heroRefinery})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Darker overlay for better text contrast */}
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full border border-white/20 relative overflow-hidden">
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
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full border border-white/20 relative overflow-hidden">
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

      {/* Core Values */}
      <section className="section-padding relative bg-background">
        <div className="container-custom">
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
                <div className="bg-card border border-border rounded-xl p-6 h-full card-hover relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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

      {/* Leadership Team Section - NEW */}
      <section className="section-padding relative bg-muted/30">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Leadership Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced professionals guiding HALAR PETROCHEM FZC towards a future of growth and innovation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    // You might need to adjust for Next.js Image if used
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{leader.name}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{leader.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.description}</p>
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