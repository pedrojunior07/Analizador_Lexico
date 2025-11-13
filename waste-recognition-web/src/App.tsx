import React, { useState } from 'react';
import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';
import History from './components/History';
import { WasteRecognitionResult, AnalysisResult } from './types/waste';
import { simulateWasteAnalysis } from './utils/mockAnalysis';
import './App.css';

const App: React.FC = () => {
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [result, setResult] = useState<WasteRecognitionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [history, setHistory] = useState<AnalysisResult[]>([]);

  const handleImageSelect = (imageData: string) => {
    setCurrentImage(imageData);
    setResult(null);
  };

  const handleAnalyze = async () => {
    if (!currentImage) return;

    setIsAnalyzing(true);
    try {
      const analysisResult = await simulateWasteAnalysis(currentImage);
      setResult(analysisResult);

      const newHistoryItem: AnalysisResult = {
        image: currentImage,
        result: analysisResult,
        timestamp: new Date()
      };

      setHistory(prev => [newHistoryItem, ...prev]);
    } catch (error) {
      console.error('Erro na análise:', error);
      alert('Ocorreu um erro ao analisar a imagem. Tente novamente.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSelectHistoryResult = (item: AnalysisResult) => {
    setCurrentImage(item.image);
    setResult(item.result);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="container">
          <section className="hero-section">
            <h2 className="hero-title">Identifique e Descarte Corretamente</h2>
            <p className="hero-description">
              Faça upload de uma foto do resíduo e nosso sistema identificará automaticamente
              o tipo de material e fornecerá instruções de descarte apropriadas.
            </p>
          </section>

          <div className="content-grid">
            <div className="upload-column">
              <div className="card">
                <ImageUploader
                  onImageSelect={handleImageSelect}
                  onAnalyze={handleAnalyze}
                  isAnalyzing={isAnalyzing}
                />
              </div>
            </div>

            <div className="result-column">
              <div className="card">
                <ResultDisplay result={result} />
              </div>
            </div>
          </div>

          {history.length > 0 && (
            <div className="card">
              <History
                history={history}
                onSelectResult={handleSelectHistoryResult}
              />
            </div>
          )}

          <section className="info-section">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">📸</div>
                <h3 className="info-title">1. Capture</h3>
                <p className="info-text">
                  Tire uma foto ou faça upload de uma imagem do resíduo
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">🤖</div>
                <h3 className="info-title">2. Analise</h3>
                <p className="info-text">
                  Nossa IA identifica o tipo de material automaticamente
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">♻️</div>
                <h3 className="info-title">3. Descarte</h3>
                <p className="info-text">
                  Receba instruções detalhadas de descarte correto
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            EcoScan - Sistema de Reconhecimento Inteligente de Resíduos
          </p>
          <p className="footer-subtext">
            Ajudando a construir um futuro mais sustentável através da tecnologia
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
