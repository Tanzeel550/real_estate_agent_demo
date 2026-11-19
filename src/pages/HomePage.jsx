import { Link } from 'react-router-dom';
import MortgageCalculator from '../components/MortgageCalculator.jsx';

export default function HomePage() {
  return (
    <main>
      <section className="hero2">
        <div className="wrap">
          <div className="hero-copy"><span className="eyebrow">
New York City · Real estate, made personal
          </span>
          <h1>
Find your place in the city you love
          </h1>
          <p className="lead">
NYC real estate, handled with honesty, hustle and hyper-local expertise. Whether you're buying your first co-op or selling a family home, I'm here to make it happen.
          </p>
          <div className="row">
            <Link className="btn" to="/listings">
View listings
            </Link>
            <Link className="btn o" to="/about">
Meet Daniel
            </Link>
          </div>
          </div>
          <div className="hero-agent"><img className="agent-portrait" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90" alt="Portrait of a New York real estate agent" /><span>Daniel Carter <small>NYC real estate advisor</small></span></div>
        </div>
      </section>

      <section>
        <div className="wrap split rev">
          <div className="prose">
            <Link className="text-link" to="/about">Read my full story →</Link>
            <h2>Hi, I'm Daniel. I'm the one who picks up when you call.</h2>
            <p className="sub">
Twelve years in New York real estate, and I still treat every client like my only one.
            </p>
            <p>
I'm a licensed NYC agent who believes buying or selling a home should feel exciting, not exhausting. I have guided families, first-time buyers and investors through this city's complicated market with clarity and confidence.
            </p>
            <p>
I became an agent because I watched too many friends get pushed around during their first purchase. I wanted to be the person who explains things plainly, fights for your interests, and negotiates as if it were my own money on the table.
            </p>
            <p>
When you work with me, you will never wonder where your agent is or what happens next. You will always know, and you will always be able to ask.
            </p>
          </div>
          <div className="im ph t1">
            <img className="agent-portrait" alt="Portrait of a New York real estate agent" loading="lazy" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90" />
            <div className="floatcard">
Local experience. One phone that gets answered.
            </div>
          </div>
        </div>
      </section>
      <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">Start where you are</span><h2>What brings you here today?</h2><p className="lead">Choose a path and get practical guidance for your next move.</p><Link className="text-link" to="/contact">Talk with Daniel →</Link></div><div className="g4"><Link className="path-card" to="/services#buy"><span>01</span><h3>I’m buying</h3><p>Build a smart search and understand the NYC process.</p></Link><Link className="path-card" to="/services#sell"><span>02</span><h3>I’m selling</h3><p>Get a grounded pricing review and launch plan.</p></Link><Link className="path-card" to="/services#rent"><span>03</span><h3>I’m renting</h3><p>Get help with a rental search, application or lease.</p></Link><Link className="path-card" to="/services#invest"><span>04</span><h3>I’m investing</h3><p>Pressure-test the numbers and building details.</p></Link></div></div></section>
      <section className="alt">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">A considered shortlist</span>
            <h2>
Featured listings
            </h2>
            <p className="lead">
Hand-picked homes that represent the best of what's available right now.
            </p>
            <Link className="text-link" to="/listings">Browse all listings →</Link>
          </div>
          <div className="g3">
            <article className="card">
              <div className="ph t1">
                <img alt="Sunlit New York apartment interior" loading="lazy" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=82" />
                <span className="badge">
New Listing
                </span>
              </div>
              <div className="b">
                <div className="price">
$1,250,000
                </div>
                <h3>
245 W 14th St, Unit 4B, Chelsea
                </h3>
                <div className="meta">
2 Beds | 2 Baths | 1,100 sq ft | Condo
                </div>
                <p>
Sun-drenched corner unit in a boutique pre-war building. Renovated kitchen, marble bath, original hardwood floors.
                </p>
                <div className="tags">
                  <span>
Roof deck
                  </span>
                  <span>
Gym
                  </span>
                  <span>
Pet-friendly
                  </span>
                  <span>
Central air
                  </span>
                </div>
                <div className="row">
                  <Link className="btn" to="/property/chelsea-245">
View details
                  </Link>
                  <Link className="btn o" to="/property/chelsea-245#showing">
Schedule a showing
                  </Link>
                </div>
              </div>
            </article>
            <article className="card">
              <div className="ph t2">
                <img alt="Sunlit New York apartment interior" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=82" />
                <span className="badge">
Price Reduced
                </span>
              </div>
              <div className="b">
                <div className="price">
$895,000
                </div>
                <h3>
88 Greenwich St, Unit 22A, Financial District
                </h3>
                <div className="meta">
1 Bed | 1 Bath | 780 sq ft | Condo
                </div>
                <p>
High-floor one-bedroom with Hudson River views, floor-to-ceiling windows and in-unit laundry.
                </p>
                <div className="tags">
                  <span>
River views
                  </span>
                  <span>
Doorman
                  </span>
                  <span>
Gym
                  </span>
                  <span>
Laundry
                  </span>
                </div>
                <div className="row">
                  <Link className="btn" to="/property/greenwich-88">
View details
                  </Link>
                  <Link className="btn o" to="/property/greenwich-88#showing">
Schedule a showing
                  </Link>
                </div>
              </div>
            </article>
            <article className="card">
              <div className="ph t3">
                <img alt="Sunlit New York apartment interior" loading="lazy" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=82" />
                <span className="badge">
Open House Sunday
                </span>
              </div>
              <div className="b">
                <div className="price">
$2,100,000
                </div>
                <h3>
410 W 24th St, Unit 7C, West Chelsea
                </h3>
                <div className="meta">
3 Beds | 2.5 Baths | 1,650 sq ft | Condo
                </div>
                <p>
Spacious three-bedroom in the arts district with custom built-ins, private balcony, steps from the High Line.
                </p>
                <div className="tags">
                  <span>
Balcony
                  </span>
                  <span>
Walk-in closet
                  </span>
                  <span>
Elevator
                  </span>
                  <span>
Pet-friendly
                  </span>
                </div>
                <div className="row">
                  <Link className="btn" to="/property/chelsea-410">
View details
                  </Link>
                  <Link className="btn o" to="/property/chelsea-410#showing">
Schedule a showing
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">A steady partner at every step</span>
            <h2>
Why work with Daniel
            </h2>
            <p className="lead">
Buying or selling a home is one of the biggest decisions of your life. Here is what you can count on when I'm by your side.
            </p>
            <Link className="text-link" to="/services">Explore how I can help →</Link>
            
          </div>
          <div className="g3">
            <div className="pt">
              <h3>
I answer my phone
              </h3>
              <p className="meta" style={{ marginTop: "10px", fontSize: "1rem" }}>
When you call, you get me, not an assistant. I reply to every call, text and email within two hours, and usually much faster. In a market that moves by the hour, that speed can be the difference between winning an apartment and losing it.
              </p>
            </div>
            <div className="pt">
              <h3>
I know the city block by block
              </h3>
              <p className="meta" style={{ marginTop: "10px", fontSize: "1rem" }}>
I have sold in neighborhoods across Manhattan, Brooklyn, Queens and the Bronx. I know which co-op boards are welcoming, which buildings are well run, and which blocks are about to take off. That knowledge keeps you from overpaying and helps you spot value early.
              </p>
            </div>
            <div className="pt">
              <h3>
My record speaks for itself
              </h3>
              <p className="meta" style={{ marginTop: "10px", fontSize: "1rem" }}>
I use current comparable sales, thoughtful preparation and calm negotiation to help clients make decisions with confidence. Ask me for recent examples relevant to your building or neighborhood.
              </p>
            </div>
            <div className="pt">
              <h3>
I tell you the truth
              </h3>
              <p className="meta" style={{ marginTop: "10px", fontSize: "1rem" }}>
If a place is overpriced, I will say so. If a board will be trouble or a deal feels wrong, you will hear it from me first. I would rather lose a commission than watch a client make a mistake they regret for years.
              </p>
            </div>
            <div className="pt">
              <h3>
I bring a trusted team
              </h3>
              <p className="meta" style={{ marginTop: "10px", fontSize: "1rem" }}>
Mortgage advisors, real estate attorneys, inspectors, contractors and designers all work with me regularly. They do excellent work at fair prices, and I take no referral fees from any of them. When you hire me, you get the whole team.
              </p>
            </div>
            <div className="pt">
              <h3>
I'm still here after closing
              </h3>
              <p className="meta" style={{ marginTop: "10px", fontSize: "1rem" }}>
Your keys are not the end of our relationship. Many of my clients text me months later with questions about contractors, taxes or their next move. I'm glad when they do.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="stats">
        <div className="wrap">
          <div className="head"><span className="eyebrow">Experience, close to home</span><h2>New York knowledge you can use</h2><p className="lead">Local experience and responsive one-to-one guidance at every stage.</p><Link className="text-link" to="/about">Meet Daniel →</Link></div>
          <div className="g4">
          <div>
            <b>
NYC
            </b>
            <span>
Neighborhood focus
            </span>
          </div>
          <div>
            <b>
12
            </b>
            <span>
Years of experience
            </span>
          </div>
          <div>
            <b>
1:1
            </b>
            <span>
Personal service
            </span>
          </div>
          <div>
            <b>
Clear
            </b>
            <span>
Communication
            </span>
          </div>
          </div>
        </div>
      </section>
      <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">Plan with confidence</span><h2>Know your monthly numbers</h2><p className="lead">Try a quick estimate to see how price, down payment and building charges affect your budget.</p><Link className="text-link" to="/calculators">See all planning tools →</Link></div><MortgageCalculator /></div></section>
      <section className="alt">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">A little more than a transaction</span>
            <h2>
What clients say
            </h2>
            <p className="lead">Hear how clear advice and steady support helped New Yorkers make their next move.</p>
            <Link className="text-link" to="/testimonials">Read more testimonials →</Link>
          </div>
          <div className="g3">
            <blockquote className="quote">
              <p>
“Daniel made the impossible feel possible. We were first-time buyers in a competitive market, and he guided us through every step with patience and honesty. We closed on our dream apartment in six weeks.”
              </p>
              <cite>
Sarah &amp; Mike, first-time buyers, Astoria
              </cite>
            </blockquote>
            <blockquote className="quote">
              <p>
“I've worked with three agents in my life. Daniel is the only one who felt like a partner, not a salesperson. He told me things I didn't want to hear, and he was right every time. My apartment sold above asking in 11 days.”
              </p>
              <cite>
Jasmine R., seller, Chelsea
              </cite>
            </blockquote>
            <blockquote className="quote">
              <p>
“We were outbid on two apartments before we found our home. Daniel kept us calm, informed and looking, then negotiated a price $40,000 below asking.”
              </p>
              <cite>
Emily &amp; James T., buyers, Upper West Side
              </cite>
            </blockquote>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Recent client wins</span>
            <h2>
Recent sales
            </h2>
            <p className="lead">
A track record you can see, with the strategy behind each result.
            </p>
            <Link className="text-link" to="/sold">View sold properties →</Link>
          </div>
          <div className="g3">
            <article className="card">
              <div className="ph t1">
                <img alt="Sunlit New York apartment interior" loading="lazy" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82" />
                <span className="badge s">
SOLD
                </span>
              </div>
              <div className="b">
                <div className="price">
$1,875,000
                </div>
                <h3>
78 Bank St, Unit 2A, West Village
                </h3>
                <div className="meta">
2 Beds | 2 Baths | Co-op
                </div>
                <strong>
Sold in 9 days, above asking
                </strong>
                <p>
On the market six months with another agent. Light staging, new photos and a focus on the private garden brought three offers in the first week.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="ph t2">
                <img alt="Sunlit New York apartment interior" loading="lazy" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=82" />
                <span className="badge s">
SOLD
                </span>
              </div>
              <div className="b">
                <div className="price">
$2,200,000
                </div>
                <h3>
220 Riverside Blvd, Unit 14H, Upper West Side
                </h3>
                <div className="meta">
3 Beds | 2.5 Baths | Condo
                </div>
                <strong>
8% above asking
                </strong>
                <p>
A comparative analysis set the list price, and a pre-market push to buyers' agents created a bidding war.
                </p>
              </div>
            </article>
            <article className="card">
              <div className="ph t3">
                <img alt="Sunlit New York apartment interior" loading="lazy" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=82" />
                <span className="badge s">
SOLD
                </span>
              </div>
              <div className="b">
                <div className="price">
$725,000
                </div>
                <h3>
31-10 Ditmars Blvd, Unit 6B, Astoria
                </h3>
                <div className="meta">
2 Beds | 1 Bath | Co-op
                </div>
                <strong>
Sold in 14 days
                </strong>
                <p>
Marketed on value, subway access and the dining scene. Sold to a couple outbid on three other apartments.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Good to know</span>
            <h2>
Common questions
            </h2>
            <p className="lead">Get quick answers to the details that shape a confident New York move.</p>
            
          </div>
          <details>
            <summary>
How much does it cost to sell a home in NYC?
            </summary>
            <p>
Sellers typically pay 5–6% of the sale price in commission, plus attorney fees and closing costs. I walk you through every expense before you list.
            </p>
          </details>
          <details>
            <summary>
What documents do I need to buy a home?
            </summary>
            <p>
Proof of income, tax returns, bank statements, a pre-approval letter and government ID. Co-op boards require additional paperwork, and I help you prepare all of it.
            </p>
          </details>
          <details>
            <summary>
How long does it take to buy or sell?
            </summary>
            <p>
A typical sale takes 60–90 days from listing to closing. A purchase takes 60–120 days; condos close faster than co-ops, which need board approval.
            </p>
          </details>
          <details>
            <summary>
Do I need a co-op board interview?
            </summary>
            <p>
Yes, if you are buying a co-op. I prepare you for the interview and help you assemble your board package.
            </p>
          </details>
          <details>
            <summary>
What's a flip tax?
            </summary>
            <p>
A fee some co-ops charge when you sell your shares, typically 1–3% of the sale price. I review the building's bylaws so you know what to expect.
            </p>
          </details>
          <details>
            <summary>
How much do I need for a down payment?
            </summary>
            <p>
Condos often require 10%, and co-ops typically 20% or more. Some loan programs allow 3–5%, but not every building accepts them.
            </p>
          </details>
          <details>
            <summary>
What's the difference between a condo and a co-op?
            </summary>
            <p>
With a condo you own the unit. With a co-op you own shares in a corporation that owns the building, and the board must approve you.
            </p>
          </details>
          <details>
            <summary>
Do I need a real estate attorney?
            </summary>
            <p>
Yes. In NYC an attorney is part of every transaction, and I can recommend several experienced ones.
            </p>
          </details>
          <details>
            <summary>
How much are closing costs?
            </summary>
            <p>
Typically 2–5% of the purchase price, covering attorney fees, title insurance, lender fees and escrow deposits.
            </p>
          </details>
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <div className="head">
            <span className="eyebrow">Local context</span>
            <h2>Where I’ve worked</h2>
            <p className="lead">See how current listings and recent sales connect to the neighborhoods around them.</p>
            <Link className="text-link" to="/neighborhoods">Explore NYC neighborhoods →</Link>
          </div>
          <div className="legend"><span><i style={{ background: "#2457C5" }}></i>Current listings</span><span><i style={{ background: "#6f9686" }}></i>Sold properties</span></div>
          <div aria-label="Map of properties" className="map" id="m1" role="region"></div>
        </div>
      </section>
      <section className="cta">
        <div className="wrap">
          <h2>
Ready to buy or sell? Let's talk.
          </h2>
          <p>
No pressure, no obligation. Just an honest conversation about your goals.
          </p>
          <Link className="btn" to="/contact">Schedule a free consultation</Link>
        </div>
      </section>
    </main>
  );
}
