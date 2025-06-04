import React, { useState } from 'react';
import { ExplorationMode, TaxonomyItem } from '../types';
import TaxonomyExplorer from './TaxonomyExplorer';
import ResultsGrid from './ResultsGrid';
import TaxonomyVisualizer from './TaxonomyVisualizer';
import { placeTaxonomy, activityTaxonomy } from '../data/taxonomies';

interface MainContentProps {
  mode: ExplorationMode;
}

const MainContent: React.FC<MainContentProps> = ({ mode }) => {
  const [selectedTaxonomy, setSelectedTaxonomy] = useState<TaxonomyItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'taxonomy' | 'map'>('grid');
  
  const taxonomy = mode === 'place' ? placeTaxonomy : activityTaxonomy;
  
  return (
    <main className="overflow-y-auto p-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {viewMode === 'grid' && (
          <ResultsGrid 
            mode={mode} 
            taxonomyFilter={selectedTaxonomy} 
          />
        )}
        
        {viewMode === 'taxonomy' && (
          <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200">
            <TaxonomyVisualizer 
              taxonomy={taxonomy} 
              selectedItem={selectedTaxonomy} 
            />
          </div>
        )}
        
        {viewMode === 'map' && mode === 'place' && (
          <div className="bg-white rounded-lg shadow-sm p-4 border border-slate-200 h-[600px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-500 mb-2">Map View will be implemented here</p>
              <p className="text-sm text-slate-400">Showing places based on current filters and taxonomy selection</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MainContent;