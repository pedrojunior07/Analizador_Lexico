import React from 'react';
import { AnalysisResult } from '../types';
import { wasteCategories } from '../data/wasteCategories';

interface ResultDisplayProps {
  result: AnalysisResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const categoryInfo = wasteCategories.find(cat => cat.id === result.category);
  
  if (!categoryInfo) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div 
          className="p-6 text-white"
          style={{ backgroundColor: categoryInfo.color }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-5xl">{categoryInfo.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{categoryInfo.name}</h2>
                <p className="text-sm opacity-90">
                  Confiança: {result.confidence}%
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">{result.confidence}%</div>
              <div className="text-xs opacity-90">Precisão</div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Descrição
            </h3>
            <p className="text-gray-600">{result.description}</p>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Recomendações de Descarte
            </h3>
            <ul className="space-y-2">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-gray-600">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timestamp */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Analisado em: {result.timestamp.toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
