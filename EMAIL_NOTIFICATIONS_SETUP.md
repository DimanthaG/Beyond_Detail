# How to Enable Email Notifications for Contact Form

I have updated your contact form to send email notifications to `info@beyonddetail.ca` whenever someone submits an inquiry.

However, to make this work, you need to sign up for a free service called **EmailJS** (it handles sending emails from Javascript without a backend server).

## 🛠️ Step-by-Step Setup Guide

### 1. Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for a free account.
2. Once logged in, click **"Add New Service"** and select **Gmail** (or whichever email provider you use for `info@beyonddetail.ca`).
3. Connect your account.
4. Copy the **Service ID** (e.g., `service_xxxxx`).

### 2. Create an Email Template
1. Click on **"Email Templates"** on the left sidebar.
2. Click **"Create New Template"**.
3. In the **To Email** field, enter: `info@beyonddetail.ca` (or leave it as default if your account email is the same).
4. In the **Subject** field, enter something like: `New Inquiry from {{from_name}}`.
5. In the **Content** area, design your email using these variables:
   - `{{from_name}}` - Customer Name
   - `{{from_email}}` - Customer Email
   - `{{phone}}` - Phone Number
   - `{{vehicle_type}}` - Vehicle Type (Sedan, SUV, etc.)
   - `{{interested_in}}` - Services interested in
   - `{{booking_date}}` - Preferred Date/Time
   - `{{message}}` - The customer's message

   **Example Content:**
   ```
   You have received a new inquiry from your website!

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}

   Vehicle: {{vehicle_type}}
   Interested In: {{interested_in}}
   Preferred Date: {{booking_date}}

   Message:
   {{message}}
   ```
6. Save the template and copy the **Template ID** (e.g., `template_xxxxx`).

### 3. Get Your Public Key
1. Click on **"Account"** (or your name) in the top right corner.
2. Look for **"Public Key"** (e.g., `user_xxxxx` or a long string). Copy it.

### 4. Update the Code
1. Open the file: `frontend_beyond_detail/src/Pages/Contact/Contact2.jsx`
2. Scroll down to around line 110 (inside `handleSubmit`).
3. Replace the placeholders with your actual keys:

```javascript
    const emailPromise = emailjs.send(
      'YOUR_SERVICE_ID',  // <-- Paste your Service ID here
      'YOUR_TEMPLATE_ID', // <-- Paste your Template ID here
      emailParams,
      'YOUR_PUBLIC_KEY'   // <-- Paste your Public Key here
    );
```

### ✅ That's it!
Once you save the file and deploy (or run locally), every time someone submits the contact form, you will receive an email notification instantly.
