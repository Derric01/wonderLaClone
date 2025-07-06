import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoSectionProps {
  videos: Array<{
    id: string;
    title: string;
    videoUrl: string;
    thumbnail: string;
    description: string;
  }>;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const convertYouTubeUrl = (url: string) => {
    const videoId = url.split('/shorts/')[1]?.split('?')[0] || url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=1&rel=0&modestbranding=1&playsinline=1`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-wonderla-blue to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            🎥 EXPERIENCE THE THRILL
          </h2>
          <p className="text-xl text-blue-200 mb-6">
            Watch our most exciting rides in action!
          </p>
          <div className="w-32 h-1 bg-wonderla-yellow mx-auto rounded-full"></div>
        </motion.div>

        {/* Video Controls */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            onClick={() => setIsMuted(!isMuted)}
            variant="wonderla"
            className="flex items-center gap-2 px-6 py-3 rounded-full font-bold"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            {isMuted ? 'Unmute Videos' : 'Mute Videos'}
          </Button>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                {activeVideo === video.id ? (
                  <div className="aspect-video relative">
                    <iframe
                      src={convertYouTubeUrl(video.videoUrl)}
                      title={video.title}
                      className="w-full h-full rounded-t-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <Button
                      onClick={() => setActiveVideo(null)}
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <Pause className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="aspect-video relative cursor-pointer" onClick={() => setActiveVideo(video.id)}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-wonderla-yellow text-wonderla-blue rounded-full p-4 shadow-lg"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </motion.div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                        <span className="text-sm font-bold text-wonderla-blue">▶ Play Video</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-wonderla-blue mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            variant="wonderla" 
            size="lg"
            className="px-12 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl"
          >
            🎬 Watch All Ride Videos
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
