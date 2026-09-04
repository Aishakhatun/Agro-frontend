import React, { useState, useEffect } from 'react';
import { 
  product10, 
  product17, 
  product13
} from '../assets';
import { 
  ArrowRight, 
  Package, 
  Truck, 
  Globe2,
  ChevronLeft,
  ChevronRight,
  Leaf
} from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600&q=85',
    kicker: 'KAI Khushbu Wheat Mills · Since 1988',
    title: 'Pure Wheat. Pure Flour.',
    desc: '100% natural whole wheat atta, maida & sooji — for homes, bakeries, and global export.'
  },
  {
    image: 'https://images.unsplash.com/photo-1543257580-7269da773bf5?auto=format&fit=crop&w=1600&q=85',
    kicker: 'Cold Air Stone Chakki Milling',
    title: 'Soft Rotis. No Chemicals.',
    desc: 'Stone-ground with cold air to keep every grain naturally sweet, nutritious, and fresh.'
  },
  {
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=85',
    kicker: 'FSSAI · ISO 22000 · APEDA Certified',
    title: 'Export-Grade Quality.',
    desc: 'From 1 kg retail pouches to 50 kg export bags — shipped to 20+ countries worldwide.'
  }
];

const buyerPaths = [
  { label: 'Retail Pouches', sub: '1 kg – 10 kg', icon: Package, path: 'Retail & Distribution', color: '#9fc152' },
  { label: 'Bulk Flour', sub: '25 kg – 50 kg', icon: Truck, path: 'Wholesale Supply', color: '#f4be6b' },
  { label: 'Container Export', sub: 'FCL / LCL', icon: Globe2, path: 'Export & International Trade', color: '#88dc6a' }
];

export default function Hero({ onOpenQuote, onSelectPath }) {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[activeSlide];

  return (
    <section id="home" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#19140e', color: '#ffffff' }}>
      {/* Background Slider */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        {heroSlides.map((s, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: idx === activeSlide ? 0.45 : 0,
              transition: 'opacity 0.9s ease',
            }}
          />
        ))}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,16,10,0.55) 0%, rgba(20,16,10,0.85) 100%)'
        }} />
      </div>

      {/* Main Content */}
      <div className="container-custom" style={{
        position: 'relative',
        zIndex: 5,
        paddingTop: '6rem',
        paddingBottom: '4.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>

        {/* Kicker */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.45rem',
          color: '#88dc6a',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
          opacity: 0.9
        }}>
          <Leaf size={14} />
          <span>{slide.kicker}</span>
        </div>

        {/* Title */}
        <div style={{ minHeight: 'clamp(3rem, 8vw, 6rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <h1 style={{
            color: '#ffffff',
            fontSize: 'clamp(2.2rem, 6vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            maxWidth: '800px',
            fontFamily: 'var(--font-heading)',
            margin: 0,
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            {slide.title}
          </h1>
        </div>

        {/* Subtitle */}
        <div style={{ minHeight: 'clamp(2.5rem, 4vw, 3.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <p style={{
            color: '#d4cbb8',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            maxWidth: '600px',
            lineHeight: 1.6,
            fontWeight: 400,
            margin: 0
          }}>
            {slide.desc}
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <button
            onClick={() => onOpenQuote('Wholesale Wheat & Atta Inquiry')}
            className="btn btn-primary btn-lg"
          >
            Get a Quote <ArrowRight size={17} />
          </button>
          <a href="#products" className="btn btn-outline-white btn-lg">
            View Products
          </a>
        </div>

        {/* Slide Dots */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          <button
            onClick={() => setActiveSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: '0.2rem' }}
          >
            <ChevronLeft size={18} />
          </button>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              style={{
                width: i === activeSlide ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: i === activeSlide ? '#54b435' : 'rgba(255,255,255,0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
          <button
            onClick={() => setActiveSlide((p) => (p + 1) % heroSlides.length)}
            style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', cursor: 'pointer', padding: '0.2rem' }}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* 3 Compact Buyer Paths */}
        <div style={{
          width: '100%',
          maxWidth: '700px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '0.85rem'
        }}>
          {buyerPaths.map((path) => {
            const Icon = path.icon;
            return (
              <button
                key={path.path}
                onClick={() => onSelectPath(path.path)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1.1rem',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(43, 35, 25, 0.7)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  cursor: 'pointer',
                  textAlign: 'left',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = path.color;
                  e.currentTarget.style.backgroundColor = 'rgba(43,35,25,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(43,35,25,0.7)';
                }}
              >
                <Icon size={20} color={path.color} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#ffffff' }}>{path.label}</div>
                  <div style={{ fontSize: '0.75rem', color: path.color, fontWeight: 600 }}>{path.sub}</div>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
