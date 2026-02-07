import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}

const ProductCard = ({ name, description, href, icon, index }: ProductCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={href}
        className="group block h-full bg-card border border-border rounded-xl p-6 card-hover"
      >
        <div className="flex flex-col h-full">
          <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            {icon}
          </div>
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
