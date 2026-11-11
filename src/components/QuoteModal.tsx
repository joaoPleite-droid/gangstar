import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { EVENTS, type EventId } from '../data/content'
import { buildWhatsAppLink, todayISO, validate, type Errors, type QuoteData } from '../lib/whatsapp'
import { Close, WhatsApp } from './Icons'

type Props = {
  open: boolean
  event: EventId
  onClose: () => void
}

const EMPTY = { name: '', date: '', guests: '', city: '' }

export function QuoteModal({ open, event, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const firstField = useRef<HTMLInputElement>(null)
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState<QuoteData>({ event, ...EMPTY })
  const [errors, setErrors] = useState<Errors>({})
  const [shake, setShake] = useState(false)
  const uid = useId()

  // Sincroniza o evento escolhido ao abrir
  useEffect(() => {
    if (open) {
      setData((d) => ({ ...d, event }))
      setErrors({})
    }
  }, [open, event])

  // Abre/fecha com animação
  useEffect(() => {
    const dlg = ref.current
    if (!dlg) return
    if (open) {
      if (!dlg.open) dlg.showModal()
      document.documentElement.style.overflow = 'hidden'
      const raf = requestAnimationFrame(() => {
        setVisible(true)
        // foco no primeiro campo sem rolar a página
        setTimeout(() => firstField.current?.focus({ preventScroll: true }), 250)
      })
      return () => cancelAnimationFrame(raf)
    } else {
      setVisible(false)
      document.documentElement.style.overflow = ''
      const t = setTimeout(() => dlg.open && dlg.close(), 500)
      return () => clearTimeout(t)
    }
  }, [open])

  const set = (k: keyof QuoteData) => (v: string) => {
    setData((d) => ({ ...d, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    const errs = validate(data)
    setErrors(errs)
    const firstBad = (Object.keys(errs) as (keyof QuoteData)[])[0]
    if (firstBad) {
      setShake(true)
      setTimeout(() => setShake(false), 400)
      document.getElementById(`${uid}-${firstBad}`)?.focus()
      return
    }
    const url = buildWhatsAppLink(data)
    const win = window.open(url, '_blank', 'noopener,noreferrer')
    if (!win) window.location.href = url
  }

  const selected = EVENTS.find((e) => e.id === data.event)!

  return (
    <dialog
      ref={ref}
      className={`quote-modal ${visible ? 'is-open' : ''}`}
      aria-labelledby={`${uid}-title`}
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
    >
      <div className="backdrop absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={onClose} />

      <div className="pointer-events-none relative flex h-full items-end justify-center md:items-center md:p-6">
        <div className="sheet pointer-events-auto relative flex max-h-[94svh] w-full flex-col overflow-hidden border-champagne/15 bg-ink-2 md:max-h-[90vh] md:max-w-[560px] md:border">
          {/* topo */}
          <div className="flex items-start justify-between gap-4 border-b border-champagne/10 px-5 pb-5 pt-6 md:px-9 md:pt-8">
            <div>
              <p className="eyebrow">Orçamento</p>
              <h2 id={`${uid}-title`} className="mt-2 font-display text-[2.3rem] leading-none text-cream md:text-5xl">
                {selected.label}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="-mr-2 -mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-champagne/70 transition-colors hover:bg-champagne/10 hover:text-cream"
              aria-label="Fechar formulário"
            >
              <Close />
            </button>
          </div>

          <form noValidate onSubmit={submit} className="flex-1 overflow-y-auto overscroll-contain px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6 md:px-9 md:pb-9">
            <div className="space-y-5">
              <Field label="Tipo de evento" id={`${uid}-event`}>
                <select
                  id={`${uid}-event`}
                  className="field"
                  value={data.event}
                  onChange={(e) => set('event')(e.target.value)}
                >
                  {EVENTS.map((e) => (
                    <option key={e.id} value={e.id} className="bg-ink">
                      {e.singular}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Nome completo" id={`${uid}-name`} error={errors.name}>
                <input
                  ref={firstField}
                  id={`${uid}-name`}
                  className="field"
                  type="text"
                  autoComplete="name"
                  placeholder="Como devemos chamar você"
                  value={data.name}
                  onChange={(e) => set('name')(e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${uid}-name-err` : undefined}
                  required
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Data do evento" id={`${uid}-date`} error={errors.date}>
                  <input
                    id={`${uid}-date`}
                    className="field"
                    type="date"
                    min={todayISO()}
                    value={data.date}
                    onChange={(e) => set('date')(e.target.value)}
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? `${uid}-date-err` : undefined}
                    required
                  />
                </Field>

                <Field label="Nº de convidados" id={`${uid}-guests`} error={errors.guests}>
                  <input
                    id={`${uid}-guests`}
                    className="field"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    step={1}
                    placeholder="Ex.: 120"
                    value={data.guests}
                    onChange={(e) => set('guests')(e.target.value)}
                    aria-invalid={!!errors.guests}
                    aria-describedby={errors.guests ? `${uid}-guests-err` : undefined}
                    required
                  />
                </Field>
              </div>

              <Field label="Cidade do evento" id={`${uid}-city`} error={errors.city}>
                <input
                  id={`${uid}-city`}
                  className="field"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="Onde será a celebração"
                  value={data.city}
                  onChange={(e) => set('city')(e.target.value)}
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? `${uid}-city-err` : undefined}
                  required
                />
              </Field>
            </div>

            <button type="submit" className={`btn btn-primary mt-8 w-full ${shake ? 'shake' : ''}`}>
              <WhatsApp className="h-5 w-5" /> Solicitar orçamento
            </button>
            <p className="mt-4 text-center text-xs leading-relaxed text-champagne/50">
              Você será direcionado ao WhatsApp com a mensagem pronta para enviar.
            </p>
          </form>
        </div>
      </div>
    </dialog>
  )
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne/70">
        {label} {id.endsWith('event') ? null : <span className="text-copper">*</span>}
      </label>
      {children}
      <p
        id={`${id}-err`}
        role={error ? 'alert' : undefined}
        className={`overflow-hidden text-[0.8rem] text-[#e08a6e] transition-all duration-300 ${error ? 'mt-2 max-h-10 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {error}
      </p>
    </div>
  )
}
