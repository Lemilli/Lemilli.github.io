# Image audit — 11 October 2026

All 13 raster images were inspected at viewport widths of 375, 768, 1024, 1280, 1440, and 1920 pixels. Display dimensions below are CSS pixels; high-density screens need larger source images, usually 2–3 times the displayed width.

The biggest problems were the 2.63 MiB portrait, multi-megabyte LeClick PNGs, and the 2.04 MiB catalog screenshot. MedStory and Crypto also had substantially more pixels than their displayed size required. The TV and streaming mobile screenshots were closer to useful display dimensions, but benefited from format compression.

| Image | Original dimensions | Original KiB | Maximum measured display width | WebP widths | WebP KiB range |
| --- | --- | ---: | ---: | --- | ---: |
| Portrait | 1254 × 1254 | 2696.4 | 434 | 320 / 480 / 640 / 960 | 6.3–30.9 |
| Streaming TV | 1248 × 696 | 839.5 | 1106 | 480 / 960 / 1248 | 40.8–179.8 |
| Streaming mobile | 360 × 800 | 295.0 | 214 | 180 / 360 | 19.4–60.6 |
| Streaming catalog | 2048 × 1026 | 2093.8 | 930 | 480 / 960 / 1440 / 1920 | 28.8–199.4 |
| LeClick discover | 785 × 2004 | 1704.3 | 307 | 240 / 480 / 785 | 33.6–214.5 |
| LeClick map | 852 × 1846 | 1800.2 | 307 | 240 / 480 / 852 | 27.1–183.2 |
| LeClick bookings | 853 × 1844 | 1352.6 | 307 | 240 / 480 / 853 | 19.5–131.4 |
| MedStory capture | 1206 × 2622 | 308.1 | 228 | 240 / 480 / 720 | 16.2–72.9 |
| MedStory timeline | 1206 × 2622 | 229.0 | 228 | 240 / 480 / 720 | 11.5–47.8 |
| MedStory detail | 1206 × 2622 | 170.9 | 228 | 240 / 480 / 720 | 8.6–34.7 |
| MedStory search | 1206 × 2622 | 208.4 | 228 | 240 / 480 / 720 | 10.4–42.9 |
| MedStory visit | 1206 × 2622 | 298.9 | 228 | 240 / 480 / 720 | 17.2–73.6 |
| Crypto app | 1918 × 3400 | 471.7 | 520 | 480 / 960 / 1440 | 48.4–238.4 |

The original set totals **12.18 MiB**. Selecting the largest WebP variant for every image totals **1.47 MiB**, an **88% reduction**. A tested 375px viewport at 1× density selects **329 KiB** across the entire page; at 3× it selects **1217 KiB**. These are file-size totals for one selected source per image, excluding fonts, styles, and HTTP overhead. Initial visits defer project screenshots with native lazy loading.

Each image has a 24px-wide preview embedded in CSS. The complete preview stylesheet is 5.2 KiB and needs no individual preview requests. Full images cover their preview backgrounds when loaded. This works without JavaScript and retains a preview if the image request fails. The hero retains high fetch priority. Screenshots retain asynchronous decoding. Source PNGs remain available for editing but are excluded from `dist/`.

The streaming phone and Crypto figure previously changed width after lazy loading. Explicit widths now reserve the same geometry before and after the full image loads, while existing width/height attributes reserve aspect ratios.

Verification: `npm run check` and `npm run build` pass. Headless Chrome was checked at 375px (1× and 3×), 768px (2×), 1024px (1×), 1280px (2×), 1440px (1×), and 1920px (2×). All 13 images decoded successfully, used WebP candidates, and preserved their bounds within one CSS pixel between blocked and completed requests. No page JavaScript errors occurred. A JavaScript-disabled visit with failed image requests retained preview backgrounds and nonzero image dimensions.
