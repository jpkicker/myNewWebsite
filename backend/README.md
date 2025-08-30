# Jason Ranney Website Backend

This backend handles form submissions from the website and sends emails to jason.ranney@shawinc.com.

## Features

- **Sample Request Endpoint**: `/api/samples` - Handles flooring sample requests
- **Contact Form Endpoint**: `/api/contact` - Handles general contact inquiries
- **Email Integration**: Automatically sends formatted emails to your business email

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Gmail App Password Setup
For security, you need to create a Gmail App Password:

1. Go to your Google Account settings
2. Navigate to Security → 2-Step Verification
3. Create an "App Password" for "Mail"
4. Use this password in your .env file

### 3. Environment Configuration
Create a `.env` file in the backend folder:
```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=5000
```

### 4. Run the Backend
```bash
# Development mode (auto-restart on changes)
npm run dev

# Production mode
npm start
```

## API Endpoints

### POST /api/samples
Handles sample request form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "company": "ABC Company",
  "address": "123 Main St, City, State",
  "productType": "COREtec Floors",
  "projectType": "Residential",
  "timeline": "Within 1 month",
  "specificProducts": "Gray wood look",
  "additionalInfo": "Need waterproof options"
}
```

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "555-5678",
  "company": "XYZ Corp",
  "inquiryType": "Product Information",
  "subject": "Flooring Consultation",
  "message": "I'm interested in your flooring solutions..."
}
```

## Email Format

Both endpoints send professionally formatted HTML emails to jason.ranney@shawinc.com with:
- Contact information
- Form details
- Professional formatting
- Direct reply capability

## Security Notes

- Uses Gmail App Passwords (more secure than regular passwords)
- CORS enabled for frontend communication
- Input validation and error handling
- No sensitive data logging

## Troubleshooting

- **Email not sending**: Check Gmail App Password and 2FA settings
- **CORS errors**: Ensure frontend is calling from correct origin
- **Port conflicts**: Change PORT in .env file if 5000 is busy 