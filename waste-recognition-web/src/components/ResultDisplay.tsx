import React from 'react';
import { WasteRecognitionResult, WasteCategory } from '../types/waste';
import './ResultDisplay.css';

interface ResultDisplayProps {
  result: WasteRecognitionResult | null;
}

const categoryColors: Record<WasteCategory, string> = {
  plastic: '#3B82F6',
  paper: '#8B5CF6',
  glass: '#10B981',
  metal: '#6B7280',
  organic: '#84CC16',
  electronic: '#F59E0B',
  hazardous: '#EF4444',
  other: '#64748B'
};

const categoryIcons: Record<WasteCategory, string> = {
  plastic: '♻️',
  paper: '📄',
  glass: '🍾',
  metal: '🔩',
  organic: '🌱',
  electronic: '💻',
  hazardous: '⚠️',
  other: '📦'
};

const categoryNames: Record<WasteCategory, string> = {
  plastic: 'Plástico',
  paper: 'Papel',
  glass: 'Vidro',
  metal: 'Metal',
  organic: 'Orgânico',
  electronic: 'Eletrônico',
  hazardous: 'Perigoso',
  other: 'Outro'
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  if (!result) {
    return (
      <div className="result-display">
        <div className="result-placeholder">
          <svg className="placeholder-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p>Faça upload de uma imagem para ver os resultados da análise</p>
        </div>
      </div>
    );
  }

  const categoryColor = categoryColors[result.category];
  const categoryIcon = categoryIcons[result.category];
  const categoryName = categoryNames[result.category];

  return (
    <div className="result-display">
      <h2 className="result-title">Resultado da Análise</h2>

      <div className="result-card">
        <div className="category-badge" style={{ backgroundColor: `${categoryColor}20`, borderColor: categoryColor }}>
          <span className="category-icon">{categoryIcon}</span>
          <span className="category-name" style={{ color: categoryColor }}>
            {categoryName}
          </span>
        </div>

        <div className="confidence-section">
          <div className="confidence-header">
            <span className="confidence-label">Confiança</span>
            <span className="confidence-value">{(result.confidence * 100).toFixed(1)}%</span>
          </div>
          <div className="confidence-bar">
            <div
              className="confidence-fill"
              style={{
                width: `${result.confidence * 100}%`,
                backgroundColor: categoryColor
              }}
            />
          </div>
        </div>

        <div className="disposal-section">
          <h3 className="section-title">
            <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Instruções de Descarte
          </h3>
          <p className="disposal-text">{result.disposalInstructions}</p>
        </div>

        {result.suggestions.length > 0 && (
          <div className="suggestions-section">
            <h3 className="section-title">
              <svg className="section-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Sugestões
            </h3>
            <ul className="suggestions-list">
              {result.suggestions.map((suggestion, index) => (
                <li key={index} className="suggestion-item">
                  <span className="suggestion-bullet">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="impact-section">
          <div className="impact-card">
            <div className="impact-icon" style={{ backgroundColor: `${categoryColor}20` }}>
              <span style={{ color: categoryColor }}>🌍</span>
            </div>
            <div className="impact-content">
              <h4 className="impact-title">Impacto Ambiental</h4>
              <p className="impact-text">
                O descarte correto deste tipo de resíduo ajuda a reduzir a poluição e economizar recursos naturais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
