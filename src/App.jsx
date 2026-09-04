import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBand from './components/StatsBand';
import ProductShowcase from './components/ProductShowcase';
import ProductDetailModal from './components/ProductDetailModal';
import ProcessingJourney from './components/ProcessingJourney';
import QualityInfrastructure from './components/QualityInfrastructure';
import TestimonialsSection from './components/TestimonialsSection';
import CertificatesSection from './components/CertificatesSection';
import ExportWizard from './components/ExportWizard';
import ContactSection from './components/ContactSection';
import InquiryTrackerModal from './components/InquiryTrackerModal';
import AdminInquiryModal from './components/AdminInquiryModal';
import SidebarDrawer from './components/SidebarDrawer';
import FloatingWheatBackground from './components/FloatingWheatBackground';
import Footer from './components/Footer';
import { api } from './services/api';
import { fallbackProducts, fallbackCertificates } from './data/fallbackProducts';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [products, setProducts] = useState(fallbackProducts);
  const [certificates, setCertificates] = useState(fallbackCertificates);
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Modals & Slidebar state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [preFilledInquiry, setPreFilledInquiry] = useState(null);
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [trackerRefId, setTrackerRefId] = useState('');
  const [adminOpen, setAdminOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Fetch initial data
  useEffect(() => {
    const loadAppData = async () => {
      try {
        const [productsRes, certsRes, statsRes] = await Promise.allSettled([
          api.getProducts(),
          api.getCertificates(),
          api.getStats()
        ]);

        if (productsRes.status === 'fulfilled' && Array.isArray(productsRes.value?.data) && productsRes.value.data.length >= fallbackProducts.length) {
          const merged = productsRes.value.data.map(p => {
            const local = fallbackProducts.find(f => f.slug === p.slug || f.name === p.name);
            return local ? { ...p, imageUrl: local.imageUrl || p.imageUrl } : p;
          });
          setProducts(merged);
        } else {
          setProducts(fallbackProducts);
        }

        if (certsRes.status === 'fulfilled' && Array.isArray(certsRes.value?.data) && certsRes.value.data.length > 0) {
          setCertificates(certsRes.value.data);
        } else {
          setCertificates(fallbackCertificates);
        }

        if (statsRes.status === 'fulfilled') {
          setStats(statsRes.value.data || null);
        }
      } catch (err) {
        console.warn('Error loading initial data, using fallback models', err);
        setProducts(fallbackProducts);
        setCertificates(fallbackCertificates);
      } finally {
        setIsLoading(false);
      }
    };

    loadAppData();
  }, []);

  // Quick inquiry trigger
  const handleQuickInquiry = (product) => {
    const data = {
      productInterest: product.name,
      inquiryType: 'Wholesale Supply',
      message: `I would like to inquire about specifications and wholesale pricing for ${product.name}. Required packaging size: ${product.packageSizes?.[0] || 'Standard'}.`
    };
    setPreFilledInquiry(data);
    scrollToContact();
  };

  // Buyer path trigger from hero
  const handleBuyerPath = (pathName) => {
    setPreFilledInquiry({
      inquiryType: pathName,
      message: `Inquiry initiated for ${pathName}. Please send current wheat & flour product availability catalogue and pricing terms.`
    });
    scrollToContact();
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTracker = (refCode = '') => {
    setTrackerRefId(refCode);
    setTrackerOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#faf7f2', position: 'relative' }}>
      {/* Dynamic Animated Floating Wheat Background */}
      <FloatingWheatBackground />

      {/* Navigation Header */}
      <Navbar
        onOpenTracker={() => handleOpenTracker('')}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenQuote={() => scrollToContact()}
        onOpenSidebar={() => setSidebarOpen(true)}
      />

      {/* Main Content Sections */}
      <main style={{ flexGrow: 1, position: 'relative', zIndex: 2 }}>
        {/* 1. Hero Section with Carousel & Buyer Paths */}
        <Hero
          onOpenQuote={(type) => {
            setPreFilledInquiry({ inquiryType: type || 'Wholesale Supply' });
            scrollToContact();
          }}
          onSelectPath={handleBuyerPath}
        />

        {/* 2. Commercial Credibility & Stats Band */}
        <StatsBand stats={stats} />

        {/* 3. Wheat & Flour Product Catalog */}
        <ProductShowcase
          products={products}
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onQuickInquiry={handleQuickInquiry}
        />

        {/* 4. 7-Stage Buhler Roller Milling & Stone Chakki Journey */}
        <ProcessingJourney />

        {/* 5. Cereal Testing Laboratory & Interactive Flour Fineness Slider */}
        <QualityInfrastructure />

        {/* 6. Auto-Scrolling Press Marquee & Customer Testimonials Carousel */}
        <TestimonialsSection />

        {/* 7. Accreditations & Verified Standards (FSSAI, ISO 22000, APEDA) */}
        <CertificatesSection certificates={certificates} />

        {/* 8. Interactive Container Trade Calculator */}
        <ExportWizard
          onPreFillInquiry={(reqData) => {
            setPreFilledInquiry(reqData);
            scrollToContact();
          }}
        />

        {/* 9. Dedicated Contact & Quotation Section */}
        <ContactSection
          preFilledData={preFilledInquiry}
          onClearPreFill={() => setPreFilledInquiry(null)}
          onOpenTracker={handleOpenTracker}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenTracker={() => handleOpenTracker('')}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Slidebar Drawer */}
      <SidebarDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onOpenQuote={(type) => {
          setPreFilledInquiry({ inquiryType: type || 'Wholesale Supply' });
          scrollToContact();
        }}
        onOpenTracker={() => handleOpenTracker('')}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={(prod) => handleQuickInquiry(prod)}
        />
      )}

      {trackerOpen && (
        <InquiryTrackerModal
          initialRefId={trackerRefId}
          onClose={() => setTrackerOpen(false)}
        />
      )}

      {adminOpen && (
        <AdminInquiryModal
          onClose={() => setAdminOpen(false)}
        />
      )}

      {/* Floating Instant WhatsApp Action */}
      <a
        href="https://wa.me/919974250749?text=Hello%20Khushbu%20Agro%2C%20I%20would%20like%20to%20inquire%20about%20chakki%20atta%20and%20wheat%20supply."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#6b8e23',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 25px rgba(107, 142, 35, 0.5)',
          zIndex: 90,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(107, 142, 35, 0.65)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(107, 142, 35, 0.5)';
        }}
      >
        <MessageSquare size={26} />
      </a>
    </div>
  );
}
