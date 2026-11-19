import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Footer, Header } from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ListingsPage from './pages/ListingsPage.jsx';
import SoldPage from './pages/SoldPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import NeighborhoodsPage from './pages/NeighborhoodsPage.jsx';
import TestimonialsPage from './pages/TestimonialsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import { PropertyPage, ValuationPage, GuidePage, MarketPage, CalculatorPage, LegalPage, ThankYouPage, NotFoundPage, NeighborhoodGuidePage, AwardsPage, CaseStudiesPage } from './pages/LeadPages.jsx';

const properties = [
  [40.7395, -74.001, '245 W 14th St, Unit 4B, Chelsea', '$1,250,000', 'l'],
  [40.708, -74.0135, '88 Greenwich St, Unit 22A, Financial District', '$895,000', 'l'],
  [40.7467, -74.0045, '410 W 24th St, Unit 7C, West Chelsea', '$2,100,000', 'l'],
  [40.77, -73.915, '35-12 Astoria Blvd, Unit 5D, Astoria', '$675,000', 'l'],
  [40.696, -73.994, '120 Brooklyn Heights Pl, Unit 3A, Brooklyn Heights', '$1,450,000', 'l'],
  [40.779, -73.956, '55 E 87th St, Unit 12F, Upper East Side', '$1,895,000', 'l'],
  [40.717, -73.957, '213 Bedford Ave, Unit 2R, Williamsburg', '$3,200/month', 'l'],
  [40.769, -73.921, '14-20 31st Ave, Unit 8E, Astoria', '$875,000', 'l'],
  [40.7365, -74.006, '78 Bank St, Unit 2A, West Village', 'Sold $1,875,000', 's'],
  [40.777, -73.99, '220 Riverside Blvd, Unit 14H, Upper West Side', 'Sold $2,200,000', 's'],
  [40.7745, -73.912, '31-10 Ditmars Blvd, Unit 6B, Astoria', 'Sold $725,000', 's'],
  [40.706, -74.009, '55 Wall St, Unit 8C, Financial District', 'Sold $1,100,000', 's'],
  [40.677, -73.974, '145 Park Pl, Unit 4B, Park Slope', 'Sold $1,650,000', 's'],
];

function PageEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const pageTitles = {
      '/': 'Home | Daniel Carter Real Estate', '/about': 'About | Daniel Carter Real Estate',
      '/listings': 'Listings | Daniel Carter Real Estate', '/sold': 'Sold | Daniel Carter Real Estate',
      '/services': 'Services | Daniel Carter Real Estate', '/neighborhoods': 'Neighborhoods | Daniel Carter Real Estate',
      '/testimonials': 'Testimonials | Daniel Carter Real Estate', '/resources': 'Resources | Daniel Carter Real Estate',
      '/contact': 'Contact | Daniel Carter Real Estate',
      '/valuation': 'Home Valuation | Daniel Carter Real Estate', '/buyers-guide': 'Buyer Guide | Daniel Carter Real Estate',
      '/sellers-guide': 'Seller Guide | Daniel Carter Real Estate', '/market-insights': 'NYC Market Insights | Daniel Carter Real Estate',
      '/calculators': 'NYC Home Calculators | Daniel Carter Real Estate', '/rentals': 'NYC Rentals | Daniel Carter Real Estate',
      '/investors': 'NYC Property Investors | Daniel Carter Real Estate', '/relocation': 'NYC Relocation Guide | Daniel Carter Real Estate',
      '/awards': 'Press and Awards | Daniel Carter Real Estate', '/case-studies': 'Client Stories | Daniel Carter Real Estate',
    };
    document.title = pageTitles[pathname] || pageTitles['/'];
    const revealItems = [...new Set(document.querySelectorAll('main section:not(.hero2) .wrap > *:not(.split):not(.map), main section:not(.hero2) details, main section:not(.hero2) .head, main section:not(.hero2) .card, main section:not(.hero2) .pt, main section:not(.hero2) .timeline article, main section:not(.hero2) .neighborhood-tile, main section:not(.hero2) .trust-strip, main section:not(.hero2) .testimonial-card, main section:not(.hero2) .case-study, main section:not(.hero2) .property-intro, main section:not(.hero2) .property-facts > *, main section:not(.hero2) .contact-detail, main section:not(.hero2) .contact-social, main section:not(.hero2) .lead-form, main section:not(.hero2) .calculator-tool, main section:not(.hero2) .home-calculator'))];
    const directionalItems = [...document.querySelectorAll('main section:not(.hero2) .split > *, main section:not(.hero2) .service-feature > *, main section:not(.hero2) .guide-feature > *')];
    revealItems.forEach((item, index) => {
      item.classList.add('reveal-on-scroll');
      item.style.setProperty('--reveal-delay', `${(index % 5) * 70}ms`);
    });
    directionalItems.forEach((item) => {
      item.classList.remove('reveal-on-scroll');
      const siblings = [...item.parentElement.children].sort((a, b) => Number.parseInt(window.getComputedStyle(a).order || '0', 10) - Number.parseInt(window.getComputedStyle(b).order || '0', 10));
      item.classList.add(siblings.indexOf(item) === 0 ? 'reveal-from-left' : 'reveal-from-right');
    });
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }) : null;
    [...new Set([...revealItems, ...directionalItems])].forEach((item) => observer ? observer.observe(item) : item.classList.add('is-visible'));
    const maps = [...document.querySelectorAll('.map')];
    let cancelled = false;
    let instances = [];
    let markerTimers = [];
    let markerObservers = [];
    if (!maps.length) return () => observer?.disconnect();
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
    document.head.append(css);
    const initialize = () => {
      if (cancelled || !window.L) return;
      instances = maps.map((element) => {
        if (element._leaflet_id) return null;
        const kind = element.id === 'm3' ? 's' : ['m2', 'listings-map'].includes(element.id) ? 'l' : 'all';
        const map = window.L.map(element, { scrollWheelZoom: false }).setView([40.73, -73.98], 11);
        window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(map);
        const bounds = [];
        const neighborhoods = [
          [40.745, -74.0, 'Chelsea'], [40.735, -74.003, 'West Village'], [40.723, -73.999, 'SoHo & Tribeca'],
          [40.777, -73.956, 'Upper East Side'], [40.787, -73.976, 'Upper West Side'], [40.764, -73.923, 'Astoria'],
          [40.744, -73.956, 'Long Island City'], [40.696, -73.993, 'Brooklyn Heights'], [40.672, -73.977, 'Park Slope'],
          [40.714, -73.961, 'Williamsburg'], [40.708, -74.01, 'Financial District'], [40.75, -74.006, 'West Chelsea'],
        ];
        const markers = element.id === 'neighborhood-map'
          ? neighborhoods.map(([lat, lng, name]) => [lat, lng, name, 'Explore homes and neighborhood details', 'n'])
          : element.id === 'property-location-map'
            ? properties.filter((property) => property[2] === element.dataset.property).slice(0, 1)
            : properties.filter((property) => kind === 'all' || property[4] === kind);
        const animatedMarkers = [];
        markers.forEach(([lat, lng, address, price, type], index) => {
          const marker = window.L.circleMarker([lat, lng], { radius: type === 'n' ? 11 : 10, color: '#fff', weight: 2, fillColor: type === 'l' ? '#2457C5' : type === 'n' ? '#245b50' : '#6f9686', fillOpacity: 1, className: 'map-marker' }).addTo(map).bindPopup(`<b>${address}</b><br>${price}`);
          animatedMarkers.push({ marker, index });
          bounds.push([lat, lng]);
        });
        const revealMarkers = () => animatedMarkers.forEach(({ marker, index }) => markerTimers.push(window.setTimeout(() => marker.getElement()?.classList.add('marker-visible'), 90 + index * 85)));
        if ('IntersectionObserver' in window) {
          const mapObserver = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
              revealMarkers();
              mapObserver.disconnect();
            }
          }, { threshold: 0.15 });
          mapObserver.observe(element);
          markerObservers.push(mapObserver);
        } else revealMarkers();
        if (bounds.length) map.fitBounds(bounds, { padding: [40, 40] });
        return map;
      });
    };
    if (window.L) initialize();
    else {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
      script.onload = initialize;
      document.body.append(script);
    }
    return () => { cancelled = true; observer?.disconnect(); markerObservers.forEach((mapObserver) => mapObserver.disconnect()); markerTimers.forEach(window.clearTimeout); instances.filter(Boolean).forEach((map) => map.remove()); css.remove(); };
  }, [pathname]);
  return null;
}

function Site() {
  const { pathname } = useLocation();
  return <><Header /><div className="page-transition" key={pathname}><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/listings" element={<ListingsPage />} />
    <Route path="/sold" element={<SoldPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
    <Route path="/testimonials" element={<TestimonialsPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/valuation" element={<ValuationPage />} />
    <Route path="/buyers-guide" element={<GuidePage slug="buyers-guide" />} />
    <Route path="/sellers-guide" element={<GuidePage slug="sellers-guide" />} />
    <Route path="/market-insights" element={<MarketPage />} />
    <Route path="/calculators" element={<CalculatorPage />} />
    <Route path="/investors" element={<GuidePage slug="investors" />} />
    <Route path="/relocation" element={<GuidePage slug="relocation" />} />
    <Route path="/awards" element={<AwardsPage />} />
    <Route path="/case-studies" element={<CaseStudiesPage />} />
    <Route path="/neighborhood-guide" element={<NeighborhoodGuidePage />} />
    <Route path="/property/:id" element={<PropertyPage />} />
    <Route path="/privacy" element={<LegalPage kind="privacy" />} />
    <Route path="/terms" element={<LegalPage kind="terms" />} />
    <Route path="/fair-housing" element={<LegalPage kind="fair-housing" />} />
    <Route path="/thank-you" element={<ThankYouPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></div><Footer /><PageEffects /></>;
}

export default function App() {
  return <BrowserRouter><Site /></BrowserRouter>;
}
