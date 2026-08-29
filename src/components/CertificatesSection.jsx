import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  FileCheck, 
  CheckCircle, 
  CheckCircle2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Award,
  Globe,
  FileCheck,
  CheckCircle,
  CheckCircle2
};

export default function CertificatesSection({ certificates }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="certificates" className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Award size={14} /> Accreditations &amp; Standards
          </span>
          <h2 className="section-title">
            Certified Compliance &amp; Food Safety Standards
          </h2>
          <p className="section-subtitle">
            Our facilities and export processes operate in full conformity with national food authorities and international agricultural trade bodies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {certificates && certificates.map((cert, idx) => {
            const Icon = iconMap[cert.iconName] || ShieldCheck;
            const isCopied = copiedId === cert.code;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  border: '1.5px solid #e2e8f0',
                  padding: '1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                className="cert-card"
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#edf9f2',
                      border: '1px solid #bbf7d0',
                      color: '#144e3b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon size={24} />
                    </div>
                    <span style={{
                      backgroundColor: '#fef3c7',
                      color: '#92400e',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      border: '1px solid #fde68a'
                    }}>
                      {cert.badgeText}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: '#0f392b', fontWeight: 700, marginBottom: '0.35rem', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#bc8a5f', marginBottom: '0.75rem' }}>
                    {cert.authority}
                  </div>

                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {cert.description}
                  </p>
                </div>

                {/* Certificate Reg Number & Copy Action */}
                <div style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  padding: '0.6rem 0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: 600, color: '#1e293b' }}>
                    {cert.code}
                  </span>
                  <button
                    onClick={() => handleCopy(cert.code)}
                    title="Copy Certificate ID"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: isCopied ? '#16a34a' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy ID
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .cert-card:hover {
          transform: translateY(-4px);
          border-color: #238466 !important;
          box-shadow: 0 12px 24px -4px rgba(15, 23, 42, 0.08) !important;
        }
      `}</style>
    </section>
  );
}
