import React from 'react';
import { AnalysisResult } from '../types';
import { wasteCategories } from '../data/wasteCategories';

interface HistoryProps {
  history: AnalysisResult[];
  onSelectResult: (result: AnalysisResult) => void;
}

const History: React.FC<HistoryProps> = ({ history, onSelectResult }) => {
  if (history.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📋</div>
        <p className="text-gray-500">Nenhuma análise realizada ainda</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Histórico de Análises
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {history.map((result) => {
          const categoryInfo = wasteCategories.find(cat => cat.id === result.category);
          if (!categoryInfo) return null;

          return (
            <div
              key={result.id}
              onClick={() => onSelectResult(result)}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={result.imageUrl}
                  alt="Análise"
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute top-2 right-2 px-3 py-1 rounded-full text-white text-sm font-semibold"
                  style={{ backgroundColor: categoryInfo.color }}
                >
                  {result.confidence}%
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-2xl">{categoryInfo.icon}</span>
                  <h3 className="font-semibold text-gray-800">
                    {categoryInfo.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-500">
                  {result.timestamp.toLocaleString('pt-BR')}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
