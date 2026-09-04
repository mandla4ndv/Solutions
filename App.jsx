import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Home, Building2, KeyRound, Sparkles, AppWindow, Sofa, PartyPopper,
  Phone, PhoneCall, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, CalendarCheck,
  Users, Tag, HandHeart, ArrowRight, ChevronLeft, Send, Facebook, Instagram, Leaf,
  MessageCircle, ClipboardCheck, SprayCan, Smile, Calculator, Lightbulb, CalendarDays,
} from 'lucide-react';

/*
  SOLUTIONWORKS (PTY) LTD — marketing website
  ---------------------------------------------------------------
  IMAGES: real, stable Pexels photos (free for commercial use, no
  attribution required). Swap for real job photos once you have them.

  LOGO: the browser-tab icon (favicon) lives in your project's
  index.html / public folder, not in this component. Swap <LogoMark />
  for <img src="/logo.png" /> once you have the real logo file.

  BLOG: each post now has full long-form content (see BLOG_POSTS
  below) and its own page, reached by clicking a post card.
*/  

const COLORS = {
  navy: '#0E2954',
  navyDark: '#081B3A',
  green: '#5FA338',
  greenLight: '#EAF4E3',
  paleBlue: '#EEF3FA',
  slate: '#33475B',
  white: '#FFFFFF',
  whatsapp: '#25D366',
};

const WHATSAPP_NUMBER = '27762251721';
const WHATSAPP_MSG = "Hi SolutionWorks! I'd like to get a free quote for cleaning services.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const SERVICES = [
  { icon: Home, title: 'Residential Cleaning', desc: 'Thorough, reliable cleaning for homes of every size, from cozy apartments to large family houses.' },
  { icon: Building2, title: 'Commercial & Office Cleaning', desc: 'Keep your workplace spotless with flexible schedules built around your business hours.' },
  { icon: KeyRound, title: 'Move-In / Move-Out Cleaning', desc: 'A full deep clean before you settle in or hand over the keys, so the space is ready for its next chapter.' },
  { icon: Sparkles, title: 'Deep Cleaning', desc: 'An intensive, top-to-bottom clean that reaches everything your regular routine does not.' },
  { icon: AppWindow, title: 'Window Cleaning', desc: 'Streak-free glass, inside and out, for homes and commercial storefronts alike.' },
  { icon: Sofa, title: 'Carpet & Upholstery Cleaning', desc: 'Deep extraction cleaning that lifts embedded dirt and refreshes fabric, rugs, and furniture.' },
  { icon: PartyPopper, title: 'Event Cleaning', desc: 'Pre- and post-event cleaning so your venue looks its best before guests arrive and after they leave.' },
];

const WHY_CHOOSE_US = [
  { icon: Users, title: 'Professional & Reliable Team', desc: 'Trained, trustworthy, and committed to excellence in every job.' },
  { icon: CalendarCheck, title: 'Flexible Schedules', desc: 'We work around your time for minimal disruption to your day.' },
  { icon: ShieldCheck, title: 'High-Quality Standards', desc: 'Proven methods and quality products for consistently outstanding results.' },
  { icon: Tag, title: 'Affordable & Customized Solutions', desc: 'Tailored cleaning plans that fit your needs and your budget.' },
  { icon: HandHeart, title: 'Commitment to Satisfaction', desc: 'Your satisfaction is our top priority, on every single visit.' },
];

const HOW_IT_WORKS = [
  { step: '01', icon: PhoneCall, title: 'Request a Quote', desc: "Reach out by phone, WhatsApp, or email and tell us about your space, it only takes a minute." },
  { step: '02', icon: ClipboardCheck, title: 'We Confirm the Details', desc: "We'll ask a few quick questions and confirm your free, no-obligation quote." },
  { step: '03', icon: SprayCan, title: 'We Clean', desc: 'Our trained team arrives on schedule and gets to work, top to bottom.' },
  { step: '04', icon: Smile, title: 'You Relax', desc: 'Come home or walk into the office to a space that feels brand new.' },
];

const STATS = [
  { value: 7, label: 'Cleaning Services' },
  { value: 15, label: 'km Free Call-Out Radius' },
  { value: 2, label: 'Regions Covered' },
];

const PRICING_CATEGORIES = [
  { icon: Home, title: 'Residential Cleaning', rows: [
    { label: '1–2 Bedroom Home', price: 'R500 – R700' },
    { label: '3–4 Bedroom Home', price: 'R700 – R1,100' },
    { label: '5+ Bedroom Home', price: 'From R1,200' },
  ]},
  { icon: Sparkles, title: 'Deep Cleaning', rows: [
    { label: 'Full Deep Clean', price: 'R1,200 – R3,000' },
  ]},
  { icon: KeyRound, title: 'Move-In / Move-Out Cleaning', rows: [
    { label: 'Full Clean', price: 'R1,500 – R4,000' },
  ]},
  { icon: Building2, title: 'Office Cleaning', rows: [
    { label: 'Small Office', price: 'R600 – R1,200' },
    { label: 'Medium Office', price: 'R1,500 – R3,000' },
    { label: 'Large Office', price: 'Custom Quotation' },
  ]},
  { icon: AppWindow, title: 'Window Cleaning', rows: [
    { label: 'Residential', price: 'R250 – R800' },
    { label: 'Commercial', price: 'From R800' },
  ]},
  { icon: Sofa, title: 'Carpet & Upholstery', rows: [
    { label: 'Carpet Cleaning', price: 'R300/room or R20–R35/m²' },
    { label: 'Upholstery (Single Chair)', price: 'R150 – R300' },
    { label: 'Sofa (2–3 Seater)', price: 'R500 – R900' },
  ]},
  { icon: PartyPopper, title: 'Event Cleaning', rows: [
    { label: 'Pre/Post Event', price: 'From R2,000' },
  ]},
];

const PACKAGES = [
  { label: 'Small Office (3 visits/week)', price: 'From R6,000/mo' },
  { label: 'Medium Office (5 visits/week)', price: 'From R12,000/mo' },
  { label: 'Residential (Weekly)', price: 'From R2,000/mo' },
  { label: 'Residential (Twice Weekly)', price: 'From R3,500/mo' },
];

const ADD_ONS = [
  { label: 'Inside Fridge', price: 'R150' },
  { label: 'Inside Oven', price: 'R250' },
  { label: 'Interior Cabinets', price: 'R250' },
  { label: 'Balcony / Patio', price: 'R250' },
  { label: 'Garage Cleaning', price: 'R350' },
  { label: 'Appliance Cleaning', price: 'R80 – R150 each' },
];

const CALL_OUT_FEES = [
  { label: 'Within 15 km', price: 'Free' },
  { label: '15 – 30 km', price: 'R150' },
  { label: 'Over 30 km', price: 'Custom Quotation' },
];

