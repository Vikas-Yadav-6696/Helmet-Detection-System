import React, { useMemo } from 'react';
import { BarChart3, TrendingUp, TrendingDown, Users, Clock, Calendar, Shield, AlertTriangle } from 'lucide-react';
import { DetectionResult } from './HelmetDetectionApp';

interface StatisticsProps {
  results: DetectionResult[];
}

export const Statistics: React.FC<StatisticsProps> = ({ results }) => {
  const stats = useMemo(() => {
    if (results.length === 0) {
      return {
        totalDetections: 0,
        helmetCount: 0,
        noHelmetCount: 0,
        complianceRate: 0,
        averageConfidence: 0,
        totalPeople: 0,
        averagePeoplePerDetection: 0,
      };
    }
    return {
      totalDetections: results.length,
      helmetCount: results.filter(r => r.hasHelmet).length,
      noHelmetCount: results.filter(r => !r.hasHelmet).length,
      complianceRate: (results.filter(r => r.hasHelmet).length / results.length) * 100,
      averageConfidence: results.reduce((sum,r) => sum+r.confidence,0)/results.length,
      totalPeople: results.reduce((sum,r) => sum+r.personCount,0),
      averagePeoplePerDetection: results.reduce((sum,r) => sum+r.personCount,0)/results.length,
    };
  }, [results]);

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <BarChart3 className="h-8 w-8 text-gray-400 mx-auto mb-4" />
        <p>No statistics available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p>Total Detections: {stats.totalDetections}</p>
      <p>Compliance Rate: {stats.complianceRate.toFixed(1)}%</p>
    </div>
  );
};
