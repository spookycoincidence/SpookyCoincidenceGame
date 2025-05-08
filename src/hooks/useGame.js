import { useState, useEffect, useCallback } from 'react';
import { generateCards } from '@/utils/gameUtils';
import { DIFFICULTY_LEVELS, CARD_DISPLAY_TIME, SCORE } from '@/constants/gameConstants';

/**
 * Hook personalizado para manejar la lógica del juego
 * @param {string} initialDifficulty - Dificultad inicial ('EASY', 'MEDIUM', 'HARD')
 * @returns {Object} - Estado y funciones del juego
 */
export const useGame = (initialDifficulty = 'EASY') => {
  // Estado del juego
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DIFFICULTY_LEVELS[initialDifficulty].timeLimit);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  // Iniciar/reiniciar el juego
  const startGame = useCallback((selectedDifficulty = difficulty) => {
    const diffLevel = DIFFICULTY_LEVELS[selectedDifficulty];
    const newCards = generateCards(diffLevel.gridSize);
    
    setDifficulty(selectedDifficulty);
    setCards(newCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setAttempts(0);
    setIsGameOver(false);
    setTimeLeft(diffLevel.timeLimit);
    setGameStarted(true);
    setScore(0);
    setGameWon(false);
  }, [difficulty]);

  // Manejar el clic en una carta
  const handleCardClick = useCallback((cardId) => {
    if (!gameStarted || isGameOver) return;
    
    // Encontrar la carta seleccionada
    const clickedCard = cards.find(card => card.id === cardId);
    
    // Ignorar clics en cartas ya volteadas o emparejadas
    if (clickedCard.isFlipped || clickedCard.isMatched) return;
    
    // Ignorar si ya hay dos cartas volteadas
    if (flippedCards.length === 2) return;
    
    // Voltear la carta
    const updatedCards = cards.map(card => 
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    
    setCards(updatedCards);
    setFlippedCards([...flippedCards, clickedCard]);
    
    // Si es la segunda carta volteada, verificar si hay coincidencia
    if (flippedCards.length === 1) {
      const firstCard = flippedCards[0];
      setAttempts(attempts + 1);
      
      // Verificar coincidencia
      if (firstCard.typeId === clickedCard.typeId) {
        // ¡Coincidencia encontrada!
        setTimeout(() => {
          const matchedCards = updatedCards.map(card => 
            (card.typeId === clickedCard.typeId) 
              ? { ...card, isMatched: true }
              : card
          );
          
          setCards(matchedCards);
          setFlippedCards([]);
          setMatchedPairs(matchedPairs + 1);
          
          // Verificar si hemos ganado
          const totalPairs = updatedCards.length / 2;
          if (matchedPairs + 1 === totalPairs) {
            // ¡Juego ganado!
            handleGameWon();
          }
        }, 300); // Pequeña pausa para que el jugador vea la coincidencia
      } else {
        // No hay coincidencia, voltear las cartas después de un tiempo
        setTimeout(() => {
          const resetCards = updatedCards.map(card => 
            (card.id === firstCard.id || card.id === clickedCard.id)
              ? { ...card, isFlipped: false }
              : card
          );
          
          setCards(resetCards);
          setFlippedCards([]);
        }, CARD_DISPLAY_TIME);
      }
    }
  }, [cards, flippedCards, attempts, matchedPairs, gameStarted, isGameOver]);

  // Manejar fin del juego (victoria)
  const handleGameWon = useCallback(() => {
    setGameStarted(false);
    setIsGameOver(true);
    setGameWon(true);
    
    // Calcular puntuación final
    const finalScore = matchedPairs * SCORE.MATCH_FOUND - 
                     (attempts - matchedPairs) * Math.abs(SCORE.WRONG_GUESS) +
                     Math.floor(timeLeft * SCORE.TIME_BONUS_FACTOR);
                     
    setScore(Math.max(0, finalScore));
  }, [matchedPairs, attempts, timeLeft]);

  // Manejar fin del juego (tiempo agotado)
  const handleGameOver = useCallback(() => {
    setGameStarted(false);
    setIsGameOver(true);
    
    // Calcular puntuación final, sin bonificación por tiempo
    const finalScore = matchedPairs * SCORE.MATCH_FOUND - 
                     (attempts - matchedPairs) * Math.abs(SCORE.WRONG_GUESS);
                     
    setScore(Math.max(0, finalScore));
  }, [matchedPairs, attempts]);

  // Temporizador
  useEffect(() => {
    let timer;
    if (gameStarted && !isGameOver && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleGameOver();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [gameStarted, isGameOver, timeLeft, handleGameOver]);

  return {
    cards,
    difficulty,
    timeLeft,
    attempts,
    matchedPairs,
    score,
    isGameOver,
    gameWon,
    gameStarted,
    startGame,
    handleCardClick,
    setDifficulty,
  };
};

export default useGame;