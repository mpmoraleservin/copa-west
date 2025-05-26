'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Cierra el modal si se hace clic fuera del contenido de la imagen
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  // Maneja la tecla Escape para cerrar el modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [onClose]);

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black bg-opacity-80
        flex items-center justify-center
        p-4 /* Padding en móvil */
        transition-opacity duration-300
      "
      // Para cerrar al hacer clic en el fondo oscuro también
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="
          relative max-w-full max-h-full
          w-auto h-auto
          bg-deepNavy rounded-lg shadow-2xl
          overflow-hidden
          flex items-center justify-center
          transform scale-95 opacity-0 animate-modal-in /* Animación de entrada */
        "
        onClick={(e) => e.stopPropagation()} // Evita que el clic en la imagen cierre el modal
      >
        <Image
          src={src}
          alt={alt}
          width={1200} // Puedes ajustar el ancho máximo para la imagen dentro del modal
          height={800} // Y la altura, manteniendo la proporción (objectFit)
          style={{ objectFit: 'contain' }} // Asegura que la imagen completa se vea sin cortar
          className="max-w-full max-h-[80vh] md:max-h-[90vh] lg:max-h-[95vh] w-auto h-auto"
          quality={90}
        />

        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            text-white text-3xl
            bg-gray-800 bg-opacity-70 rounded-full p-2
            hover:bg-gray-700 transition-colors duration-200
            z-50
          "
          aria-label="Cerrar imagen"
        >
          &times;
        </button>
      </div>
    </div>
  );
}