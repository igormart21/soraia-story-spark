import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Gift } from "lucide-react";
import { MerchItem } from "@/data/merch";

interface MerchCardProps extends MerchItem {}

export const MerchCard = ({ id, title, description, price, image, buyLink }: MerchCardProps) => {
  const handleBuyClick = () => {
    window.open(buyLink, "_blank");
  };

  return (
    <Card className="group hover:shadow-[var(--shadow-warm)] transition-all duration-300 hover:-translate-y-2 overflow-hidden border-2 animate-scale-in relative">
      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <Gift className="w-6 h-6 text-[hsl(var(--gold))] animate-float" />
      </div>

      <div className="relative overflow-hidden p-4 bg-gradient-to-br from-[hsl(var(--cream))] to-white">
        <div className="relative mx-auto max-w-sm w-full shadow-[var(--shadow-card)] rounded-md border bg-white">
          <AspectRatio ratio={1}>
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover rounded-md"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-y-2 left-2 w-2 rounded-sm bg-gradient-to-r from-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-y-2 right-0 w-8 bg-gradient-to-l from-black/5 to-transparent" />
          </AspectRatio>
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
        <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>

      <CardFooter className="pt-2 sm:pt-3 border-t space-y-3 sm:space-y-4 flex flex-col items-start">
        <div>
          <div className="text-base sm:text-lg font-bold text-[hsl(var(--burnt-orange))]">
            {price}
          </div>
          <div className="text-xs text-muted-foreground">enviamos para todo o Brasil</div>
        </div>

        <Button 
          variant="buy" 
          size="sm" 
          className="w-full gap-1 text-xs"
          onClick={handleBuyClick}
        >
          <ShoppingCart className="w-3 h-3" />
          Comprar brinde
        </Button>
      </CardFooter>
    </Card>
  );
};


