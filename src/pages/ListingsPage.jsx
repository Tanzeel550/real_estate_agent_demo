import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard.jsx';
import { listings } from '../data/listings.js';

export default function ListingsPage() {
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('daniel-favorites') || '[]'));
  function toggle(id) {
    const next = favorites.includes(id) ? favorites.filter((value) => value !== id) : [...favorites, id];
    setFavorites(next);
    localStorage.setItem('daniel-favorites', JSON.stringify(next));
  }
  return <main><div className="pagehead"><div className="wrap"><span className="eyebrow">Thoughtfully chosen homes</span><h1>Find your next home</h1><p className="lead">A short list is easier to use than an endless scroll. Explore the current examples, save the homes you want to revisit, then check the map for neighborhood context.</p></div></div>
    <section><div className="wrap"><div className="listings-intro"><div><h2>Homes to explore</h2><p>Each listing has its own detail page with photos, building notes, charges and a way to request a showing. Availability and property facts should always be confirmed.</p></div><div className="saved-count"><b>{favorites.length}</b><span>saved for this visit</span></div></div>
      <div className="listing-list">{listings.map((property) => <div className="listing-card" key={property.id}><button className={`favorite ${favorites.includes(property.id) ? 'selected' : ''}`} onClick={() => toggle(property.id)} aria-label={favorites.includes(property.id) ? `Remove ${property.title} from favorites` : `Save ${property.title}`}>{favorites.includes(property.id) ? '♥ Saved' : '♡ Save'}</button><PropertyCard property={property} /></div>)}</div>
    </div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">See where the homes sit</span><h2>Explore the city on a map</h2><p className="lead">Get a feel for how these homes connect to the neighborhoods around them. Markers open with the address and sample asking price.</p></div><div id="listings-map" className="map" role="region" aria-label="Map of current listings" /></div></section>
    <section><div className="wrap"><div className="open-house"><div><span className="eyebrow">Plan a visit</span><h3>Open house times can change</h3><p>Ask Daniel to confirm access before heading out, or request a private tour that works with your schedule.</p></div><Link className="btn" to="/contact">Plan a showing</Link></div><div className="offmarket"><div><span className="eyebrow">Before the next listing goes live</span><h2>Looking for something specific?</h2><p>Share the neighborhood, budget and details that matter to you. Daniel can help shape a focused shortlist and flag homes that may be coming soon.</p></div><Link className="btn" to="/contact">Share your wish list</Link></div></div></section>
  </main>;
}
