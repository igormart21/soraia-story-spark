import { Hero } from "@/components/Hero";
import { BookCard } from "@/components/BookCard";
import { AboutAuthor } from "@/components/AboutAuthor";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";

const Index = () => {
  const books = [
    {
      title: "A Jornada do Coração",
      description: "Uma história emocionante sobre amor, perdas e recomeços. Acompanhe personagens únicos em uma narrativa que vai tocar sua alma.",
      price: "R$ 45,90",
      image: book1,
      rating: 5,
    },
    {
      title: "Caminhos da Transformação",
      description: "Um guia inspirador para o desenvolvimento pessoal. Descubra ferramentas práticas para transformar sua vida e alcançar seus sonhos.",
      price: "R$ 39,90",
      image: book2,
      rating: 5,
    },
    {
      title: "Sussurros da Alma",
      description: "Uma coletânea de poesias que exploram os sentimentos mais profundos do ser humano. Poemas que ressoam com a experiência de estar vivo.",
      price: "R$ 35,90",
      image: book3,
      rating: 5,
    },
  ];

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {books.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        </div>
      </section>

      <AboutAuthor />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
