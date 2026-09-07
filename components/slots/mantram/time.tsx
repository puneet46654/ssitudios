'use client';

import React from 'react';

interface TimeSelectionProps {
  availableSlots: string[];
  onSelectSlot: (slot: string) => void;
}

export default function TimeSelection({ availableSlots, onSelectSlot }: TimeSelectionProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-3 duration-300 w-full">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 font-['Sora',_sans-serif]">
          Select Available Slot
        </h2>
        <span className="text-xs sm:text-sm bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 rounded-full font-medium w-fit shadow-sm">
          Slot Duration: 7 mins (+3 mins gap)
        </span>
      </div>

      <div className="text-sm text-blue-900 bg-blue-50/80 border border-blue-100 p-4 mb-6 shadow-sm flex items-start gap-3 rounded-xl">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="leading-relaxed">
          Please click on an open time window below to proceed with your booking registration. 
          <span className="font-semibold block sm:inline sm:ml-1">Excludes Lunch Break (1:00 PM – 2:00 PM).</span>
        </p>
      </div>

      {/* 
        Grid optimized for full screen width: 
        2 cols on mobile, 4 on tablet, 6 on small desktop, 8 on wide monitors.
        Removed vertical scrolling constraints so all options are instantly visible.
      */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 pb-10">
        {availableSlots.map((slot, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSlot(slot)}
            className="group relative bg-white border border-gray-200 hover:border-blue-500 hover:bg-blue-50/50 text-xs sm:text-sm py-4 px-2 rounded-xl transition-all duration-200 font-semibold text-gray-700 hover:text-blue-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 font-['Poppins',_sans-serif]"
          >
            <span className="relative z-10">{slot}</span>
          </button>
        ))}
      </div>
    </div>
  );
}