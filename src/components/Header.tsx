import { useEffect, useState } from 'react'
import { NAV, INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../data/content'
import { useScrolled } from '../hooks'
import { Logo } from './Logo'
import { Arrow, Instagram } from './Icons'

export function Header({ onQuote }: { onQuote: () => void }) {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const on = () => mq.matches && setOpen(false)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:bg-copper focus:px-4 focus:py-3 focus:text-ink"
      >
        Pular para o conteúdo
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled && !open
            ? 'border-b border-champagne/10 bg-ink/80 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="wrap flex h-[68px] items-center justify-between md:h-[76px]">
          <a href="#topo" className="relative -ml-1 flex min-h-[44px] items-center p-1" aria-label="Gangster Bar — início" onClick={() => setOpen(false)}>
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV.slice(0, 4).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="link-draw py-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne/80 hover:text-cream">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onQuote} className="btn btn-primary hidden !min-h-[44px] !px-5 lg:inline-flex">
              Pedir orçamento <Arrow />
            </button>

            <button
              type="button"
              className="burger relative z-[60] -mr-2 flex h-12 w-12 flex-col items-center justify-center gap-[6px] lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block h-px w-7 bg-cream" />
              <span className="block h-px w-7 bg-cream" />
            </button>
          </div>
        </div>
      </header>

      {/* Menu mobile em tela cheia */}
      <div
        id="menu-mobile"
        className={`menu-panel fixed inset-0 z-[55] flex flex-col bg-ink lg:hidden ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <div className="grain pointer-events-none absolute inset-0" />
        <nav aria-label="Menu" className="wrap relative flex flex-1 flex-col justify-center pt-20">
          <ul className="space-y-1">
            {NAV.map((n, i) => (
              <li key={n.href} className="menu-item" style={{ ['--i' as string]: i }}>
                <a
                  href={n.href}
                  tabIndex={open ? 0 : -1}
                  onClick={(e) => {
                    // A página está travada (overflow hidden) com o menu aberto:
                    // fecha primeiro e só então rola até a seção.
                    e.preventDefault()
                    setOpen(false)
                    requestAnimationFrame(() => {
                      document.querySelector(n.href)?.scrollIntoView({ behavior: 'smooth' })
                      history.replaceState(null, '', n.href)
                    })
                  }}
                  className="flex items-baseline gap-4 py-2 font-display text-[3.2rem] leading-none text-cream transition-colors active:text-copper"
                >
                  <span className="font-sans text-xs tracking-[0.2em] text-copper">0{i + 1}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="wrap relative space-y-4 pb-[max(2rem,env(safe-area-inset-bottom))]">
          <div className="menu-item" style={{ ['--i' as string]: NAV.length }}>
            <button
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setOpen(false)
                onQuote()
              }}
              className="btn btn-primary w-full"
            >
              Solicitar orçamento <Arrow />
            </button>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={open ? 0 : -1}
            className="menu-item flex min-h-[44px] items-center justify-center gap-2 text-sm text-champagne/70"
            style={{ ['--i' as string]: NAV.length + 1 }}
          >
            <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </>
  )
}
