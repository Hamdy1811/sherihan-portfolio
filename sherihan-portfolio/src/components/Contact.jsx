import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-900 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-title text-white mb-6"
        >
          Let's Create Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ready to elevate your brand's visual identity? Let's discuss how we can 
          bring your creative vision to life.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <motion.a
            href="mailto:sherihanmounir26@gmail.com"
            whileHover={{ y: -4, boxShadow: '0 20px 50px rgba(255, 107, 53, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            sherihanmounir26@gmail.com
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/sherihan-mounir-5b9ab3154"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4, backgroundColor: '#ffffff', color: '#000000' }}
            whileTap={{ scale: 0.98 }}
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            LinkedIn Profile
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-gray-400 space-y-2"
        >
          <p>📍 Cairo, Egypt</p>
          <p>📱 +20 109 903 3069</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
