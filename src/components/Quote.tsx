import { EVENTS, type EventId } from '../data/content'
import { SectionHead } from './SectionHead'
import { Arrow } from './Icons'

export function Quote({ onQuote }: { onQuote: (id: EventId) => void }) {
  return (
    <section id="orcamento" className="relative overflow-hidden border-t border-champagne/10 bg-olive-deep/40 py-24 md:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgb(183_122_69/0.16),transparent_60%)]" />

      <div className="wrap relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHead index="vi" eyebrow="Orçamento" title={<>Qual é a sua celebração?</>} />
          </div>
          <p data-reveal style={{ ['--d' as string]: '160ms' }} className="lede lg:col-span-5 lg:pb-2">
            Escolha o tipo de evento, preencha quatro informações e continue a conversa direto no WhatsApp.
          </p>
        </div>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-5">
          {EVENTS.map((e, i) => (
            <li key={e.id} data-reveal style={{ ['--d' as string]: `${(i % 3) * 80}ms` }} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <button
                onClick={() => onQuote(e.id)}
                className="event-card group flex h-full min-h-[148px] w-full flex-col justify-between border border-champagne/15 bg-ink/50 p-6 text-left md:min-h-[200px] md:p-8"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="font-gothic text-2xl text-copper">{String(i + 1).padStart(2, '0')}</span>
                  <span className="ec-arrow text-copper">
                    <Arrow />
                  </span>
                </span>
                <span className="mt-6 block">
                  <span className="block font-display text-[2rem] leading-none text-cream md:text-[2.4rem]">{e.label}</span>
                  <span className="mt-2 block text-sm text-champagne/65">{e.short}</span>
                </span>
              </button>
            </li>
          ))}
          <li data-reveal style={{ ['--d' as string]: '160ms' }} className="hidden lg:block">
            <div className="flex h-full min-h-[200px] flex-col justify-between border border-dashed border-copper/40 p-8">
              <span className="eyebrow">Como funciona</span>
              <ol className="space-y-2 font-serif text-lg text-champagne/80">
                <li><span className="mr-2 text-copper">1.</span>Escolha o evento</li>
                <li><span className="mr-2 text-copper">2.</span>Preencha os dados</li>
                <li><span className="mr-2 text-copper">3.</span>Fale com a equipe no WhatsApp</li>
              </ol>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
