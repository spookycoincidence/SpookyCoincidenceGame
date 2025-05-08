import React from 'react';
import Card from './Card';
import { DIFFICULTY_LEVELS } from '@/constants/gameConstants';

/**
 * Componente para el tablero de juego
 * @param {Array} cards - Array de objetos de cartas
 * @param {Function} onCardClick - Función para manejar el clic en una carta
 * @param {string} difficulty - Nivel de dificultad actual
 */
const Board = ({ cards, onCardClick, difficulty }) => {
  const gridSize = DIFFICULTY_LEVELS[difficulty].gridSize;
  
  // Clases de grid dinámicas basadas en el tamaño de la cuadrícula
  const gridClasses = {
    EASY: 'grid-cols-4',
    MEDIUM: 'grid-cols-6',
    HARD: 'grid-cols-8',
  };
  
  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <div 
        className={`
          grid ${gridClasses[difficulty]} gap-2 md:gap-4
          p-4 rounded-xl
          bg-gradient-to-b from-gray-900 to-indigo-950
          border border-purple-800/30 shadow-xl
        `}
      >
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;