import React, { useState } from 'react';
import { 
  Globe2, 
  Calculator, 
  Container, 
  Package, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Wheat
} from 'lucide-react';

export default function ExportWizard({ onPreFillInquiry }) {
  const [selectedProduct, setSelectedProduct] = useState('KAI Khushbu Chakki Fresh Atta');
  const [containerType, setContainerType] = useState('20ft-fcl');
  const [packagingType, setPackagingType] = useState('25kg-pp');
  const [destinationRegion, setDestinationRegion] = useState('Middle East (UAE / Saudi Arabia / Qatar)');

  const getEstimatedMetrics = () => {
    let metricTons = 24;
    if (containerType === '40ft-fcl') metricTons = 28;
    if (containerType === 'multi-container') metricTons = 120;
    if (containerType === 'domestic-truck') metricTons = 22;

    let bagCount = 0;
    if (packagingType === '1kg-pouch') bagCount = metricTons * 1000;
    else if (packagingType === '5kg-bag') bagCount = (metricTons * 1000) / 5;
    else if (packagingType === '10kg-bag') bagCount = (metricTons * 1000) / 10;
    else if (packagingType === '25kg-pp') bagCount = (metricTons * 1000) / 25;
    else if (packagingType === '50kg-hdpe') bagCount = (metricTons * 1000) / 50;

    return {
      metricTons,
      bagCount: Math.round(bagCount).toLocaleString(),
      fobPort: 'Mundra / Kandla Sea Port, Gujarat, India',
      transitDocs: 'Commercial Invoice, Packing List, Bill of Lading (BL), APEDA Certificate of Origin, Phytosanitary Certificate, SGS Quality Report'
    };
  };

  const metrics = getEstimatedMetrics();

  const handleApplyToForm = () => {
    const requirementSummary = {
      inquiryType: 'Export & International Trade',
      productInterest: selectedProduct,
      estimatedQuantity: `${metrics.metricTons} MT (${containerType})`,
      packagingPreference: packagingType,
      deliveryLocation: destinationRegion,
      message: `Export Inquiry for ${selectedProduct}. Estimated Volume: ${metrics.metricTons} MT via ${containerType} in ${packagingType} format. Destination: ${destinationRegion}. Please provide CIF / FOB Mundra port quotations.`
    };
    onPreFillInquiry(requirementSummary);
  };

  return (
    <section id="export-wizard" className="section section-dark" style={{ backgroundColor: '#1c1917' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow eyebrow-dark">
            <Globe2 size={14} /> Trade &amp; Export Calculator
          </span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            International Wheat &amp; Flour Container Estimator
          </h2>
          <p className="section-subtitle">
            Configure your shipment parameters to calculate container loads, packaging formats, and export compliance documentation requirements.
          </p>
        </div>

        {/* Wizard Box */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '2.5rem',
          color: '#1c1917',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.4)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem'
        }}>
          {/* Controls Column */}
          <div>
            <h3 style={{ fontSize: '1.25rem', color: '#1c1917', fontWeight: 900, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calculator size={22} color="#84a93c" /> Step 1: Select Shipment Parameters
            </h3>

            {/* Product Selector */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#475569', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                Wheat / Flour Product:
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1.5px solid #eae4d3',
                  backgroundColor: '#f5f1e6',
                  fontWeight: 700,
                  color: '#1c1917',
                  outline: 'none'
                }}
              >
                <option value="KAI Khushbu Chakki Fresh Atta">KAI Khushbu Chakki Fresh Whole Wheat Atta</option>
                <option value="MP Sharbati Premium Wheat Grain">MP Sharbati &amp; Lokwan Premium Wheat Grain</option>
                <option value="Superfine Maida (Refined Flour)">Superfine Maida (Refined Flour)</option>
                <option value="Granular Sooji / Rawa">Granular Sooji / Rawa (Semolina)</option>
                <option value="Durum Wheat & Pasta Flour">Durum Wheat Flour &amp; Pasta Semolina</option>
                <option value="Fibrous Wheat Bran (Choker)">Fibrous Wheat Bran (Choker)</option>
              </select>
            </div>

            {/* Shipment Volume */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#475569', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                Shipment Container Volume:
              </label>
              <select
                value={containerType}
                onChange={(e) => setContainerType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1.5px solid #eae4d3',
                  backgroundColor: '#f5f1e6',
                  fontWeight: 700,
                  color: '#1c1917',
                  outline: 'none'
                }}
              >
                <option value="20ft-fcl">1 x 20ft FCL Container (~ 24 Metric Tons)</option>
                <option value="40ft-fcl">1 x 40ft FCL Container (~ 28 Metric Tons)</option>
                <option value="multi-container">Multi-Container Contract (5 x 20ft FCL ~ 120 MT)</option>
                <option value="domestic-truck">Full Truck Load - Domestic (20 - 25 MT)</option>
              </select>
            </div>

            {/* Packaging Format */}
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#475569', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                Packaging &amp; Bagging Format:
              </label>
              <select
                value={packagingType}
                onChange={(e) => setPackagingType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1.5px solid #eae4d3',
                  backgroundColor: '#f5f1e6',
                  fontWeight: 700,
                  color: '#1c1917',
                  outline: 'none'
                }}
              >
                <option value="25kg-pp">25 kg Standard PP Woven Bag (Export Standard)</option>
                <option value="50kg-hdpe">50 kg Heavy Duty HDPE / Jute Export Bag</option>
                <option value="10kg-bag">10 kg Consumer Bag (Master Outer Bag)</option>
                <option value="5kg-bag">5 kg Consumer Pouch (Master Outer Carton)</option>
                <option value="1kg-pouch">1 kg Retail Laminated Pouch</option>
              </select>
            </div>

            {/* Destination */}
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 800, color: '#475569', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                Destination Region / Port:
              </label>
              <select
                value={destinationRegion}
                onChange={(e) => setDestinationRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1.5px solid #eae4d3',
                  backgroundColor: '#f5f1e6',
                  fontWeight: 700,
                  color: '#1c1917',
                  outline: 'none'
                }}
              >
                <option value="Middle East (UAE / Saudi Arabia / Qatar)">Middle East (Jebel Ali / Dammam / Doha)</option>
                <option value="European Union (Rotterdam / Hamburg / UK)">European Union (Rotterdam / Hamburg / UK)</option>
                <option value="North America (USA / Canada)">North America (New York / Long Beach / Montreal)</option>
                <option value="Southeast Asia (Singapore / Malaysia / Vietnam)">Southeast Asia (Singapore / Port Klang / Vietnam)</option>
                <option value="Africa (Durban / Mombasa / Lagos)">Africa (Durban / Mombasa / Lagos)</option>
                <option value="Domestic Indian Supply">Domestic Supply (Gujarat / Maharashtra / Pan-India)</option>
              </select>
            </div>
          </div>

          {/* Results Column */}
          <div style={{
            backgroundColor: '#f4fce8',
            borderRadius: '18px',
            padding: '2rem',
            border: '1.5px solid #b5d867',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#5c7924', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Consignment Summary
                </span>
                <span style={{ backgroundColor: '#84a93c', color: '#fff', fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.65rem', borderRadius: '6px' }}>
                  FOB Mundra Port
                </span>
              </div>

              {/* Key Output Metrics */}
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                padding: '1.25rem',
                border: '1px solid #ebf5d6',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Total Net Weight</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#1c1917' }}>
                      {metrics.metricTons} Metric Tons
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Bag / Unit Count</div>
                    <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#84a93c' }}>
                      {metrics.bagCount} Packs
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.2rem' }}>Origin Port:</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1c1917' }}>
                    {metrics.fobPort}
                  </div>
                </div>
              </div>

              {/* Compliance list */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#5c7924', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Included Export Documentation:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: '#334155' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={14} color="#84a93c" /> APEDA RCMC &amp; Certificate of Origin
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={14} color="#84a93c" /> Government Approved Phytosanitary Certificate
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={14} color="#84a93c" /> Third-Party SGS / Intertek Pre-Shipment Inspection
                  </div>
                </div>
              </div>
            </div>

            {/* Forward to Contact Form */}
            <button
              onClick={handleApplyToForm}
              className="btn btn-primary btn-block"
              style={{ padding: '0.9rem 1.5rem', fontWeight: 800 }}
            >
              Transfer To Formal Quote Inquiry <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
