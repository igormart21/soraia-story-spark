import book1 from "@/assets/book-1.jpg";
import chatgptBook from "../../assets/ChatGPT Image Oct 8, 2025, 01_37_09 PM.png";
import book2 from "@/assets/book-2.jpg";
import baratinhaTata from "../../assets/baratinha-tata.png";
import nanaAya from "../../assets/ChatGPT Image Oct 8, 2025, 04_53_56 PM.png";
import mariaMarias from "../../assets/f25717cb-e11c-4bbd-8274-1e9aa264b737.png";
import joanaAmor from "../../assets/ChatGPT Image Oct 8, 2025, 05_38_27 PM.png";
import cristalEstrela from "../../assets/ChatGPT Image Oct 8, 2025, 06_07_35 PM.png";
import cristalStar from "../../assets/ChatGPT Image Oct 8, 2025, 06_21_56 PM.png";
import vovoSoso from "../../assets/ChatGPT Image Oct 8, 2025, 06_29_52 PM.png";
import festaVagalume from "../../assets/ChatGPT Image Oct 9, 2025, 06_26_38 AM.png";
import lagartoDudu from "../../assets/ChatGPT Image Oct 9, 2025, 06_32_48 AM.png";
import vamosColorir from "../../assets/ChatGPT Image Oct 9, 2025, 07_31_49 AM.png";
import joanaEnglish from "../../assets/ChatGPT Image Oct 9, 2025, 07_20_37 AM.png";
import infantilBanner from "@/assets/hero-soraia.jpg";
import romanceBanner from "@/assets/romance-banner.png";
import book3 from "@/assets/book-3.jpg";

export interface Review {
  author: string;
  rating: number;
  title: string;
  date: string;
  country?: string;
  content: string;
}

export interface BookFormat {
  type: 'ebook' | 'capa-comum';
  price: string;
  buyLink: string;
}

export interface Book {
  id: string;
  title: string;
  description: string;
  price: string; // Preço padrão (ebook)
  image: string;
  rating?: number;
  category?: string;
  formats: BookFormat[];
  reviews?: Review[];
  reviewsBrazil?: Review[];
  reviewsInternational?: Review[];
}

