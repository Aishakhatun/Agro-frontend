import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Microscope, 
  Sparkles, 
  CheckCircle2, 
  Activity,
  Layers,
  Thermometer,
  Award,
  BarChart3,
  Flame,
  Droplets,
  Zap,
  ArrowRight,
  FileCheck2
} from 'lucide-react';

const labMetrics = [
  {
    id: 'gluten',
    name: 'Wet Gluten Vitality',
    value: '32.5%',
    unit: 'Index Value',
    target: 'Min 28.0%',
    industryAvg: '24.0%',
    status: 'Optimal Elasticity',
    icon: Flame,
    color: '#9fc152',
    description: 'Measures dough stretchability and elasticity. High gluten vitality guarantees rotis expand evenly and stay soft for 12+ hours without tearing.',
    method: 'AACC Method 38-12.01 / Glutomatic 2200 System',
    keyBenefit: 'Rotis stay 100% soft and pliable all day long'
  },
  {
    id: 'water',
    name: 'Farinograph Water Absorption',
    value: '71.4%',
    unit: 'Hydration Rate',
    target: '68% - 72%',
    industryAvg: '60.0%',
    status: 'High Water Yield',
    icon: Droplets,
    color: '#6b8e23',
    description: 'Quantifies how much water flour absorbs during kneading. Higher absorption yields higher dough output and longer-lasting moisture retention in baked goods.',
    method: 'Brabender Farinograph-TS Electronic Testing',
    keyBenefit: '35% higher dough volume & soft crumb structure'
  },
  {
    id: 'falling',
    name: 'Hagberg Falling Number',
    value: '385 Sec',
    unit: 'Enzyme Activity',
    target: '350 - 400 Sec',
    industryAvg: '280 Sec',
    status: 'Sound Starch Matrix',
    icon: Activity,
    color: '#f4be6b',
    description: 'Evaluates alpha-amylase enzyme activity. Optimal 380s falling number prevents sticky dough and ensures uniform golden crust color when baked.',
    method: 'Perten Falling Number Instrument (ICC 107/1)',
    keyBenefit: 'Crisp golden crust with zero sticky dough problems'
  },
  {
    id: 'ash',
    name: 'Mineral Ash Content',
    value: '0.48%',
    unit: 'Total Ash',
    target: 'Max 0.52%',
    industryAvg: '0.75%',
    status: 'Ultra-Pure Endosperm',
    icon: Zap,
    color: '#9fc152',
    description: 'Measures flour purity. Lower mineral ash content indicates clean endosperm extraction without excess outer pericarp husk fragments.',
    method: 'High-Temperature Muffle Furnace Incineration (550°C)',
    keyBenefit: 'Pure bright flour color with zero chemical bleaching'
  }
];

const infraPillars = [
  {
    title: 'Buhler Roller Milling & Air Purifiers',
    icon: Cpu,
    tag: 'Swiss Milling Tech',
    metric: '100–300 Mesh',
    desc: 'Chilled cast iron breaker rolls crack kernels cleanly, while high-velocity air purifiers separate dense endosperm from bran with zero thermal heat degradation.'
  },
  {
    title: 'In-House Cereal Testing Laboratory',
    icon: Microscope,
    tag: 'Quality Control Lab',
    metric: 'Batch-Wise COA',
    desc: 'Equipped with Brabender Farinographs, Glutomatic systems, and rapid moisture analyzers to issue certified Certificate of Analysis for every batch.'
  },
  {
    title: 'Specific Gravity De-Stoning & Magnets',
    icon: Layers,
    tag: 'Zero-Impurity System',
    metric: '10,000 Gauss',
    desc: 'Multi-deck vibratory de-stoning tables and high-intensity neodymium rare-earth magnetic traps ensure 100% elimination of stones and metal particles.'
  },
  {
    title: 'Cleanroom Positive-Air Bagging Lines',
    icon: Thermometer,
    tag: 'Hygienic Packaging',
    metric: 'ISO 22000 & FSSAI',
    desc: 'Automated positive-pressure packaging chambers with nitrogen flushing and metal detection ensure zero infestation and 9-month freshness.'
  }
];

