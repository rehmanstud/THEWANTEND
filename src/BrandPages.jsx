import PriceTag from './PriceTag';
import { ArrowRight } from 'lucide-react';
import './BrandPages.css';
export function MoneyFrame({ onOrder, onAdd }) {
  return <section id="money-product" className="money-section" aria-labelledby="money-title"><div className="money-art"><img src="/images/money-frame.jpg" alt="THEWANTEND Money Frame collectible physical artwork" loading="lazy"/><span>OBJECT NO. 02 / MONEY FRAME</span></div><div className="money-copy"><p className="eyebrow">DIFFERENT FRAME. SAME MINDSET.</p><h2 id="money-title">Keep the<br /><em>ambition visible.</em></h2><p>A daily reminder of what you’re working towards. Money Frame turns a familiar object into a collectible piece for your desk, shelf or wall.</p><PriceTag amount={199} note="A LITTLE PERSPECTIVE. EVERY DAY." /><button className="ce-order" onClick={onOrder}>START YOUR MONEY FRAME <ArrowRight size={22}/></button><button className="text-link" onClick={onAdd}>ADD MONEY FRAME TO BAG <span>+</span></button><a className="text-link" href="#car-product">EXPLORE CAR FRAME <ArrowRight size={18}/></a></div></section>;
}
export function Idea({ onContact }) {
 return <section id="idea" className="idea idea-edited" aria-labelledby="idea-title">
  <header><a href="#home">THEWANTEND<sup>®</sup></a><span>04 / THE IDEA</span></header>
  <section id="how-it-works" className="final-process" aria-labelledby="idea-title">
   <div className="process-heading"><p className="eyebrow">SIMPLE PROCESS. A LASTING STORY.</p><h2 id="idea-title">How It <em>Works.</em></h2><p>From your idea to a frame that lasts.</p></div>
   <ol className="process-grid">{[
    ['Tell us about your car.', 'Share the model, year, color and a few photos of your car.', 'Car photographed on a phone to share as a reference'],
    ['Make it personal.', 'Add your message, name or date, optional specs and your own signature.', 'Frame design on a laptop with a personal message, car details and customer signature'],
    ['Approve your preview.', 'Review your design and request changes. We build after your approval.', 'A personalized car frame design shown on a tablet for review'],
    ['We build & deliver.', 'Your glass-front frame, carefully packed. UAE delivery in 7–10 working days.', 'A finished personalized frame presented in protective packaging']
   ].map(([title,copy,alt],i)=><li key={title}><div className="process-number"><span>0{i+1}</span><i/></div><h3>{title}</h3><p>{copy}</p><img className="process-picture" src={`/images/process-0${i+1}.webp`} alt={alt} width="428" height="452" loading="lazy" decoding="async"/></li>)}</ol>
   <p className="process-reference-note">Illustrative process examples. Your final frame design is confirmed in your preview.</p>
   <div className="process-ending"><p>More than a frame.<br /><em>A part of you.</em></p><div><button className="finale-cta" onClick={()=>onContact('Car Frame')}>START YOUR STORY <ArrowRight size={22}/></button><a className="finale-shop" href="#frames">EXPLORE THE FRAMES <ArrowRight size={17}/></a></div></div>
  </section>
  <footer><a href="#home" className="footer-wordmark">THEWANTEND<sup>®</sup></a><div><span>DUBAI, UAE<br />MORE THAN OBJECTS.</span><nav aria-label="Footer"><a href="#car-product">CAR FRAME</a><a href="#money-product">MONEY FRAME</a><button onClick={()=>onContact('Contact')}>CONTACT</button></nav><a href="#home">BACK TO TOP ↑</a></div></footer>
 </section>;
}
