import { WasteCategoryInfo } from '../types';

export const wasteCategories: WasteCategoryInfo[] = [
  {
    id: 'organic',
    name: 'Orgânico',
    color: '#10b981',
    icon: '🍃',
    description: 'Restos de alimentos, cascas de frutas, folhas'
  },
  {
    id: 'recyclable',
    name: 'Reciclável',
    color: '#3b82f6',
    icon: '♻️',
    description: 'Materiais que podem ser reciclados'
  },
  {
    id: 'plastic',
    name: 'Plástico',
    color: '#ef4444',
    icon: '🧴',
    description: 'Garrafas PET, embalagens plásticas'
  },
  {
    id: 'paper',
    name: 'Papel',
    color: '#8b5cf6',
    icon: '📄',
    description: 'Papéis, papelão, jornais, revistas'
  },
  {
    id: 'glass',
    name: 'Vidro',
    color: '#06b6d4',
    icon: '🍾',
    description: 'Garrafas, potes e frascos de vidro'
  },
  {
    id: 'metal',
    name: 'Metal',
    color: '#f59e0b',
    icon: '🔩',
    description: 'Latas de alumínio, ferro, aço'
  },
  {
    id: 'electronic',
    name: 'Eletrônico',
    color: '#6366f1',
    icon: '💻',
    description: 'Equipamentos eletrônicos, baterias'
  },
  {
    id: 'hazardous',
    name: 'Perigoso',
    color: '#dc2626',
    icon: '⚠️',
    description: 'Produtos químicos, pilhas, lâmpadas'
  }
];
