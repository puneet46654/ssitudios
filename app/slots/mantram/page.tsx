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

// Helper to generate 7-minute slots with 3-minute gap (10-minute total step)
function generateMantramSlots(): string[] {
  const slots: string[] = [];

  const addTimeRangeSlots = (startHour: number, endHour: number) => {
    let current = new Date();
    current.setHours(startHour, 0, 0, 0);

    const end = new Date();
    end.setHours(endHour, 0, 0, 0);

    while (current < end) {
      const startTimeStr = current.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
      const slotEnd = new Date(current.getTime() + 7 * 60000); // 7 minutes slot
      const endTimeStr = slotEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

      slots.push(`${startTimeStr} - ${endTimeStr}`);
      current = new Date(current.getTime() + 10 * 60000); // 7m duration + 3m gap = 10m stride
    }
  };

  // Morning session: 9 AM to 1 PM
  addTimeRangeSlots(9, 13);
  // Afternoon session: 2 PM to 5 PM (Lunch 1 PM - 2 PM Excluded)
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
    } catch (error) {
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
    <div className="min-h-screen bg-[#F3F2F1] text-gray-900 flex items-center justify-center p-4 sm:p-6 md:p-10 font-['Manrope',_sans-serif]">
      <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-300">
        
        {/* Microsoft Bookings style top banner accent */}
        <div className="h-2 w-full bg-[#0078D4]"></div>
        
        <div className="p-5 sm:p-8 md:p-10">
          {/* Header & SSI Logo */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-5 mb-6 sm:mb-8 gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 font-['Sora',_sans-serif]">
                SSI Mantram Booking
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1 font-['Manrope',_sans-serif]">
                Precision Medical Slot & Consultation Portal
              </p>
            </div>
            <div className="relative w-28 h-8 sm:w-32 sm:h-10 md:w-40 md:h-12 bg-white rounded-md flex-shrink-0">
              <Image
                src="/logos/ssilogo.png"
                alt="SSI Logo"
                fill
                className="object-contain object-left sm:object-right"
                priority
              />
            </div>
          </div>

          {/* Conditional Component Rendering based on Step */}
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

        </div>
      </div>
    </div>
  );
}