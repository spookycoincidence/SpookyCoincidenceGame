import { CARD_TYPES } from "@/constants/gameConstants";

/**
 * Genera un conjunto de cartas barajadas para el juego basado en el tamaño de la cuadrícula
 * @param {number} gridSize - Tamaño de la cuadrícula (4 para 4x4, 6 para 6x6, etc.)
 * @returns {Array} - Array de cartas barajadas
 */
export const generateCards = (gridSize) => {
  // Calculamos cuántos pares necesitamos (gridSize^2 / 2)
  const pairsNeeded = Math.floor((gridSize * gridSize) / 2);
  
  // Tomamos solo los tipos de cartas que necesitamos
  const selectedCardTypes = [...CARD_TYPES]
    .sort(() => Math.random() - 0.5) // Barajamos primero para obtener tipos aleatorios
    .slice(0, pairsNeeded);
  
  // Creamos dos de cada carta para formar pares
  let cards = [];
  selectedCardTypes.forEach(cardType => {
    // Creamos dos instancias con el mismo id de tipo pero diferente id de carta
    cards.push({
      id: `card-${cardType.id}-1`,
      typeId: cardType.id,
      name: cardType.name,
      image: cardType.image,
      isFlipped: false,
      isMatched: false
    });
    
    cards.push({
      id: `card-${cardType.id}-2`,
      typeId: cardType.id,
      name: cardType.name,
      image: cardType.image,
      isFlipped: false,
      isMatched: false
    });
  });
  
  // Barajamos las cartas
  return shuffleCards(cards);
};

/**
 * Baraja un array de cartas (algoritmo Fisher-Yates)
 * @param {Array} cards - Array de cartas a barajar
 * @returns {Array} - Array de cartas barajadas
 */
export const shuffleCards = (cards) => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Formatea el tiempo en segundos a un formato mm:ss
 * @param {number} seconds - Tiempo en segundos
 * @returns {string} - Tiempo formateado (mm:ss)
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Calcula la puntuación final basada en aciertos, intentos y tiempo
 * @param {number} matches - Número de parejas encontradas
 * @param {number} attempts - Número total de intentos
 * @param {number} timeLeft - Tiempo restante en segundos
 * @param {Object} scoreConfig - Configuración de puntuación
 * @returns {number} - Puntuación final
 */
export const calculateScore = (matches, attempts, timeLeft, scoreConfig) => {
  // Puntos por parejas encontradas
  const matchPoints = matches * scoreConfig.MATCH_FOUND;
  
  // Penalización por intentos (intentos - matches*2 son los intentos incorrectos)
  const incorrectAttempts = Math.max(0, attempts - matches * 2);
  const penaltyPoints = incorrectAttempts * scoreConfig.WRONG_GUESS;
  
  // Bonificación por tiempo restante
  const timeBonus = Math.floor(timeLeft * scoreConfig.TIME_BONUS_FACTOR);
  
  // Suma total (aseguramos que no sea negativa)
  return Math.max(0, matchPoints + penaltyPoints + timeBonus);
};