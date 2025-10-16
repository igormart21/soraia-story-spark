import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShoppingCart, Star, X } from "lucide-react";
import { Book } from "@/data/books";
import { FormatSelector } from "@/components/FormatSelector";

interface BookDetailModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BookDetailModal = ({ book, isOpen, onClose }: BookDetailModalProps) => {
  const [selectedFormat, setSelectedFormat] = useState(
    book?.formats?.[0] || { type: 'ebook', price: 'R$ 0,00', buyLink: '#' }
  );

  // Atualizar selectedFormat quando o livro mudar
  useEffect(() => {
    if (book?.formats && book.formats.length > 0) {
      setSelectedFormat(book.formats[0]);
    }
  }, [book]);

  if (!book) return null;

  const handleBuyClick = () => {
    window.open(selectedFormat.buyLink, '_blank');
  };

  const renderReviews = (title: string, reviews: any[]) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="space-y-3">
        {reviews.map((review, index) => (
          <Card key={index} className="border-2 border-[hsl(var(--gold))]/20">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? "fill-[hsl(var(--gold))] text-[hsl(var(--gold))]"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm font-medium">{review.author}</span>
                <span className="text-xs text-muted-foreground">• {review.country}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{review.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl font-bold text-center">
            {book.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-6">
          {/* Book Image */}
          <div className="space-y-4">
            <div className="relative rounded-xl overflow-hidden shadow-[var(--shadow-warm)] border-2 border-[hsl(var(--gold))]/20">
              <AspectRatio ratio={2/3}>
                <img
                  src={book.image}
                  alt={`Capa do livro ${book.title}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </AspectRatio>
              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                <span className="text-sm font-semibold">{book.rating}</span>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-4 sm:space-y-6">
            <div>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {book.description}
              </p>
            </div>

            <Card className="border-2 border-[hsl(var(--gold))]/20">
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="flex items-center justify-between text-sm sm:text-base">
                  <span>Preço</span>
                  <span className="text-lg sm:text-2xl font-bold text-[hsl(var(--burnt-orange))]">
                    {selectedFormat.price}
                  </span>
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">ou 3x sem juros</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                {book.formats && book.formats.length > 0 && (
                  <FormatSelector
                    formats={book.formats}
                    selectedFormat={selectedFormat}
                    onFormatChange={setSelectedFormat}
                  />
                )}
                <Button
                  variant="buy"
                  size="sm"
                  className="w-full gap-2 text-sm"
                  onClick={handleBuyClick}
                >
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
      </DialogContent>
    </Dialog>
  );
};
