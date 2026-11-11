import { DIFFERENTIALS } from '../data/content'
import { SectionHead } from './SectionHead'

export function Differentials() {
  return (
    <section id="diferenciais" className="relative overflow-hidden border-t border-champagne/10 bg-ink-2 py-24 md:py-32 lg:py-40">
      {/* Marca d'água gótica */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-10 select-none font-gothic text-[13rem] leading-none text-olive/10 md:text-[22rem] lg:-right-10"
      >
        G
      </span>

      <div className="wrap relative">
        <SectionHead index="iv" eyebrow="Diferenciais" title={<>O que muda no seu evento</>} />

        <div className="mt-14 grid gap-px bg-champagne/10 md:mt-20 md:grid-cols-2">
          {DIFFERENTIALS.map((d, i) => (
            <article
              key={d.title}
              data-reveal
              style={{ ['--d' as string]: `${(i % 2) * 100}ms` }}
              className="group bg-ink-2 p-7 transition-colors duration-700 md:p-10 lg:p-12 [@media(hover:hover)]:hover:bg-olive-deep/40"
            >
              <span className="font-serif text-lg italic text-copper">{d.n}</span>
              <h3 className="mt-4 font-display text-[2.1rem] leading-none text-cream md:text-[2.6rem]">{d.title}</h3>
              <div className="mt-5 h-px w-10 bg-copper/50 transition-all duration-700 group-hover:w-20" />
              <p className="mt-5 max-w-[42ch] text-[0.95rem] leading-relaxed text-champagne/70">{d.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
