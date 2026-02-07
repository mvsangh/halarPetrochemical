import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const products = [
  { name: 'Fuel Oil', href: '/products/fuel-oil' },
  { name: 'Gas Oil', href: '/products/gas-oil' },
  { name: 'Naphtha', href: '/products/naphtha' },
  { name: 'White Spirit', href: '/products/white-spirit' },
  { name: 'Glycols', href: '/products/glycols' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Contact', href: '/contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src={logo} 
                alt="HALAR PETROCHEM FZC" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading supplier and exporter of premium petrochemical products, 
              serving industries worldwide with excellence and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.name}>
                  <Link
                    to={product.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Ras Al Khaimah Free Trade Zone,<br />
                  United Arab Emirates
                </span>
              </li>
              <li>
                <a
                  href="mailto:info@halarpetrochem.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  info@halarpetrochem.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+971000000000"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  +971 00 000 0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} HALAR PETROCHEM FZC. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/about" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-primary-foreground/60 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
