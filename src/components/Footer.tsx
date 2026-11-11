import { INSTAGRAM_HANDLE, INSTAGRAM_URL, NAV, WHATSAPP_DISPLAY, WHATSAPP_URL } from '../data/content'
import { Arrow, Instagram, WhatsApp } from './Icons'
import { Logo } from './Logo'

export function Footer({ onQuote }: { onQuote: () => void }) {
  return (
    <footer className="relative border-t border-champagne/10 bg-ink pb-28 pt-20 md:pb-12 md:pt-28">
      <div className="wrap">
        {/* Chamada final */}
        <div className="flex flex-col gap-8 border-b border-champagne/10 pb-16 md:flex-row md:items-end md:justify-between md:pb-20">
          <p data-reveal className="h-display max-w-[14ch] text-[clamp(2.8rem,9vw,5.5rem)]">
            Vamos desenhar o bar do seu evento?
          </p>
          <button data-reveal style={{ ['--d' as string]: '120ms' }} onClick={onQuote} className="btn btn-primary w-full md:w-auto">
            Solicitar orçamento <Arrow />
          </button>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo size="lg" />
            <p className="mt-5 max-w-[34ch] font-serif text-lg leading-snug text-champagne/65">
              Mixologia e drinks para eventos.
            </p>
          </div>

          <nav aria-label="Rodapé" className="md:col-span-3">
            <p className="eyebrow mb-5">Navegação</p>
            <ul className="space-y-1">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-draw inline-flex min-h-[44px] items-center text-champagne/75 hover:text-cream md:min-h-[36px]">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Contato</p>
            <ul className="space-y-1">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-3 text-champagne/75 transition-colors hover:text-cream"
                >
                  <WhatsApp className="h-5 w-5 text-copper" />
                  <span className="link-draw">{WHATSAPP_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[44px] items-center gap-3 text-champagne/75 transition-colors hover:text-cream"
                >
                  <Instagram className="h-5 w-5 text-copper" />
                  <span className="link-draw">{INSTAGRAM_HANDLE}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-champagne/10 pt-8 text-xs text-champagne/40 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Gangster Bar. Todos os direitos reservados.</p>
          <p>
            Fotografias ilustrativas:{' '}
            <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer" className="underline decoration-champagne/30 underline-offset-2 hover:text-champagne/70">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
