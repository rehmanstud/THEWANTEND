import PriceTag from './PriceTag';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import './CarEditorial.css';
const views = [
  { name: 'Range Rover Vogue', image: 'car-range-rover.png', caption: 'Range Rover Vogue — your model, your message, your signature.', alt: 'Top-view Range Rover Vogue die-cast frame with printed message, specifications and customer signature' },
  { name: 'Mercedes-Benz S 500', image: 'car-mercedes.png', caption: 'Mercedes-Benz S 500 — a part of your story.', alt: 'White Mercedes-Benz S 500 mounted in a glass-front frame with printed backing and customer signature' },
  { name: 'Your signature', image: 'car-reference-1.jpg', caption: 'Your own handwriting. Your own mark.', alt: 'White Mercedes-Benz S 500 frame with a message and customer signature' },
  { name: 'Made for someone', image: 'car-reference-4.jpg', caption: 'For the person behind the wheel.', alt: 'Red Mustang frame with a dedication, specifications and signature' },
];
export default function CarEditorial({ controls, onOrder, onBack, onAdd }) {
  const [active, setActive] = useState(0);
  const view = views[active];
  return <section id="car-product" className="ce" aria-labelledby="car-page-title">
    <header className="ce-nav"><a href="#home">THEWANTEND<sup>®</sup></a><span>THE OBJECT SERIES / 003</span><div>{controls()}</div></header>
    <div className="ce-path"><button onClick={onBack}>THE COLLECTION</button><span> / CAR FRAME</span><a className="ce-edition" href="#money-product">ALSO DISCOVER MONEY FRAME ↗</a></div>
    <div className="ce-main">
      <div className="ce-gallery">
        <figure><div id="ce-view" className={`ce-image ce-reference${active < 2 ? " ce-poster" : ""}`}><img key={view.image} src={`/images/${view.image}`} alt={view.alt} /><span className="ce-image-tag">YOUR STORY. IN REAL LIFE.</span></div><figcaption aria-live="polite"><span>{view.caption}</span><span>0{active + 1} / 04</span></figcaption></figure>
        <div className="ce-thumbs" aria-label="Personalization examples">{views.map((item, index) => <button key={item.name} onClick={() => setActive(index)} aria-pressed={active === index} aria-controls="ce-view"><span className="ce-thumb"><img src={`/images/${item.image}`} alt="" loading="lazy" /></span><span>0{index + 1} — {item.name}</span></button>)}</div>
      </div>
      <div className="ce-info"><p className="ce-kicker"><i /> CAR FRAME</p><h2 id="car-page-title">Your car.<br /><em>Your story.</em></h2><p className="ce-description">A real 1:24 die-cast model, mounted in a glass-front frame. Made personal with your words and the details that matter.</p><PriceTag amount={499} note="YOUR CAR. YOUR WORDS. YOUR SIGNATURE." /><button className="ce-order" onClick={onOrder}>START YOUR ORDER <ArrowRight size={22} /></button><button className="text-link" onClick={onAdd}>ADD CAR FRAME TO BAG <span>+</span></button><p className="ce-order-note">UAE delivery in 7–10 working days. Approve your preview before we build.</p><dl className="object-details"><div><dt>THE DESIGN</dt><dd>Top-view or three-quarter mounted car. Message, specs and THEWANTEND branding printed on the backing.</dd></div><div><dt>YOUR SIGNATURE</dt><dd>Your own signature, supplied by you and printed in the design.</dd></div></dl></div>
    </div>

  </section>;
}
