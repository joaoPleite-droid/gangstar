# Gangster Bar — Landing Page

Landing page de mixologia e drinks para eventos. Feita com React, TypeScript, Vite e Tailwind CSS.

## Rodar no computador

Requer Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:5173.

## Gerar a versão de produção

```bash
npm run build
```

Os arquivos finais ficam na pasta `dist`.

## Onde editar

| O quê | Arquivo |
|---|---|
| Textos, eventos, diferenciais, WhatsApp e Instagram | `src/data/content.ts` |
| Mensagem enviada ao WhatsApp e validação do formulário | `src/lib/whatsapp.ts` |
| Cores, fontes e animações | `src/index.css` |
| Seções da página | `src/components/` |
| Logotipo | `public/logo.png` |
| Fotos | `public/img/` |

## Fotos

As fotos atuais são ilustrativas, do [Unsplash](https://unsplash.com). Para usar as fotos reais da Gangster Bar, substitua os arquivos em `public/img/` mantendo os mesmos nomes.
