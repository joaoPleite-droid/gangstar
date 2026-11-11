import { PHOTOS } from '../data/content'
import { SectionHead } from './SectionHead'

export function About() {
  return (
    <section id="sobre" className="relative bg-ink py-24 md:py-32 lg:py-40">
      <div className="wrap grid gap-12 md:grid-cols-12 md:items-center md:gap-10">
        <div className="md:col-span-6 lg:col-span-6 lg:pr-8">
          <SectionHead index="i" eyebrow="A Casa" title={<>Coquetelaria que vai até a sua festa</>} />

          <div className="mt-8 space-y-5">
            <p data-reveal style={{ ['--d' as string]: '160ms' }} className="lede">
              A Gangster Bar é especializada em mixologia e drinks para eventos. Levamos o balcão, a técnica e a
              apresentação para onde a celebração acontece.
            </p>
            <p data-reveal style={{ ['--d' as string]: '240ms' }} className="max-w-[52ch] text-[0.95rem] leading-relaxed text-champagne/65">
              Cada carta nasce de uma conversa: o estilo do evento, o perfil dos convidados, o horário e o clima. O
              resultado é um bar que parece ter sido feito para aquela noite, porque foi.
            </p>
          </div>

          <p data-reveal style={{ ['--d' as string]: '320ms' }} className="mt-10 font-gothic text-3xl text-copper/90 md:text-4xl">
            Feito para aquela noite.
          </p>
        </div>

        <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
          <div data-reveal-img className="frame aspect-[4/5] w-full">
            <img
              src={PHOTOS.about.src}
              srcSet={PHOTOS.about.srcSet}
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
              alt={PHOTOS.about.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
