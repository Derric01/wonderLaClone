import React from 'react';
import { motion } from 'framer-motion';

interface VideoBackgroundProps {
  videoUrl?: string;
  fallbackImage?: string;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  videoUrl, 
  fallbackImage = '/bg.jfif',
  children 
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      {videoUrl ? (
        <motion.video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          <source src={videoUrl} type="video/mp4" />
          {/* Fallback image if video fails */}
          <img src={fallbackImage} alt="Background" className="w-full h-full object-cover" />
        </motion.video>
      ) : (
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImage})` }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-wonderla-yellow/30 rounded-full"
            animate={{
              x: [0, window.innerWidth || 1920],
              y: [
                Math.random() * (window.innerHeight || 1080),
                Math.random() * (window.innerHeight || 1080)
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: -10,
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
