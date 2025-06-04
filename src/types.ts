export type ExplorationMode = 'place' | 'activity' | 'event';

export interface TaxonomyItem {
  id: string;
  name: string;
  description?: string;
  children?: TaxonomyItem[];
  level: number;
  parentId?: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  location: {
    continent: string;
    country: string;
    city: string;
    neighborhood?: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  categories: string[];
  domains: string[];
  accessibility: string[];
  activities: string[];
  media?: {
    images: string[];
    videos?: string[];
    articles?: string[];
    newsletters?: string[];
  };
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  context: string[];
  classification: {
    level1: string;
    level2?: string;
    level3?: string;
    level4?: string;
  };
  compatiblePlaces: string[];
  bestTimes?: {
    timeOfDay?: string[];
    dayOfWeek?: string[];
    season?: string[];
  };
  duration?: {
    min: number;
    max: number;
    unit: string;
  };
  frequency?: string;
  media?: {
    images: string[];
    videos?: string[];
  };
}

export interface Event {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  location: {
    venue: string;
    city: string;
    country: string;
  };
  category: string[];
  status: 'upcoming' | 'available';
  price?: {
    amount: number;
    currency: string;
  };
  capacity?: {
    total: number;
    available: number;
  };
  media?: {
    images: string[];
    videos?: string[];
  };
}