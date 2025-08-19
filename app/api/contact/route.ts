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
    subject: '🎉 Thanks for reaching out! We received your message',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
          <h1 style="color: white; margin: 0; font-size: 24px;">✅ Message Received!</h1>
          <p style="color: #c6f6d5; margin: 10px 0 0 0;">We'll get back to you soon</p>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 25px;">
            <h2 style="color: #2d3748; margin: 0 0 10px 0;">Hi ${data.name}! 👋</h2>
            <p style="color: #4a5568; line-height: 1.6; margin: 0;">
              Thank you for taking the time to reach out! We've successfully received your message and we're excited to learn more about your project.
            </p>
          </div>
          
          <div style="background: #f7fafc; padding: 20px; border-radius: 10px; border-left: 4px solid #48bb78; margin-bottom: 25px;">
            <h3 style="color: #2d3748; margin: 0 0 15px 0;">📋 Your Message Summary:</h3>
            <p style="margin: 0 0 10px 0; color: #4a5568;"><strong>Company & Role:</strong> ${data.company}</p>
            <p style="margin: 0 0 15px 0; color: #4a5568;"><strong>Email:</strong> ${data.email}</p>
            <div style="color: #4a5568;">
              <strong>Message:</strong>
              <div style="margin-top: 10px; padding: 15px; background: white; border-radius: 5px; border: 1px solid #e2e8f0;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>
          
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px; color: white; text-align: center; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0;">⚡ What happens next?</h3>
            <ul style="text-align: left; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>We'll review your project details carefully</li>
              <li>Expect a personalized response within 24-48 hours</li>
              <li>We'll discuss your vision and how we can bring it to life</li>
            </ul>
          </div>
          
          <div style="text-align: center;">
            <p style="color: #4a5568; margin: 0 0 15px 0;">In the meantime, feel free to check out our latest work:</p>
            <a href="${process.env.WEBSITE_URL || '#'}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold;">
              View Our Portfolio →
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #718096; font-size: 14px;">
          <p>Have questions? Reply to this email or contact us directly.</p>
          <p style="margin: 5px 0 0 0;">
            📧 ${process.env.ADMIN_EMAIL || 'hello@yourwebsite.com'} | 
            🌐 <a href="${process.env.WEBSITE_URL || '#'}" style="color: #667eea;">yourwebsite.com</a>
          </p>
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
