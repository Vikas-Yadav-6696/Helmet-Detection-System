import React, { useState } from 'react';
import { CheckCircle, AlertTriangle, Users, Clock, Filter, Search, Download, Eye } from 'lucide-react';
import { DetectionResult } from './HelmetDetectionApp';

interface DetectionResultsProps {
  results: DetectionResult[];
}

export const DetectionResults: React.FC<DetectionResultsProps> = ({ results }) => {
  const [filter, setFilter] = useState<'all' | 'helmet' | 'no-helmet'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedResult, setSelectedResult] = useState<DetectionResult | null>(null);

  const filteredResults = results.filter(result => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'helmet' && result.hasHelmet) || 
      (filter === 'no-helmet' && !result.hasHelmet);
    
    const matchesSearch = searchTerm === '' || 
      result.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      result.timestamp.toLocaleDateString().includes(searchTerm);
    
    return matchesFilter && matchesSearch;
  });

  const exportResults = () => {
    const csvContent = [
      ['ID', 'Timestamp', 'Has Helmet', 'Confidence', 'Person Count'].join(','),
      ...filteredResults.map(result => [
        result.id,
        result.timestamp.toISOString(),
        result.hasHelmet ? 'Yes' : 'No',
        (result.confidence * 100).toFixed(2) + '%',
        result.personCount
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `helmet-detection-results-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="h-8 w-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Detection Results</h3>
        <p className="text-gray-500">
          Upload an image or start live detection to see results here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Results</option>
              <option value="helmet">With Helmet</option>
              <option value="no-helmet">Without Helmet</option>
            </select>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search results..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <button
          onClick={exportResults}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          <Download className="h-4 w-4" />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredResults.length} of {results.length} results
      </div>
    </div>
  );
};
