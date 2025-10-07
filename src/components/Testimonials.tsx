import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "Os livros da Soraia mudaram minha perspectiva sobre a vida. Cada página é uma jornada emocionante!",
      rating: 5,
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      text: "Histórias inspiradoras que me fizeram refletir. Recomendo para todos que buscam crescimento pessoal.",
      rating: 5,
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      text: "A escrita da Soraia é única. Me senti completamente imersa nas histórias, não consegui parar de ler!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Dizem os
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]">
              {" "}Leitores
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Milhares de vidas transformadas através das histórias de Soraia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-[var(--shadow-card)] transition-all hover:-translate-y-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
