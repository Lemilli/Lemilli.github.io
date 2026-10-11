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

## Images

All 13 images use responsive WebP sources. The hero loads with high priority; project screenshots load lazily and decode asynchronously. Tiny previews embedded in `assets/image-previews.css` fill the reserved image area while the full image loads, including with JavaScript disabled. Explicit frame widths prevent lazy images from collapsing and moving nearby content.

Original PNGs remain in `assets/` for editing and are excluded from the production build. After replacing a source PNG, install libwebp's `cwebp` command and run:

```sh
npm run images
npm run check
npm run build
```

This regenerates WebP sizes, preview CSS, and image attributes. Generated files are committed, so normal development and builds require no image tools. If a layout changes, update the widths and fallback `sizes` in `scripts/optimize-images.mjs`; lazy images use `sizes="auto"` where supported to match their actual rendered width.

See [the image audit](docs/image-audit.md) for dimensions, transfer sizes, and browser verification.

## Language links

Use `?lang=ru` to open directly in Russian or `?lang=en` for English. Combine this with any section anchor, for example:

- Russian: https://lemilli.github.io/?lang=ru#contact
- English: https://lemilli.github.io/?lang=en#contact

An explicit supported language in the URL takes priority over the saved preference. Without one, the site uses the saved language (English on a first visit). Switching languages updates the URL while preserving the section anchor and other query parameters, so the current link can be shared.

Section navigation recalculates the destination after translation, font loading, image layout changes, and resizing. Switching languages keeps the current section or visible reading position. Manual scrolling cancels pending alignment, and clicking the same section link again returns to its start.

## Edit

- `index.html`: English content, sections, images, and contact links.
- `assets/home.css`: design tokens, layout, and responsive styles.
- `assets/base.css`: bundled fonts, resets, and shared accessibility styles.
- `assets/home.js`: Russian translations, language persistence, navigation, and orbit interactions.
- `assets/navigation.js`: section scrolling, layout correction, and reading-position preservation.

The export's handoff mentions three concept pages absent from the supplied folder. This implementation uses the complete portfolio in `index.html` and does not create missing concept routes.
