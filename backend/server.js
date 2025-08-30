const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Sample Request Endpoint
app.post('/api/samples', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      address,
      productType,
      projectType,
      timeline,
      specificProducts,
      additionalInfo
    } = req.body;

    // Email content for sample request
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jason.ranney@shawinc.com',
      subject: `Sample Request - ${productType} from ${name}`,
      html: `
        <h2>New Sample Request</h2>
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        
        <h3>Shipping Address:</h3>
        <p>${address}</p>
        
        <h3>Product Details:</h3>
        <p><strong>Product Type:</strong> ${productType}</p>
        <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        
        <h3>Specific Products/Colors:</h3>
        <p>${specificProducts || 'Not specified'}</p>
        
        <h3>Additional Information:</h3>
        <p>${additionalInfo || 'None provided'}</p>
        
        <hr>
        <p><em>This request was submitted from your website contact form.</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Sample request submitted successfully. We\'ll be in touch soon!' 
    });

  } catch (error) {
    console.error('Error sending sample request email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit sample request. Please try again or contact us directly.' 
    });
  }
});

// Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      inquiryType,
      subject,
      message
    } = req.body;

    // Email content for contact form
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jason.ranney@shawinc.com',
      subject: `Website Contact: ${subject || inquiryType || 'General Inquiry'} from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <h3>Contact Information:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        
        <h3>Inquiry Details:</h3>
        <p><strong>Inquiry Type:</strong> ${inquiryType || 'Not specified'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        
        <h3>Message:</h3>
        <p>${message}</p>
        
        <hr>
        <p><em>This message was submitted from your website contact form.</em></p>
        <p><em>You can reply directly to: ${email}</em></p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully. We\'ll get back to you within 24 hours!' 
    });

  } catch (error) {
    console.error('Error sending contact email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Sample requests endpoint: http://localhost:${PORT}/api/samples`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
}); 