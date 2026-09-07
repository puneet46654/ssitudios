'use client';
import React from 'react';

interface TimeSelectionProps {
  availableSlots: string[];
  bookedSlots: string[];
  onSelectSlot: (slot: string) => void;
  bookingDate: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TimeSelection({ availableSlots, bookedSlots, onSelectSlot, bookingDate, onDateChange }: TimeSelectionProps) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full flex-1 flex flex-col">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider block mb-1">Step 1 of 3</span>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Select an Available Time Slot</h2>
          <p className="text-sm text-slate-500 mt-1">Click any green active block to proceed. Yellow slots are currently occupied.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-5 bg-slate-50 border border-slate-200/60 px-4 py-2.5 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/30"></span> Available (Green)
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <span className="w-3.5 h-3.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/30"></span> Booked (Yellow)
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Appointment Date</label>
            <input
              type="date"
              name="bookingDate"
              value={bookingDate}
              onChange={onDateChange}
              className="bg-slate-50 border border-slate-200 hover:border-emerald-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-800 outline-none transition-all cursor-pointer shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 flex-1">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8 gap-3.5">
          {availableSlots.map((slot, idx) => {
            const isBooked = bookedSlots.includes(slot);
            return (
              <button
                key={idx}
                disabled={isBooked}
                onClick={() => !isBooked && onSelectSlot(slot)}
                className={`
                  relative py-3.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-center transition-all duration-200 flex flex-col items-center justify-center gap-1
                  ${isBooked 
                    ? 'bg-amber-50/80 border-2 border-amber-300/80 text-amber-800 cursor-not-allowed select-none' 
                    : 'bg-emerald-50/50 border-2 border-emerald-200 text-emerald-800 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-lg hover:shadow-emerald-600/20 hover:-translate-y-0.5 cursor-pointer'}
                `}
              >
                <span className="tracking-tight">{slot}</span>
                <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${isBooked ? 'bg-amber-200/60 text-amber-900' : 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700 group-hover:text-white'}`}>
                  {isBooked ? 'Booked' : 'Open'}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}