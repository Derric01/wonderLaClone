import { Ride, RideCategory } from '@/types/ride';

export const rideCategories: RideCategory[] = [
  {
    id: 'land',
    name: 'Land',
    icon: '🎢',
    rides: 72,
    color: 'bg-blue-500'
  },
  {
    id: 'water',
    name: 'Water',
    icon: '🌊',
    rides: 54,
    color: 'bg-blue-400'
  },
  {
    id: 'kids',
    name: 'Kids',
    icon: '🎠',
    rides: 35,
    color: 'bg-purple-500'
  }
];

export const rides: Ride[] = [
  {
    id: '1',
    title: 'Cyclone',
    location: 'Kochi',
    description: 'Experience the ultimate adrenaline rush with India\'s most thrilling cyclone ride!',
    image: '/giantwheel.jpeg',
    video: 'https://youtube.com/shorts/2DbDd9X47b8?si=lti5io33xsseBKUg',
    hasVideo: true,
    category: 'land'
  },
  {
    id: '2',
    title: 'Recoil',
    location: 'Bengaluru',
    description: 'India\'s first ever action-packed reverse looping roller coaster ride that will leave you breathless!',
    image: '/recoil.jfif',
    video: 'https://youtube.com/shorts/FjGdFeti0vo?si=pKHgYaOAu0ClRPSR',
    hasVideo: true,
    category: 'land'
  },
  {
    id: '3',
    title: 'Equinox',
    location: 'Bhubaneswar',
    description: 'A thrill monster that spins you 360 degrees in a gravity-defying spectacle!',
    image: '/reverse_recoil.jpeg',
    video: 'https://youtube.com/shorts/7_u24buh9Zo?si=-PdNX6Du55IuOVLM',
    hasVideo: true,
    category: 'land'
  },
  {
    id: '4',
    title: 'G-Fall',
    location: 'Hyderabad',
    description: 'Feel the ultimate free fall experience with breathtaking city views!',
    image: '/sky_tilt.jpeg',
    video: 'https://youtube.com/shorts/fF80j7ROjhs?si=crHA2rDcaSAyoRfb',
    hasVideo: true,
    category: 'land'
  },
  {
    id: '5',
    title: 'Termite Adventure',
    location: 'Bengaluru',
    description: 'Embark on a wild underground adventure through mysterious tunnels and caves!',
    image: '/termite_train.jfif',
    hasVideo: false,
    category: 'kids'
  },
  {
    id: '6',
    title: 'Aqua Dance',
    location: 'All Locations',
    description: 'Dive into the ultimate water adventure with spectacular water effects!',
    image: '/wavepool.jpeg',
    video: 'https://youtube.com/shorts/ISDsclTxEeU?si=3cqlXIOO-tDsE_Wr',
    hasVideo: true,
    category: 'water'
  },
  {
    id: '7',
    title: 'Wave Pool Paradise',
    location: 'Kochi',
    description: 'Experience the bliss of ocean waves washing over you in our magnificent wave pool!',
    image: '/wavepool.jpeg',
    hasVideo: false,
    category: 'water'
  },
  {
    id: '8',
    title: 'Sky Screamer',
    location: 'Hyderabad',
    description: 'Soar high above the park and experience the ultimate sky adventure!',
    image: '/sky_tilt.jpeg',
    hasVideo: false,
    category: 'land'
  }
];
