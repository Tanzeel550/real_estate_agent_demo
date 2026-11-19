import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard.jsx';
import { soldListings } from '../data/listings.js';

export default function SoldPage() {
  return <main><div className="pagehead"><div className="wrap"><span className="eyebrow">Thoughtful moves, completed</span><h1>Recent sales, real stories</h1><p className="lead">Every address represents a person making an important move. Open a property story to see the strategy, details and client perspective behind it.</p><p className="demo-disclosure">Transaction details and quotes below are illustrative demo content and should be verified before publication.</p></div></div>
    <section><div className="wrap"><div className="head"><span className="eyebrow">Results with a plan behind them</span><h2>Recent New York sales</h2><p className="lead">Explore homes sold with focused pricing, preparation and negotiation strategies.</p></div><div className="g3">{soldListings.map((property) => <div className="sold-listing" key={property.id}><PropertyCard property={property} /><span className="representation-label">{property.representation}</span></div>)}</div></div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">Where clients have moved</span><h2>New York, block by block</h2><p className="lead">Browse the map to explore the neighborhoods in these sample client stories.</p></div><div className="legend"><span><i style={{ background: '#6f9686' }} />Recent sales</span></div><div id="m3" className="map" role="region" aria-label="Map of recent sale locations" /></div></section>
  </main>;
}
