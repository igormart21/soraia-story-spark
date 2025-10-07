import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, BookOpen } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  rating?: number;
}

export const BookCard = ({ title, description, price, image, rating = 5 }: BookCardProps) => {
  return (
    <Card className="group hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 animate-scale-in relative">
      {/* Floating book icon decoration */}
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <BookOpen className="w-6 h-6 text-[hsl(var(--gold))] animate-float" />
      </div>
      <div className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--cream))] to-white">
        <img
          src={image}
          alt={`Capa do livro ${title}`}
          className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-[hsl(var(--gold))] transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <div>
          <div className="text-2xl font-bold text-[hsl(var(--burnt-orange))]">
            {price}
          </div>
          <div className="text-xs text-muted-foreground">ou 3x sem juros</div>
        </div>
        <Button variant="buy" size="lg" className="gap-2">
          <ShoppingCart className="w-4 h-4" />
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};
