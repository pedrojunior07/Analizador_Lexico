export type WasteCategory = 'plastic' | 'paper' | 'glass' | 'metal' | 'organic' | 'electronic' | 'hazardous' | 'other';

export interface WasteRecognitionResult {
  category: WasteCategory;
  confidence: number;
  suggestions: string[];
  disposalInstructions: string;
}

export interface AnalysisResult {
  image: string;
  result: WasteRecognitionResult;
  timestamp: Date;
}
