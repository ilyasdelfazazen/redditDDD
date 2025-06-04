import React, { useState } from 'react';
import { Search, ChevronRight, X } from 'lucide-react';

interface PlacesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Region {
  id: string;
  name: string;
  image: string;
  cities: {
    name: string;
    places: {
      name: string;
      description: string;
      image: string;
      tags: string[];
    }[];
  }[];
}

const regions: Region[] = [
  {
    id: 'europe',
    name: 'Europe',
    image: 'https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg',
    cities: [
      {
        name: 'Paris',
        places: [
          {
            name: 'Eiffel Tower',
            description: 'Iconic iron lattice tower on the Champ de Mars, symbol of Paris and France.',
            image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
            tags: ['Landmark', 'Architecture', 'Tourism']
          },
          {
            name: 'Louvre Museum',
            description: 'World\'s largest art museum and home to many famous works including the Mona Lisa.',
            image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
            tags: ['Art', 'Museum', 'Culture']
          }
        ]
      },
      {
        name: 'Rome',
        places: [
          {
            name: 'Colosseum',
            description: 'Ancient amphitheater in the heart of Rome, an iconic symbol of the Roman Empire.',
            image: 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg',
            tags: ['Historical', 'Architecture', 'Tourism']
          },
          {
            name: 'Vatican Museums',
            description: 'World-renowned museums featuring art collections including the Sistine Chapel.',
            image: 'https://images.pexels.com/photos/2402926/pexels-photo-2402926.jpeg',
            tags: ['Art', 'Culture', 'Religious']
          }
        ]
      }
    ]
  },
  {
    id: 'asia',
    name: 'Asia',
    image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
    cities: [
      {
        name: 'Tokyo',
        places: [
          {
            name: 'Senso-ji Temple',
            description: 'Ancient Buddhist temple in Asakusa, Tokyo\'s oldest temple.',
            image: 'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg',
            tags: ['Religious', 'Cultural', 'Historical']
          },
          {
            name: 'Shibuya Crossing',
            description: 'Famous pedestrian crossing known as the busiest in the world.',
            image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
            tags: ['Urban', 'Modern', 'Iconic']
          }
        ]
      },
      {
        name: 'Dubai',
        places: [
          {
            name: 'Burj Khalifa',
            description: 'World\'s tallest building with observation decks offering panoramic views.',
            image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg',
            tags: ['Architecture', 'Modern', 'Luxury']
          },
          {
            name: 'Palm Jumeirah',
            description: 'Artificial archipelago in the shape of a palm tree.',
            image: 'https://images.pexels.com/photos/4388164/pexels-photo-4388164.jpeg',
            tags: ['Man-made', 'Luxury', 'Beach']
          }
        ]
      }
    ]
  },
  {
    id: 'africa',
    name: 'Africa',
    image: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg',
    cities: [
      {
        name: 'Cape Town',
        places: [
          {
            name: 'Table Mountain',
            description: 'Flat-topped mountain overlooking Cape Town, accessible by hiking or cable car.',
            image: 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg',
            tags: ['Nature', 'Hiking', 'Views']
          },
          {
            name: 'Robben Island',
            description: 'Historic prison island where Nelson Mandela was imprisoned.',
            image: 'https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg',
            tags: ['Historical', 'Cultural', 'Museum']
          }
        ]
      },
      {
        name: 'Cairo',
        places: [
          {
            name: 'Pyramids of Giza',
            description: 'Ancient Egyptian pyramids and the Great Sphinx, symbols of ancient civilization.',
            image: 'https://images.pexels.com/photos/71241/pexels-photo-71241.jpeg',
            tags: ['Ancient', 'Wonder', 'Historical']
          },
          {
            name: 'Egyptian Museum',
            description: 'Museum housing ancient Egyptian artifacts including Tutankhamun\'s treasures.',
            image: 'https://images.pexels.com/photos/71281/pexels-photo-71281.jpeg',
            tags: ['Museum', 'Historical', 'Cultural']
          }
        ]
      }
    ]
  },
  {
    id: 'north-america',
    name: 'North America',
    image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg',
    cities: [
      {
        name: 'New York',
        places: [
          {
            name: 'Statue of Liberty',
            description: 'Iconic symbol of freedom and democracy on Liberty Island.',
            image: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
            tags: ['Landmark', 'Historical', 'Tourism']
          },
          {
            name: 'Central Park',
            description: 'Massive urban park in Manhattan with various attractions.',
            image: 'https://images.pexels.com/photos/76969/central-park-new-york-panorama-76969.jpeg',
            tags: ['Nature', 'Recreation', 'Urban']
          }
        ]
      },
      {
        name: 'San Francisco',
        places: [
          {
            name: 'Golden Gate Bridge',
            description: 'Iconic suspension bridge spanning the Golden Gate strait.',
            image: 'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg',
            tags: ['Architecture', 'Landmark', 'Engineering']
          },
          {
            name: 'Alcatraz Island',
            description: 'Former high-security prison on an island in San Francisco Bay.',
            image: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg',
            tags: ['Historical', 'Prison', 'Museum']
          }
        ]
      }
    ]
  },
  {
    id: 'south-america',
    name: 'South America',
    image: 'https://images.pexels.com/photos/1768744/pexels-photo-1768744.jpeg',
    cities: [
      {
        name: 'Rio de Janeiro',
        places: [
          {
            name: 'Christ the Redeemer',
            description: 'Art Deco statue of Jesus Christ atop Corcovado mountain.',
            image: 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg',
            tags: ['Landmark', 'Religious', 'Views']
          },
          {
            name: 'Copacabana Beach',
            description: 'Famous beach known for its crescent shape and lively atmosphere.',
            image: 'https://images.pexels.com/photos/2868255/pexels-photo-2868255.jpeg',
            tags: ['Beach', 'Recreation', 'Culture']
          }
        ]
      },
      {
        name: 'Cusco',
        places: [
          {
            name: 'Machu Picchu',
            description: 'Ancient Incan city set high in the Andes Mountains.',
            image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
            tags: ['Ancient', 'Wonder', 'Archaeological']
          },
          {
            name: 'Sacred Valley',
            description: 'Valley with numerous archaeological remains and villages.',
            image: 'https://images.pexels.com/photos/2356087/pexels-photo-2356087.jpeg',
            tags: ['Historical', 'Nature', 'Cultural']
          }
        ]
      }
    ]
  },
  {
    id: 'oceania',
    name: 'Oceania',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg',
    cities: [
      {
        name: 'Sydney',
        places: [
          {
            name: 'Sydney Opera House',
            description: 'Iconic performing arts venue with distinctive shell-like design.',
            image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg',
            tags: ['Architecture', 'Arts', 'Landmark']
          },
          {
            name: 'Bondi Beach',
            description: 'Famous beach known for its golden sand and surfing.',
            image: 'https://images.pexels.com/photos/1878354/pexels-photo-1878354.jpeg',
            tags: ['Beach', 'Surfing', 'Recreation']
          }
        ]
      },
      {
        name: 'Auckland',
        places: [
          {
            name: 'Sky Tower',
            description: 'Observation and telecommunications tower in city center.',
            image: 'https://images.pexels.com/photos/5169489/pexels-photo-5169489.jpeg',
            tags: ['Modern', 'Views', 'Architecture']
          },
          {
            name: 'Waiheke Island',
            description: 'Island in the Hauraki Gulf known for wineries and beaches.',
            image: 'https://images.pexels.com/photos/5169490/pexels-photo-5169490.jpeg',
            tags: ['Nature', 'Wine', 'Recreation']
          }
        ]
      }
    ]
  }
];

