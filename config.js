/* =====================================================================
   LINKTREE — ADVENTISTAS TATUAPÉ  ·  link.adventistastatuape.org
   ---------------------------------------------------------------------
   TODO O CONTEÚDO DA PÁGINA FICA AQUI. O index.html não precisa mudar.
   - Para tirar um link do ar sem apagar: ativo: false
   - A ordem na página é a ordem desta lista.
   - Ícones disponíveis: youtube, instagram, facebook, spotify, tiktok,
     coracao, oracao, calendario, celular, mapa, estacionamento, carro,
     site, livro, play,
     pessoas, presente, whatsapp, email, link, estrela, musica
   ===================================================================== */

window.LINKTREE = {
  igreja: {
    nome: "Adventistas Tatuapé",
    titulo: "Links oficiais da Comunidade Adventista do Tatuapé",
    boasvindas: "Que bom ter você aqui!",
    versiculo: { texto: "Alegrei-me quando me disseram:\nVamos à casa do Senhor.", ref: "Salmos 122:1" },   /* \n = quebra de linha; texto vazio esconde */
    logo: "logo-vertical-branco.svg",   /* logo oficial vertical, versão branca */
    foto: "",   /* opcional: foto redonda abaixo do logo (ex.: "foto-igreja.jpg") */
    site: "https://adventistastatuape.org"
  },

  /* Destaques (campanhas e eventos). Aparecem todos, 2 por linha.
     ativo: false esconde. A ordem da lista é a ordem na página.
     subtitulo (opcional): linha logo abaixo do título.
     imagem: arquivo na pasta img/ em 4:5 (ex.: 864x1080) ou URL.
     Com um destaque só, o card ocupa a largura toda (imagem 16:9). */
  destaques: [
    {
      ativo: true,
      etiqueta: "Caminho do Natal",
      titulo: "Doações",
      data: "Meta 2026: 350 cestas e 800 crianças",
      imagem: "img/caminho-do-natal-doacoes.jpg",
      botao: "Doar agora",
      url: "https://www.caminhodonatal.com.br/doe/"
    },
    {
      ativo: true,
      etiqueta: "Quarta Kids",
      titulo: "Musical Minha Vida é Uma Viagem",
      subtitulo: "com a Família Ludtke",
      data: "2 de dezembro · 20h",
      imagem: "https://storage.googleapis.com/media_files_prod/uploads/inchurch/1650775/app_image-428e21b785e208b1166500efd71cce48.jpg",
      botao: "Fazer inscrição",
      url: "https://adventistastatuape.org/eventos"
    }
  ],

  /* Links principais */
  links: [
    { titulo: "Assista ao vivo",          sub: "Cultos e lives no YouTube",      icone: "youtube",    url: "https://www.youtube.com/@adventistastatuape", ativo: true },
    { titulo: "Dízimos e ofertas",         sub: "Contribua com a missão",         icone: "coracao",    url: "https://adventistastatuape.org/contribua",     ativo: true },
    { titulo: "Pedido de oração",          sub: "Vamos orar por você",            icone: "oracao",     url: "https://adventistastatuape.org/pedido-de-oracao", ativo: true },
    { titulo: "Eventos e inscrições",      sub: "Agenda da igreja",               icone: "calendario", url: "https://adventistastatuape.org/eventos",       ativo: true },
    { titulo: "Mensagens e estudos",       sub: "Palavras e leituras",            icone: "livro",      url: "https://adventistastatuape.org/palavras",      ativo: true },
    { titulo: "Baixe nosso aplicativo",    sub: "A igreja 24h com você",          icone: "celular",
      url: "https://play.google.com/store/apps/details?id=br.com.inchurch.adventistastatuape",
      url_ios: "",   /* link da App Store, se houver — no iPhone abre este */
      ativo: true },
    { titulo: "Onde nos encontrar",        sub: "Endereço e como chegar",         icone: "mapa",       url: "https://adventistastatuape.org/onde-nos-encontrar", ativo: true },
    { titulo: "Estacionamento mais próximo", sub: "Particular e pago · abrir no mapa", icone: "estacionamento", url: "https://maps.app.goo.gl/Lo1LhBpwsiPJ1Ffu6", ativo: true },
    { titulo: "Site da igreja",            sub: "adventistastatuape.org",         icone: "site",       url: "https://adventistastatuape.org",               ativo: true }
  ],

  /* Botão grande. Sem número preenchido, leva para o "Fale conosco" do site. */
  whatsapp: {
    texto: "Fale com a igreja no WhatsApp",
    numero: "",   /* só dígitos, com 55 + DDD. Ex.: 5511999999999 */
    mensagem: "Olá! Cheguei pelo link do Instagram.",
    fallback: "https://adventistastatuape.org/fale-conosco"
  },

  /* Horários dos cultos — um bloco por dia */
  horarios: {
    ativo: true,
    dias: [
      { dia: "Sáb", itens: [ { hora: "9h30", nome: "Culto" }, { hora: "10h45", nome: "Escola Sabatina" }, { hora: "11h30", nome: "Culto" } ] },
      { dia: "Dom", itens: [ { hora: "11h",  nome: "Culto" } ] },
      { dia: "Qua", itens: [ { hora: "20h",  nome: "Culto" } ] }
    ]
  },

  /* Ícones do rodapé */
  redes: [
    { icone: "instagram", url: "https://www.instagram.com/adventistastatuape/", nome: "Instagram" },
    { icone: "youtube",   url: "https://www.youtube.com/@adventistastatuape",    nome: "YouTube" }
  ]
};
