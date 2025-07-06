import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Trophy, Users } from 'lucide-react';
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
  const visibleRides = 4; // Number of cards visible at once
  const maxIndex = Math.max(0, filteredRides.length - visibleRides);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

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
    <div className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-wonderla-yellow rounded-full opacity-30"
            animate={{
              y: [-20, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-wonderla-yellow" />
            <span className="text-wonderla-yellow font-bold tracking-wider uppercase">Premium Experiences</span>
            <Star className="w-6 h-6 text-wonderla-yellow" />
          </div>
          
          <h2 className="text-6xl font-black text-white mb-6 relative">
            <span className="bg-gradient-to-r from-white via-wonderla-yellow to-white bg-clip-text text-transparent">
              OUR ICONIC RIDES
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-wonderla-yellow to-transparent mx-auto mb-6"></div>
          
          <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Discover heart-pounding adventures and unforgettable thrills across our world-class attractions. 
            Each ride is designed to create memories that last a lifetime.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-wonderla-yellow" />
              <div>
                <div className="text-2xl font-black text-white">60+</div>
                <div className="text-blue-200 font-medium">Thrilling Rides</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-wonderla-yellow" />
              <div>
                <div className="text-2xl font-black text-white">50M+</div>
                <div className="text-blue-200 font-medium">Happy Guests</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-wonderla-yellow" />
              <div>
                <div className="text-2xl font-black text-white">4.5/5</div>
                <div className="text-blue-200 font-medium">Guest Rating</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-2 gap-2 border border-white/20">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 font-bold ${
                  selectedCategory === category.id
                    ? 'bg-wonderla-yellow text-wonderla-blue shadow-xl scale-105'
                    : 'text-white hover:bg-white/20 hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-2xl">{category.icon}</span>
                <div className="text-left">
                  <div className="font-black text-lg">{category.name}</div>
                  <div className="text-sm opacity-80">{category.rides} Rides</div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-3xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-wonderla-yellow/95 hover:bg-wonderla-yellow text-wonderla-blue rounded-full w-14 h-14 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-7 h-7" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-wonderla-yellow/95 hover:bg-wonderla-yellow text-wonderla-blue rounded-full w-14 h-14 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-7 h-7" />
          </Button>

          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-out gap-8 px-20 py-8"
            style={{
              transform: `translateX(-${currentIndex * (320 + 32)}px)` // 320px card width + 32px gap
            }}
          >
            {filteredRides.map((ride, index) => (
              <RideCard 
                key={`${selectedCategory}-${ride.id}`}
                ride={ride} 
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-wonderla-yellow scale-125 shadow-lg' 
                  : 'bg-white/40 hover:bg-white/60 hover:scale-110'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Explore All Rides Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            variant="wonderla" 
            size="lg"
            className="px-12 py-6 text-xl font-black rounded-full shadow-2xl hover:shadow-3xl bg-gradient-to-r from-wonderla-yellow to-yellow-400 hover:from-yellow-400 hover:to-wonderla-yellow transform hover:scale-105 transition-all duration-300"
          >
            <Star className="mr-3 w-6 h-6" />
            Explore All Rides!
            <ChevronRight className="ml-3 w-6 h-6" />
          </Button>
          
          <p className="text-blue-200 mt-4 text-lg">
            Ready for the ultimate adventure? Book your tickets now!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RideCarousel;
