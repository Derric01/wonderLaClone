import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Grid3X3, List, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RideCard from './RideCard';
import { Ride } from '@/types/ride';

interface RideCarouselProps {
  rides: Ride[];
  categories: any[];
}

const RideCarousel: React.FC<RideCarouselProps> = ({ rides, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  // Premium parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  
  // Filter rides based on selected category
  const filteredRides = selectedCategory === 'all' 
    ? rides 
    : rides.filter(ride => ride.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || viewMode === 'grid') return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => 
        prev >= filteredRides.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredRides.length, isAutoPlay, viewMode]);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex(prev => 
      prev <= 0 ? filteredRides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prev => 
      prev >= filteredRides.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section 
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      style={{ y, scale }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0 bg-repeat"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FCD34D' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-wonderla-yellow/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-wonderla-yellow" />
            <span className="text-white font-semibold">Premium Experiences</span>
          </motion.div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-wonderla-yellow to-white bg-clip-text text-transparent">
              THRILLING
            </span>
            <br />
            <span className="text-wonderla-yellow">ADVENTURES</span>
          </h2>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Discover heart-pounding rides, splash into water adventures, and create 
            unforgettable memories with our world-class attractions.
          </p>
        </motion.div>

        {/* Controls Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <Button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-wonderla-yellow text-wonderla-blue shadow-lg scale-105'
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              All Rides
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id || category}
                onClick={() => setSelectedCategory(category.id || category)}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 capitalize ${
                  selectedCategory === (category.id || category)
                    ? 'bg-wonderla-yellow text-wonderla-blue shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.name || category}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-4">
            <div className="flex bg-white/10 backdrop-blur-sm rounded-full p-1">
              <Button
                onClick={() => setViewMode('carousel')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  viewMode === 'carousel'
                    ? 'bg-wonderla-yellow text-wonderla-blue'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-wonderla-yellow text-wonderla-blue'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Rides Display */}
        <AnimatePresence mode="wait">
          {viewMode === 'carousel' ? (
            /* Carousel View */
            <motion.div
              key="carousel"
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Navigation Arrows */}
              <Button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-0 shadow-2xl"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              
              <Button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-0 shadow-2xl"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Carousel Container */}
              <div 
                ref={containerRef}
                className="overflow-hidden rounded-3xl"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
              >
                <motion.div
                  className="flex gap-6 py-8"
                  animate={{
                    x: `-${currentIndex * (320 + 24)}px`
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  {filteredRides.map((ride, index) => (
                    <motion.div
                      key={ride.id}
                      className="flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: index === currentIndex ? 1.05 : 1,
                      }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.1 
                      }}
                    >
                      <RideCard ride={ride} index={index} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-8 gap-3">
                {filteredRides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-wonderla-yellow scale-125 shadow-lg'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            /* Grid View */
            <motion.div
              key="grid"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredRides.map((ride, index) => (
                <motion.div
                  key={ride.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <RideCard ride={ride} index={index} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '60+', label: 'Amazing Rides', icon: '🎢' },
            { number: '25+', label: 'Years Experience', icon: '⭐' },
            { number: '50M+', label: 'Happy Visitors', icon: '👥' },
            { number: '4', label: 'Locations', icon: '📍' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-black text-wonderla-yellow mb-1 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RideCarousel;
