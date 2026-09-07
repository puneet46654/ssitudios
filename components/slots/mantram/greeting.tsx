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
    <div className="text-center animate-in zoom-in-95 duration-500 max-w-lg mx-auto w-full">
      
      {/* Standard Clean Checkmark Icon */}
      <div className="flex justify-center mb-5 sm:mb-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 font-['Sora',_sans-serif]">Booking confirmed</h2>
      <p className="text-sm text-gray-500 mb-5 sm:mb-6 font-['Manrope',_sans-serif]">
        Reference ID: <span className="font-semibold text-gray-800 tracking-wide">{bookingRef.toUpperCase()}</span>
      </p>

      {/* Printable Clean Ticket Card */}
      <div id="mantram-ticket" className="bg-white border border-gray-200 shadow-sm rounded-lg p-5 sm:p-6 mb-6 sm:mb-8 text-left space-y-4 relative overflow-hidden">
        {/* Decorative corner accent for print ticket feel */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 -mr-8 -mt-8 rotate-45 border-b border-gray-200"></div>

        <div className="flex flex-col sm:flex-row justify-between items-start border-b border-gray-100 pb-4 gap-4 relative z-10">
          <div className="w-full sm:w-auto">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-semibold font-['Poppins',_sans-serif]">Doctor details</span>
            <p className="text-base sm:text-lg font-bold text-[#0078D4] mt-1 font-['Sora',_sans-serif] break-words">
              {formData.salutation} {formData.doctorName}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 font-medium font-['Manrope',_sans-serif]">{formData.specialty}</p>
          </div>
          <div className="sm:text-right w-full sm:w-auto bg-gray-50 sm:bg-transparent p-3 sm:p-0 rounded-md">
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 font-semibold font-['Poppins',_sans-serif]">Time & Date</span>
            <p className="text-sm sm:text-base font-semibold text-gray-900 mt-1 font-['Poppins',_sans-serif]">
              {selectedSlot}
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-['Manrope',_sans-serif]">{formData.bookingDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 text-sm pt-2 font-['Manrope',_sans-serif] relative z-10">
          <div>
            <span className="text-gray-500 text-xs block mb-0.5">Hospital</span>
            <p className="text-gray-900 font-medium break-words">{formData.hospitalName}</p>
          </div>
          <div>
            <span className="text-gray-500 text-xs block mb-0.5">Contact Number</span>
            <p className="text-gray-900 font-medium">{formData.countryCode} {formData.mobileNo}</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-gray-500 text-xs block mb-0.5">Location</span>
            <p className="text-gray-900 font-medium leading-relaxed">
              {formData.location}, {formData.place}, {formData.state}, {formData.country}
            </p>
          </div>
        </div>
      </div>

      <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-200 rounded-md mb-6 sm:mb-8 text-left">
        <div className="flex gap-2 sm:gap-3 items-start">
          <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-xs sm:text-sm font-medium text-yellow-800 font-['Manrope',_sans-serif] leading-snug">
            Please download or screenshot this ticket. You will need to show it for entry.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center w-full">
        <button
          onClick={() => window.print()}
          className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 font-['Poppins',_sans-serif]"
        >
          Print ticket
        </button>
        <button
          onClick={onNewBooking}
          className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-[#0078D4] hover:bg-[#106EBE] shadow-sm hover:shadow text-white font-semibold rounded-md text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#0078D4] focus:ring-offset-2 font-['Poppins',_sans-serif]"
        >
          New booking
        </button>
      </div>
    </div>
  );
}