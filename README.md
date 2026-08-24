# Pazuri Beach Restaurant — Website

A production-ready, mobile-first website for Pazuri Beach Restaurant (Bamburi Beach, Mombasa), built from the Master PRD.

No build step, no dependencies — pure HTML, CSS and vanilla JavaScript. Open `index.html` in a browser, or serve the folder with any static host.

## Project structure

```
pazuri/
├── index.html          # All page sections + SEO meta + Restaurant schema
├── css/
│   └── styles.css      # Design system (colours, type, components, responsive)
├── js/
│   ├── menu-data.js    # ★ Menu database — edit dishes & prices here
│   └── main.js         # ★ CONFIG (WhatsApp number), menu rendering, order cart
└── images/
    └── menu/           # Drop real food photos here
```

## Before launch — 3 quick edits

1. **WhatsApp number** — in `js/main.js`, top of file:
   ```js
   const CONFIG = { whatsappNumber: "254700000000", ... };
   ```
   Use international format with no `+` or spaces (e.g. `2547XXXXXXXX`). Every Reserve / Order button and the floating WhatsApp button uses this.

2. **Phone & email** — in `index.html`, search for `+254 700 000 000` and `hello@pazuribeach.com` and replace. Also update the `telephone` value in the JSON-LD schema in `<head>`.

3. **Review links** — the "Leave a Review" / "Read More Reviews" buttons currently point to Google Maps generically. Replace with the restaurant's actual Google Business review URL.

## Adding real photos

Placeholders are elegant gradient tiles so nothing looks broken before you have photography.

- **Menu items:** in `js/menu-data.js`, set an item's `image` from `null` to e.g. `"images/menu/grilled-lobster.jpg"`. The card automatically switches from placeholder to photo (with lazy loading).
- **Gallery / About:** in `index.html`, replace any `<div class="photo" ...>` block with `<img class="photo gallery__item" src="images/beach.jpg" alt="..." loading="lazy">`.
- Prefer **WebP**, ~1200px wide max, compressed.

## Editing the menu

Everything lives in `js/menu-data.js` — categories, items, KES prices, USD guide prices, descriptions.
- `chef: true` puts a dish in the "Chef Recommendations" section on the homepage.
- `tone` picks the placeholder colour: `ocean | coral | sunset | green | sand`.

## How ordering works (per the PRD — no e-commerce)

1. Guest taps **+ Add** on menu cards → an order bar appears with item count and KES total.
2. **Order via WhatsApp** opens WhatsApp with the full order pre-written (items, quantities, total, and blanks for name/phone/delivery).
3. The restaurant confirms manually in chat. Reservations work the same way with the reservation template.

## Features included

- Mobile-first responsive layout with hamburger nav and floating WhatsApp button
- Interactive menu with category tabs and dual KES/USD pricing
- WhatsApp reservation + order flow with pre-filled message templates
- Reviews section with rating summary and external review CTAs
- Google Maps embed with "Get Directions"
- SEO: meta title/description, Open Graph, Restaurant JSON-LD structured data
- Accessibility: keyboard focus styles, ARIA labels, alt text, reduced-motion support
- Scroll-reveal animations (disabled automatically for reduced-motion users)
- Wave-divider + Swahili section labels as the brand signature

## Deploying

Any static host works: Netlify, Vercel, Cloudflare Pages, GitHub Pages, or shared hosting (just upload the folder). Point your domain, and update the `canonical` URL in `index.html` to the live domain.

## Future scalability (PRD §26)

The menu is already a structured data file, so migrating to a CMS, online payments, or a full ordering system later means swapping `menu-data.js` for an API call — the rendering layer won't need to change.
