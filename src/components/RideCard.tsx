import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import { Ride } from '@/types/ride';

interface RideCardProps {
  ride: Ride;
  index: number;
}

const RideCard: React.FC<RideCardProps> = ({ ride, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.3 }
      }}
      className="flex-shrink-0 w-80 h-[420px] perspective-1000"
    >
      <Card className="h-full overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 rounded-2xl group transform-gpu">
        {/* Image Section with Gradient Overlay */}
        <div className="relative h-56 overflow-hidden rounded-t-2xl">
          <motion.img
            src={ride.image}
            alt={ride.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          />
          
          {/* Beautiful Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-yellow-400/10" />
          
          {/* Floating Category Badge */}
          <motion.div 
            className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-wonderla-blue shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {ride.category.toUpperCase()}
          </motion.div>

          {/* Rating Stars */}
          <motion.div 
            className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </motion.div>

          {/* Sparkle Effects */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Content Section */}
        <CardContent className="p-6 h-[164px] flex flex-col justify-between bg-gradient-to-br from-white to-blue-50/30">
          <div className="space-y-3">
            {/* Title with Animation */}
            <motion.h3 
              className="text-xl font-bold text-wonderla-blue leading-tight group-hover:text-blue-600 transition-colors duration-300"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              {ride.title}
            </motion.h3>
            
            {/* Location with Icon */}
            <motion.div 
              className="flex items-center gap-2 text-gray-600"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.7 }}
            >
              <MapPin className="w-4 h-4 text-wonderla-yellow" />
              <span className="text-sm font-medium">{ride.location}</span>
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
          
          {/* Action Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.9 }}
          >
            <Button 
              variant="wonderla" 
              className="w-full rounded-xl font-bold text-sm py-3 bg-gradient-to-r from-wonderla-yellow to-yellow-400 hover:from-yellow-400 hover:to-wonderla-yellow text-wonderla-blue shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300"
            >
              🎢 RIDE DETAILS
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RideCard;
