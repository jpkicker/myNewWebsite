import React, { useState } from 'react';

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          inquiryType: '',
          subject: '',
          message: ''
        });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert('Failed to send message: ' + result.message);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or contact us directly.');
    }
  };

  return (
    <div id="contact" className="page">
      <section className="form-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#1e3a8a' }}>Contact Your Shaw Territory Manager</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>Ready to discuss your flooring project? Let's connect and find the perfect solution for your needs.</p>
          
          <div className="form-container">
            {showSuccess && (
              <div className="success-message">
                Thank you for your message! I'll get back to you within 24 hours.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="contactName">Full Name *</label>
                <input 
                  type="text" 
                  id="contactName" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactEmail">Email Address *</label>
                <input 
                  type="email" 
                  id="contactEmail" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactPhone">Phone Number</label>
                <input 
                  type="tel" 
                  id="contactPhone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contactCompany">Company/Organization</label>
                <input 
                  type="text" 
                  id="contactCompany" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select 
                  id="inquiryType" 
                  name="inquiryType" 
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="product-info">Product Information</option>
                  <option value="pricing">Pricing & Availability</option>
                  <option value="technical">Technical Support</option>
                  <option value="samples">Sample Request</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="general">General Question</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Brief subject line for your inquiry"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Please provide details about your flooring project, questions, or how I can help you..." 
                  required 
                  style={{ height: '150px' }}
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
            </form>
            
            <div style={{ marginTop: '3rem', textAlign: 'center', paddingTop: '2rem', borderTop: '2px solid #e2e8f0' }}>
              <h3 style={{ color: '#1e3a8a', marginBottom: '1rem' }}>Direct Contact Information</h3>
              <p style={{ marginBottom: '0.5rem' }}><strong>Email:</strong> jason.ranney@shawinc.com</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Phone:</strong> (561) 451-5880</p>
              <p style={{ marginBottom: '0.5rem' }}><strong>Territory:</strong> South Florida & Southeast Florida</p>
              <p><strong>Response Time:</strong> Within 24 hours during business days</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 