import { NextRequest, NextResponse } from 'next/server';
import {
  sendInternshipConfirmationEmail,
  sendInternshipAdminEmail,
  InternshipApplicationData,
} from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const data: InternshipApplicationData = await request.json();

    // Validate required fields
    const required: (keyof InternshipApplicationData)[] = [
      'name', 'email', 'phone', 'location', 'degree', 'track', 'resumeUrl',
    ];
    for (const field of required) {
      if (!data[field]?.toString().trim()) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    await Promise.all([
      sendInternshipConfirmationEmail(data),
      sendInternshipAdminEmail(data),
    ]);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send emails', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
