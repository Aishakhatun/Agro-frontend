import React, { useState } from 'react';
import { 
  Wheat, 
  Wind, 
  Layers, 
  Settings, 
  ScanSearch, 
  BadgeCheck, 
  PackageCheck,
  Sparkles,
  Award
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Grain Sourcing & Quality Test',
    subtitle: 'MP Sharbati & Lokwan Selection',
    icon: Wheat,
    desc: 'Golden wheat kernels inspected for test weight (78-82 kg/hL), natural amber color, falling number, and wet gluten vitality.'
  },
  {
    step: '02',
    title: 'Pre-Cleaning & Scouring',
    subtitle: 'Dust & Straw Aspiration',
    icon: Wind,
    desc: 'High-volume cyclone aspirators and vibratory classifiers remove dust, field straw, loose husks, and lightweight chaff.'
  },
  {
    step: '03',
    title: 'De-Stoning & Metal Traps',
    subtitle: 'Specific Gravity Separation',
    icon: Layers,
    desc: 'Vibratory de-stoning tables and high-potency neodymium magnetic separators remove stones, clods, and metal filings.'
  },
  {
    step: '04',
    title: 'Dampening & Tempering',
    subtitle: 'Conditioning Water Control',
    icon: Settings,
    desc: 'Kernels are tempered with purified water for 12 to 24 hours to toughen bran layers for clean endosperm separation.'
  },
  {
    step: '05',
    title: 'Buhler Roller Milling',
    subtitle: 'Sequential Reduction Milling',
    icon: ScanSearch,
    desc: 'Chilled iron breaker rolls crack the grain cleanly, releasing pure white endosperm while leaving bran flakes intact.'
  },
  {
    step: '06',
    title: 'Plan-Sifter Mesh Filtration',
    subtitle: 'Multi-Deck Fractionation',
    icon: BadgeCheck,
    desc: 'High-precision plan-sifter screens separate Chakki Atta, Superfine Maida, Granular Sooji, and Coarse Bran fractions.'
  },
  {
    step: '07',
    title: 'Cold Air Chakki & Hygienic Packing',
    subtitle: 'Nitrogen Pouch & Bulk Bagging',
    icon: PackageCheck,
    desc: 'Cold air-cooled stone chakkis grind whole wheat flour without heat build-up, packed under cleanroom hygiene in laminated bags.'
  }
];

export default function ProcessingJourney() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="section section-dark" style={{ backgroundColor: '#1c1917' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} /> Flour Milling Technology
          </span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            One Controlled Journey. Seven Milling Stages.
          </h2>
          <p className="section-subtitle">
            A state-of-the-art production workflow combining traditional stone chakki cold grinding with modern Buhler roller mill filtration.
          </p>
        </div>

        {/* Process Step Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '3rem'
        }}>
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            const isHighlighted = idx === activeStep;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: isHighlighted ? 'rgba(132, 169, 60, 0.22)' : 'rgba(41, 37, 36, 0.55)',
                  border: isHighlighted ? '2px solid #84a93c' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '18px',
                  padding: '1.6rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: isHighlighted ? '#84a93c' : 'rgba(255, 255, 255, 0.08)',
                    color: isHighlighted ? '#ffffff' : '#b5d867',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <Icon size={24} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: isHighlighted ? '#84a93c' : 'rgba(255, 255, 255, 0.25)'
                  }}>
                    {item.step}
                  </span>
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#b5d867',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '0.25rem'
                }}>
                  {item.subtitle}
                </div>

                <h3 style={{
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.75rem'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#ded8c4',
                  lineHeight: 1.55,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quality Guarantee Box */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(132, 169, 60, 0.2) 0%, rgba(212, 155, 75, 0.2) 100%)',
          border: '1.5px solid rgba(132, 169, 60, 0.4)',
          borderRadius: '20px',
          padding: '1.75rem 2.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#84a93c',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Award size={28} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', margin: 0, fontWeight: 800 }}>
                100% Cold Air Stone Chakki Milling Guarantee
              </h4>
              <p style={{ color: '#ded8c4', fontSize: '0.88rem', margin: '0.2rem 0 0 0' }}>
                Each batch is certified for Gluten %, Falling Number, Ash Content, and Zero Chemical Bleaching.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
            Request Flour Samples / Audit
          </a>
        </div>
      </div>
    </section>
  );
}
