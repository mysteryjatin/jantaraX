import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, sendThankYouEmail, ContactFormData } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send emails in parallel
    const [contactEmailResult, thankYouEmailResult] = await Promise.all([
      sendContactEmail(formData),
      sendThankYouEmail(formData)
    ]);

    // Emails sent successfully

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully',
        contactEmailId: contactEmailResult.messageId,
        thankYouEmailId: thankYouEmailResult.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    // Error handling for email sending
    
    return NextResponse.json(
      { 
        error: 'Failed to send emails',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
