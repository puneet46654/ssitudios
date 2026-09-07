'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TimeSelection from '@/components/slots/mantram/time';
import BookingForm from '@/components/slots/mantram/form';
import GreetingTicket from '@/components/slots/mantram/greeting';

export interface BookingFormData {
  bookingDate: string;
  country: string;
  state: string;
  place: string;
  location: string;
  salutation: string;
  doctorName: string;
  countryCode: string;
  mobileNo: string;
  hospitalName: string;
  specialty: string;
}

function generateMantramSlots(): string[] {
  const slots: string[] = [];
  const addTimeRangeSlots = (startHour: number, endHour: number) => {
    let current = new Date();
    current.setHours(startHour, 0, 0, 0);
    const end = new Date();
    end.setHours(endHour, 0, 0, 0);

    while (current < end) {
      const startTimeStr = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      const slotEnd = new Date(current.getTime() + 7 * 60000);
      const endTimeStr = slotEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      slots.push(`${startTimeStr} - ${endTimeStr}`);
      current = new Date(current.getTime() + 10 * 60000);
    }
  };

  addTimeRangeSlots(9, 13);
  addTimeRangeSlots(14, 17);
  return slots;
}

export default function MantramBookingPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const [formData, setFormData] = useState<BookingFormData>({
    bookingDate: '',
    country: 'India',
    state: '',
    place: '',
    location: '',
    salutation: 'Dr.',
    doctorName: '',
    countryCode: '+91',
    mobileNo: '',
    hospitalName: '',
    specialty: 'Anaesthesiology',
  });

  useEffect(() => {
    setAvailableSlots(generateMantramSlots());
    setFormData((prev) => ({
      ...prev,
      bookingDate: new Date().toISOString().split('T')[0],
    }));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSlotChoice = (slot: string) => {
    setSelectedSlot(slot);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/mantram/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, slotTime: selectedSlot }),
      });
      const result = await response.json();
      if (result.success) {
        setBookingRef(result.bookingId);
        setStep(3);
      } else {
        alert('Booking failed: ' + result.error);
      }
    } catch {
      alert('Error connecting to server. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedSlot('');
    setBookingRef('');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-['Manrope',_sans-serif]">
      {/* Top Header - Full Width */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto h-16 sm:h-20 flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 font-['Sora',_sans-serif] tracking-tight leading-tight">
              SSI Mantram Booking
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-500 font-medium">
              Precision Medical Slot & Consultation Portal
            </p>
          </div>
          <div className="relative w-24 sm:w-32 h-8 sm:h-10 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center">
            <Image
              src="/logos/ssilogo.png"
              alt="SSI Logo"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>
        </div>
        
        {/* Accent Bar */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-400"></div>
      </header>

      {/* Stepper Navigation - Full Width */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto py-3 sm:py-4">
          <div className="flex items-center justify-between max-w-3xl">
            <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs ${step >= 1 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>1</span>
              <span>Select Time</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-colors ${step >= 2 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs ${step >= 2 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>2</span>
              <span>Enter Details</span>
            </div>
            <div className={`flex-1 h-0.5 mx-2 sm:mx-4 transition-colors ${step >= 3 ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
            <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold transition-colors ${step >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
              <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[11px] sm:text-xs ${step >= 3 ? 'bg-blue-600 text-white shadow-sm' : 'bg-gray-100 text-gray-500'}`}>3</span>
              <span>Confirmation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Maximizes Screen Space */}
      <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto py-6 sm:py-8 overflow-x-hidden">
        {step === 1 && (
          <TimeSelection 
            availableSlots={availableSlots} 
            onSelectSlot={handleSlotChoice} 
          />
        )}

        {step === 2 && (
          <BookingForm 
            formData={formData}
            selectedSlot={selectedSlot}
            isSubmitting={isSubmitting}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <GreetingTicket 
            bookingRef={bookingRef}
            formData={formData}
            selectedSlot={selectedSlot}
            onNewBooking={resetBooking}
          />
        )}
      </main>
    </div>
  );
}