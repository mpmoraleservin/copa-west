"use client"; 

import Image from 'next/image';
import React from 'react';

const characters = [
  { name: 'Abi', image: '/assets/characters/Abi.png', link: '#' },
  { name: 'Ailu', image: '/assets/characters/Ailu.png', link: '#' },
  { name: 'Caro', image: '/assets/characters/Caro.png', link: '#' },
  { name: 'Chiki', image: '/assets/characters/Chiki.png', link: '#' }
];

export default function FeaturedCharacters() {
    return (
      <section
        id="featured-characters" 
        className="bg-softPink text-deepNavy py-20 md:py-28 lg:py-32 relative overflow-hidden w-full"
      >
        <div className="max-w-7xl mx-auto px-4 mb-12 md:mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-wider text-classicOrange leading-tight opacity-0 animate-fadeInUp">
            Jugadores Destacados
          </h2>
          <p className="font-body text-lg md:text-xl text-bluePurple mt-4 max-w-2xl mx-auto opacity-0 animate-fadeInUp animation-delay-200">
            Conoce a las figuras clave de la Copa West. ¡Prepárate para la acción!
          </p>
        </div>
        <div className="
          relative z-10
          flex flex-nowrap justify-start items-stretch /* flex-nowrap para una sola línea, justify-start para que el scroll comience desde la izquierda */
          gap-6 sm:gap-8 md:gap-10 /* Espaciado entre tarjetas */
          w-full /* Ocupa todo el ancho disponible para el scroll interno */
          px-4 md:px-6 lg:px-8 /* Padding lateral para el contenedor de scroll */
          overflow-x-auto /* Permite scroll horizontal si los items exceden el ancho */
          pb-4 /* Padding inferior para la barra de scroll si aparece */
          scrollbar-thin scrollbar-thumb-classicOrange/70 scrollbar-track-bluePurple/20 /* Estilo de scrollbar opcional */
        ">
          <div className="flex flex-nowrap mx-auto"> 
            {characters.map((character, index) => (
              <div
                key={character.name}
                className="
                  relative group
                  flex-shrink-0 /* Evita que las tarjetas se encojan */
                  /* TAMAÑOS MÁS GRANDES - Aproximadamente para 4 en pantallas LG/XL sin scroll, o menos en SM/MD */
                  w-56 h-72 sm:w-60 sm:h-80 md:w-64 md:h-[22rem] lg:w-72 lg:h-[24rem]
                  flex flex-col items-center justify-end
                  rounded-xl overflow-hidden
                  shadow-xl hover:shadow-bluePurple/40 /* Sombra temática más pronunciada */
                  transition-all duration-300 ease-out hover:scale-105
                  opacity-0 animate-scaleIn
                  mx-3 /* Margen para separar las tarjetas, ya que gap está en el padre scrolleable */
                "
                style={{ animationDelay: `${200 + index * 150}ms` }}
              >
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  quality={85}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" 
                  className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 md:h-1/3 bg-gradient-to-t from-deepNavy/85 via-deepNavy/60 to-transparent transition-opacity duration-300 group-hover:from-deepNavy/95"></div>
                <h3 className="relative z-20 font-heading text-2xl sm:text-3xl md:text-4xl uppercase text-white text-shadow-md mb-3 md:mb-4 px-2 text-center transition-all duration-300 group-hover:text-classicOrange">
                  {character.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  