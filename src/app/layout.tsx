import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Oswald, Outfit } from 'next/font/google'; 

const oswald = Oswald({ subsets: ['latin'], weight: ['500'], variable: '--font-heading' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Copa West 2025 - Improvisación Teatral en Mendoza',
  description: 'Torneo de improvisación teatral en Mendoza, ¡todos los viernes de junio 2025 en el Teatro Tajamar! Humor, vértigo y puro fuego mendocino.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${oswald.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}