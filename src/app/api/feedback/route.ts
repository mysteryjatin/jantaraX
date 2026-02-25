import { NextRequest, NextResponse } from 'next/server';
import { sendFeedbackEmail, sendFeedbackThankYouEmail, FeedbackFormData } from '@/lib/email';
import { addFeedback } from '@/lib/feedback-mongodb';

export async function POST(request: NextRequest) {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const formData: FeedbackFormData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.rating || !formData.categories || formData.categories.length === 0 || !formData.message) {
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

    // Validate rating
    const rating = parseInt(formData.rating);
    if (isNaN(rating) || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Invalid rating. Please select a rating between 1 and 5.' },
        { status: 400 }
      );
    }

    // Save feedback to MongoDB
    const savedFeedback = await addFeedback({
      name: formData.name,
      email: formData.email,
      rating: parseInt(formData.rating),
      categories: formData.categories,
      message: formData.message,
    });

    // Send emails in parallel
    const [feedbackEmailResult, thankYouEmailResult] = await Promise.all([
      sendFeedbackEmail(formData),
      sendFeedbackThankYouEmail(formData)
    ]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback submitted successfully',
        feedbackId: savedFeedback._id,
        feedbackEmailId: feedbackEmailResult.messageId,
        thankYouEmailId: thankYouEmailResult.messageId
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Feedback submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit feedback',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
