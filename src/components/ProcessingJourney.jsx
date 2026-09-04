import React, { useState, useEffect } from 'react';
import { 
  Wheat, 
  Wind, 
  Layers, 
  Settings, 
  ScanSearch, 
  BadgeCheck, 
  PackageCheck,
  Sparkles,
  Award,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Cpu,
  ArrowRight
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Grain Sourcing & Selection',
    subtitle: 'MP Sharbati & Lokwan Wheat',
    icon: Wheat,
    desc: 'Golden wheat kernels harvested from Madhya Pradesh farms are rigorously tested for moisture, falling number, and wet gluten vitality before entering storage silos.',
    specs: [
      { label: 'Kernel Density', val: '78–82 kg/hL' },
      { label: 'Moisture Limit', val: '< 11.5%' },
      { label: 'Gluten Index', val: '32–34%' }
    ],
    highlight: '100% Direct APMC Mandi Sourced'
  },
  {
    step: '02',
    title: 'Cyclone Pre-Cleaning & Scouring',
    subtitle: 'Aspiration & Dust Removal',
    icon: Wind,
    desc: 'High-volume cyclone aspirators and vibratory classifiers remove dust, field straw, loose husks, and lightweight chaff in sealed negative-pressure chambers.',
    specs: [
      { label: 'Efficiency', val: '99.4% Chaff Free' },
      { label: 'Air Speed', val: '4,500 m³/h' },
      { label: 'Separation', val: 'Density-Based' }
    ],
    highlight: 'Zero Impurities Allowed'
  },
  {
    step: '03',
    title: 'De-Stoning & Magnetic Separation',
    subtitle: 'Specific Gravity Sorting',
    icon: Layers,
    desc: 'Vibratory de-stoning tables separate heavy stones and clods, while high-potency neodymium magnetic traps eliminate minute metal particles.',
    specs: [
      { label: 'Magnet Power', val: '10,000 Gauss' },
      { label: 'Stone Purity', val: '100% Removal' },
      { label: 'Safety Level', val: 'Metal Trap Grade' }
    ],
    highlight: 'Ultra-Pure Grain Stream'
  },
  {
    step: '04',
    title: 'Conditioning & Tempering',
    subtitle: 'Controlled Moisture Infusion',
    icon: Settings,
    desc: 'Kernels undergo precise water conditioning for 18–24 hours, toughening the outer pericarp bran layer to allow clean separation of the inner endosperm.',
    specs: [
      { label: 'Resting Time', val: '18–24 Hours' },
      { label: 'Water Temp', val: 'Controlled 24°C' },
      { label: 'Bran Elasticity', val: 'Optimal Toughening' }
    ],
    highlight: 'Preserves Natural Bran Nutrients'
  },
  {
    step: '05',
    title: 'Buhler Roller Milling',
    subtitle: 'Sequential Break & Reduction',
    icon: ScanSearch,
    desc: 'Chilled iron breaker rolls crack the grain cleanly, releasing pure white endosperm while preserving nutrition and avoiding excessive heat generation.',
    specs: [
      { label: 'Roll Tech', val: 'Chilled Cast Iron' },
      { label: 'Precision', val: 'Micro-Mesh Gap' },
      { label: 'Daily Capacity', val: '300 MT / Day' }
    ],
    highlight: 'Swiss Buhler Milling Standard'
  },
  {
    step: '06',
    title: 'Plan-Sifter Mesh Filtration',
    subtitle: 'Multi-Deck Fractionation',
    icon: BadgeCheck,
    desc: 'High-speed plan-sifters sort flour into ultra-pure streams: Whole Wheat Chakki Atta, Superfine Maida, Granular Sooji, and Coarse Bran.',
    specs: [
      { label: 'Sieve Decks', val: '12 Screen Layers' },
      { label: 'Fineness Range', val: '100–300 Mesh' },
      { label: 'Products', val: 'Atta / Maida / Sooji' }
    ],
    highlight: 'Exact Micron Sieve Control'
  },
  {
    step: '07',
    title: 'Cold Air Chakki & Packaging',
    subtitle: 'Nitrogen Flush Pouching',
    icon: PackageCheck,
    desc: 'Traditional natural granite stone chakkis cooled with refrigerated air grind the bran and endosperm into soft, fragrant Atta, bagged under cleanroom conditions.',
    specs: [
      { label: 'Grinding Temp', val: '< 30°C Cold Air' },
      { label: 'Hygiene Standard', val: 'ISO 22000 & FSSAI' },
      { label: 'Freshness', val: '12+ Hour Soft Rotis' }
    ],
    highlight: 'Zero Chemical Bleaching Guarantee'
  }
];

