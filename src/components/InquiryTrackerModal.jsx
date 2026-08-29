import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  CheckCircle2, 
  Clock, 
  FileText, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { api } from '../services/api';

const statusSteps = [
  'New',
  'Under Review',
  'Quotation Sent',
  'In Discussion',
  'Fulfilled'
];

export default function InquiryTrackerModal({ initialRefId, onClose }) {
  const [referenceId, setReferenceId] = useState(initialRefId || '');
  const [isLoading, setIsLoading] = useState(false);
  const [inquiryData, setInquiryData] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (initialRefId) {
      handleSearch(initialRefId);
    }
  }, [initialRefId]);

  const handleSearch = async (refToLookup) => {
    const code = (refToLookup || referenceId).trim();
    if (!code) {
      setErrorMsg('Please enter a valid reference ID.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setInquiryData(null);

    try {
      const res = await api.trackInquiry(code);
      setInquiryData(res.data);
    } catch (err) {
      setErrorMsg(err.message || 'Inquiry not found. Please check your reference code.');
    } finally {
      setIsLoading(false);
    }
  };

  const getStepIndex = (status) => {
    const idx = statusSteps.indexOf(status);
    return idx === -1 ? 0 : idx;
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(8, 28, 21, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      animation: 'fadeIn 0.25s ease'
    }}
    onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          maxWidth: '640px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #e2e8f0' }}>
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#238466', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Live Order &amp; Quotation Tracking
            </span>
            <h3 style={{ fontSize: '1.4rem', color: '#0f392b', fontWeight: 800, margin: '0.2rem 0 0 0' }}>
              Track Inquiry Status
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#475569'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Input Bar */}
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <input
            type="text"
            placeholder="Enter Reference ID (e.g. AGRO-2026-9842)"
            value={referenceId}
            onChange={(e) => setReferenceId(e.target.value.toUpperCase())}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            style={{
              flexGrow: 1,
              padding: '0.8rem 1rem',
              borderRadius: '10px',
              border: '1.5px solid #cbd5e1',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.03em',
              textTransform: 'uppercase',
              outline: 'none'
            }}
          />
          <button
            onClick={() => handleSearch()}
            disabled={isLoading}
            className="btn btn-primary"
            style={{ padding: '0.8rem 1.4rem' }}
          >
            {isLoading ? 'Searching...' : <><Search size={16} /> Track</>}
          </button>
        </div>

        {/* Error Banner */}
        {errorMsg && (
          <div style={{
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '10px',
            padding: '1rem',
            color: '#991b1b',
            fontSize: '0.88rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem'
          }}>
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <div>{errorMsg}</div>
          </div>
        )}

        {/* Result Card */}
        {inquiryData && (
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1.5px solid #e2e8f0',
            borderRadius: '14px',
            padding: '1.5rem',
            animation: 'fadeIn 0.3s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Reference ID:</span>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f392b' }}>
                  {inquiryData.referenceId}
                </div>
              </div>
              <span style={{
                backgroundColor: '#edf9f2',
                color: '#166534',
                border: '1px solid #bbf7d0',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                fontSize: '0.8rem',
                fontWeight: 700
              }}>
                Status: {inquiryData.status}
              </span>
            </div>

            {/* Status Progress Stepper */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', marginBottom: '0.5rem' }}>
                {statusSteps.map((step, idx) => {
                  const currentIdx = getStepIndex(inquiryData.status);
                  const isCompleted = idx <= currentIdx;
                  return (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2, width: '70px', textAlign: 'center' }}>
                      <div style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isCompleted ? '#238466' : '#e2e8f0',
                        color: isCompleted ? '#ffffff' : '#94a3b8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        marginBottom: '0.35rem'
                      }}>
                        {isCompleted ? <CheckCircle2 size={16} /> : idx + 1}
                      </div>
                      <span style={{ fontSize: '0.68rem', fontWeight: isCompleted ? 700 : 500, color: isCompleted ? '#0f392b' : '#94a3b8', lineHeight: 1.2 }}>
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inquiry Details Grid */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '10px',
              padding: '1rem',
              border: '1px solid #e2e8f0',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.75rem',
              fontSize: '0.85rem',
              marginBottom: '1.25rem'
            }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Buyer / Contact:</span>
                <strong style={{ color: '#1e293b' }}>{inquiryData.fullName}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Category:</span>
                <strong style={{ color: '#1e293b' }}>{inquiryData.inquiryType}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Product:</span>
                <strong style={{ color: '#1e293b' }}>{inquiryData.productInterest}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '0.75rem' }}>Volume:</span>
                <strong style={{ color: '#1e293b' }}>{inquiryData.estimatedQuantity || 'Standard'}</strong>
              </div>
            </div>

            {/* Support Desk Action */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
                Need instant clarification on this inquiry?
              </span>
              <a
                href={`https://wa.me/919426047829?text=Hello%20Agro%20Industries%2C%20regarding%20my%20inquiry%20reference%20${inquiryData.referenceId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}
              >
                <Phone size={13} /> Chat with Sales Officer
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
