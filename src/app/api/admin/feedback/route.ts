import { NextRequest, NextResponse } from 'next/server';
import { deleteFeedback, getAdminFeedbacks } from '../../feedback/display/route';

export async function DELETE(request: NextRequest) {
  try {
    const { feedbackId, adminPassword } = await request.json();

    if (!feedbackId || !adminPassword) {
      return NextResponse.json(
        { error: 'Missing required fields: feedbackId and adminPassword' },
        { status: 400 }
      );
    }

    const deleted = await deleteFeedback(feedbackId, adminPassword);

    if (!deleted) {
      return NextResponse.json(
        { 
          error: 'Failed to delete feedback - feedback not found or already deleted'
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Feedback deleted successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Delete feedback error:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to delete feedback',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const adminPassword = searchParams.get('adminPassword');

    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin password required' },
        { status: 400 }
      );
    }

    const allFeedbacks = await getAdminFeedbacks(adminPassword);

    return NextResponse.json(
      { 
        success: true,
        feedbacks: allFeedbacks
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Get feedbacks error:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to fetch feedbacks',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500 }
    );
  }
}
