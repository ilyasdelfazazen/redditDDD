import React, { useState } from 'react';
import { Search, ChevronRight, ChevronDown, X, User, Users, Home } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ActivityCategory {
  id: string;
  icon: React.ReactNode;
  activities: {
    name: string;
    subActivities: string[];
  }[];
}

interface ActivityCard {
  title: string;
  description: string;
  path: string;
  tags: string[];
  duration: string;
  frequency: string;
  image: string;
}

const activityCategories: ActivityCategory[] = [
  {
    id: 'individual',
    icon: <User size={20} className="text-slate-700" />,
    activities: [
      {
        name: 'Eat',
        subActivities: ['Eat healthy', 'Street food', 'Fine dining', 'Local cuisine']
      },
      {
        name: 'Study',
        subActivities: ['Study in university', 'Study abroad', 'Online courses', 'Language learning']
      },
      {
        name: 'Exercise',
        subActivities: ['Gym workout', 'Jogging', 'Yoga', 'Swimming']
      }
    ]
  },
  {
    id: 'couple',
    icon: <Users size={20} className="text-slate-700" />,
    activities: [
      {
        name: 'Date',
        subActivities: ['Romantic dinner', 'Movie night', 'City exploration', 'Cooking together']
      },
      {
        name: 'Travel',
        subActivities: ['Weekend getaway', 'City break', 'Beach vacation', 'Adventure trip']
      },
      {
        name: 'Hobbies',
        subActivities: ['Dance classes', 'Art workshops', 'Photography', 'Sports']
      }
    ]
  },
  {
    id: 'family',
    icon: <Home size={20} className="text-slate-700" />,
    activities: [
      {
        name: 'Entertainment',
        subActivities: ['Theme parks', 'Zoo visits', 'Movie theaters', 'Game nights']
      },
      {
        name: 'Outdoor',
        subActivities: ['Picnics', 'Beach days', 'Hiking', 'Camping']
      },
      {
        name: 'Education',
        subActivities: ['Museum visits', 'Science centers', 'Library activities', 'Cultural events']
      }
    ]
  }
];

