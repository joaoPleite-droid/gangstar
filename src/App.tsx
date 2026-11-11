import { useCallback, useState } from 'react'
import type { EventId } from './data/content'
import { useReveal } from './hooks'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experiences } from './components/Experiences'
import { Gallery } from './components/Gallery'
import { Differentials } from './components/Differentials'
import { InstagramSection } from './components/InstagramSection'
import { Quote } from './components/Quote'
import { Footer } from './components/Footer'
import { QuoteModal } from './components/QuoteModal'
import { MobileCTA } from './components/MobileCTA'

export default function App() {
  useReveal()
  const [modal, setModal] = useState<{ open: boolean; event: EventId }>({ open: false, event: 'casamento' })

  const openQuote = useCallback((event?: EventId) => {
    setModal((m) => ({ open: true, event: event ?? m.event }))
  }, [])
  const goToQuote = useCallback(() => {
    document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  const close = useCallback(() => setModal((m) => ({ ...m, open: false })), [])

  return (
    <>
      <Header onQuote={goToQuote} />
      <main id="conteudo">
        <Hero onQuote={goToQuote} />
        <About />
        <Experiences onQuote={openQuote} />
        <Gallery />
        <Differentials />
        <InstagramSection />
        <Quote onQuote={openQuote} />
      </main>
      <Footer onQuote={goToQuote} />
      <MobileCTA onQuote={goToQuote} hidden={modal.open} />
      <QuoteModal open={modal.open} event={modal.event} onClose={close} />
    </>
  )
}
