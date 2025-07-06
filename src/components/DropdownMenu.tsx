import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Users, Phone } from 'lucide-react';

interface DropdownMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, onToggle }) => {
  const menuItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Parks",
      subtitle: "Explore your favourite Wonderla Park",
      color: "bg-blue-500"
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Resorts",
      subtitle: "Get a rejuvenating experience at Wonderla Resort",
      color: "bg-green-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Offers & Combos",
      subtitle: "Plan The Perfect Day With Exciting Offers",
      color: "bg-purple-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Timings And Guidelines",
      subtitle: "Know The Timings And Other Guidelines",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="relative">
      <motion.button
        onClick={onToggle}
        className="flex items-center gap-2 px-6 py-2 bg-wonderla-yellow text-wonderla-blue rounded-full font-bold hover:bg-yellow-400 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        BOOK TICKETS
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="p-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group"
                >
                  <div className={`p-2 rounded-full ${item.color} text-white group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-wonderla-blue to-blue-600 p-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-wonderla-yellow text-wonderla-blue py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors"
              >
                Group Booking
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold mt-2 hover:bg-blue-700 transition-colors"
              >
                Tour Operator Portal
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
