import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Eye, Heart, Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { Ride } from '@/types/ride';
import Ride3DPreview from './Ride3DPreview';

interface RideCardProps {
  ride: Ride;
  index: number;
}

const RideCard: React.FC<RideCardProps> = ({ ride, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Premium 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = (event.clientX - centerX) / (rect.width / 2);
    const mouseY = (event.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x: mouseX, y: mouseY });
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const rideStats = {
    height: '150ft',
    speed: '80 km/h',
    duration: '3 min',
    capacity: '24 ppl'
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ 
          scale: 1.05,
          z: 100,
          transition: { duration: 0.3 }
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="flex-shrink-0 w-72 sm:w-80 h-[450px] relative group cursor-pointer"
        onClick={() => setIsPreviewOpen(true)}
      >
        <Card className="h-full overflow-hidden premium-card card-hover-lift border-0 rounded-2xl group transform-gpu relative">
          {/* Image Section with Enhanced Effects */}
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <motion.img
              src={ride.image}
              alt={ride.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              style={{
                transform: isHovered 
                  ? `scale(1.1) translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 10}px)` 
                  : 'scale(1)',
                transition: 'transform 0.3s ease-out'
              }}
            />
            
            {/* Beautiful Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-yellow-400/20"
              animate={{
                opacity: isHovered ? [0.2, 0.5, 0.2] : 0.2,
              }}
              transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
            />
            
            {/* Floating Category Badge */}
            <motion.div 
              className="absolute top-4 left-4 px-3 py-1 glass-effect text-white rounded-full text-xs font-bold shadow-lg"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              whileHover={{ scale: 1.1 }}
            >
              {ride.category.toUpperCase()}
            </motion.div>

            {/* Enhanced Rating Stars */}
            <motion.div 
              className="absolute top-4 right-4 flex items-center gap-1 glass-effect rounded-full px-3 py-1"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                </motion.div>
              ))}
            </motion.div>

            {/* Sparkle Effects */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${15 + (i * 8)}%`,
                    top: `${20 + (i % 4) * 20}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  <div className="w-1 h-1 bg-white rounded-full shadow-lg" />
                </motion.div>
              ))}
            </div>

            {/* Popularity Indicator */}
            <motion.div
              className="absolute bottom-4 left-4 flex items-center gap-1 glass-effect text-white rounded-full px-2 py-1 text-xs"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <TrendingUp className="w-3 h-3" />
              <span className="font-semibold">Popular</span>
            </motion.div>
          </div>
          
          {/* Enhanced Content Section */}
          <CardContent className="p-6 h-[194px] flex flex-col justify-between bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-pattern" />
            
            <div className="space-y-3 relative z-10">
              {/* Title with Premium Animation */}
              <motion.h3 
                className="text-xl font-bold text-wonderla-blue leading-tight group-hover:text-gradient-animated transition-all duration-300"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {ride.title}
              </motion.h3>
              
              {/* Location with Enhanced Icon */}
              <motion.div 
                className="flex items-center gap-2 text-gray-600"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.7 }}
              >
                <MapPin className="w-4 h-4 text-wonderla-yellow" />
                <span className="text-sm font-medium">{ride.location}</span>
              </motion.div>
              
              {/* Quick Stats */}
              <motion.div
                className="flex items-center gap-4 text-xs text-gray-500"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.75 }}
              >
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>3 min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>24 ppl</span>
                </div>
              </motion.div>
              
              {/* Description */}
              <motion.p 
                className="text-gray-700 text-sm leading-relaxed line-clamp-2"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.8 }}
              >
                {ride.description}
              </motion.p>
            </div>
            
            {/* Enhanced Action Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
            >
              <Button 
                variant="wonderla" 
                className="w-full rounded-xl font-bold text-sm py-3 btn-premium ripple-effect relative overflow-hidden"
              >
                <Eye className="mr-2 w-4 h-4" />
                EXPERIENCE NOW
              </Button>
            </motion.div>
          </CardContent>

          {/* Premium Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-wonderla-blue/90 via-purple-600/80 to-wonderla-yellow/90 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 holographic"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
          >
            <motion.div 
              className="text-center text-white p-6"
              initial={{ scale: 0.8, y: 20 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8, 
                y: isHovered ? 0 : 20 
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-12 h-12 mx-auto mb-3 text-wonderla-yellow" />
              </motion.div>
              <h3 className="text-xl font-black mb-2 neon-glow">Experience the Thrill!</h3>
              <p className="text-sm mb-4">Click to see full details & videos</p>
              <div className="flex justify-center space-x-2">
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Heart className="w-5 h-5 text-red-400" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Star className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                  <Zap className="w-5 h-5 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>

      {/* Enhanced 3D Preview Modal */}
      <Ride3DPreview
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        ride={{
          title: ride.title,
          description: ride.description,
          image: ride.image,
          video: ride.video,
          stats: rideStats
        }}
      />
    </>
  );
};

export default RideCard;
