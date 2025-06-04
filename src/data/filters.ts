import { FilterGroup } from '../types';

// Filters for Places
export const placesFilters: FilterGroup[] = [
  {
    id: 'place-location',
    label: 'Location',
    options: [
      {
        id: 'place-location-continent',
        label: 'Continent',
        type: 'select',
        options: [
          { value: 'europe', label: 'Europe' },
          { value: 'asia', label: 'Asia' },
          { value: 'north-america', label: 'North America' },
          { value: 'south-america', label: 'South America' },
          { value: 'africa', label: 'Africa' },
          { value: 'oceania', label: 'Oceania' },
          { value: 'antarctica', label: 'Antarctica' }
        ]
      },
      {
        id: 'place-location-country',
        label: 'Country',
        type: 'select',
        options: [
          { value: 'france', label: 'France' },
          { value: 'germany', label: 'Germany' },
          { value: 'italy', label: 'Italy' },
          { value: 'japan', label: 'Japan' },
          { value: 'usa', label: 'United States' }
        ]
      },
      {
        id: 'place-location-radius',
        label: 'Distance from current location',
        type: 'range',
        min: 0,
        max: 100
      }
    ]
  },
  {
    id: 'place-category',
    label: 'Category',
    options: [
      {
        id: 'place-category-urban',
        label: 'Urban',
        type: 'checkbox'
      },
      {
        id: 'place-category-natural',
        label: 'Natural',
        type: 'checkbox'
      },
      {
        id: 'place-category-cultural',
        label: 'Cultural',
        type: 'checkbox'
      },
      {
        id: 'place-category-historical',
        label: 'Historical',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 'place-domain',
    label: 'Domain',
    options: [
      {
        id: 'place-domain-health',
        label: 'Health',
        type: 'checkbox'
      },
      {
        id: 'place-domain-education',
        label: 'Education',
        type: 'checkbox'
      },
      {
        id: 'place-domain-entertainment',
        label: 'Entertainment',
        type: 'checkbox'
      },
      {
        id: 'place-domain-business',
        label: 'Business',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 'place-accessibility',
    label: 'Accessibility',
    options: [
      {
        id: 'place-accessibility-free',
        label: 'Free',
        type: 'checkbox'
      },
      {
        id: 'place-accessibility-paid',
        label: 'Paid',
        type: 'checkbox'
      },
      {
        id: 'place-accessibility-reservation',
        label: 'Reservation Required',
        type: 'checkbox'
      },
      {
        id: 'place-accessibility-disabled',
        label: 'Wheelchair Accessible',
        type: 'checkbox'
      }
    ]
  }
];

// Filters for Activities
export const activitiesFilters: FilterGroup[] = [
  {
    id: 'activity-context',
    label: 'Context',
    options: [
      {
        id: 'activity-context-outdoor',
        label: 'Outdoor',
        type: 'checkbox'
      },
      {
        id: 'activity-context-indoor',
        label: 'Indoor',
        type: 'checkbox'
      },
      {
        id: 'activity-context-online',
        label: 'Online',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 'activity-classification',
    label: 'Classification',
    options: [
      {
        id: 'activity-classification-sport',
        label: 'Sport',
        type: 'checkbox'
      },
      {
        id: 'activity-classification-wellness',
        label: 'Wellness',
        type: 'checkbox'
      },
      {
        id: 'activity-classification-culture',
        label: 'Culture',
        type: 'checkbox'
      },
      {
        id: 'activity-classification-romance',
        label: 'Romance',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 'activity-duration',
    label: 'Duration',
    options: [
      {
        id: 'activity-duration-short',
        label: 'Short (< 1 hour)',
        type: 'checkbox'
      },
      {
        id: 'activity-duration-medium',
        label: 'Medium (1-3 hours)',
        type: 'checkbox'
      },
      {
        id: 'activity-duration-long',
        label: 'Long (> 3 hours)',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 'activity-frequency',
    label: 'Frequency',
    options: [
      {
        id: 'activity-frequency-daily',
        label: 'Daily',
        type: 'checkbox'
      },
      {
        id: 'activity-frequency-weekly',
        label: 'Weekly',
        type: 'checkbox'
      },
      {
        id: 'activity-frequency-monthly',
        label: 'Monthly',
        type: 'checkbox'
      },
      {
        id: 'activity-frequency-yearly',
        label: 'Yearly',
        type: 'checkbox'
      }
    ]
  },
  {
    id: 'activity-participants',
    label: 'Participants',
    options: [
      {
        id: 'activity-participants-solo',
        label: 'Solo',
        type: 'checkbox'
      },
      {
        id: 'activity-participants-couple',
        label: 'Couple',
        type: 'checkbox'
      },
      {
        id: 'activity-participants-group',
        label: 'Group',
        type: 'checkbox'
      },
      {
        id: 'activity-participants-family',
        label: 'Family',
        type: 'checkbox'
      }
    ]
  }
];