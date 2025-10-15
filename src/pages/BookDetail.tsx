import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { books } from "../data/books";

export const BookDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  
  const book = books.find(b => b.id === bookId);
  
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Livro não encontrado</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const renderReviews = (titleText: string, list: any[]) => (
    <div className="px-6 pb-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={titleText}>
          <AccordionTrigger>
            {titleText}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {list.map((r, i) => (
                <div key={i} className="border rounded-md p-4 bg-white/70">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{r.author}</div>
                    <div className="text-[hsl(var(--gold))]">{"★".repeat(r.rating)}</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{r.title}</div>
                  <div className="text-xs text-muted-foreground">{r.date}{r.country ? ` • ${r.country}` : ""} • Formato: Kindle • Compra verificada</div>
                  <p className="mt-2 whitespace-pre-line leading-relaxed">{r.content}</p>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--cream))] to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar aos livros
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Book Cover */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[hsl(var(--gold))]/20 shadow-[var(--shadow-warm)] bg-white">
              <AspectRatio ratio={2/3}>
                <img
                  src={book.image}
                  alt={`Capa do livro ${book.title}`}
                  className="h-full w-full object-cover rounded-md"
                  loading="lazy"
                />
              </AspectRatio>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                <span className="text-sm font-semibold">{book.rating}</span>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{book.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {book.description}
              </p>
            </div>

            <Card className="border-2 border-[hsl(var(--gold))]/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Preço</span>
                  <span className="text-2xl font-bold text-[hsl(var(--burnt-orange))]">
                    {book.price}
                  </span>
                </CardTitle>
                <CardDescription>ou 3x sem juros</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="buy" size="lg" className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Comprar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Reviews */}
            {book.reviews && book.reviews.length > 0 && renderReviews("Principais avaliações do Brasil", book.reviews)}
            {book.reviewsBrazil && book.reviewsBrazil.length > 0 && renderReviews("Principais avaliações do Brasil", book.reviewsBrazil)}
            {book.reviewsInternational && book.reviewsInternational.length > 0 && renderReviews("Principais avaliações de outros países", book.reviewsInternational)}
          </div>
        </div>
      </div>
    </div>
  );
};
