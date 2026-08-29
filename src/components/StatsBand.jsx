import React from 'react';
import { Award, Factory, Layers, Globe } from 'lucide-react';

export default function StatsBand({ stats }) {
  const defaultStats = [
    {
      value: stats?.yearsOfExcellence || '38+ Years',
      label: 'Agricultural Heritage',
      sub: 'Milling & Trading since 1988',
      icon: Award
    },
    {
      value: stats?.dailyMillingCapacity || '300+ MT / Day',
      label: 'Daily Processing Capacity',
      sub: 'Automated Buhler Roller & Chakki',
      icon: Factory
    },
    {
      value: stats?.productGrades || '15+ Flour Varieties',
      label: 'Graded Wheat & Atta',
      sub: 'Custom mesh & gluten specs',
      icon: Layers
    },
    {
      value: stats?.exportCountries || '20+ Countries',
      label: 'Global Supply Footprint',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem'
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
                  borderRadius: '20px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(43, 35, 25, 0.04)'
                }}
              >
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '16px',
                  backgroundColor: '#eaf3d5',
                  border: '1.5px solid #9fc152',
                  color: '#6b8e23',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 12px rgba(107, 142, 35, 0.15)'
                }}>
                  <Icon size={28} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#2b2319',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.25rem'
                }}>
                  {item.value}
                </div>
                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: '#6b8e23',
                  marginBottom: '0.25rem'
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: '#64748b',
                  fontWeight: 500
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
