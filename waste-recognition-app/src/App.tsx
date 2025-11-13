import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import ResultDisplay from './components/ResultDisplay';
import Dashboard from './components/Dashboard';
import History from './components/History';
import { AnalysisResult } from './types';
import { mockAnalyzeImage } from './utils/mockAnalysis';

type Tab = 'analyze' | 'dashboard' | 'history';

function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('analyze');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentResult, setCurrentResult] = useState<AnalysisResult | null>(null);
  const [history, setHistory] = useState<AnalysisResult[]>([]);

  const handleImageSelect = async (imageUrl: string) => {
    setIsAnalyzing(true);
    setCurrentResult(null);

    try {
      const result = await mockAnalyzeImage(imageUrl);
      setCurrentResult(result);
      setHistory(prev => [result, ...prev]);
    } catch (error) {
      console.error('Erro ao analisar imagem:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSelectHistoryResult = (result: AnalysisResult) => {
    setCurrentResult(result);
    setCurrentTab('analyze');
  };

  const handleNewAnalysis = () => {
    setCurrentResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-4xl">♻️</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  EcoRecognition
                </h1>
                <p className="text-sm text-gray-600">
                  Sistema de Reconhecimento de Resíduos
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentTab('analyze')}
              className={`
                py-4 px-2 border-b-2 font-medium text-sm transition-colors
                ${currentTab === 'analyze'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              📸 Analisar
            </button>
            <button
              onClick={() => setCurrentTab('dashboard')}
              className={`
                py-4 px-2 border-b-2 font-medium text-sm transition-colors
                ${currentTab === 'dashboard'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              📊 Dashboard
            </button>
            <button
              onClick={() => setCurrentTab('history')}
              className={`
                py-4 px-2 border-b-2 font-medium text-sm transition-colors
                ${currentTab === 'history'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              📋 Histórico ({history.length})
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentTab === 'analyze' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Reconhecimento de Resíduos por Imagem
              </h2>
              <p className="text-gray-600">
                Faça upload de uma imagem para identificar o tipo de resíduo e obter recomendações de descarte
              </p>
            </div>

            <ImageUpload
              onImageSelect={handleImageSelect}
              isAnalyzing={isAnalyzing}
            />

            {currentResult && (
              <>
                <ResultDisplay result={currentResult} />
                <div className="text-center">
                  <button
                    onClick={handleNewAnalysis}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300"
                  >
                    Nova Análise
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        {currentTab === 'dashboard' && (
          <Dashboard history={history} />
        )}

        {currentTab === 'history' && (
          <History
            history={history}
            onSelectResult={handleSelectHistoryResult}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2024 EcoRecognition - Sistema de Reconhecimento de Resíduos por Imagem
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
