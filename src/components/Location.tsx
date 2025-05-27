import Map from '../components/Map'; 

export default function Location() {
  return (
    <section
      id="location"
      className="bg-softPink text-deepNavy py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Encabezado de la Sección */}
        <div className="text-center mb-12 md:mb-16 opacity-0 animate-fadeInUp">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-wider text-bluePurple">
            Ubicación
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-700 mt-3 max-w-2xl mx-auto">
            La Copa West te espera en el corazón de Mendoza.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-2xl opacity-0 animate-fadeInLeft animation-delay-200">
            <Map />
          </div>

          {/* Columna de Información */}
          <div className="text-center lg:text-left space-y-5 md:space-y-6 opacity-0 animate-fadeInRight animation-delay-400">
            <h3 className="text-3xl sm:text-4xl xl:text-5xl font-heading text-bluePurple font-bold uppercase tracking-wider leading-tight">
              Teatro Tajamar
            </h3>
            <p className="text-lg md:text-xl font-body leading-relaxed text-bluePurple">
              Av. San Martín 1921,
              <br />
              Mendoza, Argentina.
            </p>
            {/* Pastilla de información */}
            <div className="pt-2">
              <div className="bg-classicOrange text-deepNavy py-3 px-5 rounded-lg inline-block shadow-lg font-body text-lg md:text-xl font-semibold">
                <span className="text-2xl align-middle mr-2"></span>
                Todos los VIERNES de JUNIO - 21:30 hs
              </div>
            </div>
            <p className="text-md md:text-lg font-body text-bluePurple pt-4">
              Un espacio icónico para vivir la improvisación en su máxima expresión.
              ¡No te quedes afuera de la fiesta de la impro!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}