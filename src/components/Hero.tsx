import { PHOTOS } from '../data/content'
import { Arrow } from './Icons'
import { Logo } from './Logo'

const d = (ms: number) => ({ ['--d' as string]: `${ms}ms` })

export function Hero({ onQuote }: { onQuote: () => void }) {
  return (
    <section id="topo" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={PHOTOS.hero.src}
          srcSet={PHOTOS.hero.srcSet}
          sizes="100vw"
          alt={PHOTOS.hero.alt}
          fetchPriority="high"
          className="hero-img h-full w-full object-cover object-[60%_center]"
          style={{ filter: 'saturate(0.92) contrast(1.05)' }}
        />
        {/* Camadas de luz para leitura e clima cinematográfico */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10 md:via-ink/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,transparent_35%,rgb(16_16_13/0.45)_85%)]" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink/80 via-ink/25 to-transparent md:block" />
      </div>

      <div className="wrap relative z-10 mt-auto pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-32 md:pb-20 lg:pb-24">
        <div className="enter flex items-center gap-5" style={d(150)}>
          <Logo sizeClass="h-24 w-24 md:h-32 md:w-32" className="drop-shadow-[0_0_30px_rgb(183_122_69/0.35)]" />
          <p className="font-gothic text-[1.6rem] leading-none text-copper md:text-4xl">
            Mixologia
            <br />
            &amp; Eventos
          </p>
        </div>

        <div className="line-grow mt-6 h-px w-20 bg-copper/70" style={d(400)} />

        <h1 className="h-display enter mt-6 max-w-[11ch] text-[clamp(3.6rem,15vw,7.25rem)] md:max-w-[12ch]" style={d(450)}>
          Drinks autorais para o seu evento
        </h1>

        <p className="lede enter mt-6 max-w-[34ch] md:max-w-[42ch]" style={d(650)}>
          Mixologia, bar e serviço pensados para a sua celebração, do primeiro brinde ao último pedido da noite.
        </p>

        <div className="enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center" style={d(850)}>
          <button onClick={onQuote} className="btn btn-primary w-full sm:w-auto">
            Solicitar orçamento <Arrow />
          </button>
          <a href="#experiencias" className="btn btn-ghost w-full sm:w-auto">
            Conhecer experiências
          </a>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="enter absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-champagne/60 md:flex"
        style={d(1200)}
      >
        <span className="[writing-mode:vertical-rl]">Role</span>
        <span className="cue block h-10 w-px bg-champagne/50" />
      </a>
    </section>
  )
}
