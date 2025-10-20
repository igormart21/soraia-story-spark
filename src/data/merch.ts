export interface MerchItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  buyLink: string;
}

export const merch: MerchItem[] = [
  {
    id: "caneca-soraia",
    title: "Caneca Soraia",
    description: "Caneca temática para acompanhar suas leituras com estilo.",
    price: "R$ 39,90",
    image: "/placeholder.svg",
    buyLink: "#",
  },
  {
    id: "marca-paginas",
    title: "Marca-páginas Premium",
    description: "Marca-páginas laminado com frases dos livros.",
    price: "R$ 9,90",
    image: "/placeholder.svg",
    buyLink: "#",
  },
  {
    id: "camiseta-soraia",
    title: "Camiseta Soraia",
    description: "Camiseta confortável com arte inspirada nas obras.",
    price: "R$ 69,90",
    image: "/placeholder.svg",
    buyLink: "#",
  },
];



