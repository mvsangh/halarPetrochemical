import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
  backgroundImage?: string;
}

const ProductCard = ({ name, description, href, icon, index, backgroundImage }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={href}
        className="group block h-full bg-card border border-border rounded-xl overflow-hidden card-hover flex flex-col"
      >
        {/* Image Section - Top */}
        <div className="relative h-48 overflow-hidden bg-secondary">
          {backgroundImage && (
            <div 
              className="absolute inset-0 group-hover:scale-110 transition-transform duration-500"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
          
          {/* Icon - Overlaid on Image */}
          <div className="absolute inset-0 flex items-end justify-start p-4">
            <div className="w-16 h-16 rounded-lg bg-white/90 flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors shadow-lg">
              {icon}
            </div>
          </div>
        </div>

        {/* Content Section - Bottom */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-muted-foreground text-sm flex-1 mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
