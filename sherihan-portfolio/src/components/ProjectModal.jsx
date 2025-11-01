import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Handle ESC key to close
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="bg-zinc-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-8 pb-6 border-b border-zinc-700">
            <div>
              <h2 className="font-serif text-4xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-accent text-lg font-semibold">{project.role}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Close modal"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Body - Two Column Layout on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Images */}
            <div className="space-y-3">
              <img
                src={project.images[0]}
                alt={`${project.title} - Main`}
                className="w-full h-80 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="grid grid-cols-2 gap-3">
                <img
                  src={project.images[1]}
                  alt={`${project.title} - Detail 1`}
                  className="w-full h-40 object-cover rounded-lg"
                  loading="lazy"
                />
                <img
                  src={project.images[2]}
                  alt={`${project.title} - Detail 2`}
                  className="w-full h-40 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="space-y-6">
              {/* Concept */}
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Concept
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.concept}
                </p>
              </div>

              {/* Execution */}
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Execution
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.execution}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-700 pt-6">
                {/* Mood */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-1">Mood</h4>
                  <p className="text-gray-400 text-sm">{project.mood}</p>
                </div>

                {/* Aesthetic */}
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-1">Aesthetic</h4>
                  <p className="text-gray-400 text-sm">{project.aesthetic}</p>
                </div>

                {/* Product Focus */}
                <div>
                  <h4 className="text-white font-semibold mb-1">Product Focus</h4>
                  <p className="text-gray-400 text-sm">{project.productFocus}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
