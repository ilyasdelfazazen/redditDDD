import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
}

interface FilterSidebarProps {
  categories: Category[];
  onFilterChange: (selectedFilters: string[]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ categories, onFilterChange }) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const toggleFilter = (filterId: string) => {
    const newFilters = selectedFilters.includes(filterId)
      ? selectedFilters.filter(id => id !== filterId)
      : [...selectedFilters, filterId];
    
    setSelectedFilters(newFilters);
    onFilterChange(newFilters);
  };

  const renderCategory = (category: Category, depth = 0) => {
    const isExpanded = expandedCategories[category.id];
    const hasSubcategories = category.subcategories && category.subcategories.length > 0;

    return (
      <div key={category.id} className="mb-1">
        <div 
          className={`flex items-center py-2 px-3 rounded-md cursor-pointer hover:bg-slate-100 ${
            selectedFilters.includes(category.id) ? 'bg-blue-50 text-blue-700' : ''
          }`}
          style={{ paddingLeft: `${depth * 16 + 12}px` }}
        >
          {hasSubcategories ? (
            <button
              onClick={() => toggleCategory(category.id)}
              className="mr-2"
            >
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
          ) : (
            <div className="w-6" />
          )}
          
          <div 
            className="flex-1"
            onClick={() => toggleFilter(category.id)}
          >
            {category.name}
          </div>
        </div>

        {hasSubcategories && isExpanded && (
          <div>
            {category.subcategories!.map(subcategory => 
              renderCategory(subcategory, depth + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="w-64 bg-white border-r border-slate-200 p-4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      {categories.map(category => renderCategory(category))}
    </div>
  );
};

export default FilterSidebar