export default function ProcessingJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto transition step every 4.5 seconds unless hovered
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const current = processSteps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section 
      id="process" 
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
      style={{
        backgroundColor: '#14110e',
        color: '#ffffff',
        padding: '5.5rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambient Glow Spheres */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107, 142, 35, 0.14) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(217, 155, 56, 0.12) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* 1. Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.55rem',
            backgroundColor: 'rgba(107, 142, 35, 0.18)',
            border: '1.5px solid rgba(107, 142, 35, 0.4)',
            color: '#9fc152',
            padding: '0.4rem 1.2rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem'
          }}>
            <Sparkles size={15} color="#6b8e23" />
            <span>State-of-the-Art Flour Milling Journey</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            7 Precision Milling Stages.<br />
            <span style={{
              background: 'linear-gradient(90deg, #9fc152 0%, #f4be6b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Zero Compromise On Nutrition.
            </span>
          </h2>

          <p style={{
            color: '#efe8d8',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Combining traditional stone chakki cold grinding with Swiss Buhler roller mill filtration to produce 100% natural, golden whole wheat flour.
          </p>
        </div>

        {/* 2. Interactive Stepper Timeline Bar */}
        <div style={{
          position: 'relative',
          marginBottom: '2.5rem',
          padding: '1.25rem 1rem',
          backgroundColor: 'rgba(43, 35, 25, 0.6)',
          border: '1px solid rgba(107, 142, 35, 0.3)',
          borderRadius: '24px',
          backdropFilter: 'blur(12px)'
        }}>
          {/* Connector Progress Line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            right: '5%',
            height: '3px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            transform: 'translateY(-50%)',
            zIndex: 1
          }}>
            <div style={{
              height: '100%',
              width: `${(activeStep / (processSteps.length - 1)) * 100}%`,
              background: 'linear-gradient(90deg, #6b8e23 0%, #d99b38 100%)',
              transition: 'width 0.5s ease'
            }} />
          </div>

          <div 
            className="horizontal-scroll-touch"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              position: 'relative',
              zIndex: 2,
              overflowX: 'auto',
              gap: '0.5rem',
              padding: '0.25rem 0'
            }}
          >
            {processSteps.map((s, idx) => {
              const isActive = idx === activeStep;
              const isPassed = idx < activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    minWidth: '70px',
                    outline: 'none',
                    flexShrink: 0
                  }}
                >
                  <div style={{
                    width: isActive ? '44px' : '34px',
                    height: isActive ? '44px' : '34px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#54b435' : isPassed ? '#2b2319' : '#1c1712',
                    border: isActive 
                      ? '3px solid #88dc6a' 
                      : isPassed 
                      ? '2px solid #54b435' 
                      : '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: isActive ? '0 0 18px rgba(84, 180, 53, 0.6)' : 'none',
                    color: isActive ? '#ffffff' : isPassed ? '#88dc6a' : '#888888',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: isActive ? '0.92rem' : '0.78rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading)',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                  }}>
                    {s.step}
                  </div>

                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: isActive ? 800 : 500,
                    color: isActive ? '#88dc6a' : '#888888',
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                  }}>
                    Stage {s.step}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Detailed Stage Spotlight Card */}
        <div style={{
          backgroundColor: '#1f1a14',
          border: '2px solid #54b435',
          borderRadius: '24px',
          padding: 'clamp(1.25rem, 4vw, 2.25rem)',
          marginBottom: '2.5rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            
            {/* Left Side: Stage Information */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: '#54b435',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 20px rgba(84, 180, 53, 0.4)',
                  flexShrink: 0
                }}>
                  <CurrentIcon size={26} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{
                      backgroundColor: 'rgba(107, 142, 35, 0.3)',
                      color: '#9fc152',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      textTransform: 'uppercase'
                    }}>
                      Stage {current.step} of 07
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#f4be6b', fontWeight: 700 }}>
                      {current.subtitle}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.65rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    marginTop: '0.25rem',
                    margin: 0
                  }}>
                    {current.title}
                  </h3>
                </div>
              </div>

              <p style={{
                color: '#efe8d8',
                fontSize: '0.98rem',
                lineHeight: 1.6,
                marginBottom: '1.35rem',
                fontWeight: 400
              }}>
                {current.desc}
              </p>

              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: 'rgba(217, 155, 56, 0.15)',
                border: '1px solid rgba(217, 155, 56, 0.4)',
                padding: '0.45rem 0.95rem',
                borderRadius: '12px',
                color: '#f4be6b',
                fontSize: '0.82rem',
                fontWeight: 700
              }}>
                <CheckCircle2 size={16} color="#f4be6b" />
                <span>{current.highlight}</span>
              </div>
            </div>

            {/* Right Side: Technical Specs & Controls */}
            <div style={{
              backgroundColor: '#14110e',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.15rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#9fc152',
                fontSize: '0.8rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                <Cpu size={15} /> Stage Technical Specifications
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.85rem' }}>
                {current.specs.map((spec, idx) => (
                  <div key={idx} style={{
                    backgroundColor: 'rgba(43, 35, 25, 0.7)',
                    border: '1px solid rgba(107, 142, 35, 0.25)',
                    borderRadius: '12px',
                    padding: '0.75rem 0.9rem'
                  }}>
                    <div style={{ fontSize: '0.7rem', color: '#aaaaaa', fontWeight: 600, marginBottom: '0.2rem' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontSize: '0.98rem', color: '#ffffff', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.75rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                <button
                  onClick={() => setActiveStep((prev) => (prev - 1 + processSteps.length) % processSteps.length)}
                  className="btn btn-outline-white btn-sm"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  <ChevronLeft size={16} /> Previous
                </button>

                <span style={{ fontSize: '0.78rem', color: '#888', fontWeight: 700 }}>
                  {activeStep + 1} / {processSteps.length}
                </span>

                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % processSteps.length)}
                  className="btn btn-primary btn-sm"
                  style={{ padding: '0.45rem 0.95rem', fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                >
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Sleek Horizontal Stage Selector Strip (Replaces cluttered 7-card grid!) */}
        <div style={{
          display: 'flex',
          gap: '0.75rem',
          overflowX: 'auto',
          paddingBottom: '1rem',
          marginBottom: '2.5rem'
        }}>
          {processSteps.map((item, idx) => {
            const Icon = item.icon;
            const isHighlighted = idx === activeStep;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  backgroundColor: isHighlighted ? '#6b8e23' : 'rgba(31, 26, 20, 0.85)',
                  border: isHighlighted ? '2px solid #9fc152' : '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '16px',
                  padding: '0.85rem 1.25rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.25s ease',
                  boxShadow: isHighlighted ? '0 8px 20px rgba(107, 142, 35, 0.35)' : 'none',
                  outline: 'none'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  backgroundColor: isHighlighted ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
                  color: isHighlighted ? '#6b8e23' : '#9fc152',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900
                }}>
                  <Icon size={18} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.7rem', color: isHighlighted ? '#ffffff' : '#f4be6b', fontWeight: 800 }}>
                    Stage {item.step}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 5. Bottom Guarantee Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(43, 35, 25, 0.95) 0%, rgba(20, 17, 14, 0.98) 100%)',
          border: '1.5px solid #d99b38',
          borderRadius: '24px',
          padding: '1.75rem 2.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem',
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '14px',
              backgroundColor: '#d99b38',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(217, 155, 56, 0.4)'
            }}>
              <Award size={28} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', margin: 0, fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                100% Cold Air Stone Chakki Milling Guarantee
              </h4>
              <p style={{ color: '#efe8d8', fontSize: '0.85rem', margin: '0.25rem 0 0 0' }}>
                Every consignment is pre-certified for Gluten %, Falling Number, Ash Content, and Zero Chemical Bleaching.
              </p>
            </div>
          </div>

          <a 
            href="#contact" 
            className="btn btn-primary btn-md" 
            style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
          >
            Request Milling Audit &amp; Flour Samples <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
