import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  FileCheck, 
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  ExternalLink,
  Lock,
  BadgeCheck
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Award,
  Globe,
  FileCheck,
  CheckCircle2,
  BadgeCheck
};

export default function CertificatesSection({ certificates }) {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedId(code);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="certificates" style={{ backgroundColor: '#faf7f2', padding: '5.5rem 0', position: 'relative' }}>
      
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
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
            <Award size={15} color="#6b8e23" />
            <span>Accreditations &amp; Food Safety Standards</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#2b2319',
            marginBottom: '1rem'
          }}>
            Certified Compliance &amp; Regulatory Approval
          </h2>

          <p style={{
            color: '#55493b',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Our milling plant and container export operations strictly conform to national food safety guidelines and international agricultural trade frameworks.
          </p>
        </div>

        {/* Certificates Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {certificates && certificates.map((cert, idx) => {
            const Icon = iconMap[cert.iconName] || ShieldCheck;
            const isCopied = copiedId === cert.code;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  border: '1.5px solid #e8dfc9',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px rgba(43, 35, 25, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="card-khushbu-hover"
              >
                {/* Accent Top Border Bar */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #6b8e23 0%, #d99b38 100%)'
                }} />

                <div>
                  {/* Top Header Row */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(107, 142, 35, 0.12)',
                      border: '1.5px solid rgba(107, 142, 35, 0.3)',
                      color: '#6b8e23',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 12px rgba(107, 142, 35, 0.15)'
                    }}>
                      <Icon size={26} />
                    </div>

                    <span style={{
                      backgroundColor: 'rgba(217, 155, 56, 0.15)',
                      color: '#b87c1c',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid rgba(217, 155, 56, 0.4)',
                      letterSpacing: '0.04em'
                    }}>
                      {cert.badgeText}
                    </span>
                  </div>

                  {/* Title & Authority */}
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.25rem',
                    color: '#2b2319',
                    fontWeight: 900,
                    marginBottom: '0.35rem',
                    lineHeight: 1.3
                  }}>
                    {cert.title}
                  </h3>

                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#6b8e23', marginBottom: '0.85rem' }}>
                    {cert.authority}
                  </div>

                  {/* Description */}
                  <p style={{ fontSize: '0.88rem', color: '#55493b', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                    {cert.description}
                  </p>
                </div>

                {/* Registration Code Bar */}
                <div style={{
                  backgroundColor: '#faf7f2',
                  border: '1px solid #e8dfc9',
                  borderRadius: '12px',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="#6b8e23" />
                    <span style={{ fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 800, color: '#2b2319' }}>
                      {cert.code}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(cert.code)}
                    title="Copy License / Registration Number"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: isCopied ? '#6b8e23' : '#777777',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      transition: 'color 0.2s ease'
                    }}
                  >
                    {isCopied ? (
                      <>
                        <Check size={14} color="#6b8e23" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy size={14} /> Copy Code
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
