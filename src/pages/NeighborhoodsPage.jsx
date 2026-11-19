import { Link } from 'react-router-dom';

export default function NeighborhoodsPage() {
  return (
    <main>
      <div className="pagehead">
        <div className="wrap">
          <h1>
Neighborhood guides
          </h1>
          <p className="lead">
The right neighborhood matters as much as the right home. Here's what it's actually like to live in each area.
          </p>
        </div>
      </div>
      <section>
        <div className="wrap g3">
          <article className="card">
            <div className="ph t1">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=82" alt="Sunlit New York apartment interior" loading="lazy" />
            </div>
            <div className="b">
              <h3>
SoHo
              </h3>
              <p>
Cast-iron architecture meets modern luxury, with galleries, shopping and sprawling lofts.
              </p>
              <p className="meta">
                <b>
Prices:
                </b>
 $1.5M–$5M+ condos and co-ops; rentals from $4,000
                <br />
                <b>
Transit:
                </b>
 A/C/E, N/Q/R/W, 1, 6
                <br />
                <b>
Suits:
                </b>
 Professionals, couples and investors seeking a live-work lifestyle.
              </p>
            </div>
          </article>
          <article className="card">
            <div className="ph t2">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=82" alt="Sunlit New York apartment interior" loading="lazy" />
            </div>
            <div className="b">
              <h3>
Brooklyn Heights
              </h3>
              <p>
Tree-lined streets, historic brownstones and the Promenade, one stop from Wall Street.
              </p>
              <p className="meta">
                <b>
Prices:
                </b>
 $800K–$3M+ co-ops; townhouses $3M–$10M+
                <br />
                <b>
Transit:
                </b>
 2/3, 4/5, R, NYC Ferry
                <br />
                <b>
Suits:
                </b>
 Families and professionals who want a quieter pace with fast Manhattan access.
              </p>
            </div>
          </article>
          <article className="card">
            <div className="ph t3">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=82" alt="Sunlit New York apartment interior" loading="lazy" />
            </div>
            <div className="b">
              <h3>
Astoria
              </h3>
              <p>
A food lover's paradise with strong community and relatively affordable prices.
              </p>
              <p className="meta">
                <b>
Prices:
                </b>
 $400K–$900K; rentals from $2,200
                <br />
                <b>
Transit:
                </b>
 N/W, M/R
                <br />
                <b>
Suits:
                </b>
 First-time buyers, young families and food lovers.
              </p>
            </div>
          </article>
        </div>
        <div className="wrap" style={{ marginTop: "40px" }}>
          <p className="lead">
Also covering Long Island City, Williamsburg, Park Slope, Upper East Side, Upper West Side, Chelsea and the Financial District. Ask me about any area.
          </p>
          <Link className="text-link" style={{ display: "inline-flex", marginTop: "14px" }} to="/neighborhood-guide">Explore all 12 neighborhood guides →</Link>
        </div>
      </section>
      <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">A map of the places we know</span><h2>Get to know New York by neighborhood</h2><p className="lead">Open a marker to see an area name, then explore the local guide for the streets, parks and everyday rhythm that make it feel like home.</p></div><div id="neighborhood-map" className="map" role="region" aria-label="Map of NYC neighborhoods" /><p className="map-caption">Neighborhood markers are approximate. Transit, commute and local details can vary by block.</p></div></section>
      <section className="cta">
        <div className="wrap">
          <h2>
Don't see your neighborhood?
          </h2>
          <p>
Contact me to ask about any area.
          </p>
          <Link className="btn" to="/contact">
Contact Daniel
          </Link>
        </div>
      </section>
    </main>
  );
}
