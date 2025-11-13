import React from 'react';
import { WasteCategoryInfo } from '../types';

interface WasteCategoryCardProps {
  category: WasteCategoryInfo;
  count?: number;
}

const WasteCategoryCard: React.FC<WasteCategoryCardProps> = ({ category, count = 0 }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      style={{ borderTop: `4px solid ${category.color}` }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-4xl">{category.icon}</span>
        {count > 0 && (
          <span 
            className="text-2xl font-bold"
            style={{ color: category.color }}
          >
            {count}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">
        {category.name}
      </h3>
      <p className="text-sm text-gray-600">
        {category.description}
      </p>
    </div>
  );
};

export default WasteCategoryCard;
