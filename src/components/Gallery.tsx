import { PHOTOS } from '../data/content'
import { SectionHead } from './SectionHead'

/*
  Composição:
  - mobile: 2 colunas, primeira imagem em largura total (ritmo editorial)
  - desktop: grade de 12 colunas assimétrica
*/
const LAYOUT = [
  'col-span-2 aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto',
  'col-span-1 aspect-[3/4] md:col-span-5 md:aspect-[5/4]',
  'col-span-1 aspect-[3/4] md:col-span-5 md:aspect-[5/4]',
  'col-span-1 aspect-[3/4] md:col-span-4 md:aspect-[4/5]',
  'col-span-1 aspect-[3/4] md:col-span-4 md:aspect-[4/5]',
  'col-span-2 aspect-[4/3] md:col-span-4 md:aspect-[4/5]',
]

export function Gallery() {
  return (
    <section id="galeria" className="relative bg-ink py-24 md:py-32 lg:py-40">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHead index="iii" eyebrow="Galeria" title={<>Detalhes que viram lembrança</>} />
          <p data-reveal style={{ ['--d' as string]: '160ms' }} className="lede max-w-[30ch] md:pb-2 md:text-right">
            Cor, textura e luz em cada copo servido.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-16 md:grid-cols-12 md:gap-5">
          {PHOTOS.gallery.map((p, i) => (
            <div
              key={p.src}
              data-reveal-img
              style={{ ['--d' as string]: `${(i % 3) * 90}ms` }}
              className={`frame ${LAYOUT[i]}`}
            >
              <img
                src={p.src}
                srcSet={p.srcSet}
                sizes={i === 0 ? '(min-width: 768px) 58vw, 100vw' : '(min-width: 768px) 33vw, 50vw'}
                alt={p.alt}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
