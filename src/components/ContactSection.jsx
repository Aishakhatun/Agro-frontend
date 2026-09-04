import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  MessageSquare, 
  Sparkles, 
  Lock, 
  Building2, 
  Globe2,
  ChevronDown,
  Truck,
  Package,
  Tag
} from 'lucide-react';
import { api } from '../services/api';

const inquiryOptions = [
  { value: 'Wholesale Supply', label: 'Wholesale Supply (Domestic)', icon: Truck },
  { value: 'Export & International Trade', label: 'Export & International Trade', icon: Globe2 },
  { value: 'Retail & Distribution', label: 'Retail & Distribution', icon: Package },
  { value: 'Private Labelling', label: 'Private Labelling / OEM', icon: Tag },
  { value: 'General Inquiry', label: 'General Inquiry', icon: MessageSquare }
];

export default function ContactSection({ preFilledData, onClearPreFill, onOpenTracker }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryType: 'Wholesale Supply',
    productInterest: 'KAI Khushbu Chakki Fresh Whole Wheat Atta',
    estimatedQuantity: '25 Metric Tons',
    packagingPreference: '25kg PP Woven Bag',
    deliveryLocation: 'India / Export Port',
    message: '',
    hp_fax_number: '', // Honeypot trap field (hidden from real users)
    hp_timestamp: Date.now().toString()
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(null);
  const [submissionError, setSubmissionError] = useState(null);
  const [copiedRef, setCopiedRef] = useState(false);
  const [inquiryDropdownOpen, setInquiryDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setInquiryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Sync pre-filled data when provided by product cards or export wizard
  useEffect(() => {
    if (preFilledData) {
      setFormData((prev) => ({
        ...prev,
        ...preFilledData,
        hp_timestamp: Date.now().toString()
      }));
      setSubmissionSuccess(null);
      setSubmissionError(null);
    }
  }, [preFilledData]);

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      errors.phone = 'Phone number must have at least 7 digits';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please provide requirement details';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await api.submitInquiry(formData);
      setSubmissionSuccess(response);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        inquiryType: 'Wholesale Supply',
        productInterest: 'KAI Khushbu Chakki Fresh Whole Wheat Atta',
        estimatedQuantity: '25 Metric Tons',
        packagingPreference: '25kg PP Woven Bag',
        deliveryLocation: 'India / Export Port',
        message: '',
        hp_fax_number: '',
        hp_timestamp: Date.now().toString()
      });
      if (onClearPreFill) onClearPreFill();
    } catch (err) {
      setSubmissionError(err.message || 'An error occurred while submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyRef = (refId) => {
    navigator.clipboard.writeText(refId);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2500);
  };

  return (
    <section id="contact" style={{ backgroundColor: '#faf7f2', padding: '6rem 0', position: 'relative' }}>
      
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
            <Mail size={15} color="#6b8e23" />
            <span>Direct Commercial Trade Desk</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#2b2319',
            marginBottom: '1rem'
          }}>
            Start A Direct Commercial Dialogue
          </h2>

          <p style={{
            color: '#55493b',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 500
          }}>
            Whether you need truckload wholesale supplies, retail-ready packaging, or containerized export shipments, our sales team is ready to assist.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2.5rem)',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Dark Mill & Trade Hub Card */}
          <div>
            <div style={{
              backgroundColor: '#1f1a14',
              borderRadius: '24px',
              padding: 'clamp(1.25rem, 3.5vw, 2.25rem)',
              border: '2px solid #54b435',
              color: '#ffffff',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)',
              marginBottom: '1.75rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
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
                  <Building2 size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#88dc6a', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Khushbu Agro Headquarters
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.35rem)', color: '#ffffff', fontWeight: 900, margin: 0, fontFamily: 'var(--font-heading)' }}>
                    Mill &amp; Corporate Office
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(107, 142, 35, 0.25)',
                    border: '1px solid rgba(107, 142, 35, 0.5)',
                    color: '#9fc152',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Factory &amp; Registered Office:
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#efe8d8', lineHeight: 1.5 }}>
                      Polajpur Patiya, Savgadh, Gujarat 383002, India
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(217, 155, 56, 0.25)',
                    border: '1px solid rgba(217, 155, 56, 0.5)',
                    color: '#f4be6b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Trade &amp; Order Inquiries:
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <a href="tel:+919974250749" style={{ fontSize: '0.92rem', color: '#9fc152', fontWeight: 800, textDecoration: 'none' }}>
                        +91 99742 50749 (Primary)
                      </a>
                      <a href="tel:+919426047829" style={{ fontSize: '0.86rem', color: '#efe8d8', textDecoration: 'none' }}>
                        +91 94260 47829 (Sales Desk)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(107, 142, 35, 0.25)',
                    border: '1px solid rgba(107, 142, 35, 0.5)',
                    color: '#9fc152',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Email Correspondence:
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <a href="mailto:sales@khushbuagro.in" style={{ fontSize: '0.88rem', color: '#9fc152', fontWeight: 700, textDecoration: 'none' }}>
                        sales@khushbuagro.in
                      </a>
                      <a href="mailto:info@khushbuagro.in" style={{ fontSize: '0.86rem', color: '#efe8d8', textDecoration: 'none' }}>
                        info@khushbuagro.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(217, 155, 56, 0.25)',
                    border: '1px solid rgba(217, 155, 56, 0.5)',
                    color: '#f4be6b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#ffffff', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Plant Operations &amp; Dispatch:
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#efe8d8' }}>
                      Monday – Saturday: 8:30 AM to 7:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Button */}
              <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <a
                  href="https://wa.me/919974250749?text=Hello%20Khushbu%20Agro%2C%20I%20would%20like%20to%20inquire%20about%20chakki%20atta%20and%20wheat%20flour%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block btn-lg"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    textDecoration: 'none',
                    fontWeight: 900
                  }}
                >
                  <MessageSquare size={18} /> Instant WhatsApp Trade Inquiry
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1.5px solid #e8dfc9',
              height: '260px',
              backgroundColor: '#19140e',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
            }}>
              <iframe
                title="Khushbu Agro Industries Official Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7066400011704!2d72.9283024797616!3d23.614851724005145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db9b21e65e15b%3A0x393386c732fed317!2sKhushbu%20Agro%20Industries!5e0!3m2!1sen!2sin!4v1788264542260!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Commercial Quotation Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '2.5rem',
            border: '1.5px solid #e8dfc9',
            boxShadow: '0 15px 45px rgba(43, 35, 25, 0.06)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Top Accent Line */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #6b8e23 0%, #d99b38 100%)'
            }} />

            {/* Security Guarantee Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: 'rgba(107, 142, 35, 0.12)',
              border: '1px solid rgba(107, 142, 35, 0.3)',
              color: '#5c7b1e',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              marginBottom: '1.25rem'
            }}>
              <Lock size={13} color="#6b8e23" /> SSL Encrypted Commercial Form
            </div>

            <h3 style={{ fontSize: '1.5rem', color: '#2b2319', fontWeight: 900, marginBottom: '0.35rem', fontFamily: 'var(--font-heading)' }}>
              Request Commercial Quotation
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#666666', marginBottom: '1.75rem' }}>
              Submit your flour or wheat specifications. Our trade desk will prepare custom grading and volume pricing.
            </p>

            {/* Submission Error */}
            {submissionError && (
              <div style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '12px',
                padding: '1rem',
                color: '#991b1b',
                fontSize: '0.88rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.6rem'
              }}>
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>{submissionError}</div>
              </div>
            )}

            {/* Submission Success Box */}
            {submissionSuccess ? (
              <div style={{
                backgroundColor: '#faf7f2',
                border: '2px solid #6b8e23',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                animation: 'fadeIn 0.3s ease'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: '#6b8e23',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem auto',
                  boxShadow: '0 8px 20px rgba(107, 142, 35, 0.4)'
                }}>
                  <CheckCircle2 size={34} />
                </div>

                <h4 style={{ fontSize: '1.35rem', color: '#2b2319', fontWeight: 900, marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>
                  Inquiry Received Successfully!
                </h4>

                <p style={{ color: '#55493b', fontSize: '0.92rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                  {submissionSuccess.message}
                </p>

                {/* Tracking Code Box */}
                {submissionSuccess.data?.referenceId && (
                  <div style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px dashed #6b8e23',
                    borderRadius: '14px',
                    padding: '1.2rem',
                    marginBottom: '1.75rem'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#888888', textTransform: 'uppercase', fontWeight: 800, marginBottom: '0.35rem' }}>
                      Your Unique Reference Tracking Code:
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#2b2319', letterSpacing: '0.05em', fontFamily: 'monospace' }}>
                        {submissionSuccess.data.referenceId}
                      </span>
                      <button
                        onClick={() => handleCopyRef(submissionSuccess.data.referenceId)}
                        style={{
                          backgroundColor: 'rgba(107, 142, 35, 0.15)',
                          border: '1px solid rgba(107, 142, 35, 0.4)',
                          borderRadius: '8px',
                          padding: '0.35rem 0.75rem',
                          fontSize: '0.78rem',
                          fontWeight: 800,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          color: copiedRef ? '#6b8e23' : '#2b2319'
                        }}
                      >
                        {copiedRef ? <><Check size={14} color="#6b8e23" /> Copied</> : <><Copy size={14} /> Copy</>}
                      </button>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => {
                      setSubmissionSuccess(null);
                    }}
                    className="btn btn-outline btn-sm"
                    style={{ padding: '0.6rem 1.25rem' }}
                  >
                    Submit Another Inquiry
                  </button>
                  <button
                    onClick={() => {
                      if (onOpenTracker && submissionSuccess.data?.referenceId) {
                        onOpenTracker(submissionSuccess.data.referenceId);
                      }
                    }}
                    className="btn btn-primary btn-sm"
                    style={{ padding: '0.6rem 1.25rem' }}
                  >
                    Track Status Now
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot Trap Field */}
                <div style={{ display: 'none' }} aria-hidden="true">
                  <label htmlFor="hp_fax_number">Do not fill this</label>
                  <input
                    type="text"
                    id="hp_fax_number"
                    name="hp_fax_number"
                    value={formData.hp_fax_number}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="e.g. Rajesh Patel"
                      value={formData.fullName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: formErrors.fullName ? '2px solid #ef4444' : '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                    {formErrors.fullName && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{formErrors.fullName}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="rajesh@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: formErrors.email ? '2px solid #ef4444' : '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                    {formErrors.email && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{formErrors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: formErrors.phone ? '2px solid #ef4444' : '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                    {formErrors.phone && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{formErrors.phone}</span>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="e.g. Apex Global Foods Ltd"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Inquiry Type Custom Dropdown */}
                  <div ref={dropdownRef} style={{ position: 'relative' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Inquiry Category
                    </label>
                    <button
                      type="button"
                      onClick={() => setInquiryDropdownOpen(!inquiryDropdownOpen)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: inquiryDropdownOpen ? '2px solid #54b435' : '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 700,
                        outline: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '0.5rem',
                        transition: 'all 0.2s ease',
                        boxShadow: inquiryDropdownOpen ? '0 0 0 4px rgba(84, 180, 53, 0.15)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', overflow: 'hidden' }}>
                        {(() => {
                          const currentOpt = inquiryOptions.find(o => o.value === formData.inquiryType) || inquiryOptions[0];
                          const IconComp = currentOpt.icon;
                          return (
                            <>
                              <IconComp size={18} color="#54b435" style={{ flexShrink: 0 }} />
                              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {currentOpt.label}
                              </span>
                            </>
                          );
                        })()}
                      </div>
                      <ChevronDown
                        size={18}
                        color="#6b8e23"
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: inquiryDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          flexShrink: 0
                        }}
                      />
                    </button>

                    {/* Custom Styled Dropdown Menu */}
                    {inquiryDropdownOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: 0,
                          right: 0,
                          zIndex: 100,
                          backgroundColor: '#ffffff',
                          border: '1.5px solid #e8dfc9',
                          borderRadius: '16px',
                          boxShadow: '0 16px 40px rgba(43, 35, 25, 0.16)',
                          padding: '0.45rem',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem'
                        }}
                      >
                        {inquiryOptions.map((opt) => {
                          const isSelected = formData.inquiryType === opt.value;
                          const IconComp = opt.icon;
                          return (
                            <div
                              key={opt.value}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, inquiryType: opt.value }));
                                setInquiryDropdownOpen(false);
                              }}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.75rem 0.9rem',
                                borderRadius: '10px',
                                backgroundColor: isSelected ? '#edfbe2' : 'transparent',
                                color: isSelected ? '#2d7a2d' : '#2b2319',
                                fontWeight: isSelected ? 800 : 600,
                                fontSize: '0.88rem',
                                cursor: 'pointer',
                                transition: 'all 0.15s ease'
                              }}
                              onMouseEnter={(e) => {
                                if (!isSelected) e.currentTarget.style.backgroundColor = '#faf7f2';
                              }}
                              onMouseLeave={(e) => {
                                if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                                <IconComp size={17} color={isSelected ? '#54b435' : '#888'} />
                                <span>{opt.label}</span>
                              </div>
                              {isSelected && <Check size={16} color="#379237" />}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Product / Grain of Interest
                    </label>
                    <input
                      type="text"
                      name="productInterest"
                      placeholder="e.g. KAI Chakki Atta, MP Sharbati Grain"
                      value={formData.productInterest}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none',
                        transition: 'all 0.25s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  {/* Estimated Quantity */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Estimated Volume / Quantity
                    </label>
                    <input
                      type="text"
                      name="estimatedQuantity"
                      placeholder="e.g. 25 Metric Tons / 500 Bags"
                      value={formData.estimatedQuantity}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                  </div>

                  {/* Delivery Location */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                      Target Delivery Destination / Port
                    </label>
                    <input
                      type="text"
                      name="deliveryLocation"
                      placeholder="e.g. Mumbai / Jebel Ali / Kandla"
                      value={formData.deliveryLocation}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: '12px',
                        border: '1.5px solid #e8dfc9',
                        fontSize: '0.9rem',
                        backgroundColor: '#faf7f2',
                        color: '#2b2319',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                      onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 800, color: '#2b2319', marginBottom: '0.4rem' }}>
                    Requirement Details &amp; Specifications *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Specify target flour fineness, bag packaging format (e.g. 25kg PP, 5kg pouch), target delivery timeline, or any custom sorting requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '12px',
                      border: formErrors.message ? '2px solid #ef4444' : '1.5px solid #e8dfc9',
                      fontSize: '0.9rem',
                      backgroundColor: '#faf7f2',
                      color: '#2b2319',
                      fontWeight: 600,
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#6b8e23'}
                    onBlur={(e) => e.target.style.borderColor = '#e8dfc9'}
                  />
                  {formErrors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.25rem', display: 'block' }}>{formErrors.message}</span>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block btn-lg"
                  style={{
                    fontWeight: 900,
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem'
                  }}
                >
                  {isSubmitting ? (
                    'Recording Secure Inquiry...'
                  ) : (
                    <>
                      <Send size={18} /> Submit The Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
