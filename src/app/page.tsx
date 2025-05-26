import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Teams from '@/components/Teams';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import FeaturedCharacters from '@/components/FeaturedCharacters'; // <-- Importa el nuevo componente

export default function Home() {
  return (
    <main className="relative">
      <Header />

      <Hero className="pt-[96px] md:pt-[112px]" />

      <section id="about">
        <About />
      </section>
      <section id="teams">
        <Teams />
      </section>
      <section id="featured-characters">
        <FeaturedCharacters />
      </section>

      <section id="gallery">
        <Gallery />
      </section>
      <section id="location">
        <Location />
      </section>

      <Footer />
    </main>
  );
}