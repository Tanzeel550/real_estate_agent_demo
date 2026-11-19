import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard.jsx';
import { soldListings } from '../data/listings.js';

export default function SoldPage() {
  return <main><div className="pagehead"><div className="wrap"><span className="eyebrow">Thoughtful moves, completed</span><h1>Recent sales, real stories</h1><p className="lead">Every address represents a person making an important move. Open a property story to see the strategy, details and client perspective behind it.</p><p className="demo-disclosure">Transaction details and quotes below are illustrative demo content and should be verified before publication.</p></div></div>
    <section><div className="wrap"><div className="g3">{soldListings.map((property) => <div className="sold-listing" key={property.id}><PropertyCard property={property} /><span className="representation-label">{property.representation}</span></div>)}</div><div className="row"><Link className="btn" to="/case-studies">Explore client case studies</Link><Link className="btn o light" to="/valuation">Talk about selling your home</Link></div></div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">Where clients have moved</span><h2>New York, block by block</h2><p className="lead">Browse the map to explore the neighborhoods in these sample client stories.</p></div><div className="legend"><span><i style={{ background: '#6f9686' }} />Recent sales</span></div><div id="m3" className="map" role="region" aria-label="Map of recent sale locations" /></div></section>
  </main>;
}
