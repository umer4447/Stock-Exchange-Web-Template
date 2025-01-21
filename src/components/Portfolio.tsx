import React from 'react';
import { ArrowUpRight, ArrowDownRight, Briefcase } from 'lucide-react';
import type { Stock } from '../types';

interface PortfolioProps {
  stocks: Stock[];
}

export function Portfolio({ stocks }: PortfolioProps) {
  const portfolioValue = stocks.reduce((acc, stock) => acc + stock.price * 10, 0);
  const portfolioChange = stocks.reduce((acc, stock) => acc + stock.change * 10, 0);
  const portfolioChangePercent = (portfolioChange / portfolioValue) * 100;

  return (
    <div className="space-y-4">
      <div className="bg-gray-900/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <Briefcase className="text-blue-400" size={24} />
            <h2 className="text-2xl font-bold">Your Portfolio</h2>
          </div>
          <div className="text-right">
            <div className="text-3xl font-mono">${portfolioValue.toFixed(2)}</div>
            <div className={`flex items-center justify-end ${portfolioChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              {portfolioChange >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
              ${Math.abs(portfolioChange).toFixed(2)} ({portfolioChangePercent.toFixed(2)}%)
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stocks.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between group hover:bg-gray-700/50 transition-colors"
            >
              <div>
                <div className="font-semibold">{stock.symbol}</div>
                <div className="text-sm text-gray-400">{stock.name}</div>
                <div className="text-sm text-gray-400 mt-1">10 shares</div>
              </div>
              <div className="text-right">
                <div className="font-mono">${(stock.price * 10).toFixed(2)}</div>
                <div className={`flex items-center justify-end ${stock.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {stock.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {stock.changePercent.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}