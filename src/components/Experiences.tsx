import { EVENTS, PHOTOS, type EventId } from '../data/content'
import { SectionHead } from './SectionHead'
import { Arrow } from './Icons'

export function Experiences({ onQuote }: { onQuote: (id: EventId) => void }) {
  return (
    <section id="experiencias" className="relative border-t border-champagne/10 bg-olive-deep/35 py-24 md:py-32 lg:py-40">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHead index="ii" eyebrow="Experiências" title={<>Um bar para cada tipo de celebração</>} />
            <div data-reveal-img style={{ ['--d' as string]: '120ms' }} className="frame mt-10 hidden aspect-[4/3] lg:block">
              <img
                src={PHOTOS.experience.src}
                srcSet={PHOTOS.experience.srcSet}
                sizes="40vw"
                alt={PHOTOS.experience.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <ol className="lg:col-span-7 lg:col-start-6 lg:pl-6">
          {EVENTS.map((e, i) => (
            <li key={e.id} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }} className="border-t border-champagne/12 last:border-b">
              <button
                onClick={() => onQuote(e.id)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 py-7 text-left md:grid-cols-[3.5rem_1fr_auto] md:py-9"
                aria-label={`${e.label}: solicitar orçamento`}
              >
                <span className="pt-2 font-gothic text-xl text-copper md:text-2xl">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <span className="block font-display text-[2.2rem] leading-none text-cream transition-colors duration-500 group-hover:text-champagne md:text-5xl">
                    {e.label}
                  </span>
                  <span className="mt-3 block max-w-[46ch] font-serif text-[1.1rem] leading-snug text-champagne/70 md:text-[1.2rem]">
                    {e.long}
                  </span>
                </span>
                <span className="mt-2 flex h-11 w-11 items-center justify-center rounded-full border border-champagne/20 text-champagne transition-all duration-500 group-hover:border-copper group-hover:bg-copper group-hover:text-ink">
                  <Arrow className="transition-transform duration-500 group-hover:translate-x-0.5" />
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
