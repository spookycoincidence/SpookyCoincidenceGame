'use client';

import React, { useState, useEffect } from 'react';
import { MoonStar, Skull } from 'lucide-react';
import Board from '@/components/Board';
import GameControls from '@/components/GameControls';
import ScoreBoard from '@/components/ScoreBoard';
import GameOver from '@/components/GameOver';
import useGame from '@/hooks/useGame';

export default function Home() {
  const [initialLoad, setInitialLoad] = useState(true);
  
  // Obtener estado y funciones del juego desde el hook personalizado
  const { 
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
    setDifficulty 
  } = useGame('EASY');
  
  // Calcular el número total de pares
  const totalPairs = cards.length > 0 ? cards.length / 2 : 0;
  
  // Manejar cambio de dificultad
  const handleChangeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
  };
  
  // Efecto para quitar la animación inicial después de cargar
  useEffect(() => {
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="min-h-screen py-8 px-4">
      {/* Cabecera */}
      <header className={`text-center mb-8 ${initialLoad ? 'animate-fade-in' : ''}`}>
        <div className="flex items-center justify-center gap-3 mb-2">
          <MoonStar size={32} className="text-purple-400" />
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 text-transparent bg-clip-text">
            Spooky Coincidence
          </h1>
          <Skull size={32} className="text-purple-400" />
        </div>
        <p className="text-purple-300 max-w-xl mx-auto">
          Encuentra los pares de cartas coincidentes y desafía tu memoria en este místico juego de tarot.
        </p>
      </header>
      
      {/* Controles del juego */}
      <GameControls 
        difficulty={difficulty}
        onChangeDifficulty={handleChangeDifficulty}
        onStartGame={() => startGame(difficulty)}
        gameStarted={gameStarted}
      />
      
      {/* Marcador */}
      <ScoreBoard 
        timeLeft={timeLeft}
        attempts={attempts}
        matchedPairs={matchedPairs}
        totalPairs={totalPairs}
        gameStarted={gameStarted}
      />
      
      {/* Tablero de juego */}
      <Board 
        cards={cards}
        onCardClick={handleCardClick}
        difficulty={difficulty}
      />
      
      {/* Mensaje de inicio */}
      {!gameStarted && !isGameOver && (
        <div className="text-center mt-12 px-4">
          <div className="inline-block bg-indigo-900/60 p-5 rounded-xl border border-purple-500/30 shadow-lg max-w-xl">
            <h2 className="text-xl font-semibold text-purple-200 mb-3">¡Bienvenido al reino de lo oculto!</h2>
            <p className="text-purple-300">
              Selecciona la dificultad deseada y presiona "Comenzar" para iniciar tu viaje a través de las cartas místicas.
              Encuentra todas las parejas antes de que se agote el tiempo para demostrar tu destreza mental.
            </p>
          </div>
        </div>
      )}
      
      {/* Pantalla de fin de juego */}
      {isGameOver && (
        <GameOver
          gameWon={gameWon}
          score={score}
          matchedPairs={matchedPairs}
          totalPairs={totalPairs}
          attempts={attempts}
          timeLeft={timeLeft}
          onRestart={() => startGame(difficulty)}
        />
      )}
      
      {/* Pie de página */}
      <footer className="mt-16 text-center text-purple-500/70 text-sm">
        <p>Spooky Coincidence Memory Game © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}