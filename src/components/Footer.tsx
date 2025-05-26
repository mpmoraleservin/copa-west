import Link from 'next/link';
// Considera instalar react-icons para estos iconos: npm install react-icons
// import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Ejemplos

export default function Footer() {
  return (
    <footer className="bg-deepNavy text-softPink p-6 py-10 text-center md:p-10 md:py-12">
      <h3 className="text-3xl font-heading text-classicOrange mb-4 uppercase tracking-wide md:text-4xl"> {/* Ajustado a text-3xl */}
      <Link href="https://instagram.com/copawest" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          {/* Si usas react-icons: <FaInstagram /> */}
          Seguinos en @copawest
        </Link>
      </h3>

      <p className="text-base font-body mb-3 md:text-lg"> {/* Ajustado a text-base */}
        ¡Te esperamos!
      </p>
      <p className="mt-8 text-xs opacity-70 font-body md:text-sm"> {/* Ajustado a text-xs */}
        © 2025 Copa West de Improvisación. Todos los derechos reservados.
      </p>
    </footer>
  );
}