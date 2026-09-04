import React from 'react';
import { Award, Factory, Layers, Globe } from 'lucide-react';

export default function StatsBand({ stats }) {
  const defaultStats = [
    {
      value: stats?.yearsOfExcellence || '38+ Years',
      label: 'Trusted Since 1988',
      sub: 'Milling pure wheat for 3 generations',
      icon: Award
    },
    {
      value: stats?.dailyMillingCapacity || '300+ MT / Day',
      label: 'Flour Milled Every Day',
      sub: 'Modern roller mills + stone chakki',
      icon: Factory
    },
    {
      value: stats?.productGrades || '15+ Products',
      label: 'Wheat, Atta & Flour Varieties',
      sub: 'For home, bakery & bulk export',
      icon: Layers
    },
    {
      value: stats?.exportCountries || '20+ Countries',
      label: 'Countries We Deliver To',
      sub: 'Middle East, Europe & Asia',
      icon: Globe
    }
  ];

  return (
    <section style={{
      backgroundColor: '#f5f0e6',
      paddingTop: '3.5rem',
      paddingBottom: '3.5rem',
      borderTop: '1.5px solid #e8dfc9',
      borderBottom: '1.5px solid #e8dfc9',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
          gap: '1rem'
        }}>
          {defaultStats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="card-khushbu"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e8dfc9',
                  borderRadius: '18px',
                  padding: 'clamp(1rem, 2.5vw, 1.6rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(43, 35, 25, 0.04)'
                }}
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: '#edfbe2',
                  border: '1.5px solid #88dc6a',
                  color: '#379237',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '0.75rem',
                  boxShadow: '0 4px 12px rgba(84, 180, 53, 0.15)'
                }}>
                  <Icon size={24} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.3rem, 3.5vw, 1.85rem)',
                  fontWeight: 900,
                  color: '#2b2319',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.2rem'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: '0.84rem',
                  fontWeight: 800,
                  color: '#379237',
                  marginBottom: '0.2rem'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#666666',
                  lineHeight: 1.4
                }}>
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
