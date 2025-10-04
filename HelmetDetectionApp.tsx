import React, { useState } from 'react';
import { DetectionResults } from './DetectionResults';
import { Statistics } from './Statistics';

export interface DetectionResult {
  id: string;
  timestamp: Date;
  hasHelmet: boolean;
  confidence: number;
  personCount: number;
  imageUrl?: string;
}

export const HelmetDetectionApp: React.FC = () => {
  const [results, setResults] = useState<DetectionResult[]>([]);
  return (
    <div className="p-6">
      <Statistics results={results} />
      <DetectionResults results={results} />
    </div>
  );
};
