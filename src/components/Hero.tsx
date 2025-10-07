import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-soraia.jpg";
import { BookOpen, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--cream))] via-[hsl(var(--light-gold))] to-[hsl(var(--background))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 py-12 lg:py-0">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
              <span className="text-sm font-medium text-[hsl(var(--burnt-orange))]">
                Autora Bestseller
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Histórias que
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]">
                Transformam Vidas
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Descubra os livros de <strong>Soraia</strong> e embarque em jornadas inspiradoras 
              que tocam o coração e despertam a imaginação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="xl" variant="hero" className="group">
                <BookOpen className="group-hover:rotate-12 transition-transform" />
                Conhecer os Livros
              </Button>
              <Button size="xl" variant="outline">
                Sobre a Autora
              </Button>
            </div>
            
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--gold))]">15+</div>
                <div className="text-sm text-muted-foreground">Livros Publicados</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-[hsl(var(--gold))]">50k+</div>
                <div className="text-sm text-muted-foreground">Leitores Felizes</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:order-last order-first">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-warm)]">
              <img
                src={heroImage}
                alt="Soraia, autora bestseller, em seu ambiente criativo cercada de livros"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[hsl(var(--warm-orange))] rounded-full blur-3xl opacity-20 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
