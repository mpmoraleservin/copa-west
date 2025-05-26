// components/Map.tsx
import React from 'react';

const Map = () => {
  // REEMPLAZA ESTA URL con la URL del 'src' que obtuviste de Google Maps para el Teatro Tajamar.
  const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.663688834885!2d-68.83899042394377!3d-32.88061656855738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08e01fbdf03b%3A0xaf086185757a0cc7!2sProyecto%20Tajamar%20-%20Academia%20de%20Teatro%20Musical!5e0!3m2!1ses!2sar!4v1748301803461!5m2!1ses!2sar";

  return (
    <iframe
      src={googleMapsEmbedSrc}
      width="100%"
      height="450" 
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ubicación del Teatro Tajamar en Google Maps"
      className="w-full h-full min-h-[300px] md:min-h-[450px]" // Asegura que ocupe el espacio y tenga un mínimo
    ></iframe>
  );
};

export default Map;