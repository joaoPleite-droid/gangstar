export const WHATSAPP_NUMBER = '5545999919494'
export const WHATSAPP_DISPLAY = '+55 45 99991-9494'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const INSTAGRAM_URL = 'https://www.instagram.com/gangsterbar_/'
export const INSTAGRAM_HANDLE = '@gangsterbar_'

export const NAV = [
  { href: '#sobre', label: 'A Casa' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#diferenciais', label: 'Diferenciais' },
  { href: '#orcamento', label: 'Orçamento' },
]

export type EventId = 'casamento' | 'aniversario' | 'corporativo' | 'particular' | 'especial'

export type EventType = {
  id: EventId
  /** Nome exibido no card */
  label: string
  /** Nome no singular (seletor do formulário) */
  singular: string
  /** Como o evento entra na frase: "um orçamento para ___" */
  phrase: string
  /** Texto curto do card de orçamento */
  short: string
  /** Texto editorial da seção de experiências */
  long: string
}

export const EVENTS: EventType[] = [
  {
    id: 'casamento',
    label: 'Casamentos',
    singular: 'Casamento',
    phrase: 'um casamento',
    short: 'Do brinde dos noivos à última dança.',
    long: 'Uma carta criada com os noivos, com drinks que contam a história do casal e acompanham a noite do brinde à pista.',
  },
  {
    id: 'aniversario',
    label: 'Aniversários',
    singular: 'Aniversário',
    phrase: 'um aniversário',
    short: 'Sua idade nova merece um bar à altura.',
    long: 'Drinks com a sua cara para comemorar entre amigos, num serviço que deixa o anfitrião livre para aproveitar a própria festa.',
  },
  {
    id: 'corporativo',
    label: 'Eventos corporativos',
    singular: 'Evento corporativo',
    phrase: 'um evento corporativo',
    short: 'Lançamentos, confraternizações e recepções.',
    long: 'Coquetelaria para lançamentos, confraternizações e recepções de clientes, com apresentação alinhada à imagem da sua marca.',
  },
  {
    id: 'particular',
    label: 'Festas particulares',
    singular: 'Festa particular',
    phrase: 'uma festa particular',
    short: 'Do jantar em casa à festa no jardim.',
    long: 'Do jantar íntimo à festa no jardim: o bar vai até você, com a mesma atenção dada a um grande evento.',
  },
  {
    id: 'especial',
    label: 'Eventos especiais',
    singular: 'Evento especial',
    phrase: 'um evento especial',
    short: 'Formaturas, noivados e o que mais vier.',
    long: 'Formaturas, noivados, chás e datas que fogem do roteiro. Conte a ideia e a carta é desenhada a partir dela.',
  },
]

export const DIFFERENTIALS = [
  {
    n: 'I',
    title: 'Carta sob medida',
    text: 'Cada evento recebe uma seleção de drinks pensada para o perfil dos convidados, o horário e o clima da celebração.',
  },
  {
    n: 'II',
    title: 'Mixologia de verdade',
    text: 'Técnica, equilíbrio e preparo no momento do pedido. O drink chega ao copo como foi pensado.',
  },
  {
    n: 'III',
    title: 'Estética do balcão',
    text: 'Bar, copos e finalização compõem a ambientação do evento. O serviço também é parte do cenário.',
  },
  {
    n: 'IV',
    title: 'Atendimento direto',
    text: 'Do primeiro contato ao fechamento, você conversa direto com a equipe pelo WhatsApp, sem intermediários.',
  },
]

/** Fotografias ilustrativas (Unsplash). Substituir pelas fotos oficiais da Gangster Bar quando houver. */
const img = (name: string, widths: number[]) => ({
  src: `/img/${name}-${widths[widths.length - 1]}.jpg`,
  srcSet: widths.map((w) => `/img/${name}-${w}.jpg ${w}w`).join(', '),
})

export const PHOTOS = {
  hero: { ...img('hero', [960, 1600, 2200]), alt: 'Bartender agitando a coqueteleira atrás do balcão iluminado' },
  about: { ...img('about', [600, 1100]), alt: 'Bartender servindo um drink com precisão no balcão escuro' },
  experience: { ...img('events', [600, 1100]), alt: 'Convidados brindando com drinks em uma festa à luz de varal' },
  gallery: [
    { ...img('g1', [600, 1200]), alt: 'Drink âmbar com ramo de alecrim sobre tábua de madeira' },
    { ...img('g2', [600, 1000]), alt: 'Coquetel em taça coupe com casca de laranja' },
    { ...img('g3', [600, 1000]), alt: 'Drink com casca cítrica e gelo em copo baixo' },
    { ...img('g4', [600, 1000]), alt: 'Coquetel vermelho em copo lapidado com espiral de limão' },
    { ...img('g5', [600, 1000]), alt: 'Bartender coando drink da coqueteleira para o copo' },
    { ...img('g6', [600, 1000]), alt: 'Coquetéis cremosos em taças sobre o balcão' },
  ],
  instagram: [
    { src: '/img/ig1-600.jpg', alt: 'Drink com espuma e frutas vermelhas' },
    { src: '/img/ig2-600.jpg', alt: 'Drink âmbar com gelo em ambiente escuro' },
    { src: '/img/ig3-600.jpg', alt: 'Martini verde sendo servido' },
  ],
}