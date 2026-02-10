import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

const Breadcrumb = ({ items, dark = false }: BreadcrumbProps) => {
  const textColor = dark ? "text-white/80 hover:text-white" : "text-muted-foreground hover:text-primary";
  const chevronColor = dark ? "text-white/60" : "text-muted-foreground";
  const spanColor = dark ? "text-white" : "text-foreground";
  
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link 
            to="/" 
            className={`flex items-center gap-1 ${textColor} transition-colors`}
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className={`w-4 h-4 ${chevronColor}`} />
            {item.href ? (
              <Link 
                to={item.href}
                className={`${textColor} transition-colors`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`font-medium ${spanColor}`}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
