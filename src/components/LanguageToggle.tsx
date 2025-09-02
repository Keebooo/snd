import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types/language';

interface LanguageToggleProps {
  language: Language;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 z-50 flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm text-yellow-400 px-4 py-2 rounded-full border border-yellow-500/40 hover:border-yellow-400/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/40 group"
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
      <span className="text-sm font-bold uppercase tracking-wider">
        {language === 'en' ? 'ID' : 'EN'}
      </span>
    </button>
  );
};