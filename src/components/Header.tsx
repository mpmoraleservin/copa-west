'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Acerca de', href: '#about' },
    { name: 'Equipos', href: '#teams' },
    { name: 'Jugadores', href: '#featured-characters' }, 
    { name: 'Galería', href: '#gallery' },
    { name: 'Instagram', href: 'https://instagram.com/copawest', external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        text-white
        p-4
        transition-all duration-300 ease-in-out /* Transición para el cambio de fondo y sombra */
        ${scrolled ? 'bg-deepNavy shadow-lg' : 'bg-deepNavy/80 backdrop-blur-sm'}
        `}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center group">
          <Image
            src="/assets/about_image.png" 
            alt="Copa West Logo"
            width={40} 
            height={40} 
            className="mr-2 md:w-10 md:h-10 group-hover:scale-110 transition-transform duration-200"
          />
          <span className="font-heading text-lg md:text-xl uppercase tracking-wider text-classicOrange group-hover:text-softOrange transition-colors duration-200">
            Copa West
          </span>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            md:hidden
            text-white focus:outline-none focus:ring-2 focus:ring-classicOrange focus:ring-opacity-50
            p-2 rounded-md hover:bg-classicOrange/20 transition-colors duration-200
          "
          aria-label="Abrir menú de navegación"
        >
          {isOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>

        <ul className="
          hidden md:flex items-center space-x-5 lg:space-x-6
          font-body text-base lg:text-lg /* Ligeramente ajustado el tamaño de fuente */
        ">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="
                  relative py-1
                  hover:text-classicOrange transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:w-0 after:h-0.5 after:bg-classicOrange
                  after:transition-all after:duration-300 hover:after:w-full /* Efecto subrayado animado */
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="https://www.entradaweb.com.ar/evento/a7369f7f/step/1"
          target="_blank" 
          rel="noopener noreferrer" 
          className="
            hidden md:block
            bg-classicOrange hover:bg-softOrange text-deepNavy
            font-bold py-2 px-5 rounded-full
            text-sm uppercase tracking-wider /* Ligeramente más pequeño para balancear */
            transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg
          "
        >
          Comprar Entrada
        </Link>
      </nav>
      {isOpen && (
        <div className="
          md:hidden
          mt-3 /* Reducido margen */
          bg-deepNavy rounded-lg shadow-xl /* Sombra más pronunciada para destacar */
          py-3 px-4
          absolute top-full left-0 right-0 mx-2 /* Posicionamiento y margen lateral */
        ">
          <ul className="flex flex-col items-center space-y-3">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center py-2">
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="
                    block text-white text-lg font-body
                    hover:text-classicOrange transition-colors duration-200
                    py-2 rounded-md hover:bg-classicOrange/10
                  "
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="w-full text-center pt-3 mt-2 border-t border-gray-700">
              <Link
                href="https://www.entradaweb.com.ar/evento/a7369f7f/step/1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="
                  block bg-classicOrange hover:bg-softOrange text-deepNavy
                  font-bold py-3 px-6 rounded-full
                  text-base uppercase tracking-wide
                  transition-all duration-300 transform hover:scale-105 shadow-md
                  mx-auto max-w-fit
                "
              >
                Comprar Entrada
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}