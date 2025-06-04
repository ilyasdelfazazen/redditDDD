import React from 'react';
import { MapPin, Calendar, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ExplorationMode, TaxonomyItem, Place, Activity } from '../types';
import { samplePlaces, sampleActivities } from '../data/samples';

interface ResultsGridProps {
  mode: ExplorationMode;
  taxonomyFilter: TaxonomyItem | null;
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ mode, taxonomyFilter }) => {
  const items = mode === 'place' ? samplePlaces : sampleActivities;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {mode === 'place' ? (
        <>
          {(items as Place[]).map(place => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </>
      ) : (
        <>
          {(items as Activity[]).map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </>
      )}
    </div>
  );
};

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const navigate = useNavigate();
  const imageUrl = place.media?.images[0] || 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg';
  
  const handleClick = () => {
    if (place.location.city === 'Chefchaouen') {
      navigate('/africa/morocco/chefchaouen');
    }
  };
  
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{place.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>
              {place.location.city}, {place.location.country}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
          {place.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {place.categories.slice(0, 3).map((category, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800"
            >
              {category}
            </span>
          ))}
          {place.categories.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-800">
              +{place.categories.length - 3}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center">
            <Users size={14} className="mr-1" />
            <span>{place.accessibility.includes('Free') ? 'Free access' : 'Reservation required'}</span>
          </span>
          <span>{place.activities.length} activities</span>
        </div>
      </div>
    </div>
  );
};

interface ActivityCardProps {
  activity: Activity;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  const imageUrl = 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg';
  
  const classificationPath = [
    activity.classification.level1,
    activity.classification.level2,
    activity.classification.level3,
    activity.classification.level4
  ].filter(Boolean).join(' > ');
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageUrl} 
          alt={activity.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white font-semibold text-lg">{activity.name}</h3>
          <div className="flex items-center text-white/90 text-sm">
            <span>{classificationPath}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
          {activity.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {activity.context.map((ctx, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-800"
            >
              {ctx}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center">
            <Clock size={14} className="mr-1" />
            {activity.duration ? (
              <span>
                {activity.duration.min}-{activity.duration.max} {activity.duration.unit}
              </span>
            ) : (
              <span>Variable duration</span>
            )}
          </span>
          <span className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{activity.frequency || 'Any time'}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResultsGrid;