import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

function Samples() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    accountNumber: '',
    company: '',
    address: '',
    productType: '',
    specificProducts: '',
    additionalInfo: ''
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("EsGqyOamAwbbhxg7e"); // Your EmailJS Public Key
    console.log('EmailJS initialized with public key:', "EsGqyOamAwbbhxg7e");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS template parameters - simple format
      const templateParams = {
        to_name: 'Jason Ranney',
        to_email: 'jpkicker@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: `
New Sample Request from ${formData.name}

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone || 'Not provided'}
- Account Number: ${formData.accountNumber || 'Not provided'}
- Company: ${formData.company || 'Not provided'}

Shipping Address:
${formData.address}

Product Details:
- Product Type: ${formData.productType}

Specific Products/Colors:
${formData.specificProducts || 'Not specified'}

Additional Information:
${formData.additionalInfo || 'None provided'}
        `
      };

      // Send email using EmailJS - simple format
      const response = await emailjs.send(
        'service_kr8f7t2',
        'template_ba7capf',
        templateParams
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          accountNumber: '',
          company: '',
          address: '',
          productType: '',
          specificProducts: '',
          additionalInfo: ''
        });
        
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error Code:', error.code);
      console.error('Error Message:', error.message);
      console.error('Error Status:', error.status);
      console.error('Error Text:', error.text);
      console.error('Full Error Object:', JSON.stringify(error, null, 2));
      alert(`Failed to submit request. Error: ${error.message || 'Unknown error'}. Please try again or contact us directly at jpkicker@gmail.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="samples" className="page">
      <section className="form-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem', color: '#1e3a8a' }}>Order Your Flooring Samples</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', marginBottom: '3rem' }}>Get free samples of our premium Shaw flooring products delivered directly to your business for customer presentations and sales support.</p>
          
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
                <label htmlFor="accountNumber">Account Number</label>
                <input 
                  type="text" 
                  id="accountNumber" 
                  name="accountNumber" 
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  placeholder="Your account number (if applicable)"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">Company/Store Name *</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Business Shipping Address *</label>
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
                   <option value="porcelain">Shaw Porcelain</option>
                   <option value="anderson-tuftex">Anderson Tuftex</option>
                   <option value="multiple">Multiple Products</option>
                   <option value="consultation">Need Consultation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="specificProducts">Specific Products or Colors of Interest</label>
                <textarea 
                  id="specificProducts" 
                  name="specificProducts" 
                  placeholder="If you have specific product names, colors, or styles in mind for your customers, please let us know..."
                  value={formData.specificProducts}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <div className="form-group">
                <label htmlFor="additionalInfo">Additional Information or Special Requirements</label>
                <textarea 
                  id="additionalInfo" 
                  name="additionalInfo" 
                  placeholder="Any additional details about your business needs, special requirements, or questions..."
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Samples'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Samples; 