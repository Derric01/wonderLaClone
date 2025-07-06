import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  
  const floatingImages = [
    { src: '/bg.jfif', alt: 'Wonderla Background', x: 10, y: 20, size: 'w-20 h-20' },
    { src: '/giantwheel.jpeg', alt: 'Giant Wheel', x: 80, y: 15, size: 'w-16 h-16' },
    { src: '/recoil.jfif', alt: 'Recoil Ride', x: 15, y: 70, size: 'w-18 h-18' },
    { src: '/reverse_recoil.jpeg', alt: 'Reverse Recoil', x: 75, y: 80, size: 'w-20 h-20' },
    { src: '/sky_tilt.jpeg', alt: 'Sky Tilt', x: 50, y: 10, size: 'w-16 h-16' },
    { src: '/termite_train.jfif', alt: 'Termite Train', x: 85, y: 50, size: 'w-18 h-18' },
    { src: '/wavepool.jpeg', alt: 'Wave Pool', x: 20, y: 45, size: 'w-20 h-20' },
  ];

  const staticElements = [
    { emoji: '⭐', x: 25, y: 25, delay: 0.5 },
    { emoji: '✨', x: 70, y: 35, delay: 1.5 },
    { emoji: '🎭', x: 40, y: 85, delay: 2.5 },
    { emoji: '🎪', x: 60, y: 60, delay: 3.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Draggable Floating Images */}
      {floatingImages.map((image, index) => (
        <motion.div
          key={`image-${index}`}
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0.6, 0.8],
            scale: [0, 1.1, 1, 1.05, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            delay: index * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          whileHover={{ 
            scale: 1.2, 
            rotate: 10, 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          whileDrag={{ 
            scale: 1.3, 
            rotate: 15,
            zIndex: 1000
          }}
          className={`absolute ${image.size} pointer-events-auto cursor-move rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}
          style={{
            left: `${image.x}%`,
            top: `${image.y}%`,
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded-xl border-2 border-white/30"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
        </motion.div>
      ))}

      {/* Static Emoji Elements */}
      {staticElements.map((element, index) => (
        <motion.div
          key={`emoji-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0.7, 1],
            scale: [0, 1.2, 1, 1.1, 1],
            y: [0, -20, 0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute text-4xl opacity-20 hover:opacity-60 transition-opacity pointer-events-none"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
      
      {/* Enhanced Floating Bubbles */}
      {Array.from({ length: 15 }).map((_, index) => (
        <motion.div
          key={`bubble-${index}`}
          initial={{ opacity: 0, scale: 0, y: typeof window !== 'undefined' ? window.innerHeight : 800 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0, 1.5, 0],
            y: -150,
            x: [0, Math.random() * 150 - 75, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: index * 0.6,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${12 + Math.random() * 8}px`,
            height: `${12 + Math.random() * 8}px`,
            background: `linear-gradient(45deg, #FCD34D, #3B82F6, #8B5CF6)`,
          }}
        />
      ))}

      {/* Magical Sparkles */}
      {Array.from({ length: 20 }).map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-2 h-2 bg-wonderla-yellow rounded-full pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px #FCD34D'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
