import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Flame, Fuel, Droplets, FlaskConical, Beaker, Cylinder, Leaf, Factory, Layers, Utensils } from 'lucide-react';
import SEO from '@/components/SEO';
import Layout from '@/components/layout/Layout';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import ProductCard from '@/components/home/ProductCard';
import heroRefinery from "../assets/hero-refinery.jpg";
import fuelOilImg from "../assets/products/fuel-oil.png";
import gasOilImg from "../assets/products/gas-oil.png";
import naphthaImg from "../assets/products/naphtha.png";
import rubberOilImg from "../assets/products/fuelproduct.png";
import whiteSpiritImg from "../assets/products/white-spirit.png";
import glycolsImg from "../assets/products/glycols.png";
import lubricantOilImg from "../assets/products/lubricant-oil.png";
import paraffinOilImg from "../assets/products/Paraffin Oil.png";
import usedCookingOilImg from "../assets/products/used-cooking-oil.png.png";
export const products = [
  { 
    name: 'Fuel Oil', 
    description: 'High-quality fuel oils for industrial power generation, marine applications, and commercial heating systems.', 
    backgroundImage: fuelOilImg, 
    icon: <Flame className="w-6 h-6" />,
    slug: 'fuel-oil',
    fullDescription: 'Fuel oil is a fraction obtained from petroleum distillation, widely used as a fuel source in industrial and marine applications. Our fuel oils meet international quality standards and are available in various grades to suit different requirements.',
    uses: ['Power generation plants', 'Marine vessel engines', 'Industrial boilers', 'Commercial heating systems', 'Manufacturing facilities']
  },
  { 
    name: 'Gas Oil', 
    description: 'Premium gas oil products meeting international specifications for diesel engines and industrial heating.', 
    href: '/products/gas-oil', 
    icon: <Fuel className="w-6 h-6" />,
    slug: 'gas-oil',
    backgroundImage: gasOilImg,
    fullDescription: 'Gas oil, also known as diesel fuel, is a middle distillate petroleum product used primarily in diesel engines and industrial heating applications. We supply high-quality gas oil that meets stringent international specifications.',
    uses: ['Diesel engines and vehicles', 'Industrial machinery', 'Agricultural equipment', 'Construction machinery', 'Heating systems']
  },
  { 
    name: 'Mix Hydrocarbon Oil', 
    description: 'Blended hydrocarbon products for various industrial applications and processing requirements.', 
    href: '/products/mix-hydrocarbon-oil', 
    icon: <Layers className="w-6 h-6" />,
    slug: 'mix-hydrocarbon-oil',
    backgroundImage: rubberOilImg,
    fullDescription: 'Mix Hydrocarbon Oil is a versatile petroleum product consisting of various hydrocarbon compounds. It serves as a valuable feedstock for numerous industrial processes and can be further refined or used directly in specific applications.',
    uses: ['Petrochemical feedstock', 'Industrial processing', 'Fuel blending', 'Chemical manufacturing', 'Energy production']
  },
  { 
    name: 'Naphtha', 
    description: 'Versatile petrochemical feedstock for plastics, synthetic fibers, and chemical manufacturing.', 
    href: '/products/naphtha', 
    icon: <Droplets className="w-6 h-6" />,
    slug: 'naphtha',
    backgroundImage: naphthaImg,
    fullDescription: 'Naphtha is a highly versatile petroleum product that serves as a crucial feedstock in the petrochemical industry. It is essential for producing plastics, synthetic fibers, and various chemical compounds.',
    uses: ['Petrochemical production', 'Plastics manufacturing', 'Synthetic fiber production', 'Solvent applications', 'Gasoline blending']
  },
  { 
    name: 'Rubber Process Oil', 
    description: 'Specialized oils for rubber manufacturing, enhancing elasticity and processing characteristics.', 
    href: '/products/rubber-process-oil', 
    icon: <Factory className="w-6 h-6" />,
    slug: 'rubber-process-oil',
    backgroundImage: rubberOilImg,
    fullDescription: 'Rubber Process Oils are specialty petroleum products designed specifically for the rubber manufacturing industry. They improve the processing characteristics of rubber compounds and enhance the physical properties of finished products.',
    uses: ['Tire manufacturing', 'Rubber goods production', 'Industrial rubber products', 'Automotive components', 'Consumer rubber products']
  },
  { 
    name: 'White Spirit', 
    description: 'Industrial-grade solvent for paints, coatings, cleaning agents, and degreasing applications.', 
    href: '/products/white-spirit', 
    icon: <FlaskConical className="w-6 h-6" />,
    slug: 'white-spirit',
    backgroundImage: whiteSpiritImg,
    fullDescription: 'White Spirit is a petroleum-derived clear liquid commonly used as a solvent in the paint and coatings industry. Our white spirit meets international purity standards and is ideal for thinning paints, cleaning brushes, and industrial degreasing.',
    uses: ['Paint thinning', 'Surface cleaning', 'Degreasing applications', 'Coating production', 'Industrial cleaning']
  },
  { 
    name: 'Glycols', 
    description: 'Essential chemicals for antifreeze, coolants, and various industrial chemical processes.', 
    href: '/products/glycols', 
    icon: <Beaker className="w-6 h-6" />,
    slug: 'glycols',
    backgroundImage: glycolsImg,
    fullDescription: 'Glycols are essential industrial chemicals with excellent thermal properties and versatility. We supply both Mono Ethylene Glycol (MEG) and Diethylene Glycol (DEG) for various industrial applications.',
    uses: ['Antifreeze production', 'Coolant manufacturing', 'Polyester fiber production', 'PET resin manufacturing', 'Industrial processes']
  },
  { 
    name: 'Lubricant Oil', 
    description: 'High-performance lubricants for machinery, engines, and industrial equipment maintenance.', 
    href: '/products/lubricant-oil', 
    icon: <Cylinder className="w-6 h-6" />,
    slug: 'lubricant-oil',
    backgroundImage: lubricantOilImg,
    fullDescription: 'Lubricant oils are essential for the smooth operation and longevity of machinery and engines. Our range includes high-quality base oils and finished lubricants suitable for various industrial and automotive applications.',
    uses: ['Engine lubrication', 'Industrial machinery', 'Hydraulic systems', 'Gear systems', 'Automotive applications']
  },
  { 
    name: 'Paraffin Oil', 
    description: 'Refined mineral oils for pharmaceutical, cosmetic, and industrial applications.', 
    href: '/products/paraffin-oil', 
    icon: <Leaf className="w-6 h-6" />,
    slug: 'paraffin-oil',
    backgroundImage: paraffinOilImg,
    fullDescription: 'Paraffin oil is a highly refined mineral oil with excellent purity and stability. It finds applications across various industries including pharmaceuticals, cosmetics, and industrial manufacturing.',
    uses: ['Pharmaceutical formulations', 'Cosmetic products', 'Candle manufacturing', 'Food processing', 'Industrial applications']
  },
  { 
    name: 'Used Cooking Oil', 
    description: 'Recycled cooking oils for biodiesel production and sustainable energy applications.', 
    href: '/products/used-cooking-oil', 
    icon: <Utensils className="w-6 h-6" />,
    slug: 'used-cooking-oil',
    backgroundImage: usedCookingOilImg,
    fullDescription: 'Used Cooking Oil (UCO) is collected and processed for recycling into biodiesel and other sustainable applications. This eco-friendly resource contributes to circular economy initiatives and renewable energy production.',
    uses: ['Biodiesel production', 'Renewable energy', 'Animal feed production', 'Industrial oleochemicals', 'Sustainable fuel alternatives']
  },
];

const Products = () => {
  return (
    <Layout>
      <SEO
        title="Petrochemical Products"
        description="Explore HALAR PETROCHEM's comprehensive range of petrochemical products including fuel oil, gas oil, naphtha, white spirit, glycols, and more. Quality products for industrial applications."
        keywords="petrochemical products, fuel oil, gas oil, naphtha, white spirit, glycols, lubricant oil, UAE petrochemicals"
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
      
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container-custom relative z-10">
          <Breadcrumbs items={[{ label: 'Products' }]} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Petrochemical <span className="text-gold">Products</span>
            </h1>
            <p className="text-lg text-white/90">
              Discover our comprehensive range of high-quality petrochemical products designed 
              to meet the diverse needs of industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Our Product Portfolio
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From fuel oils to specialty chemicals, we offer products that meet international 
                quality standards and specifications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard 
                key={product.name} 
                name={product.name}
                description={product.description}
                href={product.href}
                icon={product.icon}
                index={index}
                backgroundImage={product.backgroundImage}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Can't find exactly what you're looking for? Contact us to discuss your specific 
                requirements and discover how we can help.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Our Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Products;