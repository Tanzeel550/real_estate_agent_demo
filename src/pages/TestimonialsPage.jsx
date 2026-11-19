import { useRef, useState } from 'react';

const testimonials = [
  { name: 'Sarah & Mike', role: 'First-time buyers · Astoria', initial: 'S', type: 'Buyer', text: 'We had no idea what we were doing when we started. Daniel was patient and honest, and he never pushed us toward anything we didn’t love. He explained the co-op process in plain English, answered every nervous text and helped us understand what mattered in the board package. We closed on our first home feeling proud of the decision, not just relieved that it was over.' },
  { name: 'Jasmine R.', role: 'Seller · Chelsea', initial: 'J', type: 'Seller', text: 'We interviewed three agents, and Daniel was the only one who gave us the truth instead of telling us what we wanted to hear. He helped us focus on the improvements buyers would notice, gave us a clear pricing rationale and kept feedback organized after every showing. I always knew what the next step was, and I felt supported without ever feeling pressured.' },
  { name: 'Emily & James T.', role: 'Buyers and investors · Upper West Side', initial: 'E', type: 'Investor', text: 'As investors, we need someone who thinks about costs and cash flow as carefully as the apartment itself. Daniel helped us look past the headline numbers and ask better questions about building rules, carrying costs and rental assumptions. His advice was measured, practical and direct. We came away with a much clearer framework for evaluating the next opportunity.' },
  { name: 'Robert K.', role: 'Seller · Financial District', initial: 'R', type: 'Seller', text: 'Daniel told me exactly what was worth fixing before we listed and what I could leave alone. The photography and preparation made the apartment feel welcoming without making it look staged beyond recognition. He handled every offer thoughtfully, explained the differences in terms and helped me choose with confidence instead of reacting to pressure.' },
  { name: 'Priya & Michael S.', role: 'Relocation buyers · Brooklyn Heights', initial: 'P', type: 'Buyer', text: 'Moving from London made everything feel unfamiliar: the neighborhoods, the building types and all the co-op paperwork. Daniel helped us compare areas in terms of our real routine, not just a map, and made time for video calls around the time difference. By the time we found a home, we understood what we were buying and what the next steps would look like.' },
  { name: 'Angela M.', role: 'Seller · Astoria', initial: 'A', type: 'Seller', text: 'Selling my mother’s apartment was emotional, and I needed an agent who understood that this was more than a transaction. Daniel never pushed us to move faster than we were ready for. He broke the work into manageable decisions, stayed available when family questions came up and treated the apartment with real care.' },
  { name: 'Kevin L.', role: 'First-time buyer · Manhattan', initial: 'K', type: 'Buyer', text: 'Daniel told me my first choice was overpriced and advised me to pause. The inspection later revealed issues I hadn’t spotted, and I was grateful he had been willing to have an uncomfortable conversation early. When we started looking again, I felt much more confident about what to ask and where I could be flexible.' },
  { name: 'Morgan D.', role: 'Renter · Williamsburg', initial: 'M', type: 'Renter', text: 'I had a tight move date and a long list of things I needed to get right. Daniel helped me focus the search on the neighborhoods and commute that made sense, then stayed on top of viewing times and application details. I felt like I had a plan rather than a pile of tabs open and a deadline getting closer.' },
];

const demoVideoUrl = 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';
const demoVideos = ['Video testimonial 1', 'Video testimonial 2', 'Video testimonial 3', 'Video testimonial 4'];

function VideoTestimonialCard({ title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  return <article className="video-testimonial-card"><div className="video-testimonial-media"><video ref={videoRef} controls={playing} preload="none" playsInline poster="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)}><source src={demoVideoUrl} type="video/mp4" />Your browser does not support video playback.</video>{!playing && <button className="video-glass-overlay" type="button" onClick={playVideo} aria-label={`Play ${title}`}><span className="video-play-icon" aria-hidden="true">▶</span></button>}</div></article>;
}

export default function TestimonialsPage() {
  return <main><div className="pagehead"><div className="wrap"><span className="eyebrow">Client experiences</span><h1>Good moves start with good people</h1><p className="lead">Buying, selling and moving are personal. These notes reflect the kind of steady communication, thoughtful preparation and honest advice clients value throughout the process.</p></div></div>
    <section><div className="wrap"><div className="testimonial-intro"><div><h2>Notes from the other side of the closing table</h2><p>Every client comes with a different set of questions. The common thread is having a trusted guide who listens, explains the trade-offs and stays present when the details get complicated.</p></div><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85" alt="A welcoming home after a successful move" loading="lazy" /></div><p className="demo-disclosure">These extended testimonials are sample demonstration copy. Replace them with client-approved quotes before publication.</p>
      <div className="testimonial-grid">{testimonials.map((item) => <article className="testimonial-card" key={item.name}><div className="testimonial-card-top"><span className="av">{item.initial}</span><span className="testimonial-type">{item.type}</span></div><div className="st" aria-label="5 stars">★★★★★</div><blockquote>“{item.text}”</blockquote><div className="testimonial-author"><b>{item.name}</b><small>{item.role}</small></div></article>)}</div>
    </div></section>
    <section className="alt"><div className="wrap"><div className="head"><span className="eyebrow">Client stories</span><h2>Video testimonials</h2><p className="lead">Hear directly from the people Daniel has helped buy, sell and move.</p></div>
      <div className="video-testimonial-grid">{demoVideos.map((title) => <VideoTestimonialCard key={title} title={title} />)}</div></div></section>
  </main>;
}
