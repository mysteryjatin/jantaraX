import nodemailer from 'nodemailer';

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  // Email configuration check
}

// Email configuration - Supports both Gmail and Namecheap Private Email
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.gmail.com', // Default to Gmail, can be overridden
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your email (hr@jantarax.com)
    pass: process.env.EMAIL_PASS, // Your email password
  },
  // Additional options for better compatibility
  tls: {
    rejectUnauthorized: false
  }
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
}

export interface FeedbackFormData {
  name: string;
  email: string;
  rating: string;
  categories: string[];
  message: string;
}

// Send email to company
export async function sendContactEmail(formData: ContactFormData) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your company email
    subject: `New Contact Form Submission from ${formData.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          ${formData.company ? `<p><strong>Company:</strong> ${formData.company}</p>` : ''}
          <p><strong>Service Interested In:</strong> ${formData.service}</p>
          ${formData.budget ? `<p><strong>Budget Range:</strong> ${formData.budget}</p>` : ''}
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Project Details</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af; font-weight: 500;">
            📧 Reply directly to this email to respond to ${formData.name}
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This email was sent from the JantaraX Global IT Pvt. Ltd. contact form.
        </p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

// Send thank you email to user
export async function sendThankYouEmail(formData: ContactFormData) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: '🚀 Thank you for choosing JantaraX Global IT! Your project journey begins now...',
    html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px;">
        <!-- Header with gradient background -->
        <div style="background: white; border-radius: 20px 20px 0 0; padding: 40px 30px 30px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 20px; border-radius: 15px; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700;">🎉 Thank You, ${formData.name}!</h1>
            <p style="margin: 10px 0 0; font-size: 18px; opacity: 0.9;">Your message has been received successfully</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 25px; border-radius: 15px; border-left: 5px solid #1e40af;">
            <h2 style="color: #1e40af; margin: 0 0 15px; font-size: 22px;">✨ What happens next?</h2>
            <div style="text-align: left;">
              <div style="display: flex; align-items: center; margin: 12px 0; padding: 8px 0;">
                <span style="background: #1e40af; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">1</span>
                <span style="color: #374151; font-size: 16px;">Our expert team will review your project requirements within <strong>24 hours</strong></span>
              </div>
              <div style="display: flex; align-items: center; margin: 12px 0; padding: 8px 0;">
                <span style="background: #1e40af; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">2</span>
                <span style="color: #374151; font-size: 16px;">We'll schedule a <strong>free consultation call</strong> to discuss your vision</span>
              </div>
              <div style="display: flex; align-items: center; margin: 12px 0; padding: 8px 0;">
                <span style="background: #1e40af; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">3</span>
                <span style="color: #374151; font-size: 16px;">Receive a <strong>customized proposal</strong> tailored to your needs and budget</span>
              </div>
              <div style="display: flex; align-items: center; margin: 12px 0; padding: 8px 0;">
                <span style="background: #1e40af; color: white; border-radius: 50%; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 12px; font-weight: bold;">4</span>
                <span style="color: #374151; font-size: 16px;">Get answers to all your questions and <strong>start your project</strong></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Summary Card -->
        <div style="background: white; padding: 30px; border-radius: 0;">
          <div style="background: linear-gradient(135deg, #dbeafe, #bfdbfe); padding: 25px; border-radius: 15px; margin-bottom: 25px;">
            <h3 style="color: #1e40af; margin: 0 0 20px; font-size: 20px; display: flex; align-items: center;">
              📋 Your Project Summary
            </h3>
            <div style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
              <p style="margin: 8px 0; font-size: 16px;"><strong style="color: #1e40af;">🎯 Service:</strong> <span style="color: #374151;">${formData.service}</span></p>
              ${formData.budget ? `<p style="margin: 8px 0; font-size: 16px;"><strong style="color: #1e40af;">💰 Budget Range:</strong> <span style="color: #374151;">${formData.budget}</span></p>` : ''}
              ${formData.company ? `<p style="margin: 8px 0; font-size: 16px;"><strong style="color: #1e40af;">🏢 Company:</strong> <span style="color: #374151;">${formData.company}</span></p>` : ''}
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; font-size: 16px;"><strong style="color: #1e40af;">💬 Your Message:</strong></p>
                <p style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 10px 0 0; color: #374151; line-height: 1.6; font-style: italic;">"${formData.message}"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div style="background: white; padding: 30px; border-radius: 0;">
          <div style="background: linear-gradient(135deg, #f0f9ff, #e0f2fe); padding: 25px; border-radius: 15px; margin-bottom: 25px;">
            <h3 style="color: #1e40af; margin: 0 0 20px; font-size: 20px; display: flex; align-items: center;">
              🚀 Need immediate assistance?
            </h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="font-size: 24px; margin-bottom: 10px;">📧</div>
                <p style="margin: 5px 0; font-weight: 600; color: #1e40af;">Email Us</p>
                <p style="margin: 5px 0; color: #374151; font-size: 14px;">hr@jantarax.com</p>
              </div>  
              <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                <div style="font-size: 24px; margin-bottom: 10px;">📞</div>
                <p style="margin: 5px 0; font-weight: 600; color: #1e40af;">Call Us</p>
                <p style="margin: 5px 0; color: #374151; font-size: 14px;">+91 87910 08551</p>
              </div>
            </div>
            <div style="background: white; padding: 15px; border-radius: 10px; margin-top: 15px; text-align: center; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
              <p style="margin: 5px 0; font-weight: 600; color: #1e40af;">🕒 Business Hours</p>
              <p style="margin: 5px 0; color: #374151; font-size: 14px;">Mon-Fri: 9:00 AM - 6:00 PM IST | Sat: 10:00 AM - 4:00 PM IST</p>
            </div>
          </div>
        </div>

        <!-- Social Media & Company Info -->
        <div style="background: white; padding: 30px; border-radius: 0;">
          <div style="text-align: center; margin-bottom: 25px;">
            <h3 style="color: #1e40af; margin: 0 0 15px; font-size: 20px;">🌟 Stay Connected</h3>
            <p style="color: #6b7280; margin: 0 0 20px;">Follow us for updates, tips, and success stories</p>
            <div style="display: flex; justify-content: center; gap: 15px; margin-bottom: 25px;">
              <a href="https://www.instagram.com/nr_it_solution07" style="background: linear-gradient(45deg, #E4405F, #F77737); color: white; padding: 12px 20px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 14px;">📸 Instagram</a>
              <a href="https://www.facebook.com/share/15nPzvMsPd" style="background: #1877F2; color: white; padding: 12px 20px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 14px;">📘 Facebook</a>
              <a href="https://www.linkedin.com/company/nr-it-solution-pvt-ltd" style="background: #0077B5; color: white; padding: 12px 20px; border-radius: 25px; text-decoration: none; font-weight: 600; font-size: 14px;">💼 LinkedIn</a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: white; padding: 30px; border-radius: 0 0 20px 20px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
          <div style="background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 25px; border-radius: 15px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px; font-size: 18px; font-weight: 600;">We're excited to work with you!</p>
            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Let's bring your vision to life together</p>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <p style="color: #1e40af; font-weight: 700; font-size: 20px; margin: 0;">Your Vision, Our Code</p>
            <p style="color: #6b7280; font-size: 14px; margin: 5px 0 0;">JantaraX Global IT Pvt. Ltd.</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px; margin: 0;">
            This is an automated message from JantaraX Global IT Pvt. Ltd.<br>
            Please do not reply to this email. For inquiries, contact us at hr@jantarax.com
          </p>
        </div>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

// ── Internship Application ───────────────────────────────────────────────────

export interface InternshipApplicationData {
  name: string;
  email: string;
  phone: string;
  location: string;
  degree: string;
  track: string;
  resumeUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
  techStack?: string[];
  question1?: string;
  question2?: string;
  coverLetter?: string;
}

// Confirmation email sent to the applicant
export async function sendInternshipConfirmationEmail(data: InternshipApplicationData) {
  const techStackStr = data.techStack?.length ? data.techStack.join(', ') : 'Not specified';
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: data.email,
    subject: `🎓 Application Received – JantaraX Global IT`,
    html: `
      <div style="font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;max-width:640px;margin:0 auto;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:20px;">
        <div style="background:#fff;border-radius:20px 20px 0 0;padding:40px 30px 30px;text-align:center;box-shadow:0 10px 30px rgba(0,0,0,.1);">
          <div style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;padding:24px;border-radius:16px;margin-bottom:24px;">
            <h1 style="margin:0;font-size:26px;font-weight:700;">🎉 Application Received, ${data.name}!</h1>
            <p style="margin:10px 0 0;font-size:16px;opacity:.9;">Your internship application is under review</p>
          </div>
          <div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:24px;border-radius:16px;border-left:5px solid #1e40af;text-align:left;">
            <h2 style="color:#1e40af;margin:0 0 16px;font-size:20px;">📋 Application Summary</h2>
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr><td style="padding:6px 0;color:#6b7280;width:40%;">Role</td><td style="padding:6px 0;font-weight:600;color:#1e40af;">${data.track}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Education</td><td style="padding:6px 0;color:#374151;">${data.degree}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Location</td><td style="padding:6px 0;color:#374151;">${data.location}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;">Tech Stack</td><td style="padding:6px 0;color:#374151;">${techStackStr}</td></tr>
            </table>
          </div>
        </div>
        <div style="background:#fff;padding:30px;">
          <div style="background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:24px;border-radius:16px;">
            <h2 style="color:#1e40af;margin:0 0 16px;font-size:20px;">✨ What Happens Next?</h2>
            ${["Our team reviews your application within <strong>24–48 hours</strong>","You receive an onboarding email with schedule &amp; study materials","Attend the orientation session to meet your mentor","Work on real projects and earn your <strong>certificate</strong>!"].map((s, i) => `
            <div style="display:flex;align-items:flex-start;margin:12px 0;">
              <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;margin-right:12px;font-size:12px;font-weight:700;flex-shrink:0;">${i + 1}</span>
              <span style="color:#374151;font-size:15px;line-height:1.5;">${s}</span>
            </div>`).join('')}
          </div>
        </div>
        <div style="background:#fff;padding:24px 30px 30px;border-radius:0 0 20px 20px;text-align:center;">
          <div style="background:linear-gradient(135deg,#1e40af,#3b82f6);color:#fff;padding:20px;border-radius:14px;margin-bottom:16px;">
            <p style="margin:0 0 6px;font-size:17px;font-weight:600;">Need help? We're here.</p>
            <p style="margin:0;font-size:14px;opacity:.9;">📧 hr@jantarax.com &nbsp;|&nbsp; 📞 +91 87910 08551</p>
          </div>
          <p style="color:#9ca3af;font-size:12px;margin:0;">This is an automated email from JantaraX Global IT Pvt. Ltd. Please do not reply.</p>
        </div>
      </div>
    `,
  };
  return await transporter.sendMail(mailOptions);
}

// Notification email sent to admin
export async function sendInternshipAdminEmail(data: InternshipApplicationData) {
  const techStackStr = data.techStack?.length ? data.techStack.join(', ') : 'Not specified';
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `📥 New Internship Application – ${data.name} | ${data.track}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;">
        <h2 style="color:#1e40af;border-bottom:2px solid #3b82f6;padding-bottom:10px;">New Internship Application</h2>

        <div style="background:#f8fafc;padding:20px;border-radius:8px;margin:20px 0;">
          <h3 style="color:#1e40af;margin-top:0;">Applicant Details</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Location:</strong> ${data.location}</p>
          <p><strong>Education:</strong> ${data.degree}</p>
          <p><strong>Role:</strong> <span style="color:#1e40af;font-weight:700;">${data.track}</span></p>
          <p><strong>Tech Stack:</strong> ${techStackStr}</p>
          ${data.resumeUrl ? `<p><strong>Resume:</strong> <a href="${data.resumeUrl}">${data.resumeUrl}</a></p>` : ''}
          ${data.githubUrl ? `<p><strong>GitHub:</strong> <a href="${data.githubUrl}">${data.githubUrl}</a></p>` : ''}
          ${data.linkedinUrl ? `<p><strong>LinkedIn:</strong> <a href="${data.linkedinUrl}">${data.linkedinUrl}</a></p>` : ''}
        </div>

        ${(data.question1 || data.question2) ? `
        <div style="background:#f0f9ff;padding:20px;border-radius:8px;margin:20px 0;border-left:4px solid #3b82f6;">
          <h3 style="color:#1e40af;margin-top:0;">📝 Role Questions</h3>
          ${data.question1 ? `<p><strong>Q1:</strong> ${data.question1}</p>` : ''}
          ${data.question2 ? `<p><strong>Q2:</strong> ${data.question2}</p>` : ''}
          ${data.coverLetter ? `<p><strong>Cover Letter:</strong> ${data.coverLetter}</p>` : ''}
        </div>` : ''}

        <div style="background:#dbeafe;padding:15px;border-radius:8px;">
          <p style="margin:0;color:#1e40af;">📧 Reply to <a href="mailto:${data.email}">${data.email}</a> to follow up with the applicant.</p>
        </div>
        <hr style="border:none;border-top:1px solid #e5e7eb;margin:30px 0;">
        <p style="color:#6b7280;font-size:13px;text-align:center;">Submitted via JantaraX Global IT Internship Enrollment Form</p>
      </div>
    `,
  };
  return await transporter.sendMail(mailOptions);
}

// ── Feedback emails ───────────────────────────────────────────────────────────

// Send feedback email to company
export async function sendFeedbackEmail(formData: FeedbackFormData) {
  const ratingStars = '★'.repeat(parseInt(formData.rating)) + '☆'.repeat(5 - parseInt(formData.rating));
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Your company email
    subject: `New Feedback Submission from ${formData.name} - Rating: ${formData.rating}/5`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Feedback Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Customer Details</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Rating:</strong> ${formData.rating}/5 ${ratingStars}</p>
          <p><strong>Categories:</strong> ${formData.categories.join(', ')}</p>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Feedback Details</h3>
          <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
        </div>
        
        <div style="background-color: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #1e40af; font-weight: 500;">
            📧 Reply directly to this email to respond to ${formData.name}
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This feedback was submitted from the JantaraX Global IT Pvt. Ltd. feedback form.
        </p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
}

// Send thank you email for feedback
export async function sendFeedbackThankYouEmail(formData: FeedbackFormData) {
  const ratingStars = '★'.repeat(parseInt(formData.rating)) + '☆'.repeat(5 - parseInt(formData.rating));
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: formData.email,
    subject: 'Thank you for your valuable feedback!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #1e40af; margin-bottom: 10px;">Thank You, ${formData.name}!</h1>
          <p style="color: #6b7280; font-size: 18px;">We truly appreciate you taking the time to share your feedback with us.</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 25px; border-radius: 12px; margin: 25px 0;">
          <h2 style="color: #1e40af; margin-top: 0;">Your Feedback Summary</h2>
          <p><strong>Rating:</strong> ${formData.rating}/5 ${ratingStars}</p>
          <p><strong>Categories:</strong> ${formData.categories.join(', ')}</p>
          <p><strong>Your Message:</strong> ${formData.message}</p>
        </div>
        
        <div style="background-color: #dbeafe; padding: 20px; border-radius: 12px; margin: 25px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">How We Use Your Feedback</h3>
          <ul style="color: #374151; line-height: 1.8;">
            <li>We review all feedback to identify areas for improvement</li>
            <li>Your suggestions help us enhance our services</li>
            <li>We use ratings to measure customer satisfaction</li>
            <li>Your input guides our product development decisions</li>
          </ul>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 12px; margin: 25px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
          <p style="margin-bottom: 10px;">Based on your feedback, we may:</p>
          <ul style="color: #374151; line-height: 1.8;">
            <li>Follow up with you for more details if needed</li>
            <li>Implement improvements based on your suggestions</li>
            <li>Keep you updated on changes we make</li>
            <li>Invite you to test new features or services</li>
          </ul>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 12px; margin: 25px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Need immediate assistance?</h3>
          <p style="margin-bottom: 10px;">Contact us directly:</p>
          <p style="margin: 5px 0;"><strong>📧 Email:</strong> hr@jantarax.com</p>
          <p style="margin: 5px 0;"><strong>📞 Phone:</strong> +91 87910 08551</p>
          <p style="margin: 5px 0;"><strong>🕒 Business Hours:</strong> Mon-Fri 9:00 AM - 6:00 PM IST</p>
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
          <p style="color: #6b7280; font-size: 16px;">
            Your feedback helps us serve you better and continuously improve our services.
          </p>
          <p style="color: #1e40af; font-weight: 600; font-size: 18px; margin-top: 15px;">
            Your Vision, Our Code
          </p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
        <p style="color: #6b7280; font-size: 14px; text-align: center;">
          This is an automated message from JantaraX Global IT Pvt. Ltd. Please do not reply to this email.
        </p>
      </div>
    `,
  };

  return await transporter.sendMail(mailOptions);
}
