import './globals.css';

export const metadata = {
  title: 'Spooky Coincidence - Memory Game',
  description: 'Un juego de memoria con temática ocultista y esotérica',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
