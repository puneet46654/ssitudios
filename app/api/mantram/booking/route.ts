import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbconnect';
import Booking from '@/models/Booking';

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const date = searchParams.get('date');
    
    if (!date) return NextResponse.json({ success: false, error: 'Date is required' }, { status: 400 });

    const bookings = await Booking.find({ bookingDate: date }).select('slotTime');
    const bookedSlots = bookings.map(b => b.slotTime);

    return NextResponse.json({ success: true, bookedSlots }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const existing = await Booking.findOne({ bookingDate: body.bookingDate, slotTime: body.slotTime });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'This slot has just been booked. Please choose an available green slot.' }, 
        { status: 400 }
      );
    }

    const lastBooking = await Booking.findOne().sort({ bookingNo: -1 });
    const nextBookingNo = lastBooking && typeof lastBooking.bookingNo === 'number' ? lastBooking.bookingNo + 1 : 1;

    body.bookingNo = nextBookingNo;
    const newBooking = await Booking.create(body);

    return NextResponse.json(
      { success: true, bookingNo: newBooking.bookingNo, message: 'Booking confirmed successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Server error while storing booking' },
      { status: 500 }
    );
  }
}