import React, { useState } from 'react';
import { 
  Globe2, 
  Calculator, 
  Container, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Wheat,
  MapPin,
  FileCheck2,
  Sparkles
} from 'lucide-react';

const productsList = [
  'KAI Khushbu Chakki Fresh Whole Wheat Atta',
  'MP Sharbati & Lokwan Premium Wheat Grain',
  'Superfine Maida (Refined Flour)'
];

const containerOptions = [
  { id: '20ft-fcl', label: '1 x 20ft FCL Container', mt: 24, badge: 'Standard Sea Export' },
  { id: '40ft-fcl', label: '1 x 40ft FCL Container', mt: 28, badge: 'High Volume Load' },
  { id: 'multi-container', label: 'Multi-Container Contract (5x FCL)', mt: 120, badge: 'Bulk Commercial Trade' },
  { id: 'domestic-truck', label: 'Full Truck Load (Pan-India)', mt: 22, badge: 'Domestic Direct Supply' }
];

const packagingFormats = [
  { id: '25kg-pp', label: '25 kg PP Woven Bag (Export Standard)' },
  { id: '50kg-hdpe', label: '50 kg Heavy HDPE / Jute Export Bag' },
  { id: '10kg-bag', label: '10 kg Master Outer Pouch' },
  { id: '5kg-bag', label: '5 kg Master Outer Pouch' },
  { id: '1kg-pouch', label: '1 kg Retail Laminated Pouch' }
];

const destinationPorts = [
  'Middle East (Jebel Ali / Dammam / Doha)',
  'European Union (Rotterdam / Hamburg / UK)',
  'North America (New York / Long Beach)',
  'Southeast Asia (Singapore / Port Klang)',
  'Africa (Durban / Mombasa / Lagos)',
  'Domestic Supply (Gujarat / Pan-India)'
];

