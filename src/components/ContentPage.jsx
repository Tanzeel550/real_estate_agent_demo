import { Link } from 'react-router-dom';
export default function ContentPage({ eyebrow = 'Daniel Carter · NYC Real Estate', title, intro, image = 'photo-1511818966892-d7d671e672a2', children }) {
  return <main><div className="pagehead"><div className="wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="lead">{intro}</p></div></div>{children}<section className="cta"><div className="wrap"><h2>Want a plan shaped around your next move?</h2><p>Tell Daniel what you’re weighing and get a clear next step.</p><Link className="btn" to="/contact">Start a conversation</Link></div></section></main>;
}
