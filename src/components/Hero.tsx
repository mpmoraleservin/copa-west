'use client';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section
      className={`
        bg-deepNavy text-white
        min-h-screen
        flex flex-col items-center justify-center text-center
        relative overflow-hidden /* Importante para que la imagen animada no se desborde */
        p-4 md:p-8
        ${className || ''} /* Aplica el className (padding-top) de page.tsx */
      `}
    >
      {/* Fondo con imagen y degradado */}
      <Image
        src="/assets/copa_west_hero_bg.png" // Asegúrate que esta imagen sea de alta calidad
        alt="Fondo Copa West de Improvisación"
        fill
        style={{ objectFit: 'cover' }}
        quality={90} // Ajusta la calidad vs performance
        priority // Carga esta imagen con prioridad ya que es LCP (Largest Contentful Paint)
        className="
          absolute inset-0 w-full h-full
          opacity-20 /* Un poco más de opacidad si la imagen lo permite */
          animate-subtleZoom /* Aplicamos la animación de zoom sutil */
          object-center /* Centra la imagen */
        "
      />
      {/* El degradado se puede ajustar para mejorar contraste o efecto visual */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepNavy/70 via-deepNavy/40 to-deepNavy/90"></div>
      {/* Otro degradado radial opcional para centrar más la atención */}
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_30%,theme('colors.deepNavy')_100%) opacity-50"></div>


      <div
        className="
          relative z-10
          flex flex-col items-center
          max-w-xs sm:max-w-md md:max-w-xl lg:max-w-3xl 2xl:max-w-5xl
          mx-auto
          px-2
        "
      >
        {/* Para que las animaciones de entrada no se apliquen hasta que el elemento sea visible,
            se necesitaría Intersection Observer. Por simplicidad, las aplicaremos al cargar.
            Asegúrate que estas clases 'opacity-0' se eliminen por la animación. */}
        <h1
          className="
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl
            font-heading uppercase tracking-widest leading-tight
            text-classicOrange
            drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] /* Sombra más definida */
            mb-4 md:mb-6 lg:mb-8
            opacity-0 animate-fadeInUp /* Animación */
          "
        >
          LLEGA LA COPA <br className="block sm:hidden" /> WEST <br className="md:hidden" /> DE IMPRO
        </h1>

        <h2
          className="
            text-base sm:text-lg md:text-xl lg:text-2xl
            mt-0 md:mt-2
            font-body
            max-w-prose
            text-gray-200 /* Un poco más claro que gray-300 para mejor contraste */
            opacity-0 animate-fadeInUp animation-delay-200 /* Animación con delay */
            leading-relaxed /* Mejor espaciado de línea */
          "
        >
          El torneo más picante de la Argentina está por comenzar. <br className="hidden md:block" />
          Todos los VIERNES de JUNIO, 21:30hs, Teatro Tajamar Mendoza.
        </h2>

        <Link
          href="https://www.entradaweb.com.ar/evento/a7369f7f/step/1"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-8 md:mt-10 lg:mt-12
            bg-classicOrange hover:bg-softOrange text-deepNavy
            font-bold py-3 px-7 md:py-4 md:px-10 /* Ligeramente más padding horizontal */
            rounded-full
            text-base md:text-lg lg:text-xl
            uppercase tracking-wider
            transition-all duration-300 transform hover:scale-105
            shadow-lg hover:shadow-xl /* Sombra más pronunciada en hover */
            opacity-0 animate-fadeInUp animation-delay-400 /* Animación con delay */
            inline-block
          "
        >
          ¡CONSEGUÍ TU ENTRADA!
        </Link>
      </div>

      {/* Indicador de Scroll Down Opcional */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fadeIn animation-delay-600">
        <a href="#about" aria-label="Ir a la sección Acerca de">
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white/70 hover:text-white animate-bounce hover:animate-none transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
          </svg>
          {/* O podrías usar un icono importado como <FiArrowDownCircle size={40} className="text-white/70 ..." /> */}
        </a>
      </div>
    </section>
  );
}