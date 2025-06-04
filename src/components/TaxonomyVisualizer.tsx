import React, { useEffect, useRef } from 'react';
import { TaxonomyItem } from '../types';

interface TaxonomyVisualizerProps {
  taxonomy: TaxonomyItem[];
  selectedItem: TaxonomyItem | null;
}

const TaxonomyVisualizer: React.FC<TaxonomyVisualizerProps> = ({ 
  taxonomy, 
  selectedItem 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Add simple visualization (in a real app, use D3.js or a similar library)
    drawTaxonomyVisualization(ctx, canvas.width, canvas.height, taxonomy, selectedItem);
    
  }, [taxonomy, selectedItem]);
  
  const drawTaxonomyVisualization = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    taxonomy: TaxonomyItem[],
    selectedItem: TaxonomyItem | null
  ) => {
    // This is a simplified visualization
    // In a real app, use a library like D3.js for interactive visualizations
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;
    
    // Draw center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#3B82F6';
    ctx.fill();
    
    // Draw text in center
    ctx.fillStyle = 'white';
    ctx.font = '14px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Taxonomy', centerX, centerY);
    
    // Draw top-level items around the center
    const itemCount = taxonomy.length;
    for (let i = 0; i < itemCount; i++) {
      const angle = (i / itemCount) * Math.PI * 2 - Math.PI / 2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      // Draw connection line
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw node
      const isSelected = selectedItem?.id === taxonomy[i].id;
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fillStyle = isSelected ? '#2563EB' : '#93C5FD';
      ctx.fill();
      
      // Draw text
      ctx.fillStyle = isSelected ? 'white' : '#1E3A8A';
      ctx.font = '12px Arial';
      ctx.fillText(taxonomy[i].name, x, y);
      
      // Draw children if this is the selected item
      if (isSelected && taxonomy[i].children) {
        const childCount = taxonomy[i].children.length;
        const childRadius = radius * 0.6;
        
        for (let j = 0; j < childCount; j++) {
          const childAngle = angle + ((j - childCount / 2 + 0.5) / childCount) * Math.PI / 3;
          const childX = x + Math.cos(childAngle) * childRadius;
          const childY = y + Math.sin(childAngle) * childRadius;
          
          // Draw connection to child
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(childX, childY);
          ctx.strokeStyle = '#CBD5E1';
          ctx.stroke();
          
          // Draw child node
          ctx.beginPath();
          ctx.arc(childX, childY, 20, 0, Math.PI * 2);
          ctx.fillStyle = '#BFDBFE';
          ctx.fill();
          
          // Draw child text
          ctx.fillStyle = '#1E3A8A';
          ctx.font = '10px Arial';
          ctx.fillText(taxonomy[i].children[j].name, childX, childY);
        }
      }
    }
  };
  
  return (
    <div className="h-[600px] flex flex-col">
      <h2 className="text-lg font-semibold text-slate-800 mb-3">Taxonomy Visualization</h2>
      <p className="text-sm text-slate-600 mb-4">
        Interactive visualization of the taxonomy hierarchy. Select an item to explore its relationships.
      </p>
      <div className="flex-1 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full"
        />
      </div>
      <p className="text-xs text-slate-500 mt-2 text-center">
        Note: This is a simplified visualization. In a production environment, a more sophisticated 
        interactive visualization would be implemented.
      </p>
    </div>
  );
};

export default TaxonomyVisualizer;