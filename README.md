# Alibek Kapan — Portfolio

Responsive portfolio implemented from the supplied OpenDesign export. It preserves the design's local fonts, project screenshots, English/Russian translations, technology orbit, motion controls, mobile menu, and section navigation.

## Run locally

Requires Node.js 18 or newer. No dependency installation is needed.

```sh
npm run dev
```

Open http://localhost:5173. Set `PORT` to use a different port.

## Build and verify

```sh
npm run check
npm run build
npm run preview
```

Deploy the contents of `dist/` to any static web host. Fonts and images are bundled; the site needs no backend or external CDN.

## Edit

- `index.html`: English content, sections, images, and contact links.
- `assets/home.css`: design tokens, layout, and responsive styles.
- `assets/base.css`: bundled fonts, resets, and shared accessibility styles.
- `assets/home.js`: Russian translations, language persistence, navigation, and orbit interactions.

The export's handoff mentions three concept pages absent from the supplied folder. This implementation uses the complete portfolio in `index.html` and does not create missing concept routes.
