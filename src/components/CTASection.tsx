import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para viver novas histórias?</h2>
          <p className="text-lg/7 opacity-95 mb-8">
            Conheça agora os títulos que já transformaram a vida de milhares de leitores.
          </p>
          <a href="#books">
            <Button size="xl" className="bg-white text-[hsl(var(--burnt-orange))] hover:bg-white/90">
              Explorar Livros
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};


