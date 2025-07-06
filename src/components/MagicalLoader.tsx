import React from 'react';
import { motion } from 'framer-motion';

const MagicalLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-wonderla-blue via-purple-900 to-wonderla-blue flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #FCD34D 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #3B82F6 0%, transparent 50%)',
              'radial-gradient(circle at 40% 50%, #8B5CF6 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      {/* Main Loader */}
      <div className="relative z-10 text-center">
        {/* Spinning Wonderla Logo */}
        <motion.div
          className="relative mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-24 h-24 bg-wonderla-yellow rounded-full flex items-center justify-center text-4xl font-black text-wonderla-blue shadow-2xl">
            W
          </div>
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-white/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          className="text-4xl font-black text-white mb-4"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          WONDERLA
        </motion.h2>

        <motion.p
          className="text-wonderla-yellow text-lg font-semibold"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Amazing Experiences...
        </motion.p>

        {/* Loading Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mt-6">
          <motion.div
            className="h-full bg-gradient-to-r from-wonderla-yellow to-white rounded-full"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>

      {/* Floating Elements */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-white/20 rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default MagicalLoader;
