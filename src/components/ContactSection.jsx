import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  ShieldCheck, 
  CheckCircle, 
  AlertCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  Lock
} from 'lucide-react';
import { api } from '../services/api';

export default function ContactSection({ preFilledData, onClearPreFill, onOpenTracker }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    inquiryType: 'Wholesale Supply',
    productInterest: 'Toor Dal (Oily & Unpolished)',
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
      errors.message = 'Please provide details of your requirement or inquiry';
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
        productInterest: 'Toor Dal (Oily & Unpolished)',
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
    <section id="contact" className="section" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Mail size={14} /> Contact &amp; Quotations
          </span>
          <h2 className="section-title">
            Start A Direct Commercial Dialogue
          </h2>
          <p className="section-subtitle">
            Whether you need truckload wholesale supplies, retail-ready packaging, or containerized export shipments, our trade desk is ready to respond.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          {/* Left: Contact Info & Interactive Map */}
          <div>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              border: '1.5px solid #e2e8f0',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.04)',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.35rem', color: '#0f392b', fontWeight: 800, marginBottom: '1.25rem' }}>
                Agro Industries Mill &amp; Corporate Office
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Address */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#edf9f2',
                    border: '1px solid #bbf7d0',
                    color: '#144e3b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f392b', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Factory &amp; Registered Office:
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5 }}>
                      Survey No. 142/P, Nr. Mehtapura Railway Crossing, Idar-Ambaji State Highway, Dhandha, Himatnagar, Gujarat 383001, India
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#edf9f2',
                    border: '1px solid #bbf7d0',
                    color: '#144e3b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f392b', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Trade &amp; Order Inquiries:
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <a href="tel:+919426047829" style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 700, textDecoration: 'none' }}>
                        +91 94260 47829 (Primary)
                      </a>
                      <a href="tel:+919408008981" style={{ fontSize: '0.86rem', color: '#475569', textDecoration: 'none' }}>
                        +91 94080 08981 (Sales Desk)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#edf9f2',
                    border: '1px solid #bbf7d0',
                    color: '#144e3b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f392b', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Email Inquiries:
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      <a href="mailto:sales@agroindustries.in" style={{ fontSize: '0.86rem', color: '#166534', fontWeight: 600 }}>
                        sales@agroindustries.in
                      </a>
                      <a href="mailto:info@agroindustries.in" style={{ fontSize: '0.86rem', color: '#475569' }}>
                        info@agroindustries.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    backgroundColor: '#edf9f2',
                    border: '1px solid #bbf7d0',
                    color: '#144e3b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <strong style={{ display: 'block', color: '#0f392b', fontSize: '0.9rem', marginBottom: '0.2rem' }}>
                      Plant Operations &amp; Dispatch:
                    </strong>
                    <span style={{ fontSize: '0.86rem', color: '#64748b' }}>
                      Monday – Saturday: 8:30 AM to 7:00 PM IST
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid #f1f5f9' }}>
                <a
                  href="https://wa.me/919426047829?text=Hello%20Agro%20Industries%2C%20I%20would%20like%20to%20inquire%20about%20pulses%20and%20rice%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-block"
                  style={{
                    backgroundColor: '#166534',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <MessageSquare size={18} /> Instant WhatsApp Inquiry
                </a>
              </div>
            </div>

            {/* Embedded Google Map / Location Visual */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1.5px solid #e2e8f0',
              height: '240px',
              backgroundColor: '#e2e8f0',
              position: 'relative'
            }}>
              <iframe
                title="Agro Industries Plant Location"
                src="https://maps.google.com/maps?q=Himatnagar,Gujarat,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right: Security-Hardened Submission Form */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '2.25rem',
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
            position: 'relative'
          }}>
            {/* Security Guarantee Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#edf9f2',
              border: '1px solid #bbf7d0',
              color: '#166534',
              padding: '0.3rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 700,
              marginBottom: '1.25rem'
            }}>
              <Lock size={12} /> SSL Encrypted &amp; Anti-Spam Protected Form
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#0f392b', fontWeight: 800, marginBottom: '0.35rem' }}>
              Request Commercial Quotation
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Fill in your requirement specifications. Our sales team will formulate custom grading and pricing.
            </p>

            {/* Submission Error Banner */}
            {submissionError && (
              <div style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '10px',
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

            {/* Submission Success Modal Box */}
            {submissionSuccess ? (
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1.5px solid #86efac',
                borderRadius: '14px',
                padding: '1.75rem',
                textAlign: 'center',
                animation: 'fadeIn 0.3s ease'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#22c55e',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <CheckCircle size={32} />
                </div>

                <h4 style={{ fontSize: '1.25rem', color: '#14532d', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Inquiry Received Successfully!
                </h4>

                <p style={{ color: '#166534', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                  {submissionSuccess.message}
                </p>

                {/* Reference Code Box */}
                {submissionSuccess.data?.referenceId && (
                  <div style={{
                    backgroundColor: '#ffffff',
                    border: '1px dashed #4ade80',
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '1.5rem'
                  }}>
                    <div style={{ fontSize: '0.75rem', color: '#475569', textTransform: 'uppercase', fontWeight: 700, marginBottom: '0.35rem' }}>
                      Your Unique Reference Tracking Code:
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f392b', letterSpacing: '0.05em' }}>
                        {submissionSuccess.data.referenceId}
                      </span>
                      <button
                        onClick={() => handleCopyRef(submissionSuccess.data.referenceId)}
                        style={{
                          backgroundColor: '#edf9f2',
                          border: '1px solid #bbf7d0',
                          borderRadius: '6px',
                          padding: '0.35rem 0.65rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          color: copiedRef ? '#15803d' : '#144e3b'
                        }}
                      >
                        {copiedRef ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
                      </button>
                    </div>
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
                  <button
                    onClick={() => {
                      setSubmissionSuccess(null);
                    }}
                    className="btn btn-outline btn-sm"
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
                  >
                    Track Status Now
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot Trap Field (Invisible to real humans, traps spam bots) */}
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Full Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: formErrors.fullName ? '1.5px solid #ef4444' : '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    {formErrors.fullName && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{formErrors.fullName}</span>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: formErrors.email ? '1.5px solid #ef4444' : '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    {formErrors.email && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{formErrors.email}</span>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: formErrors.phone ? '1.5px solid #ef4444' : '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                    {formErrors.phone && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{formErrors.phone}</span>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Inquiry Type */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Inquiry Category
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        backgroundColor: '#ffffff',
                        outline: 'none'
                      }}
                    >
                      <option value="Wholesale Supply">Wholesale Supply (Domestic)</option>
                      <option value="Export & International Trade">Export &amp; International Trade</option>
                      <option value="Retail & Distribution">Retail &amp; Distribution</option>
                      <option value="Private Labelling">Private Labelling / OEM</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Product Interest */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                      Product / Grain of Interest
                    </label>
                    <input
                      type="text"
                      name="productInterest"
                      placeholder="e.g. Toor Dal, 1121 Basmati Rice"
                      value={formData.productInterest}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Estimated Quantity */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Delivery Location */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
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
                        padding: '0.75rem',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Requirement Details &amp; Specifications *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Specify target purity, bag packaging format (e.g. 25kg PP, 1kg pouch), target delivery timeline, or any custom sorting requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '8px',
                      border: formErrors.message ? '1.5px solid #ef4444' : '1px solid #cbd5e1',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                  {formErrors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.2rem', display: 'block' }}>{formErrors.message}</span>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-block btn-lg"
                  style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    'Recording Secure Inquiry...'
                  ) : (
                    <>
                      <Send size={18} /> Submit Official Trade Inquiry
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
