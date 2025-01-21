import React, { useState } from 'react';
import { Search, Bell, Settings, TrendingUp, Briefcase, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onPortfolioToggle: () => void;
}

export function Header({ onPortfolioToggle }: HeaderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-4 flex items-center justify-between border-b border-gray-700/50 sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-blue-500" size={24} />
          <div className="text-xl font-bold text-white">Umer's Stock Exchange</div>
        </div>
        <nav className="flex space-x-4 text-gray-400">
          <button className="hover:text-white transition-colors">All</button>
          <button className="hover:text-white transition-colors">US</button>
          <button className="hover:text-white transition-colors">HK</button>
          <button className="hover:text-white transition-colors">CN</button>
          <button className="hover:text-white transition-colors">Futures</button>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search stocks..."
            className="bg-gray-800/50 text-white px-4 py-2 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 transition-all duration-200 group-hover:w-72"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <button
          onClick={onPortfolioToggle}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Briefcase size={20} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
}