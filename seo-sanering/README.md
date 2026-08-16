# Sanering: redirects en 410's

Gebouwd op 2026-08-16 voor `routines/seo-geo-groeimaten/ROUTINE.md` blok B4, op verzoek van Samuel. Vóór dit bestond er geen 301- of 410-mechanisme op deze stack.

## `redirects.json`

Array van 301-redirects, gelezen door `next.config.mjs` bij elke build.

```json
[
  { "source": "/oude-pagina", "destination": "/nieuwe-pagina" }
]
```

`source` en `destination` zijn paden, geen volledige URL's. Nooit `destination` op `/` zetten — een redirect naar de homepage is voor Google een zachte 404 en geeft niets door (zie `ROUTINE.md` blok B4, harde voorwaarde 4). Wijzigingen worden pas actief na een nieuwe build/deploy.

## `gone.json`

Array van paden die een HTTP 410 (Gone) moeten teruggeven, afgehandeld door `middleware.ts` in de repo-root.

```json
[
  "/oude-pagina-zonder-vervanger"
]
```

Geen build nodig — de middleware leest dit bestand bij elke request. Wijzigingen zijn direct actief na deploy.

## Waarom twee bestanden en niet één

Een 301 en een 410 zijn technisch verschillende mechanismen in Next.js: redirects lopen via `next.config.mjs` (build-time), een 410 is er niet ingebouwd en moet via `middleware.ts` (request-time). Vandaar de scheiding.

## Voor de routine

Blok B4 voegt hier een regel aan toe, archiveert eerst de paginatekst naar `seo/eigen/_archief/{slug}.md` in `groeimaten-ai-os`, en logt de actie in `seo/eigen/_state/sanering.md`. Maximaal 15 URL's per run, nooit een 301 naar `/`.
