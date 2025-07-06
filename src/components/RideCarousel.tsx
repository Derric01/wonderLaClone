import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RideCard from './RideCard';
import { Ride, RideCategory } from '@/types/ride';

interface RideCarouselProps {
  rides: Ride[];
  categories: RideCategory[];
}

const RideCarousel: React.FC<RideCarouselProps> = ({ rides, categories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('land');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredRides = rides.filter(ride => ride.category === selectedCategory);
  const visibleRides = 4;
  const maxIndex = Math.max(0, filteredRides.length - visibleRides);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentIndex(0);
    setIsAutoPlaying(true);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 px-4 overflow-hidden particles-bg">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-wonderla-blue/30 via-blue-800/40 to-indigo-900/50 animate-gradient gradient-animate" />
        
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`shape-${index}`}
            className="absolute opacity-10"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1, 0.8, 1],
              rotate: [0, 180, 360],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              background: `linear-gradient(45deg, #FCD34D, #3B82F6, #8B5CF6)`,
              borderRadius: index % 2 === 0 ? '50%' : '0%',
            }}
          />
        ))}
        
        {/* Sparkle Effects */}
        {Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={`sparkle-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              delay: index * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-wonderla-yellow" />
          </motion.div>
        ))}
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-wonderla-yellow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-1000 opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white rounded-full animate-pulse delay-500 opacity-30"></div>
        <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-wonderla-yellow rounded-full animate-ping delay-2000 opacity-50"></div>
        
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-wonderla-yellow rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Category Navigation */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center glass rounded-2xl p-3 gap-3 shadow-2xl">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-xl transition-all duration-500 relative overflow-hidden ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-wonderla-yellow to-yellow-400 text-wonderla-blue shadow-xl scale-105'
                    : 'text-white hover:bg-white/20 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {selectedCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-wonderla-yellow to-yellow-400 rounded-xl"
                    layoutId="activeCategory"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <span className="text-2xl relative z-10">{category.icon}</span>
                <div className="text-left relative z-10">
                  <div className="font-bold text-lg">{category.name}</div>
                  <div className="text-sm opacity-80">{category.rides} Epic Rides</div>
                </div>
                {selectedCategory === category.id && (
                  <Sparkles className="w-5 h-5 relative z-10 animate-pulse" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Title Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-wonderla-yellow to-blue-400 mb-6 leading-tight neon-glow hover-lift"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(252, 211, 77, 0.8)"
            }}
            transition={{ duration: 0.3 }}
            style={{
              filter: "drop-shadow(0 0 10px rgba(252, 211, 77, 0.5))"
            }}
          >
            OUR ICONIC RIDES
          </motion.h2>
          <motion.div 
            className="w-32 h-2 bg-gradient-to-r from-wonderla-yellow via-blue-400 to-wonderla-yellow mx-auto rounded-full mb-4"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.p
            className="text-blue-200 text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Experience heart-pounding thrills and unforgettable adventures at India's premier amusement parks
          </motion.p>
        </motion.div>

        {/* Enhanced Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Premium Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-wonderla-yellow to-yellow-400 hover:from-yellow-400 hover:to-wonderla-yellow text-wonderla-blue rounded-2xl w-16 h-16 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-wonderla-yellow to-yellow-400 hover:from-yellow-400 hover:to-wonderla-yellow text-wonderla-blue rounded-2xl w-16 h-16 shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Enhanced Carousel Track */}
          <motion.div 
            ref={carouselRef}
            className="flex transition-all duration-700 ease-out gap-8 px-20 py-8"
            style={{
              transform: `translateX(-${currentIndex * (320 + 32)}px)`
            }}
            layout
          >
            {filteredRides.map((ride, index) => (
              <RideCard 
                key={`${selectedCategory}-${ride.id}`}
                ride={ride} 
                index={index}
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="wonderla" 
              size="lg"
              className="px-16 py-6 text-xl font-black rounded-2xl bg-gradient-to-r from-wonderla-yellow via-yellow-400 to-wonderla-yellow hover:from-yellow-400 hover:to-yellow-300 shadow-2xl hover:shadow-3xl transform transition-all duration-500 animate-pulse-glow"
            >
              <span className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 animate-spin" />
                Explore All Epic Rides!
                <Sparkles className="w-6 h-6 animate-spin" />
              </span>
            </Button>
          </motion.div>
          
          <motion.p
            className="text-blue-300 mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Join millions of thrill-seekers who have experienced the magic ✨
          </motion.p>
        </motion.div>

        {/* Enhanced Pagination Dots */}
        <motion.div 
          className="flex justify-center mt-12 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`rounded-full transition-all duration-500 ${
                currentIndex === index 
                  ? 'w-12 h-4 bg-gradient-to-r from-wonderla-yellow to-yellow-400 shadow-lg' 
                  : 'w-4 h-4 bg-white/40 hover:bg-white/60'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RideCarousel;