const categoryPreviews: Record<string, ActivityCard[]> = {
  individual: [
    {
      title: 'Morning Run',
      description: 'Start your day with an energizing run in nature or around your neighborhood.',
      path: 'Individual > Exercise > Running',
      tags: ['Outdoor', 'Morning', 'Fitness'],
      duration: '30-60 mins',
      frequency: 'Weekly',
      image: 'https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Deep Work Session',
      description: 'Focused work time with no distractions to maximize productivity.',
      path: 'Individual > Work > Focus',
      tags: ['Indoor', 'Daytime', 'Productivity'],
      duration: '2-4 hours',
      frequency: 'Daily',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Personal Reading',
      description: 'Dedicated time for reading books or articles for personal growth.',
      path: 'Individual > Study > Reading',
      tags: ['Indoor', 'Any time', 'Learning'],
      duration: '1-2 hours',
      frequency: 'Weekly',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ],
  couple: [
    {
      title: 'Romantic Dinner',
      description: 'Enjoy a special dinner with your partner at a romantic restaurant or setting.',
      path: 'Couple > Dating > Dining',
      tags: ['Indoor', 'Outdoor', 'Evening'],
      duration: '2-3 hours',
      frequency: 'Monthly',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Weekend Getaway',
      description: 'Escape for a short trip to reconnect and explore new places together.',
      path: 'Couple > Travel > Short trips',
      tags: ['Outdoor', 'Weekend', 'Adventure'],
      duration: '2-3 days',
      frequency: 'Quarterly',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Dance Night',
      description: 'Take dance lessons or go dancing together for fun and connection.',
      path: 'Couple > Hobbies > Dancing',
      tags: ['Indoor', 'Evening', 'Social'],
      duration: '2-4 hours',
      frequency: 'Monthly',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ],
  family: [
    {
      title: 'Family Game Night',
      description: 'Board games or card games that everyone can enjoy together.',
      path: 'Family > Entertainment > Games',
      tags: ['Indoor', 'Evening', 'Bonding'],
      duration: '1-3 hours',
      frequency: 'Weekly',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Nature Hike',
      description: 'Explore local trails and enjoy nature as a family.',
      path: 'Family > Outdoor > Hiking',
      tags: ['Outdoor', 'Daytime', 'Exercise'],
      duration: '2-5 hours',
      frequency: 'Monthly',
      image: 'https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Museum Visit',
      description: 'Educational and fun outing to explore art, history or science.',
      path: 'Family > Education > Museums',
      tags: ['Indoor', 'Daytime', 'Learning'],
      duration: '3-5 hours',
      frequency: 'Quarterly',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
    }
  ]
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={`fixed inset-y-0 left-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 flex ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
    style={{ width: '800px' }}>
      {/* First Column - Icons */}
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
          {activityCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(selectedCategory === category.id ? null : category.id);
                setSelectedActivity(null);
              }}
              className={`w-full py-4 flex items-center justify-center hover:bg-slate-100 transition-colors ${
                selectedCategory === category.id ? 'bg-slate-200' : ''
              }`}
              aria-label={category.id}
            >
              <div className="flex flex-col items-center">
                {category.icon}
                {selectedCategory === category.id && (
                  <ChevronRight size={16} className="mt-1 text-slate-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Second Column - Activities */}
      {selectedCategory && (
        <div className="w-64 border-r border-slate-200 bg-white flex flex-col">
          <div className="p-4 border-b border-slate-200">
            <h3 className="font-medium text-slate-800">Activities</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {activityCategories
              .find(c => c.id === selectedCategory)?.activities
              .map((activity) => (
                <button
                  key={activity.name}
                  onClick={() => setSelectedActivity(selectedActivity === activity.name ? null : activity.name)}
                  className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                    selectedActivity === activity.name ? 'bg-slate-100' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">{activity.name}</span>
                    {selectedActivity === activity.name ? (
                      <ChevronRight size={16} className="text-slate-500" />
                    ) : null}
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Third Column - Content Area */}
      <div className="flex-1 bg-slate-50 flex flex-col">
        {selectedCategory && (
          <div className="p-4 border-b border-slate-200">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto p-4">
          {selectedActivity ? (
            // Show sub-activities when an activity is selected
            <>
              <h4 className="font-medium text-slate-800 mb-3">Sub Activities</h4>
              <div className="flex flex-col gap-2">
                {activityCategories
                  .find(c => c.id === selectedCategory)?.activities
                  .find(a => a.name === selectedActivity)?.subActivities
                  .filter(sub => sub.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((subActivity) => (
                    <button
                      key={subActivity}
                      className="w-full px-4 py-2 text-left text-sm bg-white rounded-md border border-slate-200 hover:bg-blue-50 hover:border-blue-200 transition-colors"
                    >
                      {subActivity}
                    </button>
                  ))}
              </div>
            </>
          ) : selectedCategory ? (
            // Show preview cards when only category is selected
            <>
              <h4 className="font-medium text-slate-800 mb-3">Featured Activities</h4>
              <div className="grid gap-4">
                {categoryPreviews[selectedCategory]
                  .filter(card => 
                    card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    card.description.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((card, index) => (
                    <div key={index} className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={card.image} 
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                          <h3 className="font-medium text-white">{card.title}</h3>
                          <p className="text-xs text-white/80 mt-1">{card.path}</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-slate-600">{card.description}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {card.tags.map((tag, i) => (
                            <span key={i} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-3 flex justify-between items-center">
                          <div className="text-xs text-slate-500">
                            Duration: {card.duration}
                          </div>
                          <div className="text-xs text-slate-500">
                            Frequency: {card.frequency}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          ) : (
            // Show empty state when nothing is selected
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center p-6">
                <Search size={40} className="mx-auto text-slate-300 mb-3" />
                <h3 className="text-lg font-medium text-slate-500">Select a category</h3>
                <p className="text-slate-400 mt-1">Click on an icon to view activities</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;