import { Place, Activity, Event } from '../types';

// Sample Places data
export const samplePlaces: Place[] = [
  {
    id: 'p1',
    name: 'Chefchaouen Medina',
    description: 'Known as the "Blue Pearl of Morocco", Chefchaouen\'s medina is famous for its striking blue-painted buildings and winding alleyways that create a magical atmosphere.',
    location: {
      continent: 'Africa',
      country: 'Morocco',
      city: 'Chefchaouen',
      neighborhood: 'Medina',
      coordinates: {
        lat: 35.1715,
        lng: -5.2697
      }
    },
    categories: ['Cultural', 'Historical', 'Urban'],
    domains: ['Tourism', 'Culture'],
    accessibility: ['Free', 'Walking Required'],
    activities: ['Photography', 'Shopping', 'Cultural Tours', 'Local Cuisine'],
    media: {
      images: ['https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg']
    }
  },
  {
    id: 'p2',
    name: 'Parc de la Villette',
    description: 'A large urban park with gardens, playgrounds, and cultural venues including the Cité des Sciences et de l\'Industrie and the Philharmonie de Paris.',
    location: {
      continent: 'Europe',
      country: 'France',
      city: 'Paris',
      neighborhood: 'La Villette',
      coordinates: {
        lat: 48.8938,
        lng: 2.3908
      }
    },
    categories: ['Urban', 'Cultural', 'Outdoor'],
    domains: ['Entertainment', 'Education'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['Walking', 'Cycling', 'Picnic', 'Museum Visits'],
    media: {
      images: ['https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg']
    }
  },
  {
    id: 'p3',
    name: 'Central Park',
    description: 'An urban park in Manhattan, New York City. It is the most visited urban park in the United States with an estimated 42 million visitors annually.',
    location: {
      continent: 'North America',
      country: 'USA',
      city: 'New York',
      neighborhood: 'Manhattan',
      coordinates: {
        lat: 40.7829,
        lng: -73.9654
      }
    },
    categories: ['Urban', 'Natural'],
    domains: ['Entertainment', 'Health'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['Walking', 'Cycling', 'Boating', 'Picnic', 'Ice Skating'],
    media: {
      images: ['https://images.pexels.com/photos/76969/central-park-new-york-panorama-76969.jpeg']
    }
  },
  {
    id: 'p4',
    name: 'Santorini',
    description: 'A stunning Greek island known for its white-washed buildings, blue-domed churches, and spectacular sunsets over the Aegean Sea.',
    location: {
      continent: 'Europe',
      country: 'Greece',
      city: 'Santorini',
      coordinates: {
        lat: 36.3932,
        lng: 25.4615
      }
    },
    categories: ['Island', 'Cultural', 'Romantic'],
    domains: ['Tourism', 'Entertainment'],
    accessibility: ['Paid', 'Limited Accessibility'],
    activities: ['Sightseeing', 'Photography', 'Wine Tasting', 'Swimming'],
    media: {
      images: ['https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg']
    }
  },
  {
    id: 'p5',
    name: 'Machu Picchu',
    description: 'An ancient Incan city set high in the Andes Mountains, featuring spectacular stone architecture and panoramic views.',
    location: {
      continent: 'South America',
      country: 'Peru',
      city: 'Cusco',
      coordinates: {
        lat: -13.1631,
        lng: -72.5450
      }
    },
    categories: ['Historical', 'Cultural', 'Natural'],
    domains: ['Tourism', 'Education'],
    accessibility: ['Paid', 'Guided Tours'],
    activities: ['Hiking', 'Photography', 'Archaeological Tours'],
    media: {
      images: ['https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg']
    }
  },
  {
    id: 'p6',
    name: 'Great Barrier Reef',
    description: 'The world\'s largest coral reef system, home to diverse marine life and offering incredible diving and snorkeling experiences.',
    location: {
      continent: 'Oceania',
      country: 'Australia',
      city: 'Cairns',
      coordinates: {
        lat: -18.2871,
        lng: 147.6992
      }
    },
    categories: ['Natural', 'Marine', 'Adventure'],
    domains: ['Tourism', 'Environment'],
    accessibility: ['Paid', 'Tour Required'],
    activities: ['Diving', 'Snorkeling', 'Boat Tours', 'Marine Life Watching'],
    media: {
      images: ['https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg']
    }
  }
];

// Sample Activities data
export const sampleActivities: Activity[] = [
  {
    id: 'a1',
    name: 'Chefchaouen Photography Tour',
    description: 'Explore the stunning blue streets of Chefchaouen with a professional photographer, capturing the unique architecture and vibrant culture.',
    context: ['Outdoor', 'Cultural', 'Photography'],
    classification: {
      level1: 'Art',
      level2: 'Photography',
      level3: 'Cultural Photography'
    },
    compatiblePlaces: ['Medina', 'Plaza Uta el-Hammam', 'Kasbah'],
    bestTimes: {
      timeOfDay: ['Morning', 'Late Afternoon'],
      dayOfWeek: ['Any'],
      season: ['Spring', 'Autumn']
    },
    duration: {
      min: 3,
      max: 4,
      unit: 'hours'
    },
    frequency: 'Daily',
    media: {
      images: ['https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg']
    }
  },
  {
    id: 'a2',
    name: 'Yoga Session',
    description: 'Practice yoga to improve flexibility, strength, and mental well-being.',
    context: ['Indoor', 'Outdoor', 'Online'],
    classification: {
      level1: 'Wellness',
      level2: 'Yoga'
    },
    compatiblePlaces: ['Yoga Studio', 'Gym', 'Park', 'Beach', 'Home'],
    bestTimes: {
      timeOfDay: ['Morning', 'Evening'],
      dayOfWeek: ['All'],
      season: ['All Year']
    },
    duration: {
      min: 45,
      max: 90,
      unit: 'minutes'
    },
    frequency: 'Daily',
    media: {
      images: ['https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg']
    }
  },
  {
    id: 'a3',
    name: 'Museum Visit',
    description: 'Explore art, history, science, or culture at a local or world-renowned museum.',
    context: ['Indoor', 'Cultural'],
    classification: {
      level1: 'Culture',
      level2: 'Art',
      level3: 'Museum'
    },
    compatiblePlaces: ['Museum', 'Art Gallery', 'Cultural Center'],
    bestTimes: {
      timeOfDay: ['Morning', 'Afternoon'],
      dayOfWeek: ['Weekday'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 4,
      unit: 'hours'
    },
    frequency: 'Monthly',
    media: {
      images: ['https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg']
    }
  },
  {
    id: 'a4',
    name: 'Cooking Class',
    description: 'Learn new culinary skills and recipes from professional chefs in an interactive setting.',
    context: ['Indoor', 'Educational', 'Social'],
    classification: {
      level1: 'Culinary',
      level2: 'Education',
      level3: 'Cooking'
    },
    compatiblePlaces: ['Cooking School', 'Restaurant', 'Community Center'],
    bestTimes: {
      timeOfDay: ['Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 3,
      unit: 'hours'
    },
    frequency: 'Monthly',
    media: {
      images: ['https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg']
    }
  },
  {
    id: 'a5',
    name: 'Rock Climbing',
    description: 'Challenge yourself with indoor or outdoor rock climbing, suitable for all skill levels.',
    context: ['Indoor', 'Outdoor', 'Adventure'],
    classification: {
      level1: 'Sport',
      level2: 'Climbing',
      level3: 'Rock Climbing'
    },
    compatiblePlaces: ['Climbing Gym', 'Natural Cliffs', 'Indoor Wall'],
    bestTimes: {
      timeOfDay: ['Any'],
      dayOfWeek: ['Any'],
      season: ['All Year']
    },
    duration: {
      min: 1,
      max: 3,
      unit: 'hours'
    },
    frequency: 'Weekly',
    media: {
      images: ['https://images.pexels.com/photos/1822458/pexels-photo-1822458.jpeg']
    }
  },
  {
    id: 'a6',
    name: 'Photography Workshop',
    description: 'Learn photography techniques and improve your skills with hands-on instruction.',
    context: ['Indoor', 'Outdoor', 'Educational'],
    classification: {
      level1: 'Art',
      level2: 'Photography',
      level3: 'Workshop'
    },
    compatiblePlaces: ['Studio', 'Urban Areas', 'Nature'],
    bestTimes: {
      timeOfDay: ['Morning', 'Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 3,
      max: 6,
      unit: 'hours'
    },
    frequency: 'Monthly',
    media: {
      images: ['https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg']
    }
  }
];

// Sample Events data
export const sampleEvents: Event[] = [
  {
    id: 'e1',
    name: 'Chefchaouen Arts Festival',
    description: 'Annual festival celebrating the artistic heritage of the Blue City, featuring local artists, musicians, and craftsmen.',
    date: '2025-04-15',
    time: '10:00',
    location: {
      venue: 'Plaza Uta el-Hammam',
      city: 'Chefchaouen',
      country: 'Morocco'
    },
    category: ['Culture', 'Art', 'Music', 'Festival'],
    status: 'upcoming',
    price: {
      amount: 50,
      currency: 'MAD'
    },
    capacity: {
      total: 1000,
      available: 600
    },
    media: {
      images: ['https://images.pexels.com/photos/4388167/pexels-photo-4388167.jpeg']
    }
  },
  {
    id: 'e2',
    name: 'Tech Innovation Summit',
    description: 'Annual conference bringing together tech leaders and innovators.',
    date: '2025-06-01',
    time: '09:00',
    location: {
      venue: 'Convention Center',
      city: 'San Francisco',
      country: 'USA'
    },
    category: ['Technology', 'Business', 'Conference'],
    status: 'available',
    price: {
      amount: 599,
      currency: 'USD'
    },
    capacity: {
      total: 5000,
      available: 2000
    },
    media: {
      images: ['https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg']
    }
  },
  {
    id: 'e3',
    name: 'Food & Wine Festival',
    description: 'Celebrate culinary excellence with top chefs and wine experts.',
    date: '2025-08-20',
    time: '11:00',
    location: {
      venue: 'Waterfront Park',
      city: 'Miami',
      country: 'USA'
    },
    category: ['Food', 'Wine', 'Festival'],
    status: 'upcoming',
    price: {
      amount: 150,
      currency: 'USD'
    },
    capacity: {
      total: 10000,
      available: 5000
    },
    media: {
      images: ['https://images.pexels.com/photos/541216/pexels-photo-541216.jpeg']
    }
  },
  {
    id: 'e4',
    name: 'Art Exhibition Opening',
    description: 'Opening night of contemporary art exhibition featuring international artists.',
    date: '2025-05-10',
    time: '18:00',
    location: {
      venue: 'Modern Art Museum',
      city: 'London',
      country: 'UK'
    },
    category: ['Art', 'Culture', 'Exhibition'],
    status: 'available',
    price: {
      amount: 25,
      currency: 'GBP'
    },
    capacity: {
      total: 1000,
      available: 400
    },
    media: {
      images: ['https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg']
    }
  },
  {
    id: 'e5',
    name: 'Marathon City Run',
    description: 'Annual city marathon through scenic urban landscapes.',
    date: '2025-09-05',
    time: '07:00',
    location: {
      venue: 'City Center',
      city: 'Berlin',
      country: 'Germany'
    },
    category: ['Sports', 'Running', 'Competition'],
    status: 'upcoming',
    price: {
      amount: 80,
      currency: 'EUR'
    },
    capacity: {
      total: 20000,
      available: 8000
    },
    media: {
      images: ['https://images.pexels.com/photos/2774588/pexels-photo-2774588.jpeg']
    }
  },
  {
    id: 'e6',
    name: 'Comedy Night Special',
    description: 'Evening of stand-up comedy featuring top international comedians.',
    date: '2025-06-15',
    time: '20:00',
    location: {
      venue: 'Comedy Club',
      city: 'Melbourne',
      country: 'Australia'
    },
    category: ['Comedy', 'Entertainment', 'Nightlife'],
    status: 'available',
    price: {
      amount: 45,
      currency: 'AUD'
    },
    capacity: {
      total: 500,
      available: 100
    },
    media: {
      images: ['https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg']
    }
  }
];