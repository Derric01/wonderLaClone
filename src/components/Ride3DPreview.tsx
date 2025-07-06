import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Ride3DPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  ride: {
    title: string;
    description: string;
    image: string;
    video?: string;
    stats: {
      height: string;
      speed: string;
      duration: string;
      capacity: string;
    };
  };
}

const Ride3DPreview: React.FC<Ride3DPreviewProps> = ({ isOpen, onClose, ride }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative max-w-6xl w-full bg-gradient-to-br from-white via-blue-50 to-yellow-50 rounded-3xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.5, rotateY: -45 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0.5, rotateY: 45 }}
          transition={{ type: "spring", damping: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-600 rounded-full"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="grid lg:grid-cols-2 gap-0 h-[80vh] max-h-[600px]">
            {/* Media Section */}
            <div className="relative bg-black rounded-l-3xl overflow-hidden">
              {!isPlaying ? (
                <div className="relative h-full">
                  <img 
                    src={ride.image} 
                    alt={ride.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {ride.video && (
                    <motion.button
                      className="absolute inset-0 flex items-center justify-center group"
                      onClick={() => setIsPlaying(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="bg-wonderla-yellow text-wonderla-blue p-6 rounded-full shadow-2xl group-hover:bg-yellow-400 transition-colors">
                        <Play className="w-12 h-12 ml-1" />
                      </div>
                    </motion.button>
                  )}
                </div>
              ) : (
                <div className="relative h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${ride.video?.split('/').pop()?.split('?')[0]}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1`}
                    className="w-full h-full"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                  />
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/50 text-white hover:bg-black/70 rounded-full"
                      onClick={() => setIsMuted(!isMuted)}
                    >
                      {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-black/50 text-white hover:bg-black/70 rounded-full"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-8 flex flex-col justify-between bg-gradient-to-br from-white to-blue-50">
              <div>
                <motion.h2 
                  className="text-4xl font-black text-wonderla-blue mb-4"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {ride.title}
                </motion.h2>
                
                <motion.p 
                  className="text-gray-700 text-lg leading-relaxed mb-8"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {ride.description}
                </motion.p>

                {/* Stats Grid */}
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="bg-gradient-to-br from-wonderla-yellow to-yellow-400 p-4 rounded-xl text-wonderla-blue">
                    <div className="text-2xl font-black">{ride.stats.height}</div>
                    <div className="text-sm font-semibold">HEIGHT</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-wonderla-blue p-4 rounded-xl text-white">
                    <div className="text-2xl font-black">{ride.stats.speed}</div>
                    <div className="text-sm font-semibold">MAX SPEED</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-xl text-white">
                    <div className="text-2xl font-black">{ride.stats.duration}</div>
                    <div className="text-sm font-semibold">DURATION</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-xl text-white">
                    <div className="text-2xl font-black">{ride.stats.capacity}</div>
                    <div className="text-sm font-semibold">CAPACITY</div>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="flex space-x-4 pt-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="flex-1 bg-wonderla-yellow text-wonderla-blue font-black py-3 rounded-xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                  BOOK THIS RIDE
                </Button>
                <Button variant="outline" className="flex-1 border-wonderla-blue text-wonderla-blue py-3 rounded-xl hover:bg-wonderla-blue hover:text-white transition-all duration-300">
                  VIEW LOCATION
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Ride3DPreview;
