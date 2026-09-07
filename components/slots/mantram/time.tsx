'use client';

import React from 'react';

interface TimeSelectionProps {
  availableSlots: string[];
  onSelectSlot: (slot: string) => void;
}

export default function TimeSelection({ availableSlots, onSelectSlot }: TimeSelectionProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 font-['Sora',_sans-serif]">
          1. Select a time
        </h2>
        <span className="text-xs sm:text-sm bg-gray-100 text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md w-fit font-medium">
          Duration: 7 minutes
        </span>
      </div>

      <div className="text-xs sm:text-sm text-gray-700 bg-blue-50 border-l-4 border-[#0078D4] p-3 sm:p-4 mb-6 shadow-sm flex items-start gap-3 rounded-r-md">
        <svg className="w-5 h-5 text-[#0078D4] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="leading-relaxed">
          Please select an available time slot below. Note that slots are 7 minutes long with a 3-minute gap. <span className="font-semibold block sm:inline mt-1 sm:mt-0">Lunch Break (1:00 PM – 2:00 PM) is excluded.</span>
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[50vh] sm:max-h-[400px] overflow-y-auto pr-2 pb-2 custom-scrollbar">
        {availableSlots.map((slot, idx) => (
          <button
            key={idx}
            onClick={() => onSelectSlot(slot)}
            className="bg-white border border-gray-300 hover:border-[#0078D4] hover:text-[#0078D4] hover:bg-[#F3F9FD] hover:shadow-sm text-xs sm:text-sm py-3 sm:py-3.5 px-2 rounded-md transition-all duration-200 font-medium text-gray-700 flex items-center justify-center text-center focus:outline-none focus:ring-2 focus:ring-[#0078D4] focus:ring-offset-1 font-['Poppins',_sans-serif]"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
}