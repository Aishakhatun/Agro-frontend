import React from 'react';
import { 
  Building2, 
  Wheat, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Leaf,
  Users,
  SunMedium,
  TrendingUp
} from 'lucide-react';

export default function AboutUsSection({ onOpenQuote }) {
  const pillars = [
    {
      icon: Wheat,
      title: 'Direct Farm Sourcing',
      desc: 'We buy golden Sharbati & Lokwan wheat directly from trusted farmers in Madhya Pradesh to guarantee pure grain quality.'
    },
    {
      icon: Leaf,
      title: '100% Natural & Chemical-Free',
      desc: 'No artificial preservatives, zero bleaching, and no chemicals. Pure whole wheat ground the natural way.'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Cold-Chakki Milling',
      desc: 'Our stones are cooled with refrigerated air during grinding to protect natural vitamins, sweetness, and aroma.'
    },
    {
      icon: HeartHandshake,
      title: 'Trusted by Families & Bakeries',
      desc: 'Serving commercial bakeries, grocery chains, and millions of homes across India and international markets since 1988.'
    }
  ];

  const milestones = [
    { year: '1988', title: 'Founded in Gujarat', desc: 'Started our first traditional stone chakki mill with a promise of 100% pure flour.' },
    { year: '2005', title: 'Modern Expansion', desc: 'Added Swiss Buhler roller milling technology to serve commercial bakeries.' },
    { year: '2016', title: 'Global Export', desc: 'Began exporting premium MP Sharbati wheat flour to Dubai and the Middle East.' },
    { year: 'Today', title: '300+ MT Daily Output', desc: 'One of Gujarat’s most trusted milling facilities with pan-India distribution.' }
  ];

  return (
    <section id="about" style={{ backgroundColor: '#ffffff', padding: '5.5rem 0', position: 'relative' }}>
      <div className="container-custom">
        
        {/* 1. Header Eyebrow & Title */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            backgroundColor: 'rgba(107, 142, 35, 0.12)',
            border: '1.5px solid rgba(107, 142, 35, 0.3)',
            color: '#5c7b1e',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem'
          }}>
            <Sparkles size={15} color="#6b8e23" />
            <span>About Khushbu Agro Industries</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#2b2319',
            marginBottom: '1rem'
          }}>
            Pure Flour. Honest Quality.<br />
            <span style={{ color: '#54b435' }}>
              Milling Excellence Since 1988.
            </span>
          </h2>

          <p style={{
            color: '#55493b',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            For over 38 years, Khushbu Agro Industries has been dedicated to bringing natural, unadulterated wheat flour and grains from farm fields directly to your kitchen.
          </p>
        </div>

        {/* 2. Story Grid (2 Columns: Story & Visual Card) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '4.5rem'
        }}>
          {/* Left Story Text */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#6b8e23',
              fontSize: '0.82rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '0.75rem'
            }}>
              <Building2 size={16} /> Our Heritage &amp; Mission
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)',
              fontWeight: 900,
              color: '#2b2319',
              lineHeight: 1.25,
              marginBottom: '1.25rem'
            }}>
              From Golden MP Wheat Fields to Daily Kitchens Across the World
            </h3>

            <p style={{ color: '#55493b', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1rem' }}>
              Located in the heart of Gujarat's agricultural corridor in Himatnagar, Khushbu Agro Industries operates a modern milling plant that blends traditional stone chakki cold-grinding with precision Swiss Buhler roller mills.
            </p>

            <p style={{ color: '#55493b', fontSize: '0.96rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              We believe good health starts with wholesome food. That is why we never use chemical bleaches or artificial additives. Every grain is cleaned through optical cameras and stone separators to ensure your rotis stay naturally sweet, soft, and nutritious.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2b2319', fontSize: '0.92rem', fontWeight: 700 }}>
                <CheckCircle2 size={18} color="#54b435" /> 100% Whole Wheat with Zero Added Maida
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2b2319', fontSize: '0.92rem', fontWeight: 700 }}>
                <CheckCircle2 size={18} color="#54b435" /> Soft Rotis Guaranteed for 12+ Hours
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#2b2319', fontSize: '0.92rem', fontWeight: 700 }}>
                <CheckCircle2 size={18} color="#54b435" /> FSSAI, ISO 22000 &amp; APEDA Export Certified
              </div>
            </div>

            <a 
              href="#contact" 
              className="btn btn-primary btn-md"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
            >
              Get in Touch With Us <ArrowRight size={16} />
            </a>
          </div>

          {/* Right Highlight Box with Stat Badges */}
          <div style={{
            backgroundColor: '#faf7f2',
            border: '2px solid #e8dfc9',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            position: 'relative',
            boxShadow: '0 12px 35px rgba(43, 35, 25, 0.06)'
          }}>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.35rem',
              fontWeight: 900,
              color: '#2b2319',
              marginBottom: '1.25rem'
            }}>
              Why Customers Choose Khushbu
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: '#edfbe2',
                      border: '1.5px solid #88dc6a',
                      color: '#379237',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 10px rgba(84, 180, 53, 0.15)'
                    }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.2rem' }}>
                        {pillar.title}
                      </div>
                      <div style={{ fontSize: '0.84rem', color: '#666666', lineHeight: 1.5 }}>
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. Company Journey Timeline (4 Simple Cards) */}
        <div style={{
          backgroundColor: '#19140e',
          borderRadius: '24px',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          color: '#ffffff',
          boxShadow: '0 20px 45px rgba(0,0,0,0.3)'
        }}>
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            <span style={{ fontSize: '0.78rem', color: '#88dc6a', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Our Journey Over Time
            </span>
            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 900,
              color: '#ffffff',
              marginTop: '0.4rem',
              marginBottom: '0.5rem'
            }}>
              Growing With Trust Since 1988
            </h3>
            <p style={{ color: '#efe8d8', fontSize: '0.9rem', margin: 0 }}>
              A quick look at how we grew from a local chakki to an international food exporter.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {milestones.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'rgba(43, 35, 25, 0.75)',
                  border: '1.5px solid rgba(107, 142, 35, 0.35)',
                  borderRadius: '18px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem'
                }}
              >
                <div style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-heading)',
                  color: '#88dc6a'
                }}>
                  {item.year}
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#efe8d8', lineHeight: 1.5 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
