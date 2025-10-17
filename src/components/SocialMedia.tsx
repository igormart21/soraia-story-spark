import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Instagram, Music } from "lucide-react";

export const SocialMedia = () => {
  const socialLinks = [
    {
      platform: "YouTube",
      icon: Youtube,
      title: "ELAS: VIVÊNCIAS QUE TOCAM",
      description: "Canal dedicado a histórias e vivências que tocam o coração",
      url: "https://youtube.com/@elasvivenciasquetocam?si=Zm0R3QUC2YvACgkT",
      color: "text-red-600 hover:text-red-700",
      bgColor: "bg-red-50 hover:bg-red-100"
    },
    {
      platform: "YouTube",
      icon: Youtube,
      title: "Soraia Hermes Fasciani",
      description: "Canal oficial da autora com conteúdo sobre livros e histórias",
      url: "https://youtube.com/@soraiacontoselivros?si=wR-PwZuN8SY3rt1Z",
      color: "text-red-600 hover:text-red-700",
      bgColor: "bg-red-50 hover:bg-red-100"
    },
    {
      platform: "Instagram",
      icon: Instagram,
      title: "@soraiacontoselivros",
      description: "Acompanhe o dia a dia da autora e novidades dos livros",
      url: "https://www.instagram.com/soraiacontoselivros?igsh=MTJqNmo0bWswNHVtZw==",
      color: "text-pink-600 hover:text-pink-700",
      bgColor: "bg-pink-50 hover:bg-pink-100"
    },
    {
      platform: "TikTok",
      icon: Music,
      title: "@soraiahermesfasci",
      description: "Conteúdo dinâmico e criativo sobre literatura",
      url: "https://www.tiktok.com/@soraiahermesfasci?_t=ZM-90KD7q3tTI4&_r=1",
      color: "text-black hover:text-gray-800",
      bgColor: "bg-gray-50 hover:bg-gray-100"
    },
    {
      platform: "TikTok",
      icon: Music,
      title: "@uauvibebr",
      description: "Mais conteúdo criativo e inspirador",
      url: "https://www.tiktok.com/@uauvibebr?_t=ZM-90KDApaADDX&_r=1",
      color: "text-black hover:text-gray-800",
      bgColor: "bg-gray-50 hover:bg-gray-100"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[hsl(var(--cream))] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[hsl(var(--gold))]/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[hsl(var(--warm-orange))]/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Conecte-se comigo nas
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--warm-orange))]">
              {" "}Redes Sociais
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Acompanhe meu trabalho, novidades dos livros e conteúdo exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <Card 
                key={index}
                className={`${social.bgColor} transition-all duration-300 hover:shadow-lg border-0 group cursor-pointer`}
                onClick={() => window.open(social.url, '_blank')}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-lg ${social.color} transition-colors duration-300`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className={`text-xs sm:text-sm font-medium ${social.color}`}>
                          {social.platform}
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm sm:text-base mb-2 text-gray-900 group-hover:text-gray-700 transition-colors">
                        {social.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {social.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className={`${social.color} hover:bg-transparent p-0 h-auto text-xs sm:text-sm font-medium`}
                    >
                      Acessar →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            Siga para não perder nenhuma novidade!
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(social.url, '_blank')}
                  className={`${social.color} border-current hover:bg-current hover:text-white transition-all duration-300`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {social.platform}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
