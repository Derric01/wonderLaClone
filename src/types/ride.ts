export interface Ride {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  video?: string;
  category: 'land' | 'water' | 'kids';
  hasVideo?: boolean;
}

export interface RideCategory {
  id: string;
  name: string;
  icon: string;
  rides: number;
  color: string;
}
