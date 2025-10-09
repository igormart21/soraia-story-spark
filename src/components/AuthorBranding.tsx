import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Sparkles } from "lucide-react";
import authorBrandImg from "../../assets/WhatsApp Imagwewe 2025-10-08 at 11.20.37.jpeg";

export const AuthorBranding = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[hsl(var(--cream))] to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
              <span className="text-sm font-medium text-[hsl(var(--burnt-orange))]">Marca Pessoal</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              A voz por trás das histórias
            </h3>
            <p className="text-lg text-muted-foreground">
              Histórias que nascem de experiências reais e viram livros que conectam pessoas.
              A marca de <strong>Soraia</strong> é autenticidade, proximidade e propósito.
            </p>
            <Card className="p-6 border-2">
              <p className="text-base text-foreground">
                Cada obra é pensada para acolher, inspirar e transformar. Conheça a coleção
                completa e encontre o livro que fala com você.
              </p>
            </Card>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#books">
                <Button size="lg" variant="hero" className="gap-2">
                  <BookOpen className="w-4 h-4" />
                  Ver coleção de livros
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline">Contato</Button>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[hsl(var(--gold))]/20 shadow-[var(--shadow-warm)]">
              <img
                src={authorBrandImg}
                alt="Soraia – branding pessoal com livros"
                className="w-full h-[420px] object-cover object-center"
                loading="lazy"
              />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[hsl(var(--gold))] rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[hsl(var(--warm-orange))] rounded-full blur-3xl opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBranding;


