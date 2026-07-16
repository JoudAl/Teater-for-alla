# Teater För Alla — webbplats

En modern, statisk webbplats för [Teater För Alla](https://teaterforalla.se/), byggd med
[Astro](https://astro.build). Ljus, samtida design med varmt papper, terrakotta-accenter,
riktiga scenfoton från originalsajten och självhostade typsnitt (Fraunces + Inter) —
noll klientramverk, bara några rader vanilla JS för meny och scroll-animationer.

## Kom igång

```sh
npm install
npm run dev       # dev-server på http://localhost:4321
npm run build     # statisk build till dist/
npm run preview   # förhandsgranska dist/
```

## Struktur

- `src/content/shows/` — de sju föreställningarna som markdown med frontmatter
  (målgrupp, speltid, språk, medverkande, bilder m.m.). Lägg till en `.md`-fil så får
  den automatiskt kort i repertoaren och en egen sida.
- `src/content/workshops/` — de sex workshoparna på samma sätt (inkl. teaterkursen).
- `src/assets/` — foton hämtade från originalsajten; optimeras automatiskt av
  `astro:assets` (responsiva srcset + webp) vid build.
- `src/pages/` — startsida, föreställningar, workshops, berättelser, om oss,
  samarbete, kontakt och 404.
- `src/layouts/Base.astro` — delad layout med SEO-metadata, header/footer och
  scroll-reveal.
- `src/styles/global.css` — designsystemet: färger, flytande typografiskala,
  knappar, kort och utilities.

## Designprinciper

- **Tillgänglighet**: semantisk HTML, hopplänk, synliga fokusmarkeringar,
  `aria-current` i menyn och full respekt för `prefers-reduced-motion`.
- **Prestanda**: helt statisk, optimerade responsiva bilder, självhostade variabla
  typsnitt, ingen extern CDN i frontend.
- **Innehåll som data**: föreställningar och workshops är Astro content collections
  med schema-validering (zod) — redaktören rör aldrig komponenterna.
- **Trogen originalet**: allt innehåll (texter, fakta, team, bilder) kommer från
  teaterforalla.se — men med rättade korrekturfel och en enhetlig struktur.
