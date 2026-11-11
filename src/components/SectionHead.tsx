import type { ReactNode } from 'react'

type Props = {
  index: string
  eyebrow: string
  title: ReactNode
  className?: string
  align?: 'left' | 'center'
}

export function SectionHead({ index, eyebrow, title, className = '', align = 'left' }: Props) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} ${className}`}>
      <p data-reveal className={`eyebrow flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <span className="font-gothic text-base normal-case tracking-normal text-champagne/50">{index}</span>
        <span className="h-px w-8 bg-copper/60" />
        {eyebrow}
      </p>
      <h2
        data-reveal
        style={{ ['--d' as string]: '80ms' }}
        className="h-display mt-5 text-[clamp(2.8rem,10vw,5.5rem)]"
      >
        {title}
      </h2>
    </div>
  )
}
