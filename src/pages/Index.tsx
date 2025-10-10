import { Hero } from "@/components/Hero";
import { BookCard } from "@/components/BookCard";
import { AboutAuthor } from "@/components/AboutAuthor";
import { Testimonials } from "@/components/Testimonials";
import { AuthorBranding } from "@/components/AuthorBranding";
import { Footer } from "@/components/Footer";
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";
import { books } from "@/data/books";
import infantilBanner from "@/assets/hero-soraia.jpg";
import romanceBanner from "@/assets/romance-banner.png";

const Index = () => {
  const romanceBooks = books.filter((b) => (b.category ?? "adult") !== "kids");
  const infantisBooks = books.filter((b) => (b.category ?? "adult") === "kids");

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="books" className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[hsl(var(--light-gold))]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[hsl(var(--warm-orange))]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Livros
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]">
                {" "}Disponíveis
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore a coleção completa e encontre a história perfeita para você
            </p>
          </div>

          {/* Romance Section */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-warm)] mb-8">
              <img src={romanceBanner} alt="Categoria Romance" className="w-full h-48 md:h-64 object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow">Romance</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {romanceBooks.map((book, index) => (
                <BookCard
                  key={`romance-${index}`}
                  {...book}
                  backgroundClassName="bg-gradient-to-br from-[hsl(var(--cream))] to-white"
                  innerBackgroundClassName="bg-[hsl(var(--cream))]"
                />
              ))}
            </div>
          </div>

          {/* Infantis Section with banner */}
          <div className="max-w-7xl mx-auto mt-16">
            <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-warm)] mb-8">
              <img src={infantilBanner} alt="Categoria Infantil" className="w-full h-48 md:h-64 object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow">Infantis</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {infantisBooks.map((book, index) => (
              <BookCard
                  key={`kids-${index}`}
                {...book}
                backgroundClassName="bg-gradient-to-br from-[hsl(var(--cream))] to-white"
                innerBackgroundClassName="bg-[hsl(var(--cream))]"
              />
            ))}
            </div>
          </div>
        </div>
      </section>

      <AboutAuthor />

      <Benefits />
      <AuthorBranding />
      <Testimonials />
      <CTASection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;