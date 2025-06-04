import { TaxonomyItem } from '../types';

// Place Taxonomy
export const placeTaxonomy: TaxonomyItem[] = [
  {
    id: 'geo',
    name: 'Geography',
    level: 1,
    children: [
      {
        id: 'geo-europe',
        name: 'Europe',
        level: 2,
        parentId: 'geo',
        children: [
          {
            id: 'geo-europe-france',
            name: 'France',
            level: 3,
            parentId: 'geo-europe',
            children: [
              {
                id: 'geo-europe-france-paris',
                name: 'Paris',
                level: 4,
                parentId: 'geo-europe-france',
                children: [
                  {
                    id: 'geo-europe-france-paris-montmartre',
                    name: 'Montmartre',
                    level: 5,
                    parentId: 'geo-europe-france-paris',
                    children: [
                      {
                        id: 'geo-europe-france-paris-montmartre-sacrecoeur',
                        name: 'Sacré-Cœur',
                        level: 6,
                        parentId: 'geo-europe-france-paris-montmartre'
                      },
                      {
                        id: 'geo-europe-france-paris-montmartre-placedutertre',
                        name: 'Place du Tertre',
                        level: 6,
                        parentId: 'geo-europe-france-paris-montmartre'
                      }
                    ]
                  },
                  {
                    id: 'geo-europe-france-paris-marais',
                    name: 'Le Marais',
                    level: 5,
                    parentId: 'geo-europe-france-paris'
                  }
                ]
              }
            ]
          },
          {
            id: 'geo-europe-portugal',
            name: 'Portugal',
            level: 3,
            parentId: 'geo-europe',
            children: [
              {
                id: 'geo-europe-portugal-lisbon',
                name: 'Lisbon',
                level: 4,
                parentId: 'geo-europe-portugal',
                children: [
                  {
                    id: 'geo-europe-portugal-lisbon-alfama',
                    name: 'Alfama',
                    level: 5,
                    parentId: 'geo-europe-portugal-lisbon'
                  },
                  {
                    id: 'geo-europe-portugal-lisbon-bairroalto',
                    name: 'Bairro Alto',
                    level: 5,
                    parentId: 'geo-europe-portugal-lisbon'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'geo-asia',
        name: 'Asia',
        level: 2,
        parentId: 'geo',
        children: [
          {
            id: 'geo-asia-japan',
            name: 'Japan',
            level: 3,
            parentId: 'geo-asia',
            children: [
              {
                id: 'geo-asia-japan-tokyo',
                name: 'Tokyo',
                level: 4,
                parentId: 'geo-asia-japan',
                children: [
                  {
                    id: 'geo-asia-japan-tokyo-shibuya',
                    name: 'Shibuya',
                    level: 5,
                    parentId: 'geo-asia-japan-tokyo'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'domain',
    name: 'Domains',
    level: 1,
    children: [
      {
        id: 'domain-health',
        name: 'Health',
        level: 2,
        parentId: 'domain',
        children: [
          {
            id: 'domain-health-women',
            name: 'Women\'s Health',
            level: 3,
            parentId: 'domain-health',
            children: [
              {
                id: 'domain-health-women-pregnancy',
                name: 'Pregnancy',
                level: 4,
                parentId: 'domain-health-women',
                children: [
                  {
                    id: 'domain-health-women-pregnancy-prenatal',
                    name: 'Prenatal Care',
                    level: 5,
                    parentId: 'domain-health-women-pregnancy'
                  },
                  {
                    id: 'domain-health-women-pregnancy-birth',
                    name: 'Birth',
                    level: 5,
                    parentId: 'domain-health-women-pregnancy'
                  }
                ]
              }
            ]
          },
          {
            id: 'domain-health-mental',
            name: 'Mental Health',
            level: 3,
            parentId: 'domain-health',
            children: [
              {
                id: 'domain-health-mental-therapy',
                name: 'Therapy',
                level: 4,
                parentId: 'domain-health-mental'
              },
              {
                id: 'domain-health-mental-meditation',
                name: 'Meditation',
                level: 4,
                parentId: 'domain-health-mental'
              }
            ]
          }
        ]
      },
      {
        id: 'domain-culture',
        name: 'Culture',
        level: 2,
        parentId: 'domain',
        children: [
          {
            id: 'domain-culture-art',
            name: 'Art',
            level: 3,
            parentId: 'domain-culture',
            children: [
              {
                id: 'domain-culture-art-visual',
                name: 'Visual Arts',
                level: 4,
                parentId: 'domain-culture-art',
                children: [
                  {
                    id: 'domain-culture-art-visual-painting',
                    name: 'Painting',
                    level: 5,
                    parentId: 'domain-culture-art-visual'
                  },
                  {
                    id: 'domain-culture-art-visual-sculpture',
                    name: 'Sculpture',
                    level: 5,
                    parentId: 'domain-culture-art-visual'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'category',
    name: 'Categories',
    level: 1,
    children: [
      {
        id: 'category-urban',
        name: 'Urban',
        level: 2,
        parentId: 'category',
        children: [
          {
            id: 'category-urban-residential',
            name: 'Residential',
            level: 3,
            parentId: 'category-urban'
          },
          {
            id: 'category-urban-commercial',
            name: 'Commercial',
            level: 3,
            parentId: 'category-urban'
          }
        ]
      },
      {
        id: 'category-natural',
        name: 'Natural',
        level: 2,
        parentId: 'category',
        children: [
          {
            id: 'category-natural-parks',
            name: 'Parks',
            level: 3,
            parentId: 'category-natural'
          },
          {
            id: 'category-natural-water',
            name: 'Water Bodies',
            level: 3,
            parentId: 'category-natural',
            children: [
              {
                id: 'category-natural-water-river',
                name: 'Rivers',
                level: 4,
                parentId: 'category-natural-water'
              },
              {
                id: 'category-natural-water-lake',
                name: 'Lakes',
                level: 4,
                parentId: 'category-natural-water'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    level: 1,
    children: [
      {
        id: 'realestate-residential',
        name: 'Residential',
        level: 2,
        parentId: 'realestate',
        children: [
          {
            id: 'realestate-residential-apartment',
            name: 'Apartments',
            level: 3,
            parentId: 'realestate-residential'
          },
          {
            id: 'realestate-residential-house',
            name: 'Houses',
            level: 3,
            parentId: 'realestate-residential'
          }
        ]
      },
      {
        id: 'realestate-commercial',
        name: 'Commercial',
        level: 2,
        parentId: 'realestate',
        children: [
          {
            id: 'realestate-commercial-office',
            name: 'Offices',
            level: 3,
            parentId: 'realestate-commercial'
          },
          {
            id: 'realestate-commercial-retail',
            name: 'Retail',
            level: 3,
            parentId: 'realestate-commercial'
          }
        ]
      }
    ]
  }
];

// Activity Taxonomy
export const activityTaxonomy: TaxonomyItem[] = [
  {
    id: 'context',
    name: 'Context',
    level: 1,
    children: [
      {
        id: 'context-outdoor',
        name: 'Outdoor',
        level: 2,
        parentId: 'context',
        children: [
          {
            id: 'context-outdoor-urban',
            name: 'Urban Setting',
            level: 3,
            parentId: 'context-outdoor'
          },
          {
            id: 'context-outdoor-nature',
            name: 'Nature Setting',
            level: 3,
            parentId: 'context-outdoor'
          }
        ]
      },
      {
        id: 'context-indoor',
        name: 'Indoor',
        level: 2,
        parentId: 'context',
        children: [
          {
            id: 'context-indoor-home',
            name: 'At Home',
            level: 3,
            parentId: 'context-indoor'
          },
          {
            id: 'context-indoor-venue',
            name: 'At Venue',
            level: 3,
            parentId: 'context-indoor'
          }
        ]
      }
    ]
  },
  {
    id: 'classification',
    name: 'Classification',
    level: 1,
    children: [
      {
        id: 'classification-wellness',
        name: 'Wellness',
        level: 2,
        parentId: 'classification',
        children: [
          {
            id: 'classification-wellness-physical',
            name: 'Physical Wellness',
            level: 3,
            parentId: 'classification-wellness',
            children: [
              {
                id: 'classification-wellness-physical-yoga',
                name: 'Yoga',
                level: 4,
                parentId: 'classification-wellness-physical',
                children: [
                  {
                    id: 'classification-wellness-physical-yoga-hatha',
                    name: 'Hatha Yoga',
                    level: 5,
                    parentId: 'classification-wellness-physical-yoga'
                  },
                  {
                    id: 'classification-wellness-physical-yoga-vinyasa',
                    name: 'Vinyasa Flow',
                    level: 5,
                    parentId: 'classification-wellness-physical-yoga'
                  }
                ]
              }
            ]
          },
          {
            id: 'classification-wellness-mental',
            name: 'Mental Wellness',
            level: 3,
            parentId: 'classification-wellness',
            children: [
              {
                id: 'classification-wellness-mental-meditation',
                name: 'Meditation',
                level: 4,
                parentId: 'classification-wellness-mental',
                children: [
                  {
                    id: 'classification-wellness-mental-meditation-mindfulness',
                    name: 'Mindfulness',
                    level: 5,
                    parentId: 'classification-wellness-mental-meditation'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'classification-art',
        name: 'Art & Craft',
        level: 2,
        parentId: 'classification',
        children: [
          {
            id: 'classification-art-visual',
            name: 'Visual Arts',
            level: 3,
            parentId: 'classification-art',
            children: [
              {
                id: 'classification-art-visual-painting',
                name: 'Painting',
                level: 4,
                parentId: 'classification-art-visual',
                children: [
                  {
                    id: 'classification-art-visual-painting-watercolor',
                    name: 'Watercolor',
                    level: 5,
                    parentId: 'classification-art-visual-painting'
                  },
                  {
                    id: 'classification-art-visual-painting-acrylic',
                    name: 'Acrylic',
                    level: 5,
                    parentId: 'classification-art-visual-painting'
                  }
                ]
              }
            ]
          },
          {
            id: 'classification-art-craft',
            name: 'Crafts',
            level: 3,
            parentId: 'classification-art',
            children: [
              {
                id: 'classification-art-craft-pottery',
                name: 'Pottery',
                level: 4,
                parentId: 'classification-art-craft',
                children: [
                  {
                    id: 'classification-art-craft-pottery-wheelthrowing',
                    name: 'Wheel Throwing',
                    level: 5,
                    parentId: 'classification-art-craft-pottery'
                  },
                  {
                    id: 'classification-art-craft-pottery-handbuilding',
                    name: 'Hand Building',
                    level: 5,
                    parentId: 'classification-art-craft-pottery'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'temporal',
    name: 'Temporal',
    level: 1,
    children: [
      {
        id: 'temporal-season',
        name: 'Season',
        level: 2,
        parentId: 'temporal',
        children: [
          {
            id: 'temporal-season-spring',
            name: 'Spring',
            level: 3,
            parentId: 'temporal-season'
          },
          {
            id: 'temporal-season-summer',
            name: 'Summer',
            level: 3,
            parentId: 'temporal-season'
          },
          {
            id: 'temporal-season-autumn',
            name: 'Autumn',
            level: 3,
            parentId: 'temporal-season'
          },
          {
            id: 'temporal-season-winter',
            name: 'Winter',
            level: 3,
            parentId: 'temporal-season'
          }
        ]
      },
      {
        id: 'temporal-timeofday',
        name: 'Time of Day',
        level: 2,
        parentId: 'temporal',
        children: [
          {
            id: 'temporal-timeofday-morning',
            name: 'Morning',
            level: 3,
            parentId: 'temporal-timeofday'
          },
          {
            id: 'temporal-timeofday-afternoon',
            name: 'Afternoon',
            level: 3,
            parentId: 'temporal-timeofday'
          },
          {
            id: 'temporal-timeofday-evening',
            name: 'Evening',
            level: 3,
            parentId: 'temporal-timeofday'
          }
        ]
      }
    ]
  }
];