const DISCOUNTS = [
  { label: 'First-Time Customers', price: '10% off' },
  { label: 'Monthly Contract Clients', price: '5 – 15% off' },
  { label: 'Pensioners', price: '10% off' },
  { label: 'Referrals', price: 'R100 credit' },
];

const BLOG_POSTS = [
  {
    slug: 'house-cleaning-cost-guide',
    title: 'How Much Does House Cleaning Cost in Johannesburg & the East Rand?',
    excerpt: "A straightforward price guide covering everything from a quick 1-bedroom tidy-up to a full 5-bedroom deep clean, so you know what to budget for before you call.",
    category: 'Pricing',
    categoryIcon: Calculator,
    readTime: '5 min read',
    date: 'Updated August 2026',
    img: 'https://images.pexels.com/photos/9462759/pexels-photo-9462759.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      { type: 'p', text: "If you've never booked a professional clean before, working out what it should cost can feel like guesswork. The honest answer is that it depends on a few specific things: size, condition, and how deep you need us to go. Here's a straightforward breakdown so you can budget with confidence before you even pick up the phone." },
      { type: 'h2', text: 'What Affects the Price of a Clean' },
      { type: 'p', text: "Every quote comes down to four main factors: the size of the space, its current condition, how often you'd like us to visit, and whether you need a standard clean or a full deep clean. A home that's cleaned weekly needs far less work per visit than one that hasn't seen a proper clean in months, and that's reflected in the price." },
      { type: 'h2', text: 'Residential Pricing at a Glance' },
      { type: 'p', text: 'Here is what you can expect for a standard residential clean, VAT included:' },
      { type: 'list', items: ['1–2 Bedroom Home: R500 – R700', '3–4 Bedroom Home: R700 – R1,100', '5+ Bedroom Home: From R1,200'] },
      { type: 'p', text: 'Prefer a recurring schedule? Weekly residential cleaning starts from R2,000 a month, and twice-weekly from R3,500 a month, both working out cheaper per visit than booking once-off.' },
      { type: 'h2', text: 'Deep Cleaning Costs More, Here Is Why' },
      { type: 'p', text: "A deep clean (R1,200 – R3,000) goes further than a regular visit: skirting boards, inside cupboards, built-up grime in bathrooms, and areas that don't get touched week to week. It's the right call before a big event, after a renovation, or simply if it's been a while. Most clients book one occasionally and keep up with regular cleaning in between." },
      { type: 'h2', text: 'Do Not Forget the Add-Ons' },
      { type: 'p', text: "If you only need a few extras rather than a full deep clean, we price those separately:" },
      { type: 'list', items: ['Inside Fridge: R150', 'Inside Oven: R250', 'Interior Cabinets: R250', 'Balcony / Patio: R250', 'Garage Cleaning: R350', 'Appliance Cleaning: R80 – R150 each'] },
      { type: 'h2', text: 'Ways to Save' },
      { type: 'list', items: ['First-time customers get 10% off their first booking.', 'Monthly contract clients save 5–15%, the more regular the visit, the better the rate.', 'Pensioners receive 10% off every visit.', 'Referrals earn you R100 credit toward your next service, and your friend gets a discount too.'] },
      { type: 'p', text: "The only way to get an exact number for your space is a quick, free quote, no site visit required for most residential jobs, and no obligation to book. Reach out and we'll have a number back to you the same day." },
    ],
  },
  {
    slug: 'office-deep-clean-signs',
    title: '5 Signs Your Office Needs a Professional Deep Clean',
    excerpt: 'Dusty blinds are the obvious one. Here are the less obvious signs your workplace is overdue for a proper deep clean, and why it matters for your team.',
    category: 'Commercial',
    categoryIcon: Building2,
    readTime: '4 min read',
    date: 'Updated August 2026',
    img: 'https://images.pexels.com/photos/9462092/pexels-photo-9462092.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      { type: 'p', text: "A tidy-looking office isn't always a clean one. Surface tidiness and genuine hygiene are two different things, and most workplaces only get the second one properly addressed once or twice a year, if that. Here are five signs it's time to book a proper deep clean rather than waiting for the next scheduled visit." },
      { type: 'h2', text: '1. Dust Is Settling Where You Cannot Easily Reach' },
      { type: 'p', text: "Check the top of shelving, air vents, blinds, and behind monitors. Routine cleaning handles floors and desks, but dust builds up in the spots that get skipped week after week, and it circulates through the air your team breathes all day." },
      { type: 'h2', text: '2. Carpets and Upholstery Are Holding Onto Stains and Smells' },
      { type: 'p', text: "Spilled coffee, tracked-in mud, years of foot traffic, regular vacuuming lifts surface dirt but doesn't touch what's worked its way into the fibres. If a meeting room carpet smells musty even after cleaning, that's a sign it needs proper extraction cleaning, not just another vacuum pass." },
      { type: 'h2', text: '3. Sick Days Are Creeping Up' },
      { type: 'p', text: "Shared keyboards, door handles, kitchen surfaces, and light switches are some of the highest-touch points in any office, and some of the least-cleaned. If more colds have been moving through the team than usual, a full disinfecting deep clean of high-touch surfaces is one of the simplest ways to break the cycle." },
      { type: 'h2', text: '4. High-Touch Surfaces Have Not Been Properly Disinfected in a While' },
      { type: 'p', text: "There's a difference between wiping a surface and actually disinfecting it, the second needs the right products and enough contact time to work. If you can't remember the last time this happened beyond a quick wipe-down, it's overdue." },
      { type: 'h2', text: '5. Client-Facing Areas Are Starting to Look Tired' },
      { type: 'p', text: "Reception, boardrooms, and anywhere clients or candidates walk through make an impression before anyone says a word. Scuffed skirting boards, streaky glass partitions, or a reception area that just feels off can undercut an otherwise strong first meeting." },
      { type: 'p', text: "A deep clean doesn't need to disrupt your workday, most offices book us for evenings or weekends. If any of the above sound familiar, get in touch for a free quote based on your office size and layout." },
    ],
  },
  {
    slug: 'move-in-move-out-checklist',
    title: 'The Complete Move-In / Move-Out Cleaning Checklist',
    excerpt: 'Handing over keys or picking them up? This room-by-room checklist covers everything a proper move clean should include.',
    category: 'Residential',
    categoryIcon: Home,
    readTime: '6 min read',
    date: 'Updated August 2026',
    img: 'https://images.pexels.com/photos/6196685/pexels-photo-6196685.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      { type: 'p', text: "Whether you're handing over keys or about to collect them, a proper move clean is one of those jobs that's easy to underestimate. It's not just wiping down what's visible, it's every surface a new tenant or owner will actually notice. Here's the checklist we work through on every move-in and move-out clean, room by room." },
      { type: 'h2', text: 'Kitchen' },
      { type: 'list', items: ['Inside and outside of all cupboards and drawers', 'Inside the oven, hob, and extractor fan', 'Inside the fridge (if it is staying), or behind and underneath if it is being removed', 'All countertops, splashbacks, and the sink, including taps', 'Floors, including under any movable appliances'] },
      { type: 'h2', text: 'Bathrooms' },
      { type: 'list', items: ['Toilet, basin, bath and/or shower, including grout and sealant', 'Mirrors and any glass shower screens', 'Inside cabinets and behind the toilet', 'Extractor fan cover', 'Floors and skirting boards'] },
      { type: 'h2', text: 'Bedrooms & Living Areas' },
      { type: 'list', items: ['Inside all built-in cupboards, and on top of them', 'Light fittings and switches', 'Skirting boards and door frames', 'Windowsills and window tracks', 'Carpets vacuumed or hard floors mopped'] },
      { type: 'h2', text: 'Windows, Walls & Floors' },
      { type: 'list', items: ['Windows cleaned inside (outside on request)', 'Marks and scuffs wiped from walls where possible', 'All floors vacuumed and mopped throughout', 'Any balcony or patio area swept and wiped down'] },
      { type: 'h2', text: 'Final Walkthrough Items' },
      { type: 'list', items: ['Plug points and light switches wiped', 'Cobwebs cleared from corners and ceiling edges', 'Bins emptied and left clean', 'A final walkthrough to catch anything missed'] },
      { type: 'p', text: "Trying to fit this in around packing, admin, and moving day itself is a lot. Most of our move-in/move-out clients book us for the day before handover, that way you're walking into, or out of, a space that's genuinely ready, not just tidy-looking. Full move cleans start from R1,500." },
    ],
  },
  {
    slug: 'daily-habits-guest-ready-home',
    title: '5 Everyday Habits That Keep Your Home Guest-Ready',
    excerpt: 'Small, simple habits to use between our visits that keep your space looking its best all week, no extra products required.',
    category: 'Tips',
    categoryIcon: Lightbulb,
    readTime: '3 min read',
    date: 'Updated August 2026',
    img: 'https://images.pexels.com/photos/6195274/pexels-photo-6195274.jpeg?auto=compress&cs=tinysrgb&w=1200',
    content: [
      { type: 'p', text: "A professional clean gives you a real reset, but what keeps a space feeling that way in between visits comes down to a handful of small daily habits. None of these take more than a few minutes, and together they make a bigger difference than one big weekend clean-up ever does." },
      { type: 'h2', text: '1. Make the Bed Before You Leave the Room' },
      { type: 'p', text: "It sounds almost too simple to matter, but an unmade bed makes an entire bedroom look unfinished, while a made one makes the whole room feel pulled together, even if everything else is a work in progress." },
      { type: 'h2', text: '2. The 5-Minute Evening Reset' },
      { type: 'p', text: "Before you sit down for the evening, do one lap of the main living space: cups back to the kitchen, shoes to the door, cushions straightened. Five minutes at the end of the day means you never wake up to yesterday's mess." },
      { type: 'h2', text: '3. Wipe As You Go in the Kitchen' },
      { type: 'p', text: "Wiping a counter the moment it's dirty takes seconds. Leaving it for later turns into scrubbing dried-on mess tomorrow. Cleaning as you cook is the single biggest difference between a kitchen that always looks fine and one that needs a deep clean every few weeks." },
      { type: 'h2', text: '4. Give Your Entryway a Job' },
      { type: 'p', text: "A tray for keys, a rack for shoes, a hook for bags, whatever the system, the point is that everything coming through the front door has a home. Entryway clutter is often the first thing guests see, and the first thing that makes a tidy home feel chaotic." },
      { type: 'h2', text: '5. One Surface, Once a Day' },
      { type: 'p', text: "Pick one surface, a kitchen island, a bathroom counter, a coffee table, and make sure it's completely clear at least once a day. It doesn't need to be the same surface every day. This one habit alone stops small clutter from ever becoming a big job." },
      { type: 'p', text: "These habits keep things looking good between visits, but they're not a replacement for an actual deep clean every so often, the two work together. If it's been a while since your last proper clean, that's exactly what we're here for." },
    ],
  },
];

