import { NextResponse } from 'next/server';
import { getAllFeedbacks, deleteFeedback as deleteFeedbackStorage } from '@/lib/feedback-mongodb';

// Simple admin authentication (in production, use proper authentication)
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function GET() {
  try {
    // Load feedbacks from MongoDB
    const allFeedbacks = await getAllFeedbacks();
    
    // Return feedbacks (already sorted by newest first) and remove email from public display
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const sortedFeedbacks = allFeedbacks.map(({ email, ...feedback }) => {
      // Remove email from public display (email is intentionally unused)
      return feedback;
    });

    return NextResponse.json(
      { 
        success: true,
        feedbacks: sortedFeedbacks
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Failed to fetch feedbacks:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch feedbacks',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Function to delete feedback
async function deleteFeedback(feedbackId: string, adminPassword: string) {
  if (adminPassword !== ADMIN_PASSWORD) {
    throw new Error('Unauthorized: Invalid admin password');
  }
  
  return await deleteFeedbackStorage(feedbackId);
}

// Function to get all feedbacks (including emails) for admin
async function getAdminFeedbacks(adminPassword: string) {
  if (adminPassword !== ADMIN_PASSWORD) {
    throw new Error('Unauthorized: Invalid admin password');
  }
  
  return await getAllFeedbacks();
}

// Export the functions for use in other routes
export { deleteFeedback, getAdminFeedbacks };
