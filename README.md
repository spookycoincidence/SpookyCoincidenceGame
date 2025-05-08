# Spooky Coincidence Memory Game

Un juego de memoria desarrollado con React y Next.js.

## 🔮 Descripción

**Spooky Coincidence** es un juego de memoria donde el objetivo es encontrar pares de cartas coincidentes. El juego cuenta con una temática de tarot y ofrece distintos niveles de dificultad.

## ✨ Características

- Tablero con cartas boca abajo que se voltean al hacer clic
- Diferentes niveles de dificultad (4x4, 6x6, 8x8)
- Sistema de puntuación basado en intentos y tiempo
- Temporizador para añadir desafío
- Diseño responsive para todos los dispositivos
- Temática esotérica con cartas de tarot 
- Efectos visuales y animaciones

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/) - Biblioteca para interfaces de usuario
- [Next.js](https://nextjs.org/) - Framework de React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [Lucide React](https://lucide.dev/) - Iconos SVG

## 🚀 Instalación y ejecución

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/spooky-coincidence-game.git
cd spooky-coincidence-game
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el proyecto en modo desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el juego.

## 📁 Estructura del proyecto

```
memory-game/
├── public/
│   └── assets/
│       ├── cards/ (imágenes de cartas)
│       └── sounds/ (efectos de sonido)
├── src/
│   ├── app/
│   │   ├── page.js (página principal)
│   │   ├── layout.js (layout general)
│   │   └── globals.css
│   ├── components/
│   │   ├── Board.jsx (tablero de juego)
│   │   ├── Card.jsx (componente de carta)
│   │   ├── GameControls.jsx (controles: reiniciar, dificultad)
│   │   ├── ScoreBoard.jsx (puntuación y tiempo)
│   │   └── GameOver.jsx (pantalla de fin de juego)
│   ├── hooks/
│   │   └── useGame.js (lógica central del juego)
│   ├── utils/
│   │   └── gameUtils.js (funciones auxiliares)
│   └── constants/
│       └── gameConstants.js (constantes del juego)
├── package.json
└── tailwind.config.js
```

## 🎮 Cómo jugar

1. Selecciona un nivel de dificultad (Fácil, Medio o Difícil)
2. Haz clic en "Comenzar" para iniciar el juego
3. Haz clic en las cartas para voltearlas y encontrar pares coincidentes
4. Intenta encontrar todos los pares antes de que se agote el tiempo
5. Al finalizar, verás tu puntuación basada en los intentos realizados y el tiempo restante

## 🖼️ Personalización

Si deseas personalizar las imágenes de las cartas:

1. Reemplaza los archivos SVG en la carpeta `/public/assets/cards/`
2. Actualiza las referencias en el archivo `/src/constants/gameConstants.js`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
