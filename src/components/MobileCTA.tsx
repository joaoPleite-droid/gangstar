import { useEffect, useState } from 'react'
import { WHATSAPP_URL } from '../data/content'
import { Arrow, WhatsApp } from './Icons'

/** Barra fixa no rodapé (só mobile/tablet). Aparece depois do hero e some na seção de orçamento. */
export function MobileCTA({ onQuote, hidden }: { onQuote: () => void; hidden: boolean }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('topo')
    const quote = document.getElementById('orcamento')
    if (!hero || !quote) return
    const footer = document.querySelector('footer')
    // Esconde a barra no hero, na seção de orçamento e no rodapé (que já têm o próprio CTA)
    const seen = new Map<Element, boolean>()
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => seen.set(e.target, e.isIntersecting))
      setShow(![...seen.values()].some(Boolean))
    }, { threshold: 0 })
    ;[hero, quote, footer].forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div
      className={`cta-bar fixed inset-x-0 bottom-0 z-40 border-t border-champagne/10 bg-ink/90 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden ${
        show && !hidden ? 'is-visible' : ''
      }`}
      aria-hidden={!(show && !hidden)}
    >
      <div className="mx-auto flex max-w-xl gap-2">
        <button onClick={onQuote} tabIndex={show ? 0 : -1} className="btn btn-primary flex-1">
          Pedir orçamento <Arrow />
        </button>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={show ? 0 : -1}
          aria-label="Conversar no WhatsApp"
          className="btn btn-ghost !px-0 w-[52px] shrink-0"
        >
          <WhatsApp className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
