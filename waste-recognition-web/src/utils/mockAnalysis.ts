import { WasteRecognitionResult, WasteCategory } from '../types/waste';

const wasteData: Record<WasteCategory, { disposalInstructions: string; suggestions: string[] }> = {
  plastic: {
    disposalInstructions: 'Descarte em lixeiras amarelas de coleta seletiva. Lave o item antes de descartar para facilitar a reciclagem.',
    suggestions: [
      'Remova tampas e rótulos antes de descartar',
      'Amasse garrafas plásticas para economizar espaço',
      'Prefira produtos com embalagens reutilizáveis',
      'Evite plásticos de uso único quando possível'
    ]
  },
  paper: {
    disposalInstructions: 'Descarte em lixeiras azuis de coleta seletiva. Papel sujo ou engordurado não deve ser reciclado.',
    suggestions: [
      'Remova fitas adesivas e grampos',
      'Papéis podem ser reutilizados para rascunhos',
      'Prefira impressão frente e verso',
      'Use papel reciclado sempre que possível'
    ]
  },
  glass: {
    disposalInstructions: 'Descarte em lixeiras verdes de coleta seletiva. Embale vidros quebrados em jornal ou papelão.',
    suggestions: [
      'Lave o vidro antes de descartar',
      'Vidros podem ser reutilizados como recipientes',
      'Separe por cor se possível',
      'Remova tampas e rótulos metálicos'
    ]
  },
  metal: {
    disposalInstructions: 'Descarte em lixeiras amarelas de coleta seletiva. Latas devem ser amassadas para otimizar espaço.',
    suggestions: [
      'Lave latas antes de descartar',
      'Amasse latas de alumínio',
      'Metais ferrosos e não-ferrosos podem ser reciclados',
      'Remova resíduos de alimentos'
    ]
  },
  organic: {
    disposalInstructions: 'Descarte em lixeiras marrons ou faça compostagem. Resíduos orgânicos podem virar adubo.',
    suggestions: [
      'Considere fazer compostagem doméstica',
      'Separe ossos e carnes de vegetais',
      'Use resíduos orgânicos como adubo para plantas',
      'Reduza desperdício de alimentos'
    ]
  },
  electronic: {
    disposalInstructions: 'Leve a pontos de coleta específicos para lixo eletrônico. NUNCA descarte no lixo comum.',
    suggestions: [
      'Procure programas de logística reversa',
      'Doe equipamentos funcionais',
      'Remova dados pessoais antes de descartar',
      'Considere reparo antes de substituir'
    ]
  },
  hazardous: {
    disposalInstructions: 'Leve a pontos de coleta especializados. Material perigoso requer descarte adequado.',
    suggestions: [
      'NUNCA descarte no lixo comum ou esgoto',
      'Mantenha na embalagem original',
      'Procure pontos de coleta específicos',
      'Informe-se sobre programas de coleta na sua cidade'
    ]
  },
  other: {
    disposalInstructions: 'Verifique com o serviço de coleta local as instruções específicas para este tipo de resíduo.',
    suggestions: [
      'Consulte o serviço de coleta municipal',
      'Procure informações sobre reciclagem específica',
      'Considere reutilização ou doação',
      'Evite descartar no lixo comum quando possível'
    ]
  }
};

export const simulateWasteAnalysis = (imageData: string): Promise<WasteRecognitionResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categories: WasteCategory[] = ['plastic', 'paper', 'glass', 'metal', 'organic', 'electronic'];
      const randomCategory = categories[Math.floor(Math.random() * categories.length)];
      const confidence = 0.75 + Math.random() * 0.2;

      const data = wasteData[randomCategory];

      resolve({
        category: randomCategory,
        confidence: confidence,
        suggestions: data.suggestions,
        disposalInstructions: data.disposalInstructions
      });
    }, 2000);
  });
};
