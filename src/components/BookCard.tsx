import { useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, BookOpen } from "lucide-react";
import { FormatSelector } from "@/components/FormatSelector";
import { BookFormat } from "@/data/books";

interface BookCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
  backgroundClassName?: string;
  innerBackgroundClassName?: string;
  onViewDetails?: () => void;
  formats?: BookFormat[];
}

export const BookCard = ({ id, title, description, price, image, rating = 5, backgroundClassName, innerBackgroundClassName, onViewDetails, formats = [] }: BookCardProps) => {
  const [selectedFormat, setSelectedFormat] = useState<BookFormat>(
    formats.length > 0 ? formats[0] : { type: 'ebook', price, buyLink: '#' }
  );

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
    }
  };

  const handleBuyClick = () => {
    window.open(selectedFormat.buyLink, '_blank');
  };
  return (
    <Card className="group hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 animate-scale-in relative">
      {/* Floating book icon decoration */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <BookOpen className="w-6 h-6 text-[hsl(var(--gold))] animate-float" />
      </div>
      <div className={cn("relative overflow-hidden p-4", backgroundClassName ?? "bg-gradient-to-br from-[hsl(var(--cream))] to-white") }>
        <div className={cn("relative mx-auto max-w-sm w-full shadow-[var(--shadow-card)] rounded-md border", innerBackgroundClassName ?? "bg-white") }>
          <AspectRatio ratio={2/3}>
            <img
              src={image}
              alt={`Capa do livro ${title}`}
              className="h-full w-full object-cover rounded-md"
              loading="lazy"
            />
            {/* spine */}
            <div className="pointer-events-none absolute inset-y-2 left-2 w-2 rounded-sm bg-gradient-to-r from-black/10 to-transparent" />
            {/* highlight */}
            <div className="pointer-events-none absolute inset-y-2 right-0 w-8 bg-gradient-to-l from-black/5 to-transparent" />
          </AspectRatio>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <CardHeader className="h-28 sm:h-32 flex flex-col justify-between">
        <CardTitle className="text-sm sm:text-lg group-hover:text-[hsl(var(--gold))] transition-colors h-12 sm:h-14 flex items-start overflow-hidden">
          <span className="block leading-tight" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            {title}
          </span>
        </CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full gap-1 text-xs"
          onClick={handleViewDetails}
        >
          <BookOpen className="w-3 h-3" />
          Ver Detalhes
        </Button>
      </CardHeader>
      
      <CardFooter className="pt-2 sm:pt-3 border-t space-y-3 sm:space-y-4">
        {formats.length > 0 && (
          <div className="w-full">
            <FormatSelector
              formats={formats}
              selectedFormat={selectedFormat}
              onFormatChange={setSelectedFormat}
            />
          </div>
        )}
        
        <div className="flex items-center justify-start w-full">
          <div>
            <div className="text-base sm:text-lg font-bold text-[hsl(var(--burnt-orange))]">
              {selectedFormat.price}
            </div>
            <div className="text-xs text-muted-foreground">ou 3x sem juros</div>
          </div>
        </div>
        
        <Button 
          variant="buy" 
          size="sm" 
          className="w-full gap-1 text-xs"
          onClick={handleBuyClick}
        >
          <ShoppingCart className="w-3 h-3" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};
