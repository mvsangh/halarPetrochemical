import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SplitText from '@/components/ui/SplitText';

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
  backgroundImage?: string;
  category?: string;
}

const ProductCard = ({ name, description, href, icon, index, backgroundImage, category }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={href}
        className="group block h-full bg-background border border-secondary/20 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
      >
        {/* Image Section - Top */}
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary/5">
          {backgroundImage && (
            <img
              src={backgroundImage}
              alt={name}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
          )}
          {/* Subtle Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

          {/* Icon - Overlaid on Image */}
          <div className="absolute top-4 left-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-background/90 backdrop-blur-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
              {icon}
            </div>
          </div>
        </div>

        {/* Content Section - Bottom */}
        <div className="p-8 flex flex-col flex-1 relative">
          {/* Red line animation above content */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-primary/20 overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-primary origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {category && (
            <span className="inline-block px-3 py-1 mb-4 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-[0.2em] rounded-full w-fit">
              {category}
            </span>
          )}

          <h3 className="text-xl font-black text-primary mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">
            <SplitText text={name} className="flex" />
          </h3>

          <p className="text-foreground/70 text-sm leading-relaxed flex-1 mb-6">
            {description}
          </p>

          <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
            Explore Specifications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductCard;
