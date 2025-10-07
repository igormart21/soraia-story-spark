import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Award, Users, BookMarked, BookOpen } from "lucide-react";

export const AboutAuthor = () => {
  const highlights = [
    { icon: BookMarked, label: "15+ Anos Escrevendo", value: "Experiência" },
    { icon: Award, label: "Prêmios Literários", value: "Reconhecida" },
    { icon: Users, label: "50k+ Leitores", value: "Comunidade" },
    { icon: Heart, label: "Histórias Inspiradoras", value: "Paixão" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-[hsl(var(--cream))] relative overflow-hidden">
      {/* Floating book decorations */}
      <div className="absolute top-10 left-10 animate-float opacity-10">
        <BookOpen className="w-16 h-16 text-[hsl(var(--gold))]" />
      </div>
      <div className="absolute bottom-10 right-10 animate-float-delayed opacity-10">
        <BookOpen className="w-20 h-20 text-[hsl(var(--warm-orange))]" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Conheça a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]">
              {" "}Autora
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soraia é uma escritora apaixonada por criar histórias que tocam corações e inspiram mudanças
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 border-2 border-[hsl(var(--gold))]/20 bg-white/50 backdrop-blur-sm">
              <p className="text-lg leading-relaxed text-foreground">
                Com mais de 15 anos dedicados à literatura, <strong>Soraia</strong> construiu uma carreira 
                marcada por histórias autênticas e emocionantes. Seus livros já transformaram a vida de 
                milhares de leitores ao redor do mundo.
              </p>
              <p className="text-lg leading-relaxed text-foreground mt-4">
                Cada obra carrega a essência de experiências reais, transmitindo mensagens de esperança, 
                superação e amor. Soraia acredita no poder transformador das palavras e na capacidade 
                das histórias de conectar pessoas.
              </p>
            </Card>
            
            <div className="flex gap-4">
              <Button size="lg" variant="hero">
                Ler Mais Sobre Mim
              </Button>
              <Button size="lg" variant="outline">
                Contato
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 border-2"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))] mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-foreground">
                    {item.value}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