export const books: Book[] = [
  {
    id: "cristal-estrela-viagem-luz",
    title: "CRISTAL E ESTRELA (Edição em português)",
    description: `Em "Cristal e Estrela", somos transportados para uma jornada mágica repleta de emoções encantadoras.

Estrela e Cristal são duas almas destinadas a viverem no planeta Terra, onde encontram o amor e a fraternidade.

Neste romance apaixonante, Soraia Hermes Fasciani nos leva a refletir sobre o poder do perdão e a beleza do amor verdadeiro.

Uma história que nos envolve desde a primeira página e nos inspira a viver intensamente cada emoção.

Venha se encantar com as luzes dessas duas almas e embarque nessa viagem única e emocionante.`,
    price: "R$9,99",
    image: cristalEstrela,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/cristal-estrela-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 89,90',
        buyLink: 'https://amazon.com.br/cristal-estrela-capa-comum'
      }
    ],
    reviewsBrazil: [
      {
        author: "Hober Caminhas Fasciani",
        rating: 5,
        title: "O mistério da vida",
        date: "12 de junho de 2025",
        content: "Livro sensacional envolvente com almas que vem à Terra para viveram como pessoas e sentirem otudo aquilo que sentimos desde o nascimento até a morte.\nSentir a dor o amor .",
      },
      {
        author: "Thaissa Pereira",
        rating: 5,
        title: "uma história que aquece o coração",
        date: "18 de novembro de 2024",
        content: "Me senti muito bem lendo essa história , me remeteu a um saudosismo e acolhimento por ser contada pela avó. Também é uma verdadeira lição sobre empatia e solidariedade.\nMuito completa e imersiva a história tem finais muito satisfatórias e deixa com vontade de reler mais vezes! Recomendo",
      },
      {
        author: "Cliente Kindle",
        rating: 5,
        title: "Amor ao próximo",
        date: "7 de julho de 2024",
        content: "A obra Cristal e Estrela - viagem de luz, além de resgatar boas narrativas de avó, traz ao leitor a ideia de que o ser humano precisa passar por transformações para desenvolver as qualidades do amor, e assim poder praticar ações edificantes ao próximo e si mesmo.",
      },
      {
        author: "Chris Lucëna",
        rating: 5,
        title: "Um livro de ficção repleto de sabedoria",
        date: "28 de maio de 2024",
        content: "Este livro é uma ficção que nos faz viajar entre os seus personagens e, ao mesmo tempo, nos traz maravilhosas reflexões sobre a força do amor e de como ele é curativo. É de fato uma verdadeira viagem de luz, pautada pela paz e pelo amor. Vale cada página.",
      },
      {
        author: "Cliente Kindle",
        rating: 5,
        title: "Parabéns!",
        date: "28 de julho de 2024",
        content: "Soraia, amei a delicadeza e profundidade que me tocou esta história. Parabéns!\nAh, uma doce surpresa ao final, sobre a autora, meu pai era de Teófilo Otoni ❤️",
      },
      {
        author: "Soraia Hermes Fasciani",
        rating: 5,
        title: "Romamce encantador",
        date: "2 de junho de 2024",
        content: "Leitura encantadora!\nNarra a vontade de duas almas de viver as emoções humanas.\nNascem e renascem na terra como um grande amor, e nos ensinando a força\ndo perdão, e da solidariedade.",
      },
      {
        author: "Leonardo",
        rating: 5,
        title: "Linda história",
        date: "7 de maio de 2024",
        content: "A história de Cristal e Estrela nos ensina muito sobre bondade, gratidão e amor, além de emocionar bastante. Livro lindo.",
      },
    ],
  },
  {
    id: "joana-love-passion-english",
    title: "Joana, love and passion (English Edition)",
    description: `Joana, love and passion is a pleasant romance to read.
It tells the story of this beautiful girl who, after meeting her soul mate, her life changed!
She used to live in a simple place, work really hard, love and dance; had friends and, despite suffering and prejudice, she won!
Think about it: what would you do in Joana's place?`,
    price: "$61,30",
    image: joanaEnglish,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/joana-love-passion-ebook'
      }
    ],
    reviewsInternational: [
      {
        author: "ANA CAROLINA",
        rating: 5,
        title: "Beautiful Romance",
        date: "2 de abril de 2025",
        country: "Canadá",
        content: "Beautiful romance. One of my favourite books.",
      },
    ],
  },
  {
    id: "vamos-colorir-girafa-mimi",
    title: "VAMOS COLORIR",
    description: `Um livrinho de colorir para brincar e imaginar com Mimi, a girafa que ama praia, conchinhas e fazer novos amigos. Páginas pensadas para desenvolver coordenação, criatividade e as cores das boas memórias. Perfeito para pintar em família!`,
    price: "R$3,99",
    image: vamosColorir,
    rating: 5,
    category: "kids",
    formats: [
      {
        type: 'ebook',
        price: 'R$ 3,99',
        buyLink: 'https://amazon.com.br/vamos-colorir-ebook'
      }
    ],
  },
  {
    id: "lagarto-dudu-colorir-jardins",
    title: "O LAGARTO DUDU QUE QUERIA COLORIR OS JARDINS",
    description: `Dudu é um pequeno lagarto que sonha alto: encher os jardins de cor. Com coragem, gentileza e obediência, ele descobre que quando seguimos o bem, asas nascem onde menos esperamos. Transformado em borboleta, Dudu aprende que cada gesto de bondade pode florescer um mundo inteiro. Uma fábula terna sobre sonhos, esforço e merecimento.`,
    price: "R$3,99",
    image: lagartoDudu,
    rating: 5,
    category: "kids",
    formats: [
      {
        type: 'ebook',
        price: 'R$ 8,90',
        buyLink: 'https://amazon.com.br/lagarto-dudu-ebook'
      }
    ],
  },
  {
    id: "festa-vagalume-beija-flor",
    title: "A FESTA DO VAGA-LUME E DO BEIJA-FLOR",
    description: `Numa clareira iluminada, um vaga-lume e um beija-flor convidam os amigos da floresta para celebrar a amizade. Entre risos, música e descobertas, os bichinhos aprendem que cada um brilha do seu jeito e que a união faz qualquer festa ficar ainda mais bonita. Uma história doce e colorida sobre respeito, generosidade e alegria em compartilhar.`,
    price: "R$8,90",
    image: festaVagalume,
    rating: 5,
    category: "kids",
    formats: [
      {
        type: 'ebook',
        price: 'R$ 8,90',
        buyLink: 'https://amazon.com.br/festa-vagalume-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 19,90',
        buyLink: 'https://amazon.com.br/festa-vagalume-capa-comum'
      }
    ],
  },
  {
    id: "contos-vovo-soso",
    title: "CONTOS DA VOVÓ SOSÔ (Edição em português)",
    description: `Duas histórias emocionantes que deixam a mensagem da força da solidariedade, paz e da união. A importância da família da amizade.
A Baratinha Tatá e o Bem Querer e A Festa do Vaga-Lume e do Beija-Flor`,
    price: "R$63,16",
    image: vovoSoso,
    rating: 5,
    category: "kids",
    formats: [
      {
        type: 'ebook',
        price: 'R$ 63,16',
        buyLink: 'https://amazon.com.br/contos-vovo-soso-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 89,90',
        buyLink: 'https://amazon.com.br/contos-vovo-soso-capa-comum'
      }
    ],
  },
  {
    id: "cristal-star-journey-light",
    title: "Cristal and Star (English Edition)",
    description: `In "Cristal and Star", we are transported on a magical journey full of sweet emotions.

Star and Cristal are two souls destined to live on planet Earth, where they find love and fellowship.

In this passionate novel, Soraia Hermes Fasciani leads us to reflect on the power of forgiveness and the beauty of true love.

A story that involves us from the first page and inspires us to live each emotion deeply.

Come and be delighted by the lights of these two souls and embark on this unique and exciting journey.`,
    price: "R$55,90",
    image: cristalStar,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/cristal-star-ebook'
      }
    ],
    reviewsInternational: [
      {
        author: "ANA CAROLINA",
        rating: 5,
        title: "Please read",
        date: "2 de abril de 2025",
        country: "Canadá",
        content: "Cristal and Star is a lovely book.",
      },
    ],
  },
  {
    id: "ecos-amor-alem-tempo",
    title: "ECOS DO AMOR",
    description: "Quando o amor vive além do tempo. Lina, aos 16, carrega uma coragem rara. Amim, 36, é sereno e apaixonado. Unidos por um amor puro e profundo, enfrentam a rejeição da família, preconceitos e as amarras de uma sociedade que insiste em ditar quem pode ou não ser feliz. Mulher além de seu tempo, Lina confronta racismo, machismo e desigualdades com a mesma intensidade com que ama. Este livro é um grito de liberdade e um tributo à força do perdão — uma história emocionante que permanece muito depois do fim.",
    price: "R$ 54,00",
    image: chatgptBook,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/ecos-amor-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 89,90',
        buyLink: 'https://amazon.com.br/ecos-amor-capa-comum'
      }
    ],
    reviews: [
      {
        author: "Maristela Bhering Zottis",
        rating: 5,
        title: "Comprei e fui tocada só pelas primeira páginas!",
        date: "23 de julho de 2025",
        content: "Comprei e fui tocada só pelas primeira páginas!",
      },
      {
        author: "Adriana",
        rating: 5,
        title: "Ótimo",
        date: "17 de julho de 2025",
        content: "Romance muito bom.",
      },
      {
        author: "virgilio medeiros",
        rating: 5,
        title: "Grande lição",
        date: "31 de maio de 2025",
        content: "O amor prevalece sempre nas relações duradouras. Sinta-se homenageado quando sua vida está embalando seu coração, mas não se deixe abater quando ela não te traz aquilo que não desejava. A vida sempre ensina como superarmos a nós mesmos.",
      },
      {
        author: "Denize",
        rating: 5,
        title: "Recomendo",
        date: "23 de maio de 2025",
        content: "A sinopse me pegou de imediato. É o tipo de livro que tenho certeza que vai impactar muita gente. Que venham muitas leituras e resenhas positivas!",
      },
      {
        author: "Erivelto de Sousa",
        rating: 5,
        title: "Muito boa",
        date: "5 de junho de 2025",
        content: "Gostei muito do estilo e do ritmo da narração. Uma linguaugem direta, sem rebuscamento. Parabéns.",
      },
      {
        author: "Soraia Hermes Fasciani",
        rating: 5,
        title: "História de amor emocionante",
        date: "6 de maio de 2025",
        content: "Narra a história de amor entre uma jovem brasileira de 16 anos e um libanês de 36.\nÉ maravilhoso o amor deles. Enfrentam muitos obstáculos e preconceitos. Mas o amor vence no tempo",
      },
      {
        author: "Karina Pereira da Silva Brito",
        rating: 5,
        title: "Linda",
        date: "1 de junho de 2025",
        content: "História linda, envolvente onde cada página os deixa curiosos.\nLeitura fluída.",
      },
      {
        author: "Hober Caminhas Fasciani",
        rating: 5,
        title: "Romance com capítulos emocionantes",
        date: "6 de junho de 2025",
        content: "Romance de primeira linha\nIndico",
      },
      {
        author: "ANA CAROLINA",
        rating: 5,
        title: "Livro maravilhoso!!!!!!",
        date: "11 de julho de 2025",
        country: "Canadá",
        content: "\" O coracao estava mais acelerado e, ao mesmo tempo, calmo \" …\n\nRomance maravilhoso!!!!",
      },
    ],
  },
  {
    id: "baratinha-tata-bem-querer",
    title: "A BARATINHA TATÁ E O BEM-QUERER",
    description: "Tatá é uma baratinha curiosa que descobre, em um dia cheio de aventuras, que o bem-querer começa dentro da gente. Entre cores, amigos e pequenas escolhas do cotidiano, ela aprende sobre carinho, respeito e a força de ser gentil consigo mesma e com o outro. Uma história lúdica e calorosa para ler em família, incentivar a autoestima das crianças e abrir conversas sobre empatia e amizade.",
    price: "R$ 32,90",
    image: baratinhaTata,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 32,90',
        buyLink: 'https://amazon.com.br/baratinha-tata-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 49,90',
        buyLink: 'https://amazon.com.br/baratinha-tata-capa-comum'
      }
    ],
    category: "kids",
    reviews: [
      {
        author: "ANA CAROLINA",
        rating: 5,
        title: "Escritora sensacional",
        date: "12 de maio de 2025",
        content: "Livro maravilhoso para a criançada",
      },
    ],
  },
  {
    id: "stories-nana-aya",
    title: "STORIES BY NANA AYA (English Edition)",
    description: `Stories by Nana Aya is a children's literary initiative that brings to life two heartwarming tales filled with values and essential life lessons.

The first story, Beebee the Beetle, delves into the transformative power of good deeds, illustrating how acts of kindness and affection can change someone from within. This narrative showcases the profound influence of generosity and love.

The second story, Animal Party, celebrates the bonds of friendship and family, emphasizing how overcoming differences
can unite us and strengthen relationships that truly matter.`,
    price: "R$ 55,22",
    image: nanaAya,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/stories-nana-aya-ebook'
      }
    ],
    category: "kids",
  },
  {
    id: "maria-e-suas-marias",
    title: "Maria e suas Marias",
    description: `Maria e suas Marias conta a história de uma mulher que, ao perceber que a atenção da família não mais se voltava para ela, decide que é hora de mudar.
Cansada de doar tanto e receber tão pouco, opta por embarcar em uma jornada sozinha, acompanhada apenas por suas "Marias" — as várias faceta de si mesma. Viaja por Portugal, Espanha, Itália, França e, finalmente, na Grécia, encontra um novo amor.
Embora enfrente resistência da família, ela corajosamente transforma sua vida e abraça um mundo completamente diferente.
Ao longo dessa jornada, Maria vive com cada parte de si: a mãe, a filha, a amiga, a empresária, a dona de casa, a mulher. Supera o medo e a dependência dos outros, tornando-se uma mulher consciente e solidária, sem jamais se afastar dos amores que residem em cada uma de suas Marias.`,
    price: "R$ 55,90",
    image: mariaMarias,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/maria-e-suas-marias-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 89,90',
        buyLink: 'https://amazon.com.br/maria-e-suas-marias-capa-comum'
      }
    ],
    reviewsBrazil: [
      {
        author: "Nilcilene",
        rating: 5,
        title: "De volta para dentro",
        date: "11 de outubro de 2024",
        content: "Uma viagem pela vida é o que fazemos ao nos depararmos com tantas Marias e suas histórias. Um pouquinho de nós se revela nesse livro encantador. Parabéns! Amei a leitura.",
      },
      {
        author: "Luciana",
        rating: 5,
        title: "Uma leitura essencial",
        date: "14 de outubro de 2024",
        content: "Todas nós reveladas neste livro. A autora revelou de forma simples e original a essência que guardamos no coração, criando espaço para reflexões importantes e descobertas maravilhosas.",
      },
      {
        author: "Chris Lucëna",
        rating: 5,
        title: "Um romance leve, gostoso e envolvente",
        date: "18 de outubro de 2024",
        content: "Este maravilhoso romance nos mostra que sempre é possível recomeçarmos a nossa vida amorosa do zero e darmos a volta por cima em qualquer idade.",
      },
      {
        author: "Rafa Rafaelle",
        rating: 5,
        title: "🥹",
        date: "14 de outubro de 2024",
        content: "Fantástico e emocionante, nos leva a reflexões sobre nossas Marias adormecidas e amedrontadas em nosso ser. Vale super a pena cada página.",
      },
      {
        author: "Denize",
        rating: 5,
        title: "Ótimo",
        date: "18 de novembro de 2024",
        content: "Ótimo livro, leitura envolvente do início ao fim",
      },
      {
        author: "Cliente Kindle",
        rating: 5,
        title: "Somos todas Marias!",
        date: "18 de outubro de 2024",
        content: "A Autora descreve com excelência o cotidiano de nós mulheres e nos ensina que o recomeço é possível!",
      },
      {
        author: "Deborah G.",
        rating: 5,
        title: "Maria e suas Marias é pura criatividade",
        date: "9 de outubro de 2024",
        content: "E claro, Maria e suas Marias mostra a multiplicidade da mulher. Parabéns!",
      },
      {
        author: "Maria Amelia",
        rating: 5,
        title: "Excelente",
        date: "9 de outubro de 2024",
        content: "Essa Maria agiu diferente da Maria que era!!!! Parabens!",
      },
    ],
    reviewsInternational: [
      {
        author: "ANA CAROLINA",
        rating: 5,
        title: "Um Livro que Inspira…. Maravilhoso",
        date: "7 de agosto de 2025",
        country: "Canadá",
        content: "As \"Marias\" que habitam essa história são espelhos de tantas de nós …..\n\nUm livro sensacional, que aquece o coração e nos lembra que recomeçar não é fracasso, é coragem. Lindo lindo !!!",
      },
      {
        author: "Fasciani",
        rating: 5,
        title: "Era muito bom",
        date: "11 de janeiro de 2025",
        country: "Canadá",
        content: "Esse é o melhor livro do mundo",
      },
    ],
  },
  {
    id: "joana-amor-paixao",
    title: "Joana, amor e paixão",
    description: `Joana amor e paixão é a história de uma jovem do nordeste brasileiro.
Ela trabalhava na coleta do café e da cana.
Era difícil .Mas ela amava a vida. Temperava os dias com alegria e fé..
Tudo mudou quando conheceu o homem que foi o seu grande amor.
Sofreu preconceitos e desprezos.
Venha se emocionar! O que você faria se estivesse no lugar dela?
Com paixão, coragem e fé, Joana venceu os obstáculos impostos pela vida.
História gostosa e leve de ler!`,
    price: "R$ 59,90",
    image: joanaAmor,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://amazon.com.br/joana-amor-paixao-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 89,90',
        buyLink: 'https://amazon.com.br/joana-amor-paixao-capa-comum'
      }
    ],
    reviewsBrazil: [
      {
        author: "Hober Caminhas Fasciani",
        rating: 5,
        title: "A vida como ela é.",
        date: "12 de junho de 2025",
        content: "Romance de prender o fôlego fo princípio ao fim",
      },
      {
        author: "Chris Lucëna",
        rating: 5,
        title: "Um livro de ficção sensacional",
        date: "31 de dezembro de 2023",
        content: "Nesse livro, a autora escreve uma ficção de uma forma tão rica em detalhes, que a história nos envolve por completo. Conta a história da Joana e de seus familiares, que representam milhões de brasileiros, trabalhadores simples, que recebem baixos salários, mas que possuem dentro deles uma enorme alegria de viver.\nÉ um livro leve, envolvente e marcante.\nSuper recomendo a leitura.",
      },
      {
        author: "Cami Scrivano",
        rating: 5,
        title: "História emocionante, simples mas cheia de significado",
        date: "7 de fevereiro de 2024",
        content: "A autora, em seu livro, nos transporta para a realidade de Joana. No meio do sertão, a moça vive suas aventuras e desventuras de infância, e com ela vamos crescendo e enfrentando os desafios e a dureza do que é o sertão brasileiro e sua realidade como mulher. Excelente leitura!",
      },
      {
        author: "Leonardo",
        rating: 5,
        title: "Amor e Paixão",
        date: "22 de janeiro de 2024",
        content: "Joana é a história de uma mulher forte, livre. Uma leitura gostosa, fluindo bem e te deixando sempre querendo saber o que vai acontecer. Um livro que você não consegue deixar de virar para a próxima página. Soraia consegue transmitir os sentimentos dos personagens tão bem que nos emocionamos com eles.",
      },
      {
        author: "Luciana",
        rating: 5,
        title: "Joana é todas nós",
        date: "26 de dezembro de 2023",
        content: "Dona de uma história rica em detalhes e acontecimentos, Joana é uma mulher cativante e com uma experiência de vida encantadora e surpreendente. Desperta em nós valores de um mundo cada vez esquecido. Você não vai conseguir parar de ler até o desfecho dessa história.",
      },
      {
        author: "Marilia Terra",
        rating: 5,
        title: "Livro incrível",
        date: "2 de dezembro de 2023",
        content: "Leitura fácil e fluida. Amo todos os livros da autora! história inspiradora",
      },
      {
        author: "História sensacional…",
        rating: 5,
        title: "Excelente, recomendo",
        date: "2 de dezembro de 2023",
        content: "Um excelente enredo, adorei a história",
      },
      {
        author: "Soraia Hermes Fasciani",
        rating: 5,
        title: "Lindo!",
        date: "24 de outubro de 2023",
        content: "Passa uma força e fé de uma mãe solteira que luta contra todo obstáculos para viver e criar o seu !",
      },
    ],
    reviewsInternational: [
      {
        author: "Fasciani",
        rating: 5,
        title: "I love It eu amo",
        date: "22 de setembro de 2023",
        country: "Canadá",
        content: "Eu amo",
      },
    ],
  },
];
