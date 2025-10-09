import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      q: "Por onde começar a leitura?",
      a: "Recomendamos iniciar pelos títulos mais curtos para mergulhar no estilo e depois avançar para as obras mais densas.",
    },
    {
      q: "Os livros são indicados para quais idades?",
      a: "As obras atendem jovens e adultos. Em caso de dúvidas, confira a sinopse e a classificação sugestiva.",
    },
    {
      q: "Onde encontro versões digitais?",
      a: "Alguns títulos possuem e-book. Verifique plataformas parceiras indicadas nas páginas de cada livro.",
    },
    {
      q: "Há eventos e sessões de autógrafos?",
      a: "Sim! Acompanhe a agenda nas redes sociais e aqui no site para datas e cidades.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">Tudo o que você precisa saber para aproveitar melhor a leitura.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((f, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};


