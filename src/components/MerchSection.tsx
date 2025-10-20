import { MerchCard } from "@/components/MerchCard";
import { merch } from "@/data/merch";

export const MerchSection = () => {
  return (
    <section id="brindes" className="py-12 sm:py-20 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-[hsl(var(--light-gold))]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[hsl(var(--warm-orange))]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Brindes
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]">
              {" "}Exclusivos
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Itens especiais para complementar sua experiência com os livros
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {merch.map((item) => (
            <MerchCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};


