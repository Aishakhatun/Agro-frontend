import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  KeyRound, 
  Search, 
  Filter, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  Phone, 
  Mail, 
  FileText,
  AlertCircle,
  RefreshCw
} from 'lucide-react';
import { api } from '../services/api';

export default function AdminInquiryModal({ onClose }) {
  const [adminKey, setAdminKey] = useState('agro_admin_secret_2026');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [adminNotes, setAdminNotes] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  const fetchInquiries = async (key) => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const res = await api.getAdminInquiries(key || adminKey, {
        status: filterStatus,
        inquiryType: filterType,
        search: searchTerm
      });
      setInquiries(res.data || []);
      setIsAuthenticated(true);
    } catch (err) {
      setErrorMsg(err.message || 'Authentication failed. Please verify admin key.');
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetchInquiries(adminKey);
  };

  const handleUpdateStatus = async (inquiryId) => {
    if (!newStatus) return;
    setIsUpdating(true);
    try {
      await api.updateInquiryStatus(adminKey, inquiryId, newStatus, adminNotes);
      // Refresh list
      await fetchInquiries(adminKey);
      setSelectedInquiry(null);
    } catch (err) {
      alert('Failed to update status: ' + err.message);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(8, 28, 21, 0.85)',
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
          maxWidth: '960px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '1.25rem 1.75rem',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#0f392b',
          color: '#ffffff',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'rgba(212, 163, 115, 0.2)',
              color: '#d4a373',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Lock size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#ffffff', margin: 0, fontWeight: 700 }}>
                Agro Trade Desk &amp; Inquiry Manager
              </h3>
              <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                Internal Commercial Inquiries Management System
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#ffffff'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ padding: '1.75rem' }}>
          {!isAuthenticated ? (
            /* Login Gate */
            <div style={{ maxWidth: '420px', margin: '2rem auto', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#edf9f2',
                color: '#144e3b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <KeyRound size={28} />
              </div>
              <h4 style={{ fontSize: '1.25rem', color: '#0f392b', fontWeight: 800, marginBottom: '0.5rem' }}>
                Staff Authentication
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Enter the internal admin key to inspect and manage received trade inquiries.
              </p>

              {errorMsg && (
                <div style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  color: '#991b1b',
                  fontSize: '0.82rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <AlertCircle size={15} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleLogin}>
                <input
                  type="password"
                  placeholder="Enter Admin Access Key"
                  value={adminKey}
                  onChange={(e) => setAdminKey(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem',
                    borderRadius: '10px',
                    border: '1.5px solid #cbd5e1',
                    fontSize: '0.95rem',
                    marginBottom: '1rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" disabled={isLoading} className="btn btn-primary btn-block">
                  {isLoading ? 'Authenticating...' : 'Access Inquiry Desk'}
                </button>
              </form>
            </div>
          ) : (
            /* Inquiry List & Management */
            <div>
              {/* Filter / Search Bar */}
              <div style={{
                display: 'flex',
                gap: '0.75rem',
                flexWrap: 'wrap',
                marginBottom: '1.5rem',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <select
                    value={filterStatus}
                    onChange={(e) => {
                      setFilterStatus(e.target.value);
                      setTimeout(() => fetchInquiries(), 50);
                    }}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem',
                      backgroundColor: '#f8fafc'
                    }}
                  >
                    <option value="all">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Under Review">Under Review</option>
                    <option value="Quotation Sent">Quotation Sent</option>
                    <option value="Fulfilled">Fulfilled</option>
                    <option value="Closed">Closed</option>
                  </select>

                  <select
                    value={filterType}
                    onChange={(e) => {
                      setFilterType(e.target.value);
                      setTimeout(() => fetchInquiries(), 50);
                    }}
                    style={{
                      padding: '0.5rem 0.75rem',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.85rem',
                      backgroundColor: '#f8fafc'
                    }}
                  >
                    <option value="all">All Categories</option>
                    <option value="Wholesale Supply">Wholesale Supply</option>
                    <option value="Export & International Trade">Export &amp; Trade</option>
                    <option value="Retail & Distribution">Retail &amp; Distribution</option>
                    <option value="Private Labelling">Private Labelling</option>
                  </select>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => fetchInquiries()}
                    className="btn btn-outline btn-sm"
                    title="Refresh inquiries list"
                  >
                    <RefreshCw size={14} /> Refresh
                  </button>
                </div>
              </div>

              {/* Inquiries Table / Cards */}
              {inquiries.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#f8fafc', borderRadius: '12px' }}>
                  <p style={{ color: '#64748b' }}>No trade inquiries matching the active filters.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {inquiries.map((inq) => (
                    <div
                      key={inq._id || inq.referenceId}
                      style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.25rem',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <strong style={{ color: '#0f392b', fontSize: '1rem' }}>{inq.fullName}</strong>
                            {inq.companyName && <span style={{ color: '#64748b', fontSize: '0.85rem' }}>({inq.companyName})</span>}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#475569' }}>
                            Ref: <span style={{ fontWeight: 700, color: '#166534' }}>{inq.referenceId}</span> · {new Date(inq.createdAt).toLocaleDateString()}
                          </div>
                        </div>

                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          backgroundColor: inq.status === 'New' ? '#dbeafe' : '#f0fdf4',
                          color: inq.status === 'New' ? '#1e40af' : '#166534',
                          border: '1px solid currentColor'
                        }}>
                          {inq.status}
                        </span>
                      </div>

                      {/* Details row */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem', fontSize: '0.82rem', color: '#334155', marginBottom: '0.75rem', backgroundColor: '#f8fafc', padding: '0.6rem', borderRadius: '8px' }}>
                        <div><strong>Category:</strong> {inq.inquiryType}</div>
                        <div><strong>Product:</strong> {inq.productInterest}</div>
                        <div><strong>Volume:</strong> {inq.estimatedQuantity}</div>
                        <div><strong>Destination:</strong> {inq.deliveryLocation || 'N/A'}</div>
                      </div>

                      <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5, margin: '0 0 1rem 0' }}>
                        <strong>Requirements:</strong> "{inq.message}"
                      </p>

                      {/* Actions */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                          <a
                            href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(inq.fullName)}%2C%20thank%20you%20for%20your%20inquiry%20(${inq.referenceId})%20with%20Agro%20Industries.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-sm"
                            style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
                          >
                            <MessageSquare size={13} /> WhatsApp
                          </a>
                          <a
                            href={`tel:${inq.phone}`}
                            className="btn btn-outline btn-sm"
                            style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
                          >
                            <Phone size={13} /> Call
                          </a>
                          <a
                            href={`mailto:${inq.email}?subject=Agro%20Industries%20Quotation%20-%20${inq.referenceId}`}
                            className="btn btn-outline btn-sm"
                            style={{ fontSize: '0.78rem', padding: '0.35rem 0.65rem' }}
                          >
                            <Mail size={13} /> Email
                          </a>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedInquiry(inq);
                            setNewStatus(inq.status);
                            setAdminNotes(inq.adminNotes || '');
                          }}
                          className="btn btn-primary btn-sm"
                          style={{ fontSize: '0.78rem', padding: '0.35rem 0.75rem' }}
                        >
                          Update Status
                        </button>
                      </div>

                      {/* Inline Status Update Panel */}
                      {selectedInquiry?._id === inq._id && (
                        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#edf9f2', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#166534', marginBottom: '0.5rem' }}>
                            Update Lead Status:
                          </div>
                          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                            <select
                              value={newStatus}
                              onChange={(e) => setNewStatus(e.target.value)}
                              style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                            >
                              <option value="New">New</option>
                              <option value="Under Review">Under Review</option>
                              <option value="Quotation Sent">Quotation Sent</option>
                              <option value="In Discussion">In Discussion</option>
                              <option value="Fulfilled">Fulfilled</option>
                              <option value="Closed">Closed</option>
                            </select>
                            <input
                              type="text"
                              placeholder="Internal Staff Notes (e.g. Quotation emailed on 28 Aug)"
                              value={adminNotes}
                              onChange={(e) => setAdminNotes(e.target.value)}
                              style={{ flexGrow: 1, padding: '0.5rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.85rem' }}
                            />
                          </div>
                          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                            <button onClick={() => setSelectedInquiry(null)} className="btn btn-outline btn-sm">Cancel</button>
                            <button
                              onClick={() => handleUpdateStatus(inq._id)}
                              disabled={isUpdating}
                              className="btn btn-primary btn-sm"
                            >
                              {isUpdating ? 'Saving...' : 'Save Changes'}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
