import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        <h1 className="hero-title text-white mb-6">
          FASHION
          <br />
          STYLIST
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Transforming fashion narratives through visual storytelling, brand identity, 
          and artistic direction with 10+ years of expertise
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('portfolio')}
            className="bg-white text-black px-10 py-4 text-lg font-semibold hover:shadow-2xl transition-shadow duration-300"
          >
            View Portfolio
          </motion.button>
          
          <motion.button
            whileHover={{ y: -2, backgroundColor: '#ffffff', color: '#000000' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection('contact')}
            className="border-2 border-white text-white px-10 py-4 text-lg font-semibold transition-all duration-300"
          >
            Get In Touch
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
