import React from 'react';
import { Trophy, Clock, Target, RefreshCw } from 'lucide-react';
import { formatTime } from '@/utils/gameUtils';

/**
 * Componente para la pantalla de fin de juego
 * @param {boolean} gameWon - Indica si el jugador ganó
 * @param {number} score - Puntuación final
 * @param {number} matchedPairs - Número de parejas encontradas 
 * @param {number} totalPairs - Número total de parejas
 * @param {number} attempts - Número de intentos realizados
 * @param {number} timeLeft - Tiempo restante en segundos
 * @param {Function} onRestart - Función para reiniciar el juego
 */
const GameOver = ({ 
  gameWon, 
  score, 
  matchedPairs, 
  totalPairs, 
  attempts, 
  timeLeft, 
  onRestart 
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md p-6 bg-gradient-to-b from-indigo-950 to-purple-950 rounded-xl shadow-2xl border border-purple-500/30 animate-fade-in">
        <div className="flex flex-col items-center text-center mb-6">
          {gameWon ? (
            <>
              <Trophy size={64} className="text-yellow-400 mb-4" />
              <h2 className="text-2xl font-bold text-purple-100 mb-1">¡Victoria!</h2>
              <p className="text-lg text-purple-300">Has encontrado todas las parejas</p>
            </>
          ) : (
            <>
              <Clock size={64} className="text-red-400 mb-4" />
              <h2 className="text-2xl font-bold text-purple-100 mb-1">¡Tiempo agotado!</h2>
              <p className="text-lg text-purple-300">Mejor suerte la próxima vez</p>
            </>
          )}
        </div>
        
        {/* Resumen del juego */}
        <div className="mb-6 bg-indigo-900/50 p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col items-center p-2 bg-indigo-800/30 rounded-lg">
              <span className="text-purple-300 text-sm">Puntuación</span>
              <span className="text-2xl font-bold text-white">{score}</span>
            </div>
            
            <div className="flex flex-col items-center p-2 bg-indigo-800/30 rounded-lg">
              <span className="text-purple-300 text-sm">Parejas</span>
              <span className="text-xl font-bold text-white">
                {matchedPairs} / {totalPairs}
              </span>
            </div>
            
            <div className="flex flex-col items-center p-2 bg-indigo-800/30 rounded-lg">
              <span className="text-purple-300 text-sm">Intentos</span>
              <span className="text-xl font-bold text-white">{attempts}</span>
            </div>
            
            <div className="flex flex-col items-center p-2 bg-indigo-800/30 rounded-lg">
              <span className="text-purple-300 text-sm">Tiempo restante</span>
              <span className="text-xl font-bold text-white">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
        
        {/* Mensaje motivacional basado en el rendimiento */}
        <div className="mb-6 text-center">
          <p className="text-purple-200">
            {gameWon && score > totalPairs * 15 && "¡Impresionante! Tienes una memoria extraordinaria."}
            {gameWon && score <= totalPairs * 15 && score > totalPairs * 8 && "¡Buen trabajo! Tu memoria es admirable."}
            {gameWon && score <= totalPairs * 8 && "¡Lo lograste! Sigue practicando para mejorar."}
            {!gameWon && matchedPairs > totalPairs / 2 && "¡Estuviste cerca! Inténtalo de nuevo."}
            {!gameWon && matchedPairs <= totalPairs / 2 && "Practica para mejorar tu memoria, ¡lo harás mejor la próxima vez!"}
          </p>
        </div>
        
        {/* Botón para reiniciar */}
        <button
          onClick={onRestart}
          className="w-full py-3 flex items-center justify-center gap-2 
                    bg-gradient-to-r from-purple-600 to-indigo-600 
                    hover:from-purple-700 hover:to-indigo-700
                    text-white font-medium rounded-lg shadow-md 
                    transition-all duration-200 ease-in-out"
        >
          <RefreshCw size={18} />
          <span>Jugar de nuevo</span>
        </button>
      </div>
    </div>
  );
};

export default GameOver;