const API_BASE = '/api';

export const api = {
  // Fetch all agro products
  async getProducts(params = {}) {
    const query = new URLSearchParams();
    if (params.category && params.category !== 'all') query.append('category', params.category);
    if (params.search) query.append('search', params.search);
    if (params.featured) query.append('featured', 'true');

    const res = await fetch(`${API_BASE}/products?${query.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  // Fetch single product by slug
  async getProductBySlug(slug) {
    const res = await fetch(`${API_BASE}/products/${slug}`);
    if (!res.ok) throw new Error('Product not found');
    return res.json();
  },

  // Fetch company stats
  async getStats() {
    const res = await fetch(`${API_BASE}/stats`);
    if (!res.ok) throw new Error('Failed to fetch company stats');
    return res.json();
  },

  // Fetch verified certificates
  async getCertificates() {
    const res = await fetch(`${API_BASE}/certificates`);
    if (!res.ok) throw new Error('Failed to fetch certificates');
    return res.json();
  },

  // Check system health
  async getHealth() {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) throw new Error('System health check failed');
    return res.json();
  },

  // Submit Contact / Quote Inquiry
  async submitInquiry(formData) {
    const res = await fetch(`${API_BASE}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (!res.ok) {
      const errorMsg = data.errors ? data.errors.map(e => e.message).join('. ') : (data.message || 'Submission failed');
      throw new Error(errorMsg);
    }
    return data;
  },

  // Track inquiry status
  async trackInquiry(refId) {
    const res = await fetch(`${API_BASE}/inquiries/track/${encodeURIComponent(refId.trim())}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Inquiry not found');
    }
    return data;
  },

  // Admin: Get all inquiries
  async getAdminInquiries(adminKey, filters = {}) {
    const query = new URLSearchParams();
    if (filters.status && filters.status !== 'all') query.append('status', filters.status);
    if (filters.inquiryType && filters.inquiryType !== 'all') query.append('inquiryType', filters.inquiryType);
    if (filters.search) query.append('search', filters.search);

    const res = await fetch(`${API_BASE}/inquiries?${query.toString()}`, {
      headers: {
        'Authorization': `Bearer ${adminKey}`
      }
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Admin authentication failed');
    }
    return data;
  },

  // Admin: Update inquiry status
  async updateInquiryStatus(adminKey, id, status, adminNotes) {
    const res = await fetch(`${API_BASE}/inquiries/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${adminKey}`
      },
      body: JSON.stringify({ status, adminNotes })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || 'Failed to update inquiry');
    }
    return data;
  }
};