/* ---------------------------- Global styles ---------------------------- */

function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&family=Caveat:wght@600;700&family=Inter:wght@400;500;600;700&display=swap');

      .sw-root * { box-sizing: border-box; }

      .page-fade { animation: pageFadeIn 0.55s ease both; }
      @keyframes pageFadeIn {
        from { opacity: 0; transform: translateY(14px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes twinkle {
        0%, 100% { opacity: 0.35; transform: scale(0.85) rotate(0deg); }
        50% { opacity: 1; transform: scale(1.15) rotate(15deg); }
      }
      .sparkle-anim { animation: twinkle 2.4s ease-in-out infinite; }

      @keyframes floatY {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .float-anim { animation: floatY 4.5s ease-in-out infinite; }

      @keyframes stampIn {
        0% { opacity: 0; transform: scale(0.6) rotate(-14deg); }
        70% { opacity: 1; transform: scale(1.08) rotate(2deg); }
        100% { opacity: 1; transform: scale(1) rotate(-6deg); }
      }
      .stamp-anim { animation: stampIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }

      @keyframes waPulse {
        0% { transform: scale(1); opacity: 0.55; }
        100% { transform: scale(1.7); opacity: 0; }
      }
      .wa-pulse { animation: waPulse 2.2s ease-out infinite; }

      .sw-root a, .sw-root button { cursor: pointer; }

      .sw-root input, .sw-root select, .sw-root textarea {
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
        font-family: 'Inter', sans-serif;
      }
      .sw-root input:focus, .sw-root select:focus, .sw-root textarea:focus {
        border-color: ${COLORS.green} !important;
        box-shadow: 0 0 0 3px ${COLORS.greenLight};
      }

      .sw-root *:focus-visible {
        outline: 2px solid ${COLORS.green};
        outline-offset: 2px;
      }

      .sw-card-lift { transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease; }
      .sw-card-lift:hover { transform: translateY(-6px) scale(1.015); box-shadow: 0 20px 40px rgba(14,41,84,0.14); }

      @media (prefers-reduced-motion: reduce) {
        .sw-root *, .sw-root *::before, .sw-root *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
      }

      .sw-root ::-webkit-scrollbar { width: 10px; }
      .sw-root ::-webkit-scrollbar-track { background: ${COLORS.paleBlue}; }
      .sw-root ::-webkit-scrollbar-thumb { background: ${COLORS.navy}; border-radius: 8px; }
    `}</style>
  );
}

/* ------------------------------ Scroll reveal ---------------------------- */

function useRevealObserver() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = '' }) {
  const [ref, visible] = useRevealObserver();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function useCountUp(target, duration, trigger) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!trigger) return undefined;
    let startTime = null;
    let raf;
    const step = (ts) => {
      if (startTime === null) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [trigger, target, duration]);
  return value;
}

/* ------------------------------ Small pieces ----------------------------- */

function LogoMark({ inverted = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex items-center justify-center shrink-0 rounded-xl"
        style={{ width: 44, height: 44, background: inverted ? COLORS.green : `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyDark})` }}
      >
        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: inverted ? COLORS.navyDark : COLORS.green, fontSize: 18 }}>SW</span>
      </div>
      <div className="leading-tight text-left">
        <div style={{ fontFamily: "'Poppins', sans-serif", color: inverted ? COLORS.white : COLORS.navy }} className="font-extrabold text-base tracking-tight">
          SOLUTIONWORKS
        </div>
        <div style={{ color: COLORS.green }} className="text-xs font-semibold tracking-widest uppercase">Pty Ltd</div>
      </div>
    </div>
  );
}

function TrustBadge({ animate = true }) {
  return (
    <div
      className={animate ? 'stamp-anim flex flex-col items-center justify-center text-center' : 'flex flex-col items-center justify-center text-center'}
      style={{
        width: 132, height: 132, borderRadius: '50%',
        border: `3px dashed ${COLORS.green}`,
        background: COLORS.white,
        boxShadow: '0 12px 30px rgba(14,41,84,0.18)',
        transform: animate ? undefined : 'rotate(-6deg)',
        flexShrink: 0,
      }}
    >
      <ShieldCheck size={28} style={{ color: COLORS.green }} />
      <span style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy, lineHeight: 1.35 }} className="font-extrabold text-xs mt-1 px-2">
        PROFESSIONAL<br />RELIABLE<br />TRUSTED
      </span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle, dark = false, center = true }) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : ''}>
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.green }}>{eyebrow}</span>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", color: dark ? COLORS.white : COLORS.navy }} className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">
        {title}
      </h2>
      {subtitle && <p style={{ color: dark ? '#B7C4DA' : COLORS.slate }}>{subtitle}</p>}
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="sw-card-lift p-7 rounded-2xl h-full" style={{ background: COLORS.white, border: `1px solid ${COLORS.paleBlue}`, boxShadow: '0 4px 16px rgba(14,41,84,0.06)' }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: COLORS.greenLight }}>
        <Icon size={22} style={{ color: COLORS.green }} />
      </div>
      <h3 className="font-bold mb-2" style={{ color: COLORS.navy }}>{title}</h3>
      <p className="text-sm" style={{ color: COLORS.slate }}>{desc}</p>
    </div>
  );
}

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyDark})` }}>
      <Sparkles size={18} className="sparkle-anim absolute hidden sm:block" style={{ color: COLORS.green, top: 30, right: '12%' }} />
      <Sparkles size={12} className="sparkle-anim absolute hidden sm:block" style={{ color: COLORS.green, bottom: 24, left: '8%', animationDelay: '0.5s' }} />
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center relative">
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.green }}>{eyebrow}</span>
        <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-3xl md:text-5xl font-extrabold text-white mt-3 mb-4">{title}</h1>
        {subtitle && <p style={{ color: '#B7C4DA' }} className="text-base md:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}

function AngleDivider({ color, flip = false }) {
  return (
    <div aria-hidden="true" style={{ lineHeight: 0, transform: flip ? 'scaleY(-1)' : undefined, background: 'transparent' }}>
      <svg viewBox="0 0 1440 54" preserveAspectRatio="none" style={{ width: '100%', height: 44, display: 'block' }}>
        <polygon points="0,54 1440,0 1440,54" fill={color} />
      </svg>
    </div>
  );
}

function CTABanner({ setPage }) {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="rounded-3xl px-8 md:px-16 py-14 md:py-16 text-center relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyDark})` }}>
          <Sparkles size={20} className="sparkle-anim absolute hidden sm:block" style={{ color: COLORS.green, top: 28, left: 40 }} />
          <Sparkles size={14} className="sparkle-anim absolute hidden sm:block" style={{ color: COLORS.green, bottom: 32, right: 60, animationDelay: '0.6s' }} />
          <h2 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready For a Spotless Space?</h2>
          <p style={{ color: '#B7C4DA' }} className="mb-8 max-w-lg mx-auto">Get your free, no-obligation quote today. We'll work around your schedule, not the other way around.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => setPage('contact')} className="px-7 py-3.5 rounded-full font-bold text-white transition-transform duration-200 hover:scale-105" style={{ background: COLORS.green }}>
              Get a Free Quote
            </button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full font-bold text-white flex items-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.whatsapp }}>
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialDot({ icon: Icon, href }) {
  return (
    <a
      href={href || '#'}
      target={href ? '_blank' : undefined}
      rel={href ? 'noopener noreferrer' : undefined}
      className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
      style={{ width: 38, height: 38, background: 'rgba(255,255,255,0.08)' }}
    >
      <Icon size={17} color="#FFFFFF" />
    </a>
  );
}

