import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Microscope, 
  Sparkles, 
  CheckCircle, 
  Activity,
  Layers,
  Thermometer,
  ArrowRightLeft,
  Wheat
} from 'lucide-react';

export default function QualityInfrastructure() {
  const [sliderPos, setSliderPos] = useState(50);

  const infraItems = [
    {
      title: 'Buhler Roller Mill & Purifiers',
      icon: Cpu,
      tag: 'Milling Technology',
      desc: 'Precision chilled iron rollers and air purifiers for clean endosperm separation, exact mesh granulation, and zero thermal degradation.'
    },
    {
      title: 'In-House Cereal Testing Laboratory',
      icon: Microscope,
      tag: 'Flour Quality Control',
      desc: 'Advanced testing instruments evaluating Gluten %, Farinograph water absorption (68-72%), Falling Number (350+ sec), and ash content.'
    },
    {
      title: 'Density De-Stoning & Magnetic Trap',
      icon: Layers,
      tag: 'Foreign Matter Zero-Tolerance',
      desc: 'Multi-stage specific gravity tables and neodymium high-intensity magnetic traps ensure 100% elimination of stones, dust, and metal particles.'
    },
    {
      title: 'Hygienic Air-Sealed Bagging Lines',
      icon: Thermometer,
      tag: 'Food Safety Hygiene',
      desc: 'Positive air pressure packaging chambers with nitrogen flushing and metal detection ensure zero infestation and 9-month shelf life.'
    }
  ];

  return (
    <section id="quality" className="section section-muted" style={{ backgroundColor: '#f5f1e6' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <ShieldCheck size={14} /> Laboratory &amp; Milling Infrastructure
          </span>
          <h2 className="section-title">
            Engineering Pure Whole Wheat Nutrition Across Every Bag
          </h2>
          <p className="section-subtitle">
            Advanced roller milling infrastructure coupled with traditional cold stone chakki grinding to deliver high water absorption and ultra-soft rotis.
          </p>
        </div>

        {/* Interactive Flour Fineness Comparison Widget */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="purity-comparison-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span style={{ backgroundColor: 'rgba(132, 169, 60, 0.25)', color: '#b5d867', padding: '0.3rem 0.85rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Interactive Flour Demo
                </span>
                <h3 style={{ fontSize: '1.55rem', color: '#ffffff', fontWeight: 800, margin: '0.4rem 0 0 0' }}>
                  Raw Uncleaned Grain vs. Cold Chakki Fresh Whole Wheat Atta
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.85rem' }}>
                <span style={{ color: '#f87171', fontWeight: 700 }}>● Raw Uncleaned Grain</span>
                <span style={{ color: '#b5d867', fontWeight: 700 }}>● KAI Khushbu Chakki Atta</span>
              </div>
            </div>

            {/* Slider Container */}
            <div style={{
              position: 'relative',
              height: '290px',
              borderRadius: '18px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              userSelect: 'none'
            }}>
              {/* After Image (Fine Soft Chakki Atta) */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  backgroundColor: 'rgba(132, 169, 60, 0.95)',
                  color: '#ffffff',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                }}>
                  ✨ KAI Khushbu Chakki Fresh Atta (100% Pure Whole Wheat)
                </div>
              </div>

              {/* Before Image (Raw Uncleaned Harvest) Clip Path */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPos}%`,
                backgroundImage: `url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'sepia(0.3) contrast(1.1)',
                borderRight: '3.5px solid #84a93c'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(28, 25, 23, 0.9)',
                  color: '#f2c179',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '8px',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                }}>
                  🌾 Field Raw Harvest Kernels
                </div>
              </div>

              {/* Slider Input Handle Overlay */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(e.target.value)}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'ew-resize',
                  zIndex: 10
                }}
              />

              {/* Visual Divider Line Handle */}
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: '4px',
                backgroundColor: '#ffffff',
                transform: 'translateX(-50%)',
                boxShadow: '0 0 14px rgba(0,0,0,0.8)',
                pointerEvents: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#84a93c',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
                  border: '2.5px solid #ffffff'
                }}>
                  <ArrowRightLeft size={18} />
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.85rem', color: '#ded8c4' }}>
              Drag the slider to compare raw field grain vs. KAI Khushbu cold stone-milled Chakki Fresh Atta.
            </div>
          </div>
        </div>

        {/* 2-Column Infrastructure Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Left Column */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '1.25rem'
          }}>
            {infraItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    gap: '1.25rem',
                    alignItems: 'flex-start',
                    borderRadius: '16px'
                  }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#f4fce8',
                    border: '1.5px solid #b5d867',
                    color: '#84a93c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#84a93c', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.tag}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', color: '#1c1917', fontWeight: 800, margin: '0.15rem 0 0.4rem 0' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column Showcase */}
          <div className="glass-card-dark" style={{
            padding: '2.5rem',
            color: '#ffffff',
            position: 'relative',
            borderRadius: '24px'
          }}>
            <span style={{
              backgroundColor: 'rgba(132, 169, 60, 0.25)',
              color: '#b5d867',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              Milling Facility Standards
            </span>

            <h3 style={{ fontSize: '1.75rem', color: '#ffffff', fontWeight: 900, marginBottom: '1rem' }}>
              Uncompromising Atta &amp; Flour Purity
            </h3>

            <p style={{ color: '#ded8c4', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Our milling plant is engineered with isolated dust-free grinding corridors, automatic dampening mixers, and food-grade stainless steel pneumatics.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#b5d867' }}>
                <CheckCircle size={18} color="#84a93c" /> 100% Pure Whole Wheat (Zero Maida Adulteration)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#b5d867' }}>
                <CheckCircle size={18} color="#84a93c" /> Cold air-cooled stone chakki grinding
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#b5d867' }}>
                <CheckCircle size={18} color="#84a93c" /> High Farinograph water absorption (68-72%)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: '#b5d867' }}>
                <CheckCircle size={18} color="#84a93c" /> Sealed nitrogen-flushed consumer bags
              </li>
            </ul>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              borderRadius: '14px',
              padding: '1.25rem',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Plant Daily Capacity</div>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#f2c179' }}>300+ Metric Tons</div>
              </div>
              <a href="#contact" className="btn btn-primary btn-sm">
                Schedule Mill Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