export default function QualityInfrastructure() {
  const [activeMetricId, setActiveMetricId] = useState('gluten');

  const activeMetric = labMetrics.find(m => m.id === activeMetricId) || labMetrics[0];
  const ActiveIcon = activeMetric.icon;

  return (
    <section id="quality" style={{ backgroundColor: '#181410', color: '#ffffff', padding: '6rem 0', position: 'relative' }}>
      
      <div className="container-custom" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
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
            <ShieldCheck size={15} color="#6b8e23" />
            <span>Cereal Laboratory &amp; Milling Infrastructure</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Engineering Pure Whole Wheat Nutrition.<br />
            <span style={{
              background: 'linear-gradient(90deg, #9fc152 0%, #f4be6b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Scientifically Tested Quality Across Every Batch.
            </span>
          </h2>

          <p style={{
            color: '#efe8d8',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Our state-of-the-art cereal testing laboratory evaluates wet gluten, water absorption, and falling number to guarantee 100% consistent flour performance.
          </p>
        </div>

        {/* Brand New Modern Interactive Cereal Quality Lab Dashboard */}
        <div style={{
          backgroundColor: '#231d17',
          border: '2px solid #6b8e23',
          borderRadius: '28px',
          padding: '2.5rem',
          marginBottom: '4rem',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Dashboard Header Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '1.5rem',
            marginBottom: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#6b8e23',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BarChart3 size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: '#9fc152', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Real-Time Quality Standards
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#ffffff', fontWeight: 900, margin: 0, fontFamily: 'var(--font-heading)' }}>
                  Interactive Cereal Testing Laboratory Dashboard
                </h3>
              </div>
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(107, 142, 35, 0.2)',
              border: '1px solid rgba(107, 142, 35, 0.4)',
              padding: '0.4rem 0.95rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              color: '#9fc152',
              fontWeight: 700
            }}>
              <FileCheck2 size={14} /> Batch Certificate of Analysis (COA) Verified
            </div>
          </div>

          {/* Metric Selector Buttons (4 Tabs) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: '0.85rem',
            marginBottom: '2.25rem'
          }}>
            {labMetrics.map((m) => {
              const isActive = m.id === activeMetricId;
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMetricId(m.id)}
                  style={{
                    backgroundColor: isActive ? 'rgba(84, 180, 53, 0.25)' : 'rgba(15, 12, 10, 0.6)',
                    border: isActive ? '2px solid #54b435' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    padding: 'clamp(0.85rem, 3vw, 1.25rem)',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 6px 20px rgba(84, 180, 53, 0.3)' : 'none',
                    transform: isActive ? 'translateY(-2px)' : 'none',
                    outline: 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '10px',
                      backgroundColor: isActive ? '#54b435' : 'rgba(255, 255, 255, 0.08)',
                      color: isActive ? '#ffffff' : '#88dc6a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={17} />
                    </div>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      color: isActive ? '#88dc6a' : '#888888',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '6px'
                    }}>
                      {m.unit}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.75rem', color: '#aaaaaa', fontWeight: 600, marginBottom: '0.15rem' }}>
                    {m.name}
                  </div>
                  <div style={{ fontSize: 'clamp(1.15rem, 3vw, 1.4rem)', color: '#ffffff', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                    {m.value}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Metric Showcase Panel */}
          <div style={{
            backgroundColor: '#181410',
            border: '1.5px solid rgba(84, 180, 53, 0.3)',
            borderRadius: '22px',
            padding: 'clamp(1.25rem, 4vw, 2rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Left Info Column */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#54b435',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <ActiveIcon size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#f4be6b', fontWeight: 800, textTransform: 'uppercase' }}>
                    {activeMetric.status}
                  </span>
                  <h4 style={{ fontSize: '1.45rem', color: '#ffffff', fontWeight: 900, margin: 0, fontFamily: 'var(--font-heading)' }}>
                    {activeMetric.name} ({activeMetric.value})
                  </h4>
                </div>
              </div>

              <p style={{ color: '#efe8d8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {activeMetric.description}
              </p>

              <div style={{
                backgroundColor: 'rgba(217, 155, 56, 0.15)',
                border: '1px solid rgba(217, 155, 56, 0.35)',
                borderRadius: '12px',
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                color: '#f4be6b',
                fontWeight: 700,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <CheckCircle2 size={16} color="#f4be6b" />
                <span>Commercial Benefit: {activeMetric.keyBenefit}</span>
              </div>
            </div>

            {/* Right Comparison Chart & Method Column */}
            <div style={{
              backgroundColor: 'rgba(43, 35, 25, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '18px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <div style={{ fontSize: '0.8rem', color: '#9fc152', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Benchmark Comparison &amp; Protocol
              </div>

              {/* Comparative Progress Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* KAI Khushbu Standard */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#ffffff', fontWeight: 800 }}>KAI Khushbu Mill Standard</span>
                    <span style={{ color: '#9fc152', fontWeight: 900 }}>{activeMetric.value}</span>
                  </div>
                  <div style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '92%', background: 'linear-gradient(90deg, #6b8e23 0%, #9fc152 100%)', borderRadius: '5px' }} />
                  </div>
                </div>

                {/* Industry Average */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
                    <span style={{ color: '#aaaaaa', fontWeight: 600 }}>Standard Market Flour Average</span>
                    <span style={{ color: '#aaaaaa', fontWeight: 700 }}>{activeMetric.industryAvg}</span>
                  </div>
                  <div style={{ height: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '65%', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '5px' }} />
                  </div>
                </div>
              </div>

              <div style={{
                paddingTop: '0.85rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.78rem',
                color: '#aaaaaa'
              }}>
                <span style={{ color: '#ffffff', fontWeight: 700 }}>Testing Protocol:</span> {activeMetric.method}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Infrastructure Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {infraPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#231d17',
                  border: '1.5px solid rgba(107, 142, 35, 0.3)',
                  borderRadius: '20px',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(107, 142, 35, 0.2)',
                    border: '1.5px solid rgba(107, 142, 35, 0.4)',
                    color: '#9fc152',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={22} />
                  </div>
                  <span style={{
                    backgroundColor: 'rgba(217, 155, 56, 0.2)',
                    color: '#f4be6b',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 800
                  }}>
                    {item.metric}
                  </span>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', color: '#9fc152', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>
                    {item.tag}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#ffffff', fontWeight: 900, margin: '0 0 0.5rem 0', fontFamily: 'var(--font-heading)' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: '#efe8d8', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Mill Tour & COA Action Banner */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(43, 35, 25, 0.95) 0%, rgba(20, 17, 14, 0.98) 100%)',
          border: '1.5px solid #d99b38',
          borderRadius: '24px',
          padding: '2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          boxShadow: '0 15px 40px rgba(0,0,0,0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              backgroundColor: '#d99b38',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              boxShadow: '0 8px 20px rgba(217, 155, 56, 0.4)'
            }}>
              <Award size={30} />
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0, fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                Certified Batch Quality &amp; Zero Additives
              </h4>
              <p style={{ color: '#efe8d8', fontSize: '0.88rem', margin: '0.3rem 0 0 0' }}>
                Request a formal Certificate of Analysis (COA) for your bulk wheat flour order or schedule a physical plant audit.
              </p>
            </div>
          </div>

          <a 
            href="#contact" 
            className="btn btn-primary btn-md" 
            style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
          >
            Request Batch COA / Schedule Audit <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}
