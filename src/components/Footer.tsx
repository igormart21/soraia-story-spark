import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { SiYoutube, SiInstagram, SiTiktok } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--burnt-orange))] to-[hsl(var(--gold))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Soraia Hermes Fasciani</h3>
            <p className="text-white/80">
              Autora de histórias que transformam vidas e inspiram corações.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Links Rápidos</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Livros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Suporte</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devoluções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Newsletter</h4>
            <p className="text-white/80 mb-4 text-sm">
              Receba novidades e lançamentos exclusivos
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © 2024 Soraia Hermes Fasciani. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://youtube.com/@soraiacontoselivros?si=wR-PwZuN8SY3rt1Z"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="YouTube"
              target="_blank" rel="noopener noreferrer"
            >
              <SiYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/soraiacontoselivros?igsh=MTJqNmo0bWswNHVtZw=="
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
              target="_blank" rel="noopener noreferrer"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@soraiahermesfasci?_t=ZM-90KD7q3tTI4&_r=1"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="TikTok"
              target="_blank" rel="noopener noreferrer"
            >
              <SiTiktok className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
