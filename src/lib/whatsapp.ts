import { EVENTS, WHATSAPP_URL, type EventId } from '../data/content'

export type QuoteData = {
  event: EventId
  name: string
  date: string // yyyy-mm-dd
  guests: string
  city: string
}

export function formatDateBR(iso: string) {
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function buildMessage(q: QuoteData) {
  const ev = EVENTS.find((e) => e.id === q.event) ?? EVENTS[0]
  return [
    `Olá! Gostaria de um orçamento para ${ev.phrase} com a Gangster Bar.`,
    `Nome: ${q.name.trim()}`,
    `Data do evento: ${formatDateBR(q.date)}`,
    `Quantidade de convidados: ${parseInt(q.guests, 10)}`,
    `Cidade: ${q.city.trim()}`,
  ].join('\n')
}

export function buildWhatsAppLink(q: QuoteData) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(buildMessage(q))}`
}

export function todayISO() {
  const t = new Date()
  const off = t.getTimezoneOffset()
  return new Date(t.getTime() - off * 60000).toISOString().slice(0, 10)
}

export type Errors = Partial<Record<keyof QuoteData, string>>

export function validate(q: QuoteData): Errors {
  const e: Errors = {}
  const name = q.name.trim().replace(/\s+/g, ' ')
  if (!name) e.name = 'Informe seu nome completo.'
  else if (name.split(' ').length < 2 || name.length < 5) e.name = 'Informe nome e sobrenome.'

  if (!q.date) e.date = 'Informe a data do evento.'
  else if (q.date < todayISO()) e.date = 'Escolha uma data a partir de hoje.'

  const g = Number(q.guests)
  if (!q.guests.trim()) e.guests = 'Informe a quantidade de convidados.'
  else if (!Number.isInteger(g) || g < 1) e.guests = 'Use um número inteiro maior que zero.'
  else if (g > 100000) e.guests = 'Confira a quantidade informada.'

  if (!q.city.trim()) e.city = 'Informe a cidade do evento.'
  else if (q.city.trim().length < 2) e.city = 'Confira o nome da cidade.'

  return e
}
