import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img
            src="https://ik.imagekit.io/ko0ec3rfg/Gemini_Generated_Image_a3cqrha3cqrha3cq.png?updatedAt=1761920418345&tr=w-50,h-50,fo-auto,q-80"
            alt="Sherihan Mounir Profile"
            className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
            loading="eager"
          />
          <span className="font-serif text-lg font-bold tracking-wide hidden sm:block">
            SHERIHAN MOUNIR
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-accent transition-colors duration-300 font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('portfolio')}
            className="text-white hover:text-accent transition-colors duration-300 font-medium"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white hover:text-accent transition-colors duration-300 font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/98 backdrop-blur-lg border-t border-white/10"
        >
          <nav className="flex flex-col p-6 gap-4">
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-left py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-left py-2"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-accent transition-colors duration-300 font-medium text-left py-2"
            >
              Contact
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
