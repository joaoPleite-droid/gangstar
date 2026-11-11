import { useState } from 'react'

/**
 * LOGOTIPO OFICIAL — public/logo.png (selo circular da Gangster Bar).
 * O arquivo é exibido sem alterações; apenas recortamos em círculo para
 * esconder os cantos de fundo da imagem enviada (fora do selo).
 * Se um dia houver versão em PNG transparente/SVG, basta trocar LOGO_SRC.
 */
const LOGO_SRC = '/logo.png'

type Props = { className?: string; size?: 'sm' | 'lg'; sizeClass?: string }

export function Logo({ className = '', size = 'sm', sizeClass }: Props) {
  const [failed, setFailed] = useState(false)
  const dim = sizeClass ?? (size === 'lg' ? 'h-32 w-32 md:h-36 md:w-36' : 'h-[52px] w-[52px] md:h-[60px] md:w-[60px]')

  if (!failed) {
    return (
      <img
        src={LOGO_SRC}
        alt="Gangster Bar"
        width={565}
        height={564}
        className={`${dim} object-cover ${className}`}
        style={{ clipPath: 'circle(48% at 50% 49.6%)' }}
        onError={() => setFailed(true)}
      />
    )
  }

  return (
    <span className={`font-gothic leading-none text-cream ${size === 'lg' ? 'text-5xl' : 'text-3xl'} ${className}`}>
      Gangster Bar
    </span>
  )
}
