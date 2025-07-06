import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Calendar, Clock, Users, Star } from 'lucide-react';
import RideCarousel from './components/RideCarousel';
import DropdownMenu from './components/DropdownMenu';
import FloatingElements from './components/FloatingElements';
import VideoSection from './components/VideoSection';
import { Button } from './components/ui/button';
import { rides, rideCategories } from './data/rides';
import './index.css';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Enhanced Header */}
      <motion.header 
        className="bg-white/95 backdrop-blur-md shadow-lg border-b border-wonderla-blue/10 relative z-20 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >

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
                  className="group relative px-4 py-3 text-gray-700 hover:text-wonderla-blue font-bold transition-all duration-300 rounded-lg hover:bg-blue-50"
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
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-gradient-to-r from-wonderla-yellow to-yellow-400 hover:from-yellow-400 hover:to-wonderla-yellow text-wonderla-blue font-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="mr-2 w-5 h-5" />
                  BOOK TICKETS
                </Button>
              </motion.div>
              
              <DropdownMenu 
                isOpen={isDropdownOpen} 
                onToggle={() => setIsDropdownOpen(!isDropdownOpen)} 
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{ backgroundImage: 'url(/bg.jfif)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-wonderla-yellow font-semibold text-xl mb-6 tracking-wider">INDIA'S PREMIER AMUSEMENT PARKS</p>
            
            <h1 className="text-8xl font-black mb-6 bg-gradient-to-r from-white to-wonderla-yellow bg-clip-text text-transparent leading-tight">
              WHERE EVERY RIDE
            </h1>
            
            <h2 className="text-7xl font-black mb-10 text-wonderla-yellow drop-shadow-lg leading-tight">
              IS A NEW ADVENTURE!
            </h2>
            
            <p className="text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Experience heart-pounding thrills, splash into fun, and create unforgettable memories 
              at India's most exciting theme parks across 4 amazing locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="bg-wonderla-yellow text-wonderla-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Calendar className="mr-2 w-5 h-5" />
                BOOK TICKETS NOW
              </Button>
              <Button variant="outline" className="border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-wonderla-blue transition-all duration-300 transform hover:scale-105">
                <MapPin className="mr-2 w-5 h-5" />
                FIND LOCATIONS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-black text-wonderla-blue mb-2">25+</div>
              <div className="text-gray-600 font-medium">YEARS OF THRILLS</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-black text-wonderla-blue mb-2">50M+</div>
              <div className="text-gray-600 font-medium">HAPPY VISITORS</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-black text-wonderla-blue mb-2">60+</div>
              <div className="text-gray-600 font-medium">AMAZING RIDES</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-black text-wonderla-blue mb-2">4</div>
              <div className="text-gray-600 font-medium">ICONIC LOCATIONS</div>
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
            className="absolute inset-0 bg-repeat"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M50 15L60 35H40z'/%3E%3Ccircle cx='50' cy='60' r='10'/%3E%3C/g%3E%3C/svg%3E")` 
            }}
          />
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="bg-wonderla-yellow text-wonderla-blue py-8 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-2xl font-black mb-2">🎪 Stay Updated with Wonderla!</h3>
                <p className="text-lg font-semibold">Get exclusive offers, new ride updates & special discounts!</p>
              </div>
              <div className="flex items-center space-x-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-full border-2 border-wonderla-blue text-wonderla-blue placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-wonderla-blue w-64"
                />
                <Button className="bg-wonderla-blue text-white px-6 py-3 rounded-full font-bold hover:bg-blue-800 transition-all duration-300">
                  <Mail className="mr-2 w-5 h-5" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <img src="/logo.png" alt="Wonderla" className="h-16 mb-6 brightness-0 invert" />
              <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                India's largest amusement park chain with 25+ years of creating magical moments. 
                Experience world-class rides, attractions, and hospitality across our 4 iconic locations.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-blue-200">
                  <Star className="w-5 h-5 text-wonderla-yellow mr-2" />
                  <span className="font-semibold">4.5/5 Guest Rating</span>
                </div>
                <div className="flex items-center text-blue-200">
                  <Users className="w-5 h-5 text-wonderla-yellow mr-2" />
                  <span className="font-semibold">50M+ Happy Visitors</span>
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
