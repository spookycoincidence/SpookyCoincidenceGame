// Dificultades del juego
export const DIFFICULTY_LEVELS = {
    EASY: {
      name: 'Fácil',
      gridSize: 4, // 4x4 grid = 16 cartas (8 pares)
      timeLimit: 120, // 2 minutos
    },
    MEDIUM: {
      name: 'Medio',
      gridSize: 6, // 6x6 grid = 36 cartas (18 pares)
      timeLimit: 180, // 3 minutos
    },
    HARD: {
      name: 'Difícil',
      gridSize: 8, // 8x8 grid = 64 cartas (32 pares)
      timeLimit: 300, // 5 minutos
    },
  };
  
  // Tiempo de visualización cuando dos cartas no coinciden (en ms)
  export const CARD_DISPLAY_TIME = 1000;
  
  // Puntuación
  export const SCORE = {
    MATCH_FOUND: 10, // Puntos al encontrar un par
    WRONG_GUESS: -2, // Penalización por intento incorrecto
    TIME_BONUS_FACTOR: 0.5, // Factor para calcular bonificación por tiempo sobrante
  };
  
  // Lista de cartas temáticas de tarot/ocultismo
  export const CARD_TYPES = [
    { id: 1, name: 'El Mago', image: '/assets/cards/mago.svg' },
    { id: 2, name: 'La Sacerdotisa', image: '/assets/cards/sacerdotisa.svg' },
    { id: 3, name: 'La Emperatriz', image: '/assets/cards/emperatriz.svg' },
    { id: 4, name: 'El Emperador', image: '/assets/cards/emperador.svg' },
    { id: 5, name: 'El Sumo Sacerdote', image: '/assets/cards/sacerdote.svg' },
    { id: 6, name: 'Los Enamorados', image: '/assets/cards/enamorados.svg' },
    { id: 7, name: 'El Carro', image: '/assets/cards/carro.svg' },
    { id: 8, name: 'La Fuerza', image: '/assets/cards/fuerza.svg' },
    { id: 9, name: 'El Ermitaño', image: '/assets/cards/ermitano.svg' },
    { id: 10, name: 'La Rueda de la Fortuna', image: '/assets/cards/rueda.svg' },
    { id: 11, name: 'La Justicia', image: '/assets/cards/justicia.svg' },
    { id: 12, name: 'El Colgado', image: '/assets/cards/colgado.svg' },
    { id: 13, name: 'La Muerte', image: '/assets/cards/muerte.svg' },
    { id: 14, name: 'La Templanza', image: '/assets/cards/templanza.svg' },
    { id: 15, name: 'El Diablo', image: '/assets/cards/diablo.svg' },
    { id: 16, name: 'La Torre', image: '/assets/cards/torre.svg' },
    { id: 17, name: 'La Estrella', image: '/assets/cards/estrella.svg' },
    { id: 18, name: 'La Luna', image: '/assets/cards/luna.svg' },
    { id: 19, name: 'El Sol', image: '/assets/cards/sol.svg' },
    { id: 20, name: 'El Juicio', image: '/assets/cards/juicio.svg' },
    { id: 21, name: 'El Mundo', image: '/assets/cards/mundo.svg' },
    { id: 22, name: 'El Loco', image: '/assets/cards/loco.svg' },
    // Símbolo adicionales para tener más opciones
    { id: 23, name: 'Pentáculo', image: '/assets/cards/pentaculo.svg' },
    { id: 24, name: 'Ojo que todo lo ve', image: '/assets/cards/ojo.svg' },
    { id: 25, name: 'Luna Creciente', image: '/assets/cards/lunacreciente.svg' },
    { id: 26, name: 'Ouija', image: '/assets/cards/ouija.svg' },
    { id: 27, name: 'Cristal', image: '/assets/cards/cristal.svg' },
    { id: 28, name: 'Vela', image: '/assets/cards/vela.svg' },
    { id: 29, name: 'Gato Negro', image: '/assets/cards/gato.svg' },
    { id: 30, name: 'Caldero', image: '/assets/cards/caldero.svg' },
    { id: 31, name: 'Grimorio', image: '/assets/cards/grimorio.svg' },
    { id: 32, name: 'Escoba', image: '/assets/cards/escoba.svg' },
  ];