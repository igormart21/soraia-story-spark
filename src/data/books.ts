import book1 from "@/assets/book-1.jpg";
import chatgptBook from "../../assets/ChatGPT Image Oct 8, 2025, 01_37_09 PM.png";
import book2 from "@/assets/book-2.jpg";
import baratinhaTata from "../assets/baratinha-tata.png";
import casaBalasAninha from "../assets/casa-balas-aninha.png";
import mariaMarias from "../../assets/f25717cb-e11c-4bbd-8274-1e9aa264b737.png";
import joanaAmor from "../../assets/ChatGPT Image Oct 8, 2025, 05_38_27 PM.png";
import cristalEstrela from "../../assets/ChatGPT Image Oct 8, 2025, 06_07_35 PM.png";
import vovoSoso from "../../assets/ChatGPT Image Oct 8, 2025, 06_29_52 PM.png";
import festaVagalume from "../../assets/ChatGPT Image Oct 9, 2025, 06_26_38 AM.png";
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
    title: "CRISTAL E ESTRELA: Viagem de Luz",
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
        buyLink: 'https://pay.hotmart.com/B93674962S'
      },
      {
        type: 'capa-comum',
        price: 'R$ 49,90',
        buyLink: 'https://pay.hotmart.com/S102461538V'
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
        price: 'R$ 9,90',
        buyLink: 'https://pay.hotmart.com/H102456060H?off=pbzrw4y8'
      },
      {
        type: 'capa-comum',
        price: 'R$ 27,90',
        buyLink: 'https://pay.hotmart.com/Q102466666Q'
      }
    ],
  },
  {
    id: "contos-vovo-soso",
    title: "CONTOS DA VOVÓ SOSÔ: A Baratinha Tatá e o Bem-Querer e A Festa do Vaga-lume e do Beija-Flor",
    description: `Duas histórias emocionantes que deixam a mensagem da força da solidariedade, paz e da união. A importância da família da amizade.
A Baratinha Tatá e o Bem Querer e A Festa do Vaga-Lume e do Beija-Flor`,
    price: "R$63,16",
    image: vovoSoso,
    rating: 5,
    category: "kids",
    formats: [
      {
        type: 'ebook',
        price: 'R$ 9,90',
        buyLink: 'https://amazon.com.br/contos-vovo-soso-ebook'
      },
      {
        type: 'capa-comum',
        price: 'R$ 54,90',
        buyLink: 'https://pay.hotmart.com/B102466680Q'
      }
    ],
  },
  {
    id: "ecos-amor-alem-tempo",
    title: "ECOS DO AMOR ALÉM DO TEMPO: ALÉM DO TEMPO",
    description: "Quando o amor vive além do tempo. Lina, aos 16, carrega uma coragem rara. Amim, 36, é sereno e apaixonado. Unidos por um amor puro e profundo, enfrentam a rejeição da família, preconceitos e as amarras de uma sociedade que insiste em ditar quem pode ou não ser feliz. Mulher além de seu tempo, Lina confronta racismo, machismo e desigualdades com a mesma intensidade com que ama. Este livro é um grito de liberdade e um tributo à força do perdão — uma história emocionante que permanece muito depois do fim.",
    price: "R$ 54,00",
    image: chatgptBook,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 12,90',
        buyLink: 'https://pay.hotmart.com/H102455422F'
      },
      {
        type: 'capa-comum',
        price: 'R$ 54,90',
        buyLink: 'https://pay.hotmart.com/O102461811V'
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
        author: "Uanderson Pereira da Silva",
        rating: 5,
        title: "LIVRO INSPIRADOR!",
        date: "6 de maio de 2025",
        content: "É UM LIVRO SURPREENDENTE!",
      },
      {
        author: "Devaní Girotto",
        rating: 5,
        title: "Maravilha",
        date: "9 de maio de 2025",
        content: "Parabéns!",
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
    description: `Tata, uma baratinha, acorda triste e se olha no espelho, questionando sua aparência e falta de amigos. Influenciada por lembranças do avô sobre o poder do querer, decide explorar isso. Ela encontra seu amigo, o ratão, que a aconselha a fazer boas ações. Tata começa a ajudar outros animais, como a formiga, o coelhinho, o besouro, a lagartixa e a girafa, e descobre que isso a faz feliz. Apesar das críticas de amigas fofoqueiras, ela continua ajudando. No final, Tata percebe que a verdadeira beleza vem da bondade e é celebrada pelos amigos em seu aniversário, confirmando que boas ações trazem verdadeira felicidade e amizade.`,
    price: "R$ 32,90",
    image: baratinhaTata,
    rating: 5,
    formats: [
      {
        type: 'ebook',
        price: 'R$ 9,90',
        buyLink: 'https://pay.hotmart.com/R102456230B'
      },
      {
        type: 'capa-comum',
        price: 'R$ 27,90',
        buyLink: 'https://pay.hotmart.com/C102466692B?bid=1760720343722'
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
    id: "casa-balas-aninha",
    title: "A CASA DE BALAS DA ANINHA",
    description: `Aninha é uma garotinha de cinco anos que ganha da vovó Luísa um presente simplesmente mágico: uma casa feita de balas e chocolates! Com telhado de chocolate, janelas doces e um chão crocante, a casinha encanta todas as crianças da rua.
Mas quando a inveja de uma menina ameaça derreter toda aquela doçura, surge uma fada madrinha para ensinar a Aninha uma lição valiosa: o verdadeiro doce da vida não vem do açúcar, e sim da amizade, da generosidade e do amor.
Uma história encantadora e colorida que mostra às crianças o valor de dividir e o poder da bondade — porque o coração é o ingrediente mais doce de todos!`,
    price: "R$ 19,90",
    image: casaBalasAninha,
    rating: 5,
    category: "kids",
    formats: [
      {
        type: 'ebook',
        price: 'R$ 9,90',
        buyLink: 'https://pay.hotmart.com/O102456369O'
      },
      {
        type: 'capa-comum',
        price: 'R$ 27,90',
        buyLink: 'https://pay.hotmart.com/S102466712J'
      }
    ],
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
        buyLink: 'https://pay.hotmart.com/A102455834N'
      },
      {
        type: 'capa-comum',
        price: 'R$ 49,90',
        buyLink: 'https://pay.hotmart.com/H102461860H'
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
        buyLink: 'https://pay.hotmart.com/F93690546Q'
      },
      {
        type: 'capa-comum',
        price: 'R$ 49,90',
        buyLink: 'https://pay.hotmart.com/B102466648R'
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