const PlacesSidebar: React.FC<PlacesSidebarProps> = ({ isOpen, onClose }) => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`fixed inset-y-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
    style={{ width: '800px' }}>
      {/* First Column - Regions */}
      <div className="w-20 border-r border-slate-200 bg-slate-50 flex flex-col">
        <div className="p-4 border-b border-slate-200 flex items-center justify-center">
          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-200 rounded-full transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} className="text-slate-600" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => {
                setSelectedRegion(selectedRegion === region.id ? null : region.id);
                setSelectedCity(null);
              }}
              className={`w-full py-4 flex items-center justify-center hover:bg-slate-100 transition-colors ${
                selectedRegion === region.id ? 'bg-slate-200' : ''
              }`}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover"
                />
                {selectedRegion === region.id && (
                  <ChevronRight size={16} className="absolute bottom-0 right-0 text-white bg-black/50 rounded-full p-1" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Second Column - Cities */}
      {selectedRegion && (
        <div className="w-64 border-r border-slate-200 bg-white flex flex-col">
          <div className="p-4 border-b border-slate-200">
            <h3 className="font-medium text-slate-800">Cities in {regions.find(r => r.id === selectedRegion)?.name}</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {regions
              .find(r => r.id === selectedRegion)?.cities
              .map((city) => (
                <button
                  key={city.name}
                  onClick={() => setSelectedCity(selectedCity === city.name ? null : city.name)}
                  className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                    selectedCity === city.name ? 'bg-slate-100' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">{city.name}</span>
                    {selectedCity === city.name && (
                      <ChevronRight size={16} className="text-slate-500" />
                    )}
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Third Column - Places */}
      <div className="flex-1 bg-slate-50 flex flex-col">
        {selectedRegion && (
          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search places..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto p-4">
          {selectedCity ? (
            <div className="grid gap-4">
              {regions
                .find(r => r.id === selectedRegion)
                ?.cities.find(c => c.name === selectedCity)
                ?.places.filter(place => 
                  place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  place.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((place, index) => (
                  <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={place.image} 
                        alt={place.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="font-medium text-white text-lg">{place.name}</h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-slate-600 mb-3">{place.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {place.tags.map((tag, i) => (
                          <span key={i} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ) : selectedRegion ? (
            <div className="text-center p-6">
              <h3 className="text-lg font-medium text-slate-500">Select a city</h3>
              <p className="text-slate-400 mt-1">Choose a city to explore its places</p>
            </div>
          ) : (
            <div className="text-center p-6">
              <h3 className="text-lg font-medium text-slate-500">Select a region</h3>
              <p className="text-slate-400 mt-1">Click on a region to explore places</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlacesSidebar;