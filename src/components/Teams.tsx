"use client"; 

import Image from 'next/image';

const teamLogos = [
  { name: 'The Gauchos', src: '/assets/logos-equipos/logo - equipo A.png' },
  { name: 'Godoy Spurs', src: '/assets/logos-equipos/logo - equipo B - NO COMPITE.jpg' }, 
  { name: 'The Guanakills', src: '/assets/logos-equipos/logo - equipo C.PNG' }, 
  { name: 'Lujángeles de Cuyo', src: '/assets/logos-equipos/logo - equipo D.jpeg' },
  { name: 'The Condors', src: '/assets/logos-equipos/logo - equipo E.png' },
  { name: 'Caciques de Ciudad', src: '/assets/logos-equipos/logo - equipo F.png' },
  { name: 'Las Cabras', src: '/assets/logos-equipos/logo - equipo G.jpeg' },
  { name: 'Los zorros', src: '/assets/logos-equipos/logo - equipo H.jpg' },
  { name: 'Pandito Escénico', src: '/assets/logos-equipos/logo - equipo I.jpeg' },
  { name: 'Carrodilla Virgins', src: '/assets/logos-equipos/logo - equipo J.jpeg' },
];

const extendedTeamLogos = [...teamLogos, ...teamLogos, ...teamLogos];

export default function Teams() {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-${100 / (extendedTeamLogos.length / teamLogos.length)}%); }
          /* Ajusta el translateX al porcentaje de una sola "copia" de los logos */
        }

        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite; /* Ajusta la duración (40s) para cambiar la velocidad */
          will-change: transform; /* Optimización para la animación */
        }

        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <section
        id="teams" 
        className="bg-deepNavy text-white py-16 md:py-20 lg:py-24 relative w-full overflow-hidden"
      >
        {/* Título */}
        <div className="max-w-7xl mx-auto mb-10 md:mb-12 px-4 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-classicOrange leading-tight opacity-0 animate-fadeInUp">
            Equipos Participantes
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-300 mt-3 max-w-xl mx-auto opacity-0 animate-fadeInUp animation-delay-200">
            Los protagonistas de la Copa West.
          </p>
        </div>

        {/* Contenedor de los logos en línea con scroll infinito */}
        <div className="marquee-container w-full overflow-hidden py-4 marquee-container:hover"> 
          <div
            className="animate-marquee flex-shrink-0" 
          >
            {extendedTeamLogos.map((team, index) => (
              <div
                key={`${team.name}-${index}`}
                className="
                  flex-shrink-0 /* Importante para que los items no se encojan */
                  opacity-0 animate-scaleIn
                  mx-2.5 md:mx-3 lg:mx-4 /* Espacio entre logos usando margen */
                "
                style={{ animationDelay: `${100 + index * 50}ms` }} 
                title={team.name}
              >
                <div className="
                  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                  aspect-square
                  rounded-full overflow-hidden
                  flex items-center justify-center
                  p-1 sm:p-1.5
                  bg-white/10 hover:bg-classicOrange/20
                  transition-all duration-300 ease-out
                  shadow-md hover:shadow-classicOrange/40
                  transform hover:scale-110
                ">
                  <Image
                    src={team.src}
                    alt={`Logo de ${team.name}`}
                    fill
                    style={{ objectFit: 'contain' }}
                    quality={80}
                    sizes="80px"
                    className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