export default function ExportWizard({ onPreFillInquiry }) {
  const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
  const [containerType, setContainerType] = useState('20ft-fcl');
  const [packagingType, setPackagingType] = useState('25kg-pp');
  const [destinationRegion, setDestinationRegion] = useState(destinationPorts[0]);

  const activeContainer = containerOptions.find(c => c.id === containerType) || containerOptions[0];

  const getEstimatedMetrics = () => {
    const metricTons = activeContainer.mt;
    let bagCount = 0;
    if (packagingType === '1kg-pouch') bagCount = metricTons * 1000;
    else if (packagingType === '5kg-bag') bagCount = (metricTons * 1000) / 5;
    else if (packagingType === '10kg-bag') bagCount = (metricTons * 1000) / 10;
    else if (packagingType === '25kg-pp') bagCount = (metricTons * 1000) / 25;
    else if (packagingType === '50kg-hdpe') bagCount = (metricTons * 1000) / 50;

    return {
      metricTons,
      bagCount: Math.round(bagCount).toLocaleString(),
      fobPort: 'Mundra / Kandla Port, Gujarat, India',
      originRegion: 'Himatnagar Flour Corridor, Gujarat'
    };
  };

  const metrics = getEstimatedMetrics();

  const handleApplyToForm = () => {
    const requirementSummary = {
      inquiryType: 'Export & International Trade',
      productInterest: selectedProduct,
      estimatedQuantity: `${metrics.metricTons} MT (${activeContainer.label})`,
      packagingPreference: packagingType,
      deliveryLocation: destinationRegion,
      message: `Export Inquiry for ${selectedProduct}. Estimated Volume: ${metrics.metricTons} MT via ${activeContainer.label} in ${packagingType} format. Destination: ${destinationRegion}. Please provide FOB Mundra port quotations.`
    };
    onPreFillInquiry(requirementSummary);
  };

  return (
    <section id="export-wizard" style={{ backgroundColor: '#14110e', color: '#ffffff', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ambient Spheres */}
      <div style={{
        position: 'absolute',
        top: '15%',
        right: '-5%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(107, 142, 35, 0.14) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none'
      }} />

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
            <Globe2 size={15} color="#6b8e23" />
            <span>Containerized Export Estimator</span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            International Wheat &amp; Flour Shipment Calculator
          </h2>

          <p style={{
            color: '#efe8d8',
            fontSize: '1.05rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Calculate container net cargo weights, bag counts, export documentation requirements, and FOB Mundra port consignments.
          </p>
        </div>

        {/* Master Estimator Dashboard */}
        <div style={{
          backgroundColor: '#1f1a14',
          border: '2px solid #6b8e23',
          borderRadius: '28px',
          padding: '2.5rem',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>

          {/* Left Controls Column */}
          <div>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#9fc152',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <Calculator size={18} /> Step 1: Select Shipment Parameters
            </div>

            {/* Product Pills Selector */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#f4be6b', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                1. Wheat / Flour Grade:
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {productsList.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelectedProduct(p)}
                    style={{
                      backgroundColor: selectedProduct === p ? 'rgba(107, 142, 35, 0.25)' : 'rgba(15, 12, 10, 0.6)',
                      border: selectedProduct === p ? '1.5px solid #9fc152' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: selectedProduct === p ? '#ffffff' : '#aaaaaa',
                      padding: '0.65rem 1rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      fontWeight: selectedProduct === p ? 800 : 500,
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Container Volume Cards */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#f4be6b', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                2. Shipment Container Volume:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.6rem' }}>
                {containerOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setContainerType(c.id)}
                    style={{
                      backgroundColor: containerType === c.id ? '#6b8e23' : 'rgba(15, 12, 10, 0.6)',
                      border: containerType === c.id ? '2px solid #9fc152' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      padding: '0.75rem 0.85rem',
                      borderRadius: '14px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                      outline: 'none'
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', color: containerType === c.id ? '#ffffff' : '#9fc152', fontWeight: 800 }}>
                      {c.badge}
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                      {c.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Destination Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 800, color: '#f4be6b', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                3. Destination Region / Port:
              </label>
              <select
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1.5px solid rgba(107, 142, 35, 0.4)',
                  backgroundColor: '#14110e',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  outline: 'none'
                }}
              >
                {destinationPorts.map((port) => (
                  <option key={port} value={port}>{port}</option>
                ))}
              </select>
            </div>

          </div>

          {/* Right Metrics Output Column */}
          <div style={{
            backgroundColor: '#14110e',
            border: '1.5px solid rgba(107, 142, 35, 0.4)',
            borderRadius: '22px',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#9fc152', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Live Consignment Calculation
                </div>
                <span style={{
                  backgroundColor: '#6b8e23',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px'
                }}>
                  FOB Mundra Sea Port
                </span>
              </div>

              {/* Key Output Metrics Display */}
              <div style={{
                backgroundColor: 'rgba(43, 35, 25, 0.7)',
                border: '1px solid rgba(107, 142, 35, 0.3)',
                borderRadius: '18px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#aaaaaa', fontWeight: 600 }}>Estimated Cargo Weight</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                      {metrics.metricTons} <span style={{ fontSize: '1rem', color: '#9fc152' }}>MT</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#aaaaaa', fontWeight: 600 }}>Estimated Total Units</div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f4be6b', fontFamily: 'var(--font-heading)' }}>
                      {metrics.bagCount} <span style={{ fontSize: '1rem', color: '#f4be6b' }}>Packs</span>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#aaaaaa', marginBottom: '0.25rem' }}>Origin &amp; Dispatch Hub:</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
                    {metrics.fobPort}
                  </div>
                </div>
              </div>

              {/* Legal Documentation List */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#f4be6b', textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                  Included Export Trade Documentation:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: '#efe8d8' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <CheckCircle2 size={16} color="#9fc152" /> APEDA RCMC &amp; Government Certificate of Origin
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <CheckCircle2 size={16} color="#9fc152" /> Approved Phytosanitary Health &amp; Fumigation Certificate
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <CheckCircle2 size={16} color="#9fc152" /> Third-Party SGS / Intertek Pre-Shipment Inspection Report
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                    <CheckCircle2 size={16} color="#9fc152" /> Bill of Lading (BL) &amp; Commercial Customs Shipping Bill
                  </div>
                </div>
              </div>
            </div>

            {/* Transfer to Form Action Button */}
            <button
              onClick={handleApplyToForm}
              className="btn btn-primary btn-block btn-lg"
              style={{ fontWeight: 900, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
            >
              Transfer Estimate To Formal Quotation Inquiry <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
