import { Sparkles, Heart, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Benefits = () => {
  const items = [
    {
      icon: Sparkles,
      title: "Transformação Real",
      description:
        "Livros que inspiram mudanças práticas no dia a dia, com histórias e aprendizados acionáveis.",
    },
    {
      icon: Heart,
      title: "Conexão Emocional",
      description:
        "Narrativas que tocam o coração e criam identificação imediata com os personagens.",
    },
    {
      icon: BookOpen,
      title: "Leitura Leve e Profunda",
      description:
        "Textos fluidos e envolventes que também provocam reflexões profundas.",
    },
    {
      icon: Users,
      title: "Comunidade Engajada",
      description:
        "Milhares de leitores que compartilham experiências, resenhas e indicações.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[hsl(var(--light-gold))]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-[hsl(var(--warm-orange))]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que ler
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]"> Soraia</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Benefícios claros que você sente já nas primeiras páginas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {items.map((item, idx) => (
            <Card key={idx} className="transition-transform hover:scale-[1.02] hover:shadow-[var(--shadow-card)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[hsl(var(--secondary))]">
                  <item.icon className="w-6 h-6 text-[hsl(var(--burnt-orange))]" />
                </div>
                <CardTitle className="mt-3">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


