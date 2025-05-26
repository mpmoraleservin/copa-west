'use client';

import { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal'; // Asegúrate de que este archivo exista y esté estilizado

const images = [
  '/assets/gallery/gallery_1.jpeg', 
  '/assets/gallery/gallery_2.jpeg',
  '/assets/gallery/gallery_3.jpeg',
  '/assets/gallery/gallery_4.jpeg',
  '/assets/gallery/gallery_5.jpeg',
  '/assets/gallery/gallery_6.jpeg',
  // Añade más imágenes si es necesario
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => setSelectedImage(imageSrc);
  const closeModal = () => setSelectedImage(null);

  return (
    <section
      id="gallery" // ID para la navegación
      className="
        bg-deepNavy text-white
        py-20 md:py-28 lg:py-32
        relative overflow-hidden
        w-full
        px-4 md:px-8 lg:px-12
      "
    >
      {/* Título de la sección */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16 text-center">
        <h2 className="
          font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          uppercase tracking-wider text-classicOrange leading-tight
          opacity-0 animate-fadeInUp
        ">
          Galería de Fotos
        </h2>
        <p className="
          font-body text-lg md:text-xl text-gray-300
          mt-4 max-w-2xl mx-auto
          opacity-0 animate-fadeInUp animation-delay-200
        ">
          Revive los mejores momentos de la Copa West.
        </p>
      </div>

      {/* Contenedor de la galería de imágenes */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-6 md:gap-8 lg:gap-10 /* Espaciado entre imágenes */
        max-w-7xl mx-auto /* Coherente con el título */
      ">
        {images.map((src, index) => (
          <div
            key={index}
            className="
              relative w-full
              h-72 sm:h-80 md:h-96 lg:h-[26rem] xl:h-[28rem] /* Alturas ajustadas y consistentes */
              rounded-lg overflow-hidden shadow-xl
              group cursor-pointer
              opacity-0 animate-scaleIn /* Animación de entrada para cada item */
            "
            style={{ animationDelay: `${200 + index * 100}ms` }} // Delay escalonado
            onClick={() => openModal(src)}
          >
            <Image
              src={src}
              alt={`Imagen de galería ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              quality={80} // Calidad para imágenes de galería
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" // Sizes para optimización
              className="
                transition-transform duration-500 ease-out group-hover:scale-110 /* Zoom en la imagen al hacer hover */
              "
            />
            {/* Overlay mejorado al pasar el ratón */}
            <div className="
              absolute inset-0
              bg-gradient-to-t from-deepNavy/70 via-transparent to-transparent /* Degradado desde abajo */
              opacity-0 group-hover:opacity-100
              transition-all duration-300 ease-out
              flex flex-col items-center justify-end pb-6 /* Para el ícono y texto opcional */
            ">
              {/* Icono de lupa con animación */}
              <div className="
                transform scale-0 group-hover:scale-100 transition-transform duration-300 ease-out delay-100
              ">
                <svg className="w-12 h-12 text-white opacity-80 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10V3m0 7H3m7 0h7m0 0v7"></path> {/* Lupa con + */}
                </svg>
              </div>
              {/* Podrías añadir un pequeño texto aquí si quisieras, ej: "Ver más" */}
            </div>
          </div>
        ))}
      </div>

      {/* Renderizar el modal si hay una imagen seleccionada */}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Imagen ampliada de la galería"
          onClose={closeModal}
        />
      )}
    </section>
  );
}