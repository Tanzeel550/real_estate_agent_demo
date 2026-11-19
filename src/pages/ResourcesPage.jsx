import { Link } from 'react-router-dom';

export default function ResourcesPage() {
  return (
    <main>
      <div className="pagehead">
        <div className="wrap">
          <h1>
Resources for buyers and sellers
          </h1>
          <p className="lead">
Free guides, checklists and answers to the questions I hear most.
          </p>
        </div>
      </div>
      <section>
        <div className="wrap g3">
          <div className="pt">
            <h3>
The NYC Home Buyer's Checklist
            </h3>
            <p className="meta">
From pre-approval to closing day.
            </p>
            <div className="row">
              <Link className="btn" to="/buyers-guide">Explore the guide</Link>
            </div>
          </div>
          <div className="pt">
            <h3>
The NYC Home Seller's Guide
            </h3>
            <p className="meta">
Pricing, staging and what to expect at every stage.
            </p>
            <div className="row">
              <Link className="btn" to="/sellers-guide">Explore the guide</Link>
            </div>
          </div>
          <div className="pt">
            <h3>
NYC Real Estate Glossary
            </h3>
            <p className="meta">
Co-op board, flip tax, offering plan and more, in plain English.
            </p>
            <div className="row">
              <Link className="btn" to="/calculators">Open planning tools</Link>
            </div>
          </div>
        </div>
      </section>
      <section><div className="wrap"><div className="head"><h2>Useful tools for your next decision</h2><p className="lead">Short, practical resources to make the paperwork and numbers easier to navigate.</p></div><div className="g3">{[['Closing-cost estimator', 'Plan for transfer taxes, mansion tax where applicable, attorney fees and lender costs.', '/calculators'], ['Board package checklist', 'Gather financial statements, reference letters and building forms before the deadline.', '/buyers-guide'], ['Moving checklist', 'Coordinate utilities, building move rules, insurance certificates and a first-week essentials box.', '/relocation'], ['NYC property tax guide', 'Understand where to find tax details and which professional can confirm your specific situation.', '/calculators'], ['Renting in NYC', 'Compare lease terms, guarantor requirements and move-in costs.', '/rentals'], ['Investing basics', 'Review rental rules, recurring costs and a conservative return model.', '/investors']].map(([title, copy, href]) => <article className="pt" key={title}><h3>{title}</h3><p>{copy}</p><Link to={href}>Read more →</Link></article>)}</div></div></section>
      <section className="alt">
        <div className="wrap">
          <div className="head">
            <h2>
Frequently asked questions
            </h2>
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
      <section className="cta">
        <div className="wrap">
          <h2>
Still have questions?
          </h2>
          <p>
I'm happy to answer, even if you're not ready to buy or sell yet.
          </p>
          <Link className="btn" to="/contact">
Contact Daniel
          </Link>
        </div>
      </section>
    </main>
  );
}
