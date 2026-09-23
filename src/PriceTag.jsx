import './PriceTag.css';

export default function PriceTag({ amount, note, compact = false }) {
  return <div className={`price-tag${compact ? ' price-tag-compact' : ''}`}>
    <p className="price-tag-value" aria-label={`AED ${amount}`}>
      <span className="price-tag-currency" aria-hidden="true">AED</span>
      <span className="price-tag-amount" aria-hidden="true">{amount}</span>
    </p>
    {note && <p className="price-tag-note">{note}</p>}
  </div>;
}
