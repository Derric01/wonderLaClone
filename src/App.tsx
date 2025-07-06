import { useState } from 'react';
import RideCarousel from './components/RideCarousel';
import DropdownMenu from './components/DropdownMenu';
import FloatingElements from './components/FloatingElements';
import VideoSection from './components/VideoSection';
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
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Wonderla" 
                className="h-12"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='48' viewBox='0 0 150 48'%3E%3Ctext x='10' y='30' font-family='Arial, sans-serif' font-size='20' font-weight='bold' fill='%231E3A8A'%3EWonderla%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-wonderla-blue font-medium transition-colors">PARK</a>
              <a href="#" className="text-gray-700 hover:text-wonderla-blue font-medium transition-colors">RESORTS</a>
              <a href="#" className="text-gray-700 hover:text-wonderla-blue font-medium transition-colors">OFFERS</a>
              <a href="#" className="text-gray-700 hover:text-wonderla-blue font-medium transition-colors">RIDES</a>
              <a href="#" className="text-gray-700 hover:text-wonderla-blue font-medium transition-colors">RESTAURANTS</a>
              <a href="#" className="text-gray-700 hover:text-wonderla-blue font-medium transition-colors">EVENTS</a>
            </nav>
            
            <DropdownMenu 
              isOpen={isDropdownOpen} 
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)} 
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/bg.jfif)' }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4 animate-pulse">
            WHERE EVERY RIDE
          </h1>
          <h2 className="text-5xl font-bold mb-8 text-wonderla-yellow">
            IS A NEW ADVENTURE!
          </h2>
          <button className="bg-wonderla-yellow text-wonderla-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
            EXPLORE NOW
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        <RideCarousel rides={rides} categories={rideCategories} />
      </main>

      {/* Video Section */}
      <VideoSection videos={videoData} />

      {/* Footer */}
      <footer className="bg-wonderla-blue text-white py-12 mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src="/logo.png" alt="Wonderla" className="h-12 mb-4 brightness-0 invert" />
              <p className="text-blue-200">Experience the Ultimate Thrill at India's Premier Amusement Parks!</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Locations</h3>
              <ul className="space-y-2 text-blue-200">
                <li>Bengaluru, Karnataka</li>
                <li>Kochi, Kerala</li>
                <li>Hyderabad, Telangana</li>
                <li>Bhubaneswar, Odisha</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <button className="bg-wonderla-yellow text-wonderla-blue p-2 rounded-full hover:bg-yellow-400 transition-colors">📘</button>
                <button className="bg-wonderla-yellow text-wonderla-blue p-2 rounded-full hover:bg-yellow-400 transition-colors">📷</button>
                <button className="bg-wonderla-yellow text-wonderla-blue p-2 rounded-full hover:bg-yellow-400 transition-colors">🐦</button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p className="text-blue-200">© 2025 Wonderla. All rights reserved. | Built with React, TypeScript, Tailwind CSS & Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
