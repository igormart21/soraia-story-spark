import { BookFormat } from "@/data/books";
import { cn } from "@/lib/utils";

interface FormatSelectorProps {
  formats: BookFormat[];
  selectedFormat: BookFormat;
  onFormatChange: (format: BookFormat) => void;
  className?: string;
}

export const FormatSelector = ({ 
  formats, 
  selectedFormat, 
  onFormatChange, 
  className 
}: FormatSelectorProps) => {
  const getFormatLabel = (type: string) => {
    switch (type) {
      case 'ebook':
        return 'eBook';
      case 'capa-comum':
        return 'Livro Físico';
      default:
        return type;
    }
  };

  return (
    <div className={cn("space-y-1 pb-1 sm:pb-2", className)}>
      <div className="text-xs font-medium text-muted-foreground">Formato:</div>
      <div className="flex gap-0.5 sm:gap-1 justify-start">
        {formats.map((format) => (
          <button
            key={format.type}
            onClick={() => onFormatChange(format)}
            className={cn(
              "px-1 sm:px-1.5 py-0.5 rounded border text-xs font-medium transition-all duration-200 text-center",
              selectedFormat.type === format.type
                ? "border-[hsl(var(--gold))] bg-[hsl(var(--gold))]/10 text-[hsl(var(--burnt-orange))]"
                : "border-gray-200 bg-white hover:border-[hsl(var(--gold))]/50 hover:bg-[hsl(var(--gold))]/5"
            )}
            style={{ minWidth: '50px' }}
          >
            {getFormatLabel(format.type)}
          </button>
        ))}
      </div>
    </div>
  );
};
