# Jason Ranney Website - Complete Setup Guide

This guide will help you set up both the frontend React website and the backend email system.

## 🚀 Quick Start

### 1. Start the Frontend (React Website)
```bash
npm start
```
Your website will be available at: http://localhost:3000

### 2. Start the Backend (Email System)
```bash
cd backend
npm start
```
Your backend will be available at: http://localhost:5000

## 📁 Project Structure

```
MyNewWebsite/
├── src/                    # React frontend
│   ├── components/         # Website pages
│   ├── App.js             # Main app
│   └── App.css            # Styling
├── backend/                # Email backend
│   ├── server.js          # Express server
│   └── package.json       # Backend dependencies
├── public/                 # Static files
└── package.json            # Frontend dependencies
```

## 🔧 Backend Setup (Required for Email Functionality)

### Step 1: Gmail App Password Setup
**IMPORTANT**: You need a Gmail App Password for security:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification**
3. Scroll down and click **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Name it "Jason's Website" and click **Generate**
6. **Copy the 16-character password** (you'll only see it once!)

### Step 2: Create Environment File
In the `backend` folder, create a file called `.env`:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
```

**Example:**
```env
EMAIL_USER=jason.ranney@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
```

### Step 3: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 4: Test the Backend
```bash
npm start
```

You should see:
```
Server running on port 5000
Sample requests endpoint: http://localhost:5000/api/samples
Contact endpoint: http://localhost:5000/api/contact
```

## 🌐 Frontend Setup

### Step 1: Install Frontend Dependencies
```bash
npm install
```

### Step 2: Start the Website
```bash
npm start
```

Your website will open at: http://localhost:3000

## 📧 How Email System Works

### Sample Request Form
- **Endpoint**: `POST /api/samples`
- **Sends to**: jason.ranney@shawinc.com
- **Includes**: Contact info, shipping address, product preferences, timeline

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Sends to**: jason.ranney@shawinc.com
- **Includes**: Contact info, inquiry type, message details

### Email Format
Both forms send professionally formatted HTML emails with:
- ✅ Contact information
- ✅ Form details
- ✅ Professional formatting
- ✅ Direct reply capability

## 🧪 Testing the System

### 1. Test Sample Request Form
1. Go to "Order Samples" page
2. Fill out the form
3. Submit
4. Check your email (jason.ranney@shawinc.com)

### 2. Test Contact Form
1. Go to "Contact" page
2. Fill out the form
3. Submit
4. Check your email (jason.ranney@shawinc.com)

### 3. Test Backend Health
Visit: http://localhost:5000/api/health
Should show: `{"status":"OK","message":"Backend is running"}`

## 🚨 Troubleshooting

### Email Not Sending?
- ✅ Check Gmail App Password (16 characters, no spaces)
- ✅ Ensure 2-Step Verification is enabled
- ✅ Check .env file exists in backend folder
- ✅ Verify backend is running on port 5000

### Forms Not Working?
- ✅ Ensure backend is running (`cd backend && npm start`)
- ✅ Check browser console for errors
- ✅ Verify both frontend (3000) and backend (5000) are running

### Port Conflicts?
- ✅ Change PORT in backend/.env file
- ✅ Update frontend fetch URLs to match new port

## 🔒 Security Features

- **Gmail App Passwords**: More secure than regular passwords
- **CORS Protection**: Only allows frontend communication
- **Input Validation**: Prevents malicious data
- **Error Handling**: No sensitive data logging
- **Professional Formatting**: Branded email templates

## 📱 Production Deployment

### Frontend
```bash
npm run build
```
Creates optimized build in `build/` folder

### Backend
```bash
cd backend
npm start
```
Use PM2 or similar for production process management

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all dependencies are installed
3. Ensure both servers are running
4. Check browser console and terminal for error messages

## 🎯 Next Steps

Once everything is working:
1. **Customize Content**: Update text, images, contact details
2. **Test Forms**: Ensure emails are being received
3. **Deploy**: Move to production hosting
4. **Monitor**: Check email delivery and form submissions

---

**Your website is now fully functional with:**
✅ Professional React frontend  
✅ Working contact forms  
✅ Email integration to jason.ranney@shawinc.com  
✅ Responsive design  
✅ Professional styling  

**Ready to help customers order samples and get in touch!** 🎉 