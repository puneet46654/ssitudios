'use client';

import React from 'react';
import { BookingFormData } from '@/app/slots/mantram/page';

interface GreetingTicketProps {
  bookingRef: string;
  formData: BookingFormData;
  selectedSlot: string;
  onNewBooking: () => void;
}

export default function GreetingTicket({ bookingRef, formData, selectedSlot, onNewBooking }: GreetingTicketProps) {
  return (
    <div className="text-center animate-in zoom-in-95 duration-300 w-full max-w-2xl mx-auto py-8">
      
      {/* Checkmark Notification Icon */}
      <div className="flex justify-center mb-5">
        <div className="w-16 h-16 bg-emerald-50 border-2 border-emerald-100 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 font-['Sora',_sans-serif]">Booking confirmed!</h2>
      <p className="text-sm sm:text-base text-gray-600 mb-8 font-['Manrope',_sans-serif]">
        Your Reference ID is: <span className="font-bold text-gray-900 tracking-wider bg-gray-100 px-3 py-1 rounded-md ml-1">{bookingRef.toUpperCase()}</span>
      </p>

      {/* Ticket Pass Container */}
      <div id="mantram-ticket" className="bg-white border border-gray-200 shadow-lg rounded-2xl p-6 sm:p-8 mb-8 text-left space-y-5 relative overflow-hidden">
        {/* Decorative Ticket Corner */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/80 -mr-12 -mt-12 rotate-45 border-b border-blue-100"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-100 pb-5 gap-4 relative z-10">
          <div>
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold font-['Poppins',_sans-serif]">Doctor details</span>
            <p className="text-lg sm:text-xl font-bold text-blue-700 mt-1 font-['Sora',_sans-serif] break-words">
              {formData.salutation} {formData.doctorName}
            </p>
            <p className="text-sm text-gray-600 font-semibold mt-0.5">{formData.specialty}</p>
          </div>
          <div className="sm:text-right bg-gray-50 border border-gray-100 p-4 sm:p-0 sm:bg-transparent sm:border-0 rounded-xl w-full sm:w-auto">
            <span className="text-xs uppercase tracking-wider text-gray-500 font-bold font-['Poppins',_sans-serif]">Time & Date</span>
            <p className="text-base sm:text-lg font-bold text-gray-900 mt-1">{selectedSlot}</p>
            <p className="text-sm text-gray-600 font-semibold mt-0.5">{formData.bookingDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-['Manrope',_sans-serif] relative z-10 pt-2">
          <div>
            <span className="text-gray-500 text-xs block font-bold uppercase tracking-wide mb-1">Hospital / Center</span>
            <p className="text-gray-900 font-semibold break-words text-base">{formData.hospitalName}</p>
          </div>
          <div>
            <span className="text-gray-500 text-xs block font-bold uppercase tracking-wide mb-1">Contact</span>
            <p className="text-gray-900 font-semibold text-base">{formData.countryCode} {formData.mobileNo}</p>
          </div>
          <div className="sm:col-span-2 bg-gray-50 p-4 rounded-xl border border-gray-100 mt-2">
            <span className="text-gray-500 text-xs block font-bold uppercase tracking-wide mb-1">Location Address</span>
            <p className="text-gray-900 font-semibold leading-relaxed">
              {formData.location}, {formData.place}, {formData.state}, {formData.country}
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-8 text-left shadow-sm">
        <div className="flex gap-3 items-start">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-sm font-semibold text-amber-800 leading-snug">
            Please screenshot or print this confirmation pass. It is required for verification upon entry.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
        <button
          onClick={() => window.print()}
          className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 font-bold rounded-xl text-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 font-['Poppins',_sans-serif] flex justify-center items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>
          Print Ticket
        </button>
        <button
          onClick={onNewBooking}
          className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-md hover:shadow-lg text-white font-bold rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 font-['Poppins',_sans-serif]"
        >
          Book Another Slot
        </button>
      </div>
    </div>
  );
}