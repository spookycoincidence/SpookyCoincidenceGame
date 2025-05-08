import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Componente para una carta individual del juego
 * @param {Object} card - Datos de la carta
 * @param {Function} onClick - Función a ejecutar al hacer clic
 */
const Card = ({ card, onClick }) => {
  // Determinar clases de estilos según el estado de la carta
  const cardClasses = `
    relative w-full h-full 
    transition-transform duration-500 ease-in-out 
    transform-gpu perspective-1000
    ${card.isFlipped ? 'rotate-y-180' : ''}
    cursor-pointer
  `;

  const frontClasses = `
    absolute w-full h-full 
    flex items-center justify-center 
    bg-indigo-900 border-2 border-purple-400 
    rounded-lg shadow-lg
    backface-hidden
    rotate-y-180
    overflow-hidden
  `;

  const backClasses = `
    absolute w-full h-full
    flex items-center justify-center
    bg-gradient-to-br from-purple-900 to-indigo-800
    border-2 border-purple-500
    rounded-lg shadow-md
    backface-hidden
    overflow-hidden
  `;

  const matchedClasses = `
    absolute inset-0 
    bg-gradient-to-r from-green-400/20 to-purple-500/20
    z-10 rounded-lg
    flex items-center justify-center
  `;

  return (
    <div 
      className="aspect-square p-1 perspective-1000" 
      onClick={() => !card.isFlipped && !card.isMatched && onClick(card.id)}
    >
      <div className={cardClasses}>
        {/* Parte trasera de la carta (visible cuando no está volteada) */}
        <div className={backClasses}>
          <div className="w-full h-full flex items-center justify-center bg-[url('/assets/cards/back-pattern.svg')] bg-repeat opacity-30">
            {/* Patrón de fondo */}
          </div>
          <Sparkles 
            size={32} 
            className="absolute text-purple-300 opacity-80" 
          />
        </div>
        
        {/* Parte frontal de la carta (visible cuando está volteada) */}
        <div className={frontClasses}>
          {card.image ? (
            <img 
              src={card.image} 
              alt={card.name}
              className="w-4/5 h-4/5 object-contain" 
            />
          ) : (
            <span className="text-xl font-medium text-purple-200">{card.name}</span>
          )}
        </div>
        
        {/* Efecto visual cuando la carta ha sido emparejada */}
        {card.isMatched && (
          <div className={matchedClasses}>
            <Sparkles 
              size={32} 
              className="text-yellow-300 animate-pulse" 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;