import { useMemo, useState } from 'react';

export default function MortgageCalculator() {
  const [price, setPrice] = useState(950000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [charges, setCharges] = useState(1100);
  const monthly = useMemo(() => {
    const principal = Number(price) * (1 - Number(down) / 100);
    const monthlyRate = Number(rate) / 1200;
    const count = 30 * 12;
    return principal * monthlyRate * (1 + monthlyRate) ** count / ((1 + monthlyRate) ** count - 1) + Number(charges);
  }, [price, down, rate, charges]);
  return <div className="home-calculator"><div><span className="eyebrow">Make the monthly number clearer</span><h2>What could your NYC home cost each month?</h2><p>Adjust a few assumptions to estimate principal, interest and building charges. It’s a starting point for a conversation with your lender, not a loan quote.</p></div><div className="home-calculator-controls"><label>Purchase price<input type="number" min="100000" step="25000" value={price} onChange={(event) => setPrice(event.target.value)} /></label><label>Down payment (%)<input type="number" min="0" max="100" value={down} onChange={(event) => setDown(event.target.value)} /></label><label>Interest rate (%)<input type="number" min="1" max="15" step="0.1" value={rate} onChange={(event) => setRate(event.target.value)} /></label><label>Maintenance / common charges<input type="number" min="0" step="50" value={charges} onChange={(event) => setCharges(event.target.value)} /></label><div className="home-payment"><span>Estimated monthly payment*</span><strong>${Math.round(monthly).toLocaleString()}</strong><small>*Before taxes, insurance and utilities.</small></div></div></div>;
}
