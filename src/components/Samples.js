import React, { useState } from 'react';

function Samples() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    productType: '',
    projectType: '',
    timeline: '',
    specificProducts: '',
    additionalInfo: ''
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
      const response = await fetch('http://localhost:5000/api/samples', {
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
          address: '',
          productType: '',
          projectType: '',
          timeline: '',
          specificProducts: '',
          additionalInfo: ''
        });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        alert('Failed to submit request: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit request. Please try again or contact us directly.');
    }
  };

  return (
    <div id="samples" className="page">
      <section className="form-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#1e3a8a' }}>Order Your Flooring Samples</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>Get free samples of our premium Shaw flooring products delivered directly to you.</p>
          
          <div className="form-container">
            {showSuccess && (
              <div className="success-message">
                Thank you! Your sample request has been submitted. We'll be in touch soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Shipping Address *</label>
                <textarea 
                  id="address" 
                  name="address" 
                  placeholder="Please provide your complete shipping address" 
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="productType">Product Type of Interest *</label>
                <select 
                  id="productType" 
                  name="productType" 
                  value={formData.productType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Product Type</option>
                  <option value="coretec">COREtec Floors</option>
                  <option value="laminate">Shaw Laminate</option>
                  <option value="vinyl">Shaw Vinyl</option>
                  <option value="hardwood">Shaw Hardwood</option>
                  <option value="multiple">Multiple Products</option>
                  <option value="consultation">Need Consultation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select 
                  id="projectType" 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Project Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="renovation">Renovation</option>
                  <option value="new-construction">New Construction</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="timeline">Project Timeline</label>
                <select 
                  id="timeline" 
                  name="timeline" 
                  value={formData.timeline}
                  onChange={handleInputChange}
                >
                  <option value="">Select Timeline</option>
                  <option value="immediate">Immediate (1-2 weeks)</option>
                  <option value="month">Within 1 month</option>
                  <option value="quarter">Within 3 months</option>
                  <option value="planning">Planning phase</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="specificProducts">Specific Products or Colors</label>
                <textarea 
                  id="specificProducts" 
                  name="specificProducts" 
                  placeholder="If you have specific product names, colors, or styles in mind, please let us know..."
                  value={formData.specificProducts}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea 
                  id="additionalInfo" 
                  name="additionalInfo" 
                  placeholder="Any additional details about your project, special requirements, or questions..."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn" style={{ width: '100%' }}>Request Samples</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Samples; 