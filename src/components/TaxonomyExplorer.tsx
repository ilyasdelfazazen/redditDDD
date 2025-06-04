import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { TaxonomyItem } from '../types';

interface TaxonomyExplorerProps {
  taxonomy: TaxonomyItem[];
  onSelect: (item: TaxonomyItem | null) => void;
  selectedItem: TaxonomyItem | null;
}

const TaxonomyExplorer: React.FC<TaxonomyExplorerProps> = ({ 
  taxonomy, 
  onSelect,
  selectedItem 
}) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };
  
  const renderTaxonomyItem = (item: TaxonomyItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[item.id] ?? false;
    const isSelected = selectedItem?.id === item.id;
    
    return (
      <div key={item.id} className="mb-1">
        <div 
          className={`flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors ${
            isSelected 
              ? 'bg-blue-100 text-blue-800' 
              : 'hover:bg-slate-100'
          }`}
          style={{ paddingLeft: `${(depth * 0.75) + 0.5}rem` }}
        >
          {hasChildren && (
            <button 
              className="mr-1 text-slate-500 hover:text-slate-700 focus:outline-none"
              onClick={() => toggleItem(item.id)}
            >
              {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
          )}
          
          <div 
            className="flex-1 text-sm"
            onClick={() => onSelect(isSelected ? null : item)}
          >
            {item.name}
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-2">
            {item.children?.map(child => renderTaxonomyItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div className="overflow-y-auto max-h-[500px]">
      {taxonomy.map(item => renderTaxonomyItem(item))}
    </div>
  );
};

export default TaxonomyExplorer;