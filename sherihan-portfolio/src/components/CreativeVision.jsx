import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CreativeVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const title = "FASHION STYLIST";
  const skills = [
    "Creative Direction",
    "Visual Merchandising",
    "Brand Strategy",
    "Photography Direction"
  ];

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: 'easeOut'
      }
    })
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="about" ref={ref} className="bg-black py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Animated Title */}
        <h2 className="section-title text-white mb-12 text-center">
          {title.split('').map((letter, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={letterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="inline-block"
              style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-8 mb-12">
          <motion.p
            custom={0.8}
            variants={paragraphVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg text-gray-300 leading-relaxed"
          >
            Transforming fashion narratives through visual storytelling, brand identity, 
            and artistic direction with 10+ years of expertise.
          </motion.p>

          <motion.p
            custom={1.0}
            variants={paragraphVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg text-gray-300 leading-relaxed"
          >
            As a Fashion Stylist with over 10 years in fashion and visual merchandising, 
            I specialize in transforming brand narratives through compelling visual storytelling. 
            My expertise spans from conceptualizing seasonal campaigns and directing photoshoots 
            to managing visual identity across digital and print platforms. I lead cross-functional 
            teams to ensure brand consistency while pushing creative boundaries.
          </motion.p>

          <motion.p
            custom={1.2}
            variants={paragraphVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-lg text-gray-300 leading-relaxed"
          >
            From the editorial minimalism of "Urban Canvas" to the vibrant energy of "Color Block City," 
            each project reflects my commitment to elevating brand aesthetics while maintaining 
            strategic alignment with business objectives.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              custom={1.4 + (index * 0.1)}
              variants={skillVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="py-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center"
            >
              <span className="text-lg font-semibold text-white">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeVision;
