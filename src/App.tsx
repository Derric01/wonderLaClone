import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar, Clock, Users, Star } from 'lucide-react';
import RideCarousel from './components/RideCarousel';
import DropdownMenu from './components/DropdownMenu';
import FloatingElements from './components/FloatingElements';
import VideoSection from './components/VideoSection';
import ParticleSystem from './components/ParticleSystem';
import ScrollToTop from './components/ScrollToTop';
import MagicalLoader from './components/MagicalLoader';
import { Button } from './components/ui/button';
import { rides, rideCategories } from './data/rides';
import './index.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const videoData = [
    {
      id: 'cyclone',
      title: 'Cyclone - The Ultimate Spin',
      videoUrl: 'https://youtube.com/shorts/2DbDd9X47b8?si=lti5io33xsseBKUg',
      thumbnail: '/recoil.jfif',
      description: 'Experience the mind-bending cyclone ride that will leave you breathless!'
    },
    {
      id: 'rollercoaster',
      title: 'Roller Coaster Madness',
      videoUrl: 'https://youtube.com/shorts/FjGdFeti0vo?si=pKHgYaOAu0ClRPSR',
      thumbnail: '/reverse_recoil.jpeg',
      description: 'Take on the most thrilling roller coaster in India with loops and drops!'
    },
    {
      id: 'waterrides',
      title: 'Water Rides Paradise',
      videoUrl: 'https://youtube.com/shorts/ISDsclTxEeU?si=3cqlXIOO-tDsE_Wr',
      thumbnail: '/wavepool.jpeg',
      description: 'Splash into the coolest water rides and beat the heat in style!'
    },
    {
      id: 'equinox',
      title: 'Equinox - Gravity Defying',
      videoUrl: 'https://youtube.com/shorts/7_u24buh9Zo?si=-PdNX6Du55IuOVLM',
      thumbnail: '/sky_tilt.jpeg',
      description: 'Defy gravity with this spectacular 360-degree spinning experience!'
    },
    {
      id: 'gfall',
      title: 'G-Fall - Free Fall Terror',
      videoUrl: 'https://youtube.com/shorts/fF80j7ROjhs?si=crHA2rDcaSAyoRfb',
      thumbnail: '/giantwheel.jpeg',
      description: 'Feel the ultimate adrenaline rush with our terrifying free fall ride!'
    }
  ];

  if (isLoading) {
    return <MagicalLoader />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-wonderla-blue/20 via-purple-900/30 to-slate-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-wonderla-yellow/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Mesh Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-wonderla-yellow/30 to-orange-400/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-wonderla-blue/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* AMAZING Particle System */}
      <ParticleSystem />
      
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Enhanced Header with Glass Morphism */}
      <motion.header 
        className="relative z-20 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Premium Glass Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border-b border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-wonderla-blue/10 via-transparent to-wonderla-yellow/10"></div>
        </div>

        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/logo.png" 
                alt="Wonderla" 
                className="h-14"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='56' viewBox='0 0 150 56'%3E%3Ctext x='10' y='35' font-family='Arial, sans-serif' font-size='24' font-weight='bold' fill='%231E3A8A'%3EWonderla%3C/text%3E%3C/svg%3E";
                }}
              />
            </motion.div>
            
            {/* Mobile Menu Button */}
            <motion.button 
              className="lg:hidden bg-wonderla-blue text-white p-3 rounded-full"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
                <div className="w-6 h-0.5 bg-white rounded-full"></div>
              </div>
            </motion.button>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {[
                { name: 'PARKS', icon: '🏰' },
                { name: 'RESORTS', icon: '🏨' },
                { name: 'OFFERS', icon: '🎁' },
                { name: 'RIDES', icon: '🎢' },
                { name: 'DINING', icon: '🍽️' },
                { name: 'EVENTS', icon: '🎪' }
              ].map((item, index) => (
                <motion.a 
                  key={item.name}
                  href="#" 
                  className="group relative px-4 py-3 text-white/90 hover:text-wonderla-yellow font-bold transition-all duration-300 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-wonderla-yellow group-hover:w-full transition-all duration-300"></div>
                </motion.a>
              ))}
            </nav>
            
            {/* Book Tickets & Dropdown */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Button className="bg-gradient-to-r from-wonderla-yellow to-yellow-400 hover:from-yellow-400 hover:to-wonderla-yellow text-wonderla-blue font-black px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base">
                  <Calendar className="mr-1 md:mr-2 w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">BOOK TICKETS</span>
                  <span className="sm:hidden">BOOK</span>
                </Button>
              </motion.div>
              
              <div className="hidden lg:block">
                <DropdownMenu 
                  isOpen={isDropdownOpen} 
                  onToggle={() => setIsDropdownOpen(!isDropdownOpen)} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isDropdownOpen && (
          <motion.div 
            className="lg:hidden glass-effect border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { name: 'PARKS', icon: '🏰' },
                  { name: 'RESORTS', icon: '🏨' },
                  { name: 'OFFERS', icon: '🎁' },
                  { name: 'RIDES', icon: '🎢' },
                  { name: 'DINING', icon: '🍽️' },
                  { name: 'EVENTS', icon: '🎪' }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href="#" 
                    className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-white font-bold hover:bg-white/20 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm">{item.name}</span>
                  </motion.a>
                ))}
              </div>
              
              <Button className="w-full bg-gradient-to-r from-wonderla-yellow to-yellow-400 text-wonderla-blue font-black py-4 rounded-full shadow-lg">
                <Calendar className="mr-2 w-5 h-5" />
                BOOK TICKETS NOW
              </Button>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 hero-bg"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-wonderla-yellow font-semibold text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6 tracking-wider">INDIA'S PREMIER AMUSEMENT PARKS</p>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-white to-wonderla-yellow bg-clip-text text-transparent leading-tight">
              WHERE EVERY RIDE
            </h1>
            
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-10 text-wonderla-yellow drop-shadow-lg leading-tight">
              IS A NEW ADVENTURE!
            </h2>
            
            <p className="text-base sm:text-xl lg:text-2xl text-gray-200 mb-6 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              Experience heart-pounding thrills, splash into fun, and create unforgettable memories 
              at India's most exciting theme parks across 4 amazing locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Button className="w-full sm:w-auto bg-wonderla-yellow text-wonderla-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Calendar className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                BOOK TICKETS NOW
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-wonderla-blue transition-all duration-300 transform hover:scale-105">
                <MapPin className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                FIND LOCATIONS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Glass Effect */}
      <section className="relative z-10 py-12 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-lg border-y border-white/20">
          <div className="absolute inset-0 bg-gradient-to-r from-wonderla-blue/5 via-transparent to-wonderla-yellow/5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-wonderla-yellow transition-colors neon-glow">25+</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">YEARS OF THRILLS</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-wonderla-yellow transition-colors neon-glow">50M+</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">HAPPY VISITORS</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-wonderla-yellow transition-colors neon-glow">60+</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">AMAZING RIDES</div>
            </motion.div>
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 group-hover:text-wonderla-yellow transition-colors neon-glow">4</div>
              <div className="text-gray-300 font-medium text-sm sm:text-base">ICONIC LOCATIONS</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        <RideCarousel rides={rides} categories={rideCategories} />
      </main>

      {/* Video Section */}
      <VideoSection videos={videoData} />

      {/* Footer */}
      <footer className="bg-gradient-to-br from-wonderla-blue via-blue-900 to-wonderla-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0 bg-repeat footer-pattern"
          />
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="bg-wonderla-yellow text-wonderla-blue py-6 sm:py-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h3 className="text-xl sm:text-2xl font-black mb-2">🎪 Stay Updated with Wonderla!</h3>
                <p className="text-base sm:text-lg font-semibold">Get exclusive offers, new ride updates & special discounts!</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full sm:w-64 px-4 py-3 rounded-full border-2 border-wonderla-blue text-wonderla-blue placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-wonderla-blue"
                />
                <Button className="w-full sm:w-auto bg-wonderla-blue text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-all duration-300">
                  <Mail className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
            <div className="sm:col-span-2 lg:col-span-2">
              <img src="/logo.png" alt="Wonderla" className="h-12 sm:h-16 mb-4 sm:mb-6 brightness-0 invert" />
              <p className="text-blue-200 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                India's largest amusement park chain with 25+ years of creating magical moments. 
                Experience world-class rides, attractions, and hospitality across our 4 iconic locations.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="flex items-center text-blue-200">
                  <Star className="w-4 sm:w-5 h-4 sm:h-5 text-wonderla-yellow mr-2" />
                  <span className="font-semibold text-sm sm:text-base">4.5/5 Guest Rating</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Users className="w-4 sm:w-5 h-4 sm:h-5 text-wonderla-yellow mr-2" />
                  <span className="font-semibold text-sm sm:text-base">50M+ Happy Visitors</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6 text-wonderla-yellow">Our Parks</h3>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <a href="#" className="hover:text-white transition-colors">Bengaluru, Karnataka</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <a href="#" className="hover:text-white transition-colors">Kochi, Kerala</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <a href="#" className="hover:text-white transition-colors">Hyderabad, Telangana</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <a href="#" className="hover:text-white transition-colors">Bhubaneswar, Odisha</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-6 text-wonderla-yellow">Contact Info</h3>
              <ul className="space-y-3 text-blue-200">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <span>+91 80 2845 6789</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <span>info@wonderla.com</span>
                </li>
                <li className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-wonderla-yellow" />
                  <span>10:30 AM - 6:00 PM</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-semibold text-wonderla-yellow mb-3">Follow Us</h4>
                <div className="flex space-x-3">
                  <button className="bg-wonderla-yellow text-wonderla-blue p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                    📘
                  </button>
                  <button className="bg-wonderla-yellow text-wonderla-blue p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                    📷
                  </button>
                  <button className="bg-wonderla-yellow text-wonderla-blue p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                    🐦
                  </button>
                  <button className="bg-wonderla-yellow text-wonderla-blue p-3 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                    �
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-center md:text-left mb-4 md:mb-0">
                © 2025 Wonderla Holidays Limited. All rights reserved.
              </p>
              <div className="flex flex-wrap gap-6 text-blue-200 text-sm">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" className="hover:text-white transition-colors">Safety Guidelines</a>
                <a href="#" className="hover:text-white transition-colors">Career</a>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-blue-300 text-sm">
                🏆 Built with React, TypeScript, Tailwind CSS & Framer Motion • Educational Project
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
