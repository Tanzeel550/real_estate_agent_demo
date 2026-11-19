import { useState } from 'react';

export default function LeadForm({ title = 'Tell me what you’re planning', context = 'Website inquiry', compact = false }) {
  const [sent, setSent] = useState(false);
  const [interest, setInterest] = useState('Buying');
  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const leads = JSON.parse(localStorage.getItem('daniel-leads') || '[]');
    localStorage.setItem('daniel-leads', JSON.stringify([...leads, { ...data, context, createdAt: new Date().toISOString() }]));
    setSent(true);
    event.currentTarget.reset();
  }
  if (sent) return <div className="success" role="status"><h3>Thanks for reaching out.</h3><p>Your details are saved in this demo. Daniel will follow up within one business day. You can also call <a href="tel:+12125550147">(212) 555-0147</a>.</p></div>;
  return <form className={`lead-form ${compact ? 'compact' : ''}`} onSubmit={submit}>
    <h3>{title}</h3>
    <input type="hidden" name="context" value={context} />
    <div className="g2"><div><label htmlFor="lead-name">Name</label><input id="lead-name" name="name" autoComplete="name" required /></div><div><label htmlFor="lead-email">Email</label><input id="lead-email" name="email" type="email" autoComplete="email" required /></div></div>
    <div className="g2"><div><label htmlFor="lead-phone">Phone</label><input id="lead-phone" name="phone" type="tel" autoComplete="tel" /></div><div><label htmlFor="lead-interest">I’m interested in</label><select id="lead-interest" name="interest" value={interest} onChange={(e) => setInterest(e.target.value)}><option>Buying</option><option>Selling</option><option>Renting</option><option>Investing</option><option>Relocating</option></select></div></div>
    {interest === 'Selling' ? <div className="g2"><div><label htmlFor="lead-address">Property address</label><input id="lead-address" name="propertyAddress" /></div><div><label htmlFor="lead-timeline">Selling timeline</label><select id="lead-timeline" name="timeline"><option>Just exploring</option><option>Within 3 months</option><option>3–6 months</option><option>6+ months</option></select></div></div> : null}
    {interest === 'Buying' || interest === 'Renting' ? <div><label htmlFor="lead-area">Preferred neighborhood</label><input id="lead-area" name="neighborhood" placeholder="e.g. Astoria, Chelsea" /></div> : null}
    <div><label htmlFor="lead-message">What would be helpful to know?</label><textarea id="lead-message" name="message" rows="4" /></div>
    <div className="g2"><div><label htmlFor="lead-method">Preferred contact method</label><select id="lead-method" name="preferredContact"><option>Email</option><option>Phone call</option><option>Text message</option></select></div><label className="check"><input type="checkbox" name="contactConsent" required /> I agree to be contacted about this request by my preferred method.</label></div>
    <button className="btn" type="submit">Send inquiry</button>
    <p className="form-note">What happens next: Daniel will review your note and reach out within one business day.</p>
  </form>;
}
