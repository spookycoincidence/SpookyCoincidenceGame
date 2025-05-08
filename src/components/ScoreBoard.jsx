import React from 'react';
import { Clock, Target, Layers } from 'lucide-react';
import { formatTime } from '@/utils/gameUtils';

/**
 * Componente para mostrar la puntuación y el tiempo
 * @param {number} timeLeft - Tiempo restante en segundos
 * @param {number} attempts - Número de intentos
 * @param {number} matchedPairs - Número de parejas encontradas
 * @param {number} totalPairs - Número total de parejas
 * @param {boolean} gameStarted - Indica si el juego ha comenzado
 */
const ScoreBoard = ({ timeLeft, attempts, matchedPairs, totalPairs, gameStarted }) => {
  // Calcular porcentaje de tiempo para la barra de progreso
  const timePercent = gameStarted && timeLeft != null 
    ? Math.max(0, Math.min(100, (timeLeft / 300) * 100)) 
    : 100;
    
  // Colorear la barra de tiempo según el porcentaje restante
  const getTimeBarColor = () => {
    if (timePercent > 60) return 'bg-green-500';
    if (timePercent > 30) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-6 px-4">
      <div className="flex flex-col md:flex-row gap-4 bg-indigo-950/60 p-4 rounded-xl border border-purple-800/30 shadow-lg">
        {/* Temporizador */}
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <Clock size={18} className="text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Tiempo:</span>
            <span className="ml-2 text-white font-bold">{formatTime(timeLeft)}</span>
          </div>
          
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getTimeBarColor()} transition-all duration-1000 ease-linear`}
              style={{ width: `${timePercent}%` }}
            />
          </div>
        </div>
        
        {/* Intentos */}
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <Target size={18} className="text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Intentos:</span>
            <span className="ml-2 text-white font-bold">{attempts}</span>
          </div>
          
          <div className="w-full h-2 bg-gray-700 rounded-full">
            {attempts > 0 && (
              <div 
                className="h-full bg-blue-500"
                style={{ width: `${Math.min(100, (attempts / (totalPairs * 3)) * 100)}%` }}
              />
            )}
          </div>
        </div>
        
        {/* Parejas encontradas */}
        <div className="flex-1">
          <div className="flex items-center mb-1">
            <Layers size={18} className="text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Parejas:</span>
            <span className="ml-2 text-white font-bold">
              {matchedPairs} / {totalPairs}
            </span>
          </div>
          
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-purple-500 transition-all duration-300"
              style={{ width: `${(matchedPairs / totalPairs) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;