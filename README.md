# THEWANTEND

Complete React + Vite website. Use this whole folder as the project; do not mix individual files with older versions.

## Start locally

Requires Node.js 22.12+ (or a newer supported LTS release).

```sh
npm ci
npm run dev
```

Open the local URL printed in the terminal.

## Production

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to a static host at the domain root. The included production build is ready to preview. Section URLs use hashes and work without server-side routing rules.

## Included

- Approved Page 01 and Page 02 visual layouts retained.
- Car Frame gallery with all four user-supplied reference images.
- Customer signature, message, model/year/color/specs and name/date examples.
- Four-step How It Works with separate photo assets and preview approval before build.
- Dedicated Money Frame section and product-to-bag interaction.
- Page 04 / How It Works, start-your-story invitation and brand footer.
- Responsive navigation, accessible native dialogs, saved cart, quantities/removal and editable downloadable enquiry drafts.

## Add verified contact details

Copy `.env.example` to `.env.local`, enter only real details, then rebuild. Empty settings deliberately show “To be announced”; no contact information is invented.

- `VITE_CONTACT_EMAIL`: business email address
- `VITE_WHATSAPP_NUMBER`: international number, digits only, including country code
- `VITE_INSTAGRAM_URL`: full HTTPS Instagram profile URL

These are public contact details and are bundled into the website. Never put secrets in VITE variables.

This is a complete frontend, not an order-processing backend. Payment is not collected. With contact settings empty, enquiries can be saved locally but are not submitted. With email/WhatsApp configured, customers can open their chosen channel with an enquiry draft. Starting prices are inherited from the supplied project (Car AED 499, Money AED 199); final options, availability and delivery are confirmed by the business.

Reference images show personalization possibilities, not guaranteed model inventory. No customer signature is stored or uploaded by this website.

## Verified 23 September 2026

Build and lint pass. Browser checked at 320, 390, 768, 1024 and 1440px: no heading/card overflow or broken image paths. Verified Explore, menu navigation, gallery switching, bag quantities/subtotal/removal, persistence after refresh, and enquiry draft download.

How It Works uses four photo-only WebP assets, cropped from the existing local how-it-works.png. The newer 2×2 conversation image was not accessible through the conversation attachment export. The local source contains all four requested scenes (phone/car, laptop design, tablet preview, packaged frame). Full photos use object-fit: contain, with no CSS sprite offsets. Original Page 4 type styling is retained.

Launch dependencies: verified contact channels are not configured, no payment/order backend is connected, and this local build has not been published to a public host.

## Mobile hero

Mobile uses `public/images/hero-mobile.jpg`, a portrait adaptation created with the built-in ImageGen tool. Desktop retains `public/images/hero.jpg`. Both use the same full-bleed photo layout with real HTML navigation, heading and Explore CTA over the image.

Generation prompt: Recompose and extend the original Dubai sunset apartment photograph into a 9:19.5 portrait mobile background. Preserve the cream-sweater man seen from behind, the complete stone-bordered Mercedes S500 frame, warm sunset, city window, stone wall and dark wood console. Keep the person and entire frame visible together in the upper 60%, with quiet photo space below for website copy. Extend the room naturally; use one continuous full-bleed photograph, without borders, bands, panels, letterboxing, or rendered website UI. Keep product details faithful.
