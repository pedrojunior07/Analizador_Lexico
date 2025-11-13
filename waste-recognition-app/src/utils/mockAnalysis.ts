import { AnalysisResult, WasteCategory } from '../types';
import { wasteCategories } from '../data/wasteCategories';

const recommendations: Record<WasteCategory, string[]> = {
  organic: [
    'Descarte em lixeira marrom ou composteira',
    'Pode ser usado para compostagem doméstica',
    'Evite misturar com outros tipos de resíduos'
  ],
  recyclable: [
    'Lave e seque antes de descartar',
    'Descarte em lixeira azul',
    'Contribui para economia de recursos naturais'
  ],
  plastic: [
    'Remova tampas e rótulos quando possível',
    'Descarte em lixeira vermelha',
    'Verifique o símbolo de reciclagem no produto'
  ],
  paper: [
    'Mantenha seco e limpo',
    'Descarte em lixeira azul',
    'Papéis sujos não são recicláveis'
  ],
  glass: [
    'Descarte em lixeira verde',
    'Remova tampas metálicas',
    'Vidros quebrados devem ser embrulhados'
  ],
  metal: [
    'Lave antes de descartar',
    'Descarte em lixeira amarela',
    'Latas podem ser amassadas para economizar espaço'
  ],
  electronic: [
    'Leve a pontos de coleta especializados',
    'Não descarte no lixo comum',
    'Contém materiais valiosos e tóxicos'
  ],
  hazardous: [
    'Leve a pontos de coleta específicos',
    'NUNCA descarte no lixo comum',
    'Pode contaminar solo e água'
  ]
};

export const mockAnalyzeImage = (imageUrl: string): Promise<AnalysisResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulação: escolhe uma categoria aleatória
      const randomCategory = wasteCategories[Math.floor(Math.random() * wasteCategories.length)];
      const confidence = Math.floor(Math.random() * 20) + 80; // 80-100%
      
      const result: AnalysisResult = {
        id: Date.now().toString(),
        imageUrl,
        category: randomCategory.id,
        confidence,
        description: randomCategory.description,
        recommendations: recommendations[randomCategory.id],
        timestamp: new Date()
      };
      
      resolve(result);
    }, 2000); // Simula 2 segundos de processamento
  });
};
