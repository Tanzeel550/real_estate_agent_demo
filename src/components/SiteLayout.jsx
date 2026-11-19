import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  ['Listings', '/listings'], ['Sold', '/sold'], ['Services', '/services'],
  ['Neighborhoods', '/neighborhoods'], ['About', '/about'], ['Testimonials', '/testimonials'],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeTimer = useRef(null);
  const openMenu = () => {
    window.clearTimeout(closeTimer.current);
    setMenuClosing(false);
    setMenuOpen(true);
  };
  const closeMenu = () => {
    window.clearTimeout(closeTimer.current);
    setMenuOpen(false);
    setMenuClosing(true);
    closeTimer.current = window.setTimeout(() => setMenuClosing(false), 240);
  };
  useEffect(() => {
    const updateHeader = () => document.getElementById('site-header')?.classList.toggle('top', window.scrollY < 40);
    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);
  return (
    <>
    <header id="site-header" className="fx top">
      <div className="wrap nav">
        <Link className="logo" to="/">Daniel Carter<small>NYC REAL ESTATE</small></Link>
        <nav aria-label="Main">
          <button className="burger" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={menuOpen ? closeMenu : openMenu}>{menuOpen ? '×' : '☰'}</button>
          <ul className={menuOpen ? 'menu-open' : menuClosing ? 'menu-closing' : ''}>
            {navItems.map(([label, to]) => <li key={to}><NavLink end={to === '/'} className={({ isActive }) => isActive ? 'on' : ''} onClick={closeMenu} to={to}>{label}</NavLink></li>)}
            <li><NavLink className="btn" onClick={closeMenu} to="/contact">Contact Daniel</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
    {(menuOpen || menuClosing) && <button className={`nav-backdrop${menuClosing ? ' closing' : ''}`} type="button" aria-label="Close navigation menu" onClick={closeMenu} />}
    </>
  );
}

export function Footer() {
  const [checklistSent, setChecklistSent] = useState(false);
  const submitChecklist = (event) => {
    event.preventDefault();
    const email = event.currentTarget.elements.checklistEmail.value;
    const leads = JSON.parse(localStorage.getItem('daniel-leads') || '[]');
    localStorage.setItem('daniel-leads', JSON.stringify([...leads, { email, context: 'Buyer checklist', createdAt: new Date().toISOString() }]));
    setChecklistSent(true);
  };
  return (
      <footer>
        <div className="wrap">
          <div className="g5 footer-columns">
            {/* Kept for future use:
            <div className="footer-checklist">
              <h3>Free home buyer checklist</h3>
              <p>Get twelve pages of practical advice, from pre-approval to closing day.</p>
              {checklistSent ? <p role="status">You’re on the list. Daniel will follow up by email.</p> : <form onSubmit={submitChecklist}><label htmlFor="footer-checklist-email">Email address</label><input id="footer-checklist-email" name="checklistEmail" type="email" placeholder="you@example.com" required /><button className="btn" type="submit">Download checklist</button></form>}
            </div>
            */}
            <div>
              <h3>
Daniel Carter
              </h3>
              <p>
Licensed Real Estate Salesperson
                <br />
Hudson &amp; Park Realty
                <br />
License #: 10401234567
              </p>
              <p style={{ marginTop: "10px" }}>
Phone: (212) 555-0147
                <br />
Email: daniel@danielcarterrealty.com
                <br />
Mon–Fri 9am–7pm, Sat 10am–5pm, Sun by appointment
              </p>
            </div>
            <div>
              <h3>Quick links</h3>
              <Link to="/">
Home
              </Link>
              <Link to="/listings">
Listings
              </Link>
              <Link to="/sold">
Sold
              </Link>
              <Link to="/about">
About
              </Link>
              <Link to="/services">
Services
              </Link>
              <Link to="/neighborhoods">
Neighborhoods
              </Link>
              <Link to="/testimonials">
Testimonials
              </Link>
              <Link to="/contact">
Contact
              </Link>
            </div>
            <div>
              <h3>Explore</h3>
              <Link to="/buyers-guide">Buyer’s guide</Link>
              <Link to="/sellers-guide">Seller’s guide</Link>
              <Link to="/services#sell">Selling your home</Link>
              <Link to="/calculators">Home calculators</Link>
              <Link to="/market-insights">Market insights</Link>
              <Link to="/investors">Investors</Link>
              <Link to="/relocation">Relocation guide</Link>
              <Link to="/awards">Press &amp; awards</Link>
              <Link to="/case-studies">Client stories</Link>
              <Link to="/neighborhood-guide">All 12 neighborhoods</Link>
            </div>
            <div>
              <h3>
Service areas
              </h3>
              <a>
SoHo &amp; Tribeca
              </a>
              <a>
Chelsea &amp; West Village
              </a>
              <a>
Upper East &amp; West Side
              </a>
              <a>
Brooklyn Heights &amp; Park Slope
              </a>
              <a>
Astoria &amp; Long Island City
              </a>
              <a>
Williamsburg &amp; more
              </a>
            </div>
            <div>
              <h3>
Follow
              </h3>
              <a href="https://www.instagram.com/" rel="noopener" target="_blank">
Instagram
              </a>
              <a href="https://www.facebook.com/" rel="noopener" target="_blank">
Facebook
              </a>
              <a href="https://www.linkedin.com/" rel="noopener" target="_blank">
LinkedIn
              </a>
              <a href="https://www.youtube.com/" rel="noopener" target="_blank">
YouTube
              </a>
              <Link to="/privacy">
Privacy Policy
              </Link>
              <Link to="/terms">
Terms of Use
              </Link>
              <Link to="/fair-housing">
Fair Housing Statement
              </Link>
            </div>
          </div>
          <p className="fine">
© 2026 Daniel Carter. All rights reserved. Licensed real estate salesperson affiliated with Hudson &amp; Park Realty. Equal Housing Opportunity.
          </p>
        </div>
      </footer>
  );
}

