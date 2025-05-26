import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about" // ID para la navegación del header
      className="
        bg-softPink text-deepNavy
        p-6 py-20 md:p-10 md:py-28 lg:py-32 /* Mayor padding vertical */
        flex flex-col items-center justify-center
        gap-10 md:gap-12 lg:gap-16 md:flex-row
        overflow-hidden /* Para contener animaciones de entrada */
      "
    >
      {/* Contenedor de Texto */}
      <div className="
        md:w-1/2 max-w-xl text-center md:text-left px-4
        opacity-0 animate-fadeInLeft /* Animación de entrada para el bloque de texto */
      ">
        <h3 className="
          text-3xl sm:text-4xl lg:text-5xl
          font-body text-bluePurple
          mb-6 md:mb-8
          uppercase tracking-wide
        ">
          ¿Qué es la Copa West?
        </h3>
        <div className="space-y-4 md:space-y-5"> {/* Para animaciones escalonadas de párrafos */}
          <p className="text-base md:text-lg lg:text-xl font-body leading-relaxed opacity-0 animate-fadeInUp animation-delay-200">
            Un torneo de improvisación donde 10 equipos de distintos rincones de Mendoza se enfrentan cada viernes en un show donde todo puede pasar… y nada está escrito.
          </p>
          <p className="text-base md:text-lg lg:text-xl font-body leading-relaxed opacity-0 animate-fadeInUp animation-delay-400">
            El público es el protagonista, dando las frases para que improvisen en cada escena.
          </p>
          <p className="text-base md:text-lg lg:text-xl font-body leading-relaxed opacity-0 animate-fadeInUp animation-delay-600">
            Vení a alentar a tu equipo, reír y ser parte de esta locura.
            ¡Cuarenta improvisadores, UNA COPA!
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-body leading-relaxed mt-6 font-bold text-classicOrange opacity-0 animate-fadeInUp animation-delay-[800ms]">
            ¿Quién se quedará con la gloria?
          </p>
        </div>
      </div>

      {/* Contenedor de Imagen (LOGO CON TRANSPARENCIA) */}
      <div className="
        md:w-1/3 lg:w-1/4 /* Ancho ajustado para un logo */
        relative
        w-full max-w-[280px] sm:max-w-[320px] md:max-w-[280px] lg:max-w-[320px] /* Tamaño máximo del logo */
        aspect-[10/9] /* ¡¡AJUSTA ESTO AL ASPECT RATIO DE TU LOGO!! (ej: aspect-square, aspect-video, aspect-[4/3]) */
        flex items-center justify-center
        opacity-0 animate-fadeInRight animation-delay-200 /* Animación de entrada para el logo */
        group /* Para efectos hover en la imagen interna */
      ">
        <Image
          src="/assets/about_image.png" 
          alt="Logo Copa West de Improvisación"
          fill
          style={{ objectFit: 'contain' }} // 'contain' es crucial para logos
          quality={95}
          sizes="(max-width: 768px) 60vw, (max-width: 1024px) 30vw, 25vw" // Ajusta los sizes para optimización
          className="
            transition-transform duration-300 ease-out group-hover:scale-110 /* Efecto zoom en el logo */
            drop-shadow-lg hover:drop-shadow-xl /* Sombra para destacar el logo */
          "
        />
      </div>
    </section>
  );
}