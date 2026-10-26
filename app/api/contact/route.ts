import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

// Email templates
function getTeamEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Enquiry - UKB Bathrooms</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0B1A6B 0%, #0B86EE 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0; font-size: 28px; }
    .header p { margin: 10px 0 0; opacity: 0.9; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: bold; color: #0B1A6B; margin-bottom: 5px; display: block; }
    .field-value { background: white; padding: 12px; border-left: 4px solid #0B86EE; border-radius: 4px; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    .button { display: inline-block; background: #0B86EE; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Enquiry Received</h1>
    <p>UKB Bathrooms - Bathroom Fitters in Southampton</p>
  </div>
  
  <div class="content">
    <div class="field">
      <span class="field-label">Customer Name:</span>
      <div class="field-value">${data.name}</div>
    </div>
    
    <div class="field">
      <span class="field-label">Email Address:</span>
      <div class="field-value">
        <a href="mailto:${data.email}" style="color: #0B86EE;">${data.email}</a>
      </div>
    </div>
    
    <div class="field">
      <span class="field-label">Phone Number:</span>
      <div class="field-value">
        <a href="tel:${data.phone}" style="color: #0B86EE;">${data.phone}</a>
      </div>
    </div>
    
    <div class="field">
      <span class="field-label">Service Interested In:</span>
      <div class="field-value">${data.service || 'Not specified'}</div>
    </div>
    
    <div class="field">
      <span class="field-label">Message:</span>
      <div class="field-value">${data.message || 'No message provided'}</div>
    </div>
    
    <div style="text-align: center;">
      <a href="mailto:${data.email}" class="button">Reply to Customer</a>
    </div>
  </div>
  
  <div class="footer">
    <p>This enquiry was submitted via the UKB Bathrooms website</p>
    <p>Submitted on: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
  </div>
</body>
</html>
  `;
}

function getCustomerEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - UKB Bathrooms</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0B1A6B 0%, #0B86EE 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0; font-size: 28px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-box { background: white; padding: 20px; border-left: 4px solid #0B86EE; border-radius: 4px; margin: 20px 0; }
    .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px; }
    .contact-info { background: #e9efff; padding: 15px; border-radius: 5px; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Thank You for Your Enquiry</h1>
    <p>UKB Bathrooms - Bathroom Fitters in Southampton</p>
  </div>
  
  <div class="content">
    <p>Dear ${data.name},</p>
    
    <p>Thank you for getting in touch with UKB Bathrooms. We have received your enquiry and a member of our team will be in touch with you shortly.</p>
    
    <div class="info-box">
      <strong>Your Enquiry Details:</strong><br><br>
      Service: ${data.service || 'Not specified'}<br>
      Message: ${data.message || 'No message provided'}
    </div>
    
    <p>In the meantime, if you have any urgent questions, please don't hesitate to contact us directly:</p>
    
    <div class="contact-info">
      <p><strong>Phone:</strong> <a href="tel:+447838349520" style="color: #0B86EE;">+44 7838 349520</a></p>
      <p><strong>Email:</strong> <a href="mailto:info@ukbbathroom.co.uk" style="color: #0B86EE;">info@ukbbathroom.co.uk</a></p>
    </div>
    
    <p>We look forward to helping you create your dream bathroom.</p>
    
    <p style="margin-top: 30px; font-style: italic;">Beautiful Bathrooms. Designed Around You.</p>
  </div>
  
  <div class="footer">
    <p>UKB Bathrooms | Bathroom Fitters in Southampton</p>
    <p>Serving Southampton, Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton, Hedge End, Chandler's Ford and Romsey</p>
  </div>
</body>
</html>
  `;
}

// Rate limiting (simple in-memory approach)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes and try again.' },
        { status: 429 }
      );
    }

    // Check environment variables
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_APP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || smtpEmail;

    if (!smtpEmail || !smtpPassword) {
      console.error('Missing SMTP credentials');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });

    // Send email to team
    const teamMailOptions = {
      from: smtpEmail,
      to: recipientEmail,
      subject: `New Enquiry - ${service || 'General'} - ${name}`,
      html: getTeamEmailTemplate({ name, email, phone, service, message }),
    };

    // Send confirmation email to customer
    const customerMailOptions = {
      from: smtpEmail,
      to: email,
      subject: 'Thank You for Your Enquiry - UKB Bathrooms',
      html: getCustomerEmailTemplate({ name, email, phone, service, message }),
    };

    // Send both emails
    await transporter.sendMail(teamMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
