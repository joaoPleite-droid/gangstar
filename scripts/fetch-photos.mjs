// Baixa as fotos ilustrativas (Unsplash, licença Unsplash) para public/img/.
// Uso: node scripts/fetch-photos.mjs
import fs from 'node:fs'

const PHOTOS = {
  hero: ['1647776112336-72f4c30fafc1', [960, 1600, 2200]],
  about: ['1514447357535-f21ac8c34538', [600, 1100]],
  events: ['1519671482749-fd09be7ccebf', [600, 1100]],
  g1: ['1514362545857-3bc16c4c7d1b', [600, 1200]],
  g2: ['1556248461-7eeccd770551', [600, 1000]],
  g3: ['1621873495884-845a939892d1', [600, 1000]],
  g4: ['1671522635051-e07b94bcf965', [600, 1000]],
  g5: ['1574449126805-6f11acf5a8c5', [600, 1000]],
  g6: ['1636144924623-b3aea3c5f16c', [600, 1000]],
  ig1: ['1670819916391-712ef4a6678d', [600]],
  ig2: ['1658699440679-0f09683423f5', [600]],
  ig3: ['1607446045926-3aee01b43c17', [600]],
}

fs.mkdirSync('public/img', { recursive: true })
for (const [name, [id, widths]] of Object.entries(PHOTOS)) {
  for (const w of widths) {
    const url = `https://images.unsplash.com/photo-${id}?w=${w}&q=72&fm=jpg&fit=max`
    const res = await fetch(url)
    if (!res.ok) throw new Error(`${name} ${w}: HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(`public/img/${name}-${w}.jpg`, buf)
    console.log(`${name}-${w}.jpg ${Math.round(buf.length / 1024)} KB`)
  }
}
