import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    children: [
      { name: 'Fuel Oil', href: '/products/fuel-oil' },
      { name: 'Gas Oil', href: '/products/gas-oil' },
      { name: 'Mix Hydrocarbon Oil', href: '/products/mix-hydrocarbon-oil' },
      { name: 'Naphtha', href: '/products/naphtha' },
      { name: 'Rubber Process Oil', href: '/products/rubber-process-oil' },
      { name: 'White Spirit', href: '/products/white-spirit' },
      { name: 'Glycols', href: '/products/glycols' },
      { name: 'Lubricant Oil', href: '/products/lubricant-oil' },
      { name: 'Paraffin Oil', href: '/products/paraffin-oil' },
      { name: 'Used Cooking Oil', href: '/products/used-cooking-oil' },
    ],
  },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if scanned down or up for visibility
      if (currentScrollY > lastScrollY && currentScrollY > 70) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        bg-background/95 backdrop-blur-md
        ${isScrolled ? 'shadow-md' : ''}
      `}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.children && location.pathname.startsWith('/products'));

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 font-medium transition-colors
                      ${isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'}
                    `}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-card rounded-lg shadow-xl border border-border overflow-hidden"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-4 py-2.5 text-sm text-foreground/80 hover:bg-secondary hover:text-primary"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            <Link to="/contact" className="btn-accent text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-card border-t border-border overflow-hidden"
            >
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 font-medium text-foreground hover:bg-secondary"
                  >
                    {item.name}
                  </Link>

                  {item.children && (
                    <div className="pl-6">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="p-4">
                <Link to="/contact" className="btn-accent block text-center">
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