function ContactInfoRow({ icon: Icon, label, value, href, accent }) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: accent ? '#DEF7E8' : COLORS.greenLight }}>
        <Icon size={19} style={{ color: accent || COLORS.green }} />
      </div>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: COLORS.slate }}>{label}</div>
        <div className="font-bold" style={{ color: COLORS.navy }}>{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{content}</a> : content;
}

function FormField({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ color: COLORS.navy }}>{label}</label>
      {children}
    </div>
  );
}

function PricingCard({ icon: Icon, title, rows }) {
  return (
    <div className="sw-card-lift p-7 rounded-2xl h-full" style={{ background: COLORS.white, border: `1px solid ${COLORS.paleBlue}`, boxShadow: '0 4px 16px rgba(14,41,84,0.06)' }}>
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: COLORS.greenLight }}>
          <Icon size={20} style={{ color: COLORS.green }} />
        </div>
        <h3 className="font-bold text-lg" style={{ color: COLORS.navy }}>{title}</h3>
      </div>
      <div>
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 py-2.5" style={{ borderBottom: `1px solid ${COLORS.paleBlue}` }}>
            <span className="text-sm" style={{ color: COLORS.slate }}>{r.label}</span>
            <span className="text-sm font-bold whitespace-nowrap" style={{ color: COLORS.navy }}>{r.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SimplePriceList({ icon: Icon, title, rows, accent = false }) {
  return (
    <div className="p-7 rounded-2xl h-full" style={{ background: COLORS.white, boxShadow: '0 4px 16px rgba(14,41,84,0.06)' }}>
      <div className="flex items-center gap-3 mb-5">
        <Icon size={20} style={{ color: COLORS.green }} />
        <h3 className="font-bold" style={{ color: COLORS.navy }}>{title}</h3>
      </div>
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 text-sm">
            <span style={{ color: COLORS.slate }}>{r.label}</span>
            <span className="font-bold whitespace-nowrap" style={{ color: accent ? COLORS.green : COLORS.navy }}>{r.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogCard({ title, excerpt, category, categoryIcon: CategoryIcon, readTime, img, onOpen }) {
  return (
    <article className="sw-card-lift rounded-2xl overflow-hidden h-full flex flex-col" style={{ background: COLORS.white, border: `1px solid ${COLORS.paleBlue}`, boxShadow: '0 4px 16px rgba(14,41,84,0.06)' }}>
      <button
        onClick={onOpen}
        aria-label={`Read: ${title}`}
        className="text-left overflow-hidden"
        style={{ aspectRatio: '16 / 9', background: COLORS.paleBlue, border: 'none', padding: 0, width: '100%', display: 'block' }}
      >
        <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </button>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full" style={{ background: COLORS.greenLight, color: COLORS.green }}>
            <CategoryIcon size={12} /> {category}
          </span>
          <span className="text-xs flex items-center gap-1" style={{ color: COLORS.slate }}><Clock size={12} /> {readTime}</span>
        </div>
        <h3 style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="font-bold text-lg mb-2 leading-snug">{title}</h3>
        <p className="text-sm mb-4 flex-1" style={{ color: COLORS.slate }}>{excerpt}</p>
        <button onClick={onOpen} className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: COLORS.navy, background: 'none', border: 'none', padding: 0 }}>
          Read More <ArrowRight size={14} style={{ color: COLORS.green }} />
        </button>
      </div>
    </article>
  );
}

function StatItem({ value, label, trigger }) {
  const count = useCountUp(value, 1400, trigger);
  return (
    <div className="text-center">
      <div style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="text-3xl md:text-4xl font-extrabold">{count}</div>
      <div className="text-xs md:text-sm font-semibold mt-1" style={{ color: COLORS.slate }}>{label}</div>
    </div>
  );
}

function StatStrip() {
  const [ref, visible] = useRevealObserver();
  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 md:gap-10 max-w-md">
      {STATS.map((s) => <StatItem key={s.label} {...s} trigger={visible} />)}
    </div>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SolutionWorks on WhatsApp"
      className="fixed flex items-center justify-center transition-transform duration-200 hover:scale-110"
      style={{ bottom: 22, right: 22, width: 58, height: 58, borderRadius: '50%', background: COLORS.whatsapp, boxShadow: '0 10px 26px rgba(37,211,102,0.5)', zIndex: 100 }}
    >
      <span className="wa-pulse absolute rounded-full" style={{ inset: 0, background: COLORS.whatsapp }} />
      <MessageCircle size={26} color="#FFFFFF" style={{ position: 'relative' }} />
    </a>
  );
}

function BeforeAfterShowcase() {
  const [after, setAfter] = useState(false);
  const cells = Array.from({ length: 24 });
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeading eyebrow="The Difference" title="See The SolutionWorks Effect" subtitle="Every space we touch goes from scattered to sorted. Flip the switch." />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center">
            <div className="rounded-3xl p-7 md:p-10 w-full" style={{ background: COLORS.white, boxShadow: '0 20px 50px rgba(14,41,84,0.12)' }}>
              <div className="grid grid-cols-6 gap-2 md:gap-3">
                {cells.map((_, i) => {
                  const wobble = Math.sin(i * 12.9) * 16;
                  const shift = Math.cos(i * 7.3) * 7;
                  return (
                    <div
                      key={i}
                      className="rounded-lg"
                      style={{
                        aspectRatio: '1 / 1',
                        background: after ? (i % 3 === 0 ? COLORS.green : COLORS.navy) : '#C9D2DE',
                        opacity: after ? 1 : 0.55 + (i % 4) * 0.09,
                        transform: after ? 'rotate(0deg) translate(0px, 0px) scale(1)' : `rotate(${wobble}deg) translate(${shift}px, ${shift}px) scale(0.86)`,
                        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${(i % 6) * 0.035}s`,
                      }}
                    />
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-4 mt-8">
                <span className="font-bold text-sm" style={{ color: after ? COLORS.slate : COLORS.navy }}>Before</span>
                <button
                  onClick={() => setAfter(!after)}
                  aria-label="Toggle before and after"
                  className="relative rounded-full transition-colors duration-300"
                  style={{ width: 60, height: 32, background: after ? COLORS.green : '#C9D2DE' }}
                >
                  <span
                    className="absolute rounded-full transition-all duration-300"
                    style={{ width: 26, height: 26, top: 3, left: after ? 31 : 3, background: COLORS.white, boxShadow: '0 2px 6px rgba(0,0,0,0.25)' }}
                  />
                </button>
                <span className="font-bold text-sm" style={{ color: after ? COLORS.green : COLORS.slate }}>After</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Navbar -------------------------------- */

function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    ['home', 'Home'], ['about', 'About'], ['services', 'Services'],
    ['pricing', 'Pricing'], ['blog', 'Blog'], ['contact', 'Contact'],
  ];

  const go = (id) => { setPage(id); setOpen(false); };
  const isBlogArea = page === 'blog' || page === 'blog-post';

  return (
    <header
      className="sticky top-0 z-50 transition-shadow duration-300"
      style={{
        background: COLORS.white,
        boxShadow: scrolled ? '0 4px 20px rgba(14,41,84,0.10)' : 'none',
        borderBottom: scrolled ? 'none' : `1px solid ${COLORS.paleBlue}`,
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between" style={{ height: 76 }}>
        <button onClick={() => go('home')} aria-label="SolutionWorks home">
          <LogoMark />
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map(([id, label]) => {
            const active = id === 'blog' ? isBlogArea : page === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
                style={{ color: active ? COLORS.white : COLORS.navy, background: active ? COLORS.navy : 'transparent' }}
              >
                {label}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110" style={{ width: 38, height: 38, background: COLORS.whatsapp }}>
            <MessageCircle size={18} color="#FFFFFF" />
          </a>
          <button
            onClick={() => go('contact')}
            className="px-5 py-2.5 rounded-full text-sm font-bold text-white transition-transform duration-200 hover:scale-105"
            style={{ background: COLORS.green }}
          >
            Get a Free Quote
          </button>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} style={{ color: COLORS.navy }} /> : <Menu size={26} style={{ color: COLORS.navy }} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-5 pb-5 flex flex-col gap-1" style={{ borderTop: `1px solid ${COLORS.paleBlue}` }}>
          {links.map(([id, label]) => {
            const active = id === 'blog' ? isBlogArea : page === id;
            return (
              <button
                key={id}
                onClick={() => go(id)}
                className="text-left px-3 py-3 rounded-lg text-sm font-semibold"
                style={{ color: active ? COLORS.white : COLORS.navy, background: active ? COLORS.navy : 'transparent' }}
              >
                {label}
              </button>
            );
          })}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-sm font-semibold flex items-center gap-2" style={{ color: COLORS.whatsapp }}>
            <MessageCircle size={15} /> Chat on WhatsApp
          </a>
          <a href="tel:0762251721" className="px-3 py-2 text-sm font-semibold flex items-center gap-2" style={{ color: COLORS.navy }}>
            <Phone size={15} style={{ color: COLORS.green }} /> 076 225 1721
          </a>
          <button
            onClick={() => go('contact')}
            className="mt-1 px-5 py-3 rounded-full text-sm font-bold text-white"
            style={{ background: COLORS.green }}
          >
            Get a Free Quote
          </button>
        </div>
      )}
    </header>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer({ setPage }) {
  return (
    <footer style={{ background: COLORS.navyDark }} className="text-white">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <LogoMark inverted />
          <p className="mt-4 text-sm leading-relaxed max-w-sm" style={{ color: '#B7C4DA' }}>
            Professional residential and commercial cleaning across Johannesburg and the East Rand, reliable, affordable, and built around your schedule.
          </p>
          <div className="flex gap-3 mt-5">
            <SocialDot icon={Facebook} />
            <SocialDot icon={Instagram} />
            <SocialDot icon={MessageCircle} href={WHATSAPP_URL} />
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm tracking-wide uppercase" style={{ color: COLORS.green }}>Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[['home', 'Home'], ['about', 'About Us'], ['services', 'Services'], ['pricing', 'Pricing'], ['blog', 'Blog']].map(([id, label]) => (
              <li key={id}>
                <button onClick={() => setPage(id)} className="hover:underline" style={{ color: '#DCE4F0' }}>{label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-sm tracking-wide uppercase" style={{ color: COLORS.green }}>Get In Touch</h4>
          <ul className="space-y-3 text-sm" style={{ color: '#DCE4F0' }}>
            <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:underline"><MessageCircle size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.whatsapp }} /> WhatsApp: 076 225 1721</a></li>
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} /> 076 225 1721</li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} /> kaylanj27@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} /> Johannesburg & East Rand, Gauteng</li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="py-5">
        <p className="text-center text-xs px-4" style={{ color: '#8496B3' }}>
          © {new Date().getFullYear()} SolutionWorks (Pty) Ltd. All rights reserved. · Clean Spaces. Better Places.
        </p>
      </div>
    </footer>
  );
}

/* --------------------------------- Pages --------------------------------- */

function HomePage({ setPage }) {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${COLORS.paleBlue} 0%, ${COLORS.white} 100%)` }}>
        <span
          aria-hidden="true"
          style={{
            position: 'absolute', top: '-4%', left: '-2%', zIndex: 0, pointerEvents: 'none',
            fontFamily: "'Poppins', sans-serif", fontWeight: 900, letterSpacing: '-0.03em',
            fontSize: 'clamp(70px, 15vw, 220px)', color: COLORS.navy, opacity: 0.045, whiteSpace: 'nowrap',
          }}
        >
          FRESH
        </span>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24 grid md:grid-cols-2 gap-12 items-center relative" style={{ zIndex: 1 }}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: COLORS.greenLight }}>
              <Sparkles size={15} className="sparkle-anim" style={{ color: COLORS.green }} />
              <span className="text-xs font-bold tracking-wide uppercase" style={{ color: COLORS.green }}>Now Booking Across Joburg & East Rand</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6" style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy, lineHeight: 1.08 }}>
              Your Space.<br />
              <span style={{ fontFamily: "'Caveat', cursive", color: COLORS.green, fontWeight: 700 }} className="text-5xl md:text-6xl lg:text-7xl">Our Solution.</span>
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-md" style={{ color: COLORS.slate }}>
              Reliable, affordable cleaning for homes and businesses across Johannesburg and the East Rand, customized to your space, your schedule, your standards.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <button onClick={() => setPage('contact')} className="px-7 py-3.5 rounded-full font-bold text-white flex items-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.green }}>
                Get a Free Quote <ArrowRight size={18} />
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-full font-bold text-white flex items-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.whatsapp }}>
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
            <StatStrip />
          </div>

          <div className="relative">
            <div className="float-anim rounded-3xl overflow-hidden" style={{ boxShadow: '0 30px 60px rgba(14,41,84,0.20)', background: COLORS.paleBlue, aspectRatio: '4 / 5' }}>
              <img src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Professional cleaning team ready to work in a modern living room" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block absolute" style={{ bottom: -24, left: -24 }}>
              <TrustBadge />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8" style={{ background: COLORS.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-3 text-white">
          {['Free, No-Obligation Quotes', 'Residential & Commercial', 'East Rand Based', 'Fully Customized Plans'].map((t) => (
            <div key={t} className="flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 size={17} style={{ color: COLORS.green }} /> {t}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal><SectionHeading eyebrow="What We Do" title="Cleaning Services for Every Space" subtitle="From a weekly home tidy-up to a full commercial contract, our team handles it with the same attention to detail." /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SERVICES.slice(0, 6).map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <ServiceCard {...s} />
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setPage('services')} className="inline-flex items-center gap-2 font-bold" style={{ color: COLORS.navy }}>
              View All Services <ArrowRight size={18} style={{ color: COLORS.green }} />
            </button>
          </div>
        </div>
      </section>

      <AngleDivider color={COLORS.navy} />
      <section className="py-20 md:py-28" style={{ background: COLORS.navy, marginTop: -2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal><SectionHeading dark eyebrow="Why SolutionWorks" title="Why Homes & Businesses Choose Us" subtitle="We're newly established and building our reputation the right way, one spotless space at a time." /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {WHY_CHOOSE_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="sw-card-lift p-7 rounded-2xl h-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: COLORS.green }}>
                    <w.icon size={22} color="#FFFFFF" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{w.title}</h3>
                  <p className="text-sm" style={{ color: '#B7C4DA' }}>{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <AngleDivider color={COLORS.white} flip />

      <BeforeAfterShowcase />

      <section className="py-20 md:py-28" style={{ background: COLORS.paleBlue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal><SectionHeading eyebrow="Getting Started" title="How It Works" subtitle="From your first message to a spotless space, here's exactly what happens." /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {HOW_IT_WORKS.map((h, i) => (
              <Reveal key={h.step} delay={i * 0.08}>
                <div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: COLORS.greenLight }}>
                    <h.icon size={24} style={{ color: COLORS.green }} />
                  </div>
                  <span style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.green }} className="text-xs font-extrabold tracking-widest">STEP {h.step}</span>
                  <h3 className="font-bold mt-1 mb-2" style={{ color: COLORS.navy }}>{h.title}</h3>
                  <p className="text-sm" style={{ color: COLORS.slate }}>{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div style={{ background: COLORS.paleBlue, aspectRatio: '4 / 3' }} className="rounded-2xl overflow-hidden" >
              <img src="https://images.pexels.com/photos/6197122/pexels-photo-6197122.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Bright, clean modern home interior" className="w-full h-full object-cover" style={{ boxShadow: '0 20px 50px rgba(14,41,84,0.15)' }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.green }}>About SolutionWorks</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="text-3xl md:text-4xl font-extrabold mt-3 mb-5">Newly Established. Built On Old-Fashioned Reliability.</h2>
            <p className="mb-4" style={{ color: COLORS.slate }}>SolutionWorks (Pty) Ltd is a professional cleaning company committed to reliable, affordable, high-quality service for residential and commercial clients across Johannesburg and the East Rand.</p>
            <p className="mb-6" style={{ color: COLORS.slate }}>Every client gets a customized plan, because no two spaces, and no two schedules, are the same.</p>
            <button onClick={() => setPage('about')} className="inline-flex items-center gap-2 font-bold" style={{ color: COLORS.navy }}>
              Learn More About Us <ArrowRight size={18} style={{ color: COLORS.green }} />
            </button>
          </Reveal>
        </div>
      </section>

      <CTABanner setPage={setPage} />
    </>
  );
}

function AboutPage({ setPage }) {
  return (
    <>
      <PageHero eyebrow="About Us" title="Clean Spaces. Better Places." subtitle="The story and the standards behind SolutionWorks." />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div style={{ background: COLORS.paleBlue, aspectRatio: '4 / 5' }} className="rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/6195131/pexels-photo-6195131.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Three SolutionWorks cleaners in a modern home interior" className="w-full h-full object-cover" style={{ boxShadow: '0 20px 50px rgba(14,41,84,0.15)' }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.green }}>Who We Are</span>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="text-3xl md:text-4xl font-extrabold mt-3 mb-5">A Newly Established Team, Built On Real Standards</h2>
            <p className="mb-4" style={{ color: COLORS.slate }}>SolutionWorks (Pty) Ltd is a professional cleaning company committed to providing reliable, affordable, and high-quality cleaning services to residential and commercial clients across Johannesburg and the East Rand.</p>
            <p className="mb-4" style={{ color: COLORS.slate }}>Our goal is to create clean, healthy, and welcoming environments while building long-term relationships through exceptional customer service and attention to detail.</p>
            <p style={{ color: COLORS.slate }}>We understand that every client has unique cleaning requirements. That's why we offer customized cleaning solutions designed to meet individual needs while maintaining the highest standards of cleanliness and professionalism.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: COLORS.greenLight }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <Leaf size={34} style={{ color: COLORS.green }} className="mx-auto mb-5" />
            <h2 style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="text-2xl md:text-3xl font-extrabold mb-4">Our Commitment</h2>
            <p style={{ color: COLORS.slate }} className="text-lg">
              We are committed to providing dependable, efficient, and professional cleaning services while maintaining high standards of cleanliness, safety, and customer care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal><SectionHeading eyebrow="Why Choose Us" title="What Sets Us Apart" /></Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {WHY_CHOOSE_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <ServiceCard icon={w.icon} title={w.title} desc={w.desc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner setPage={setPage} />
    </>
  );
}

function ServicesPage({ setPage }) {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Cleaning Services for Every Space" subtitle="Residential or commercial, once-off or ongoing, here's everything we handle." />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: COLORS.paleBlue }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div style={{ background: COLORS.white, aspectRatio: '4 / 3' }} className="rounded-2xl overflow-hidden">
              <img src="https://images.pexels.com/photos/9300768/pexels-photo-9300768.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Spacious, contemporary commercial office interior" className="w-full h-full object-cover" style={{ boxShadow: '0 20px 50px rgba(14,41,84,0.15)' }} />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="text-2xl md:text-3xl font-extrabold mb-4">Not Sure Which Service You Need?</h2>
            <p className="mb-6" style={{ color: COLORS.slate }}>Tell us about your space and we'll recommend the right service and schedule, no pressure, no obligation.</p>
            <button onClick={() => setPage('contact')} className="px-7 py-3.5 rounded-full font-bold text-white inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.green }}>
              Ask Us <ArrowRight size={18} />
            </button>
          </Reveal>
        </div>
      </section>

      <CTABanner setPage={setPage} />
    </>
  );
}

function PricingPage({ setPage }) {
  return (
    <>
      <PageHero eyebrow="Pricing" title="Straightforward, Competitive Pricing" subtitle="Free quotes, no obligation. VAT included in every listed price." />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {PRICING_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={(i % 2) * 0.1}>
                <PricingCard {...cat} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: COLORS.paleBlue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-6">
          <Reveal><SimplePriceList icon={CalendarCheck} title="Weekly & Monthly Packages" rows={PACKAGES} /></Reveal>
          <Reveal delay={0.08}><SimplePriceList icon={Sparkles} title="Optional Add-On Services" rows={ADD_ONS} /></Reveal>
          <Reveal delay={0.16}><SimplePriceList icon={MapPin} title="Call-Out Fee" rows={CALL_OUT_FEES} /></Reveal>
          <Reveal delay={0.24}><SimplePriceList icon={Tag} title="Client Discounts" rows={DISCOUNTS} accent /></Reveal>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-sm" style={{ color: COLORS.slate }}>
              All quotes are free and no obligation. Prices are based on the information provided and may vary depending on size, condition, and specific requirements, subject to a site assessment where applicable. Bulk and long-term contracts available on request.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner setPage={setPage} />
    </>
  );
}

function BlogPage({ setPage, onOpenPost }) {
  return (
    <>
      <PageHero eyebrow="Blog" title="Cleaning Tips & Guides" subtitle="Practical advice from our team: pricing guides, checklists, and tips for keeping your space spotless between visits." />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid sm:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 0.1}>
              <BlogCard {...post} onOpen={() => onOpenPost(post.slug)} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner setPage={setPage} />
    </>
  );
}

function BlogPostPage({ post, setPage }) {
  if (!post) {
    return (
      <section className="py-24 text-center">
        <p style={{ color: COLORS.slate }}>That post couldn't be found.</p>
        <button onClick={() => setPage('blog')} className="mt-4 inline-flex items-center gap-1.5 font-bold" style={{ color: COLORS.navy }}>
          <ChevronLeft size={16} style={{ color: COLORS.green }} /> Back to Blog
        </button>
      </section>
    );
  }
  const CategoryIcon = post.categoryIcon;
  return (
    <>
      <section className="relative py-12 md:py-16 overflow-hidden" style={{ background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyDark})` }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 relative">
          <button onClick={() => setPage('blog')} className="inline-flex items-center gap-1.5 text-sm font-semibold mb-6 transition-opacity duration-200 hover:opacity-80" style={{ color: COLORS.green, background: 'none', border: 'none', padding: 0 }}>
            <ChevronLeft size={16} /> Back to Blog
          </button>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.12)', color: COLORS.white }}>
              <CategoryIcon size={12} /> {post.category}
            </span>
            <span className="text-xs flex items-center gap-1" style={{ color: '#B7C4DA' }}><CalendarDays size={12} /> {post.date}</span>
            <span className="text-xs flex items-center gap-1" style={{ color: '#B7C4DA' }}><Clock size={12} /> {post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: "'Poppins', sans-serif" }} className="text-2xl md:text-4xl font-extrabold text-white leading-snug">{post.title}</h1>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div style={{ aspectRatio: '16 / 9', background: COLORS.paleBlue, boxShadow: '0 20px 50px rgba(14,41,84,0.2)' }} className="rounded-2xl overflow-hidden mb-10">
            <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {post.content.map((block, i) => {
            if (block.type === 'h2') {
              return <h2 key={i} style={{ fontFamily: "'Poppins', sans-serif", color: COLORS.navy }} className="text-xl md:text-2xl font-extrabold mt-10 mb-4">{block.text}</h2>;
            }
            if (block.type === 'p') {
              return <p key={i} className="text-base leading-relaxed mb-5" style={{ color: COLORS.slate }}>{block.text}</p>;
            }
            if (block.type === 'list') {
              return (
                <ul key={i} className="mb-6 space-y-2.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-base" style={{ color: COLORS.slate }}>
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}

          <div className="mt-12 p-8 rounded-2xl text-center" style={{ background: COLORS.greenLight }}>
            <h3 style={{ color: COLORS.navy }} className="font-bold text-lg mb-2">Ready to book, or still have questions?</h3>
            <p className="text-sm mb-5" style={{ color: COLORS.slate }}>Get a free, no-obligation quote for your space.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <button onClick={() => setPage('contact')} className="px-6 py-3 rounded-full font-bold text-white transition-transform duration-200 hover:scale-105" style={{ background: COLORS.green }}>Get a Free Quote</button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full font-bold text-white flex items-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.whatsapp }}>
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>

          <button onClick={() => setPage('blog')} className="mt-10 inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: COLORS.navy, background: 'none', border: 'none', padding: 0 }}>
            <ChevronLeft size={16} style={{ color: COLORS.green }} /> Back to All Posts
          </button>
        </div>
      </section>
    </>
  );
}

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: SERVICES[0].title, message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact Us" title="Let's Get Your Free Quote" subtitle="Reach out today, no obligation, just an honest quote for your space." />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <ContactInfoRow icon={MessageCircle} label="WhatsApp (Fastest Reply)" value="076 225 1721" href={WHATSAPP_URL} accent={COLORS.whatsapp} />
              <ContactInfoRow icon={Phone} label="Call Us" value="076 225 1721" href="tel:0762251721" />
              <ContactInfoRow icon={Mail} label="Email" value="kaylanj27@gmail.com" href="mailto:kaylanj27@gmail.com" />
              <ContactInfoRow icon={MapPin} label="Service Area" value="Johannesburg & East Rand, Gauteng" />
              <ContactInfoRow icon={Clock} label="Response Time" value="We usually reply within a few hours" />
              <div className="pt-4">
                <TrustBadge animate={false} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="p-10 rounded-2xl text-center" style={{ background: COLORS.greenLight }}>
                <CheckCircle2 size={40} style={{ color: COLORS.green }} className="mx-auto mb-4" />
                <h3 style={{ color: COLORS.navy }} className="font-bold text-xl mb-2">Thanks, we've got it!</h3>
                <p style={{ color: COLORS.slate }}>We'll be in touch shortly with your free quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl" style={{ background: COLORS.white, border: `1px solid ${COLORS.paleBlue}`, boxShadow: '0 4px 16px rgba(14,41,84,0.06)' }}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Full Name">
                    <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm" style={{ border: `1px solid ${COLORS.paleBlue}` }} placeholder="Your name" />
                  </FormField>
                  <FormField label="Phone Number">
                    <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm" style={{ border: `1px solid ${COLORS.paleBlue}` }} placeholder="082 000 0000" />
                  </FormField>
                </div>
                <FormField label="Email Address">
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm" style={{ border: `1px solid ${COLORS.paleBlue}` }} placeholder="you@example.com" />
                </FormField>
                <FormField label="Service Needed">
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm" style={{ border: `1px solid ${COLORS.paleBlue}` }}>
                    {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </FormField>
                <FormField label="Tell Us About Your Space">
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-lg text-sm resize-none" style={{ border: `1px solid ${COLORS.paleBlue}` }} placeholder="Number of rooms, how often you'd like us to visit, any specific requirements..." />
                </FormField>
                <button type="submit" className="w-full py-3.5 rounded-full font-bold text-white flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.green }}>
                  Send & Get My Free Quote <Send size={17} />
                </button>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 rounded-full font-bold text-white flex items-center justify-center gap-2 transition-transform duration-200 hover:scale-105" style={{ background: COLORS.whatsapp }}>
                  <MessageCircle size={17} /> Or Chat With Us on WhatsApp
                </a>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ---------------------------------- App ----------------------------------- */

export default function App() {
  const [page, setPage] = useState('home');
  const [activePostSlug, setActivePostSlug] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [page, activePostSlug]);

  const openPost = (slug) => {
    setActivePostSlug(slug);
    setPage('blog-post');
  };

  const activePost = BLOG_POSTS.find((p) => p.slug === activePostSlug) || null;

  const pages = {
    home: <HomePage setPage={setPage} />,
    about: <AboutPage setPage={setPage} />,
    services: <ServicesPage setPage={setPage} />,
    pricing: <PricingPage setPage={setPage} />,
    blog: <BlogPage setPage={setPage} onOpenPost={openPost} />,
    'blog-post': <BlogPostPage post={activePost} setPage={setPage} />,
    contact: <ContactPage />,
  };

  return (
    <div className="sw-root min-h-screen" style={{ fontFamily: "'Inter', sans-serif", color: COLORS.slate, background: COLORS.white }}>
      <GlobalStyles />
      <Navbar page={page} setPage={setPage} />
      <main key={page + (activePostSlug || '')} className="page-fade">
        {pages[page]}
      </main>
      <Footer setPage={setPage} />
      <WhatsAppFloat />
    </div>
  );
}