import React, { useState } from 'react';
import FilterSidebar from '../components/FilterSidebar';
import { ExplorationMode } from '../types';

const healthCategories = {
  id: 'health',
  name: 'Health',
  subcategories: [
    {
      id: 'mental-health',
      name: 'Mental Health',
      subcategories: [
        {
          id: 'therapy',
          name: 'Therapy',
          subcategories: [
            { id: 'counseling', name: 'Counseling' },
            { id: 'psychotherapy', name: 'Psychotherapy' },
            { id: 'group-therapy', name: 'Group Therapy' }
          ]
        },
        {
          id: 'meditation',
          name: 'Meditation',
          subcategories: [
            { id: 'mindfulness', name: 'Mindfulness' },
            { id: 'guided-meditation', name: 'Guided Meditation' }
          ]
        }
      ]
    },
    {
      id: 'physical-health',
      name: 'Physical Health',
      subcategories: [
        {
          id: 'fitness',
          name: 'Fitness',
          subcategories: [
            { id: 'cardio', name: 'Cardio' },
            { id: 'strength-training', name: 'Strength Training' },
            { id: 'yoga', name: 'Yoga' }
          ]
        },
        {
          id: 'nutrition',
          name: 'Nutrition',
          subcategories: [
            { id: 'diet-planning', name: 'Diet Planning' },
            { id: 'supplements', name: 'Supplements' }
          ]
        }
      ]
    }
  ]
};

const HealthPage: React.FC = () => {
  const [mode, setMode] = useState<ExplorationMode>('place');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="flex min-h-screen">
      <FilterSidebar 
        categories={[healthCategories]} 
        onFilterChange={handleFilterChange} 
      />
      
      <div className="flex-1 p-6">
        <div className="mb-6 flex gap-4">
          <button 
            className={`px-4 py-2 rounded-md ${
              mode === 'place' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-700'
            }`}
            onClick={() => setMode('place')}
          >
            Explore Places
          </button>
          <button 
            className={`px-4 py-2 rounded-md ${
              mode === 'activity' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-700'
            }`}
            onClick={() => setMode('activity')}
          >
            Find Activities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content will be filtered based on selectedFilters and mode */}
          {/* This is a placeholder card */}
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h3 className="font-medium mb-2">Content Example</h3>
            <p className="text-sm text-slate-600">
              This content will change based on selected filters: {selectedFilters.join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPage;