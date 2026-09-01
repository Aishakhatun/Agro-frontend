export const fallbackProducts = [
  {
    _id: 'prod-1',
    name: 'KAI Khushbu Chakki Fresh Whole Wheat Atta',
    slug: 'khushbu-chakki-fresh-atta',
    category: 'atta',
    categoryLabel: 'Chakki Whole Wheat Atta',
    tagline: '100% MP Sharbati Grain, 0% Maida, Soft Rotis For 12+ Hours',
    description: '100% Whole Wheat Flour milled using traditional stone chakki technology to preserve natural bran, germ nutrition, and sweet aroma.',
    longDescription: 'Sourced from the sun-drenched fields of Madhya Pradesh, our flagship Khushbu Chakki Fresh Atta absorbs 35% more water, ensuring rotis stay extra soft, fluffy, and nutritious for hours without synthetic additives.',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    packageSizes: ['1 kg', '5 kg', '10 kg Pouch', '25 kg PP Bag', '50 kg Commercial HDPE'],
    specifications: {
      purity: '100% Whole Wheat (Zero Maida)',
      moisture: 'Max 11.0%',
      gluten: 'Min 9.5% Wet Gluten',
      ashContent: 'Max 1.4%',
      waterAbsorption: '68% - 72%',
      shelfLife: '6 - 9 Months',
      origin: 'Madhya Pradesh & Gujarat, India'
    },
    processingMethod: 'Cold Air-Cooled Stone Chakki Grinding & Multi-Stage Sieving',
    applications: ['Home Chapati & Phulka Baking', 'Bakeries & Restaurants', 'Institutional Caterers', 'Retail Grocery Chains'],
    nutritionalHighlights: {
      protein: '12.8g per 100g',
      dietaryFiber: '11.5g per 100g',
      calories: '340 kcal'
    },
    isFeatured: true,
    isExportGrade: true,
    displayOrder: 1
  },
  {
    _id: 'prod-2',
    name: 'MP Sharbati & Lokwan Premium Wheat Grain',
    slug: 'mp-sharbati-wheat-grain',
    category: 'grain',
    categoryLabel: 'Wheat Grain',
    tagline: 'Golden bold amber kernels, high protein & natural sweetness',
    description: 'Golden MP Sharbati & Lokwan wheat grains de-stoned, aspirator cleaned, and Sortex optical graded for bulk milling.',
    longDescription: 'Cultivated in the fertile black soils of Sehore and Vidisha, MP Sharbati is prized as the "King of Wheat" for its heavy grain weight, rich golden luster, and high natural sugar content.',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    packageSizes: ['5 kg', '25 kg', '50 kg PP Bag', '50 kg Jute Bag', 'Bulk Container'],
    specifications: {
      purity: '99.8% Buhler Sortex Clean',
      moisture: 'Max 10.5%',
      foreignMatter: 'Nil (0.01%)',
      damagedKernels: 'Max 0.5%',
      testWeight: '78 - 82 kg/hL',
      shelfLife: '24 Months',
      origin: 'Sehore, MP & Gujarat, India'
    },
    processingMethod: 'De-stoned, Aspirated, Optical Color Sortex & Magnetic Metal Extracted',
    applications: ['Commercial Flour Milling', 'Export Consignments', 'Retail Grain Packs'],
    nutritionalHighlights: {
      protein: '13.5g per 100g',
      dietaryFiber: '12.2g per 100g',
      calories: '345 kcal'
    },
    isFeatured: true,
    isExportGrade: true,
    displayOrder: 2
  },
  {
    _id: 'prod-3',
    name: 'Superfine Maida (Refined Wheat Flour)',
    slug: 'superfine-maida-flour',
    category: 'maida',
    categoryLabel: 'Refined Maida',
    tagline: 'Ultra-bright white, silky texture for bakery & confectionery perfection',
    description: 'High-purity refined wheat flour extracted from the endosperm, milled with roller mills for uniform particle size.',
    longDescription: 'Milled specifically for commercial bakeries, biscuit manufacturers, and fried snacks, providing optimal dough elasticity, crispness, and uniform rise without chemical bleaching.',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    packageSizes: ['1 kg', '5 kg', '25 kg', '50 kg HDPE Bag'],
    specifications: {
      purity: '100% Superfine Endosperm Extraction',
      moisture: 'Max 12.0%',
      gluten: '28% - 32% Wet Gluten',
      ashContent: 'Max 0.50%',
      particleSize: '100 Mesh Fine',
      shelfLife: '6 Months',
      origin: 'Gujarat & MP, India'
    },
    processingMethod: 'Multi-Pass Buhler Roller Flour Milling & Plan-Sifter Mesh Filtration',
    applications: ['Bakery & Bread Manufacturing', 'Biscuits & Cookies', 'Samosa & Naan Dough', 'Industrial Food Processing'],
    nutritionalHighlights: {
      protein: '11.0g per 100g',
      dietaryFiber: '2.8g per 100g',
      calories: '364 kcal'
    },
    isFeatured: true,
    isExportGrade: true,
    displayOrder: 3
  }
];

export const fallbackCertificates = [
  {
    title: 'FSSAI License & Food Safety Standards',
    code: 'FSSAI Reg. 10721031000189',
    authority: 'Food Safety and Standards Authority of India',
    description: 'Certified wheat milling, hygienic roller processing, zero-adulteration, and cleanroom packing compliance.',
    badgeText: 'FSSAI Approved',
    category: 'Food Safety',
    validityNote: 'Valid & Verified',
    iconName: 'ShieldCheck'
  },
  {
    title: 'ISO 22000:2018 Food Safety Management',
    code: 'ISO 22000:2018 FSMS',
    authority: 'International Organization for Standardization',
    description: 'Comprehensive management of food safety hazards across wheat procurement, roller milling, and bulk flour dispatch.',
    badgeText: 'ISO 22000:2018',
    category: 'Food Safety',
    validityNote: 'Annual Surveillance Audited',
    iconName: 'Award'
  },
  {
    title: 'APEDA Export Registration',
    code: 'APEDA/RCMC/AGRO/2024',
    authority: 'Agricultural & Processed Food Products Export Development Authority',
    description: 'Authorized exporter of MP Sharbati wheat grain, whole wheat flour (atta), maida, and semolina to global markets.',
    badgeText: 'APEDA Certified Exporter',
    category: 'Export Quality',
    validityNote: 'Active Exporter Registration',
    iconName: 'Globe'
  },
  {
    title: 'HACCP Hazard Analysis Critical Control Point',
    code: 'HACCP-COMPLIANT-MILL',
    authority: 'Codex Alimentarius Commission',
    description: 'Rigorous control points eliminating physical, chemical, and biological contamination across all flour milling lines.',
    badgeText: 'HACCP Standard',
    category: 'Process Certification',
    validityNote: 'Continuous Quality Monitoring',
    iconName: 'CheckCircle2'
  },
  {
    title: 'Import Export Code (IEC)',
    code: 'IEC: 0819004812',
    authority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce',
    description: 'Registered for global trade, containerized sea freight flour shipments, and international distribution.',
    badgeText: 'DGFT / IEC Verified',
    category: 'Export Quality',
    validityNote: 'Permanent Government Registration',
    iconName: 'FileCheck'
  },
  {
    title: 'GMP - Good Manufacturing Practice',
    code: 'GMP-KHUSHBU-2024',
    authority: 'Quality Management Accreditations',
    description: 'Standard operating procedures for plant sanitation, worker hygiene, dust-free milling chambers, and automated packaging.',
    badgeText: 'GMP Compliant Facility',
    category: 'Agricultural Standards',
    validityNote: 'Certified Facility',
    iconName: 'BadgeCheck'
  }
];
