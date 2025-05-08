import React from 'react';
import { RefreshCw, Play, Settings } from 'lucide-react';
import { DIFFICULTY_LEVELS } from '@/constants/gameConstants';

/**
 * Componente para los controles del juego
 * @param {string} difficulty - Dificultad actual
 * @param {Function} onChangeDifficulty - Función para cambiar la dificultad
 * @param {Function} onStartGame - Función para iniciar/reiniciar el juego
 * @param {boolean} gameStarted - Indica si el juego ha comenzado
 */
const GameControls = ({ difficulty, onChangeDifficulty, onStartGame, gameStarted }) => {
  // Opciones de dificultad
  const difficultyOptions = Object.keys(DIFFICULTY_LEVELS).map(key => ({
    value: key,
    label: DIFFICULTY_LEVELS[key].name
  }));

  return (
    <div className="w-full max-w-4xl mx-auto mb-8 px-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-indigo-950/60 p-4 rounded-xl border border-purple-800/30 shadow-lg">
        {/* Control de dificultad */}
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center">
            <Settings size={18} className="text-purple-400 mr-2" />
            <span className="text-purple-200 font-medium">Dificultad:</span>
          </div>
          
          <div className="flex gap-2">
            {difficultyOptions.map(option => (
              <button
                key={option.value}
                onClick={() => onChangeDifficulty(option.value)}
                disabled={gameStarted}
                className={`
                  px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                  ${difficulty === option.value
                    ? 'bg-purple-700 text-white shadow-md'
                    : 'bg-indigo-900/60 text-purple-300 hover:bg-indigo-800'}
                  ${gameStarted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Botón de inicio/reinicio */}
        <button
          onClick={onStartGame}
          className="w-full md:w-auto px-6 py-2 flex items-center justify-center gap-2 
                    bg-gradient-to-r from-purple-600 to-indigo-600 
                    hover:from-purple-700 hover:to-indigo-700
                    text-white font-medium rounded-lg shadow-md 
                    transition-all duration-200 ease-in-out"
        >
          {gameStarted ? (
            <>
              <RefreshCw size={18} />
              <span>Reiniciar</span>
            </>
          ) : (
            <>
              <Play size={18} />
              <span>Comenzar</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default GameControls;