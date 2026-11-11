import { INSTAGRAM_HANDLE, INSTAGRAM_URL, PHOTOS } from '../data/content'
import { Arrow, Instagram } from './Icons'
import { SectionHead } from './SectionHead'

/*
  Vitrine visual do Instagram. As imagens abaixo são de referência.
  Para mostrar o feed real automaticamente seria necessário integrar a API do Instagram
  (ou um widget como o do próprio Instagram/Meta) com o token da conta.
*/
export function InstagramSection() {
  return (
    <section id="instagram" className="relative bg-ink py-24 md:py-32">
      <div className="wrap">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHead index="v" eyebrow="Instagram" title={<>Acompanhe os bastidores</>} />
          <a
            data-reveal
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full md:w-auto"
          >
            <Instagram className="h-4 w-4" /> Seguir {INSTAGRAM_HANDLE}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-4 md:gap-5">
          {PHOTOS.instagram.map((p, i) => (
            <a
              key={p.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal-img
              style={{ ['--d' as string]: `${i * 80}ms` }}
              className="frame group aspect-square"
              aria-label={`Ver no Instagram: ${p.alt}`}
            >
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" style={{ filter: 'saturate(0.8) contrast(1.06) brightness(0.82) sepia(0.12)' }} />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-500 group-hover:bg-ink/45 group-hover:opacity-100">
                <Instagram className="h-7 w-7 text-cream" />
              </span>
            </a>
          ))}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            style={{ ['--d' as string]: '240ms' }}
            className="group relative flex aspect-square flex-col justify-between bg-copper p-5 text-ink transition-colors duration-500 md:p-7 [@media(hover:hover)]:hover:bg-copper-light"
          >
            <Instagram className="h-7 w-7" />
            <span>
              <span className="block font-gothic text-[1.6rem] leading-none md:text-4xl">Gangster Bar</span>
              <span className="mt-2 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] md:text-xs">
                {INSTAGRAM_HANDLE} <Arrow className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
