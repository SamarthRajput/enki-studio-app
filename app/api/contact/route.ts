import { FormData } from '@/lib/types/formData';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_PORT === '465',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const getAdminEmailTemplate = (data: FormData) => {
  return {
    subject: `🚀 New Contact Form Submission - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">✨ New Contact Request</h1>
          <p style="color: #e2e8f0; margin: 10px 0 0 0;">Someone wants to work with you!</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="border-left: 4px solid #667eea; padding-left: 20px; margin-bottom: 25px;">
            <h2 style="color: #2d3748; margin: 0 0 10px 0;">Contact Details</h2>
          </div>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: bold; color: #4a5568; margin-bottom: 5px;">👤 Name:</label>
            <p style="margin: 0; padding: 10px; background: #f7fafc; border-radius: 5px; border: 1px solid #e2e8f0;">${data.name}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: bold; color: #4a5568; margin-bottom: 5px;">🏢 Company & Role:</label>
            <p style="margin: 0; padding: 10px; background: #f7fafc; border-radius: 5px; border: 1px solid #e2e8f0;">${data.company}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: bold; color: #4a5568; margin-bottom: 5px;">📧 Email:</label>
            <p style="margin: 0; padding: 10px; background: #f7fafc; border-radius: 5px; border: 1px solid #e2e8f0;">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email}</a>
            </p>
          </div>
          
          <div style="margin-bottom: 30px;">
            <label style="display: block; font-weight: bold; color: #4a5568; margin-bottom: 5px;">💭 Message:</label>
            <div style="padding: 15px; background: #f7fafc; border-radius: 5px; border: 1px solid #e2e8f0; line-height: 1.6;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <a href="mailto:${data.email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
              Reply to ${data.name} →
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 14px;">
          <p>This email was sent from your portfolio contact form</p>
        </div>
      </div>
    `,
  };
};

const getUserConfirmationTemplate = (data: FormData) => {
  return {
    subject: 'You’ve sparked the magic ✨',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f8fafc;">
        <div style="background: linear-gradient(135deg, #ff355e 0%, #ff6f91 100%); padding: 32px 24px; border-radius: 12px; text-align: center; color: white; margin-bottom: 32px;">
          <h1 style="margin: 0; font-size: 28px; font-family: 'Playfair Display', serif;">You’ve sparked the magic ✨</h1>
        </div>
        
        <div style="padding: 18px 10px;">
          <p style="font-size: 20px; font-family: 'Playfair Display', serif; margin: 0 0 16px 0;">Hi ${data.name},</p>
          <p style="color: #3d4852; font-size: 16px;">
            You’ve just taken the first bold step into our world — where design dares to rebel, ideas bend the rules, and AI stands for Aesthetic Innovation.
          </p>
          <div style="margin: 24px 0;">
            <h3 style="color: #ff355e; margin-bottom: 10px; font-size: 17px;">Here’s what you shared:</h3>
            <ul style="padding-left: 20px; color: #24292f; margin: 0;">
              <li><strong>Company & Designation:</strong> ${data.company}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Message:</strong><br><span style="display:inline-block; margin-top:6px;">${data.message.replace(/\n/g, '<br>')}</span></li>
            </ul>
          </div>
          <p style="font-size: 16px;">
            Every great story begins with a spark. Yours has just landed with us, and we can’t wait to explore how we can transform it into something unforgettable.<br>
            Our team will review your vision and get back to you shortly with the next steps.
          </p>
          <p style="margin: 20px 0 8px 0;">Until then, feel free to wander through our latest creations:</p>
          <a href="https://enki.studio/" style="display:inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 11px 28px; border-radius: 25px; font-weight: bold;">enki.studio</a>
          <p style="margin-top: 32px; color: #718096; font-size: 15px;">Stay inspired,<br><em>Enki Studio Team</em></p>
        </div>
      </div>
    `,
  };
};


export async function POST(request: NextRequest) {
  try {
    const { name, company, email, message }: FormData = await request.json();

    // Validation
    if (!name?.trim() || !company?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({
        message: 'All fields are required',
      }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({
        message: 'Please provide a valid email address',
      }, { status: 400 });
    }

    // Create transporter
    const transporter = createTransporter();
    await transporter.verify();

    // Clean form data
    const formData: FormData = {
      name: name.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
    };

    // Send admin email
    const adminEmail = getAdminEmailTemplate(formData);
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: adminEmail.subject,
      html: adminEmail.html,
    });

    // Send user confirmation email
    const userEmail = getUserConfirmationTemplate(formData);
    await transporter.sendMail({
      from: `"Your Name" <${process.env.SMTP_USER}>`,
      to: formData.email,
      subject: userEmail.subject,
      html: userEmail.html,
    });

    return NextResponse.json({
      message: 'Emails sent successfully!',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json({
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error : undefined,
    }, { status: 500 });
  }
}
