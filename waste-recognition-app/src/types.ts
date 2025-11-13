export type WasteCategory = 'organic' | 'recyclable' | 'metal' | 'glass' | 'plastic' | 'paper' | 'electronic' | 'hazardous';

export interface AnalysisResult {
  id: string;
  imageUrl: string;
  category: WasteCategory;
  confidence: number;
  description: string;
  recommendations: string[];
  timestamp: Date;
}

export interface WasteCategoryInfo {
  id: WasteCategory;
  name: string;
  color: string;
  icon: string;
  description: string;
}
