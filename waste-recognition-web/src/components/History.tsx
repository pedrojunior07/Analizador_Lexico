import React from 'react';
import { AnalysisResult } from '../types/waste';
import './History.css';

interface HistoryProps {
  history: AnalysisResult[];
  onSelectResult: (result: AnalysisResult) => void;
}

const History: React.FC<HistoryProps> = ({ history, onSelectResult }) => {
  if (history.length === 0) {
    return null;
  }

  return (
    <div className="history">
      <h2 className="history-title">Histórico de Análises</h2>
      <div className="history-grid">
        {history.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="history-item"
            onClick={() => onSelectResult(item)}
          >
            <img src={item.image} alt="Análise anterior" className="history-image" />
            <div className="history-overlay">
              <span className="history-category">{item.result.category}</span>
              <span className="history-confidence">
                {(item.result.confidence * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
