import React from 'react';
import { X } from 'lucide-react';
import type { Stock } from '../types';

interface ComparisonModeProps {
  mainStock: Stock;
  comparisonStocks: Stock[];
  onRemove: (stock: Stock) => void;
}

export function ComparisonMode({ mainStock, comparisonStocks, onRemove }: ComparisonModeProps) {
  return (
    <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
      <h3 className="text-lg font-semibold mb-3">Comparison Mode</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {comparisonStocks.map((stock) => (
          <div
            key={stock.symbol}
            className="bg-gray-800/50 p-3 rounded-lg relative group"
          >
            <button
              onClick={() => onRemove(stock)}
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={16} className="text-gray-400 hover:text-white" />
            </button>
            <div className="font-semibold">{stock.symbol}</div>
            <div className="text-sm text-gray-400">{stock.name}</div>
            <div className={`mt-2 ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {stock.change >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%
            </div>
            <div className="text-sm text-gray-400 mt-1">
              vs {mainStock.symbol}:{' '}
              <span className={stock.price > mainStock.price ? 'text-green-400' : 'text-red-400'}>
                {((stock.price - mainStock.price) / mainStock.price * 100).toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}