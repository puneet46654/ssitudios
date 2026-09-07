import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const newBooking = await Booking.create(body);

    return NextResponse.json(
      { success: true, bookingId: newBooking._id, message: 'Booking confirmed successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Server error while storing booking' },
      { status: 500 }
    );
  }
}