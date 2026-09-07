'use client';
import React from 'react';
import { BookingFormData } from '@/app/slots/mantram/page';

interface BookingFormProps {
  formData: BookingFormData;
  selectedSlot: string;
  isSubmitting: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
}

export default function BookingForm({ formData, selectedSlot, isSubmitting, onChange, onSubmit, onBack }: BookingFormProps) {
  return (
    <form onSubmit={onSubmit} className="animate-in fade-in slide-in-from-bottom-4 duration-500 w-full max-w-4xl mx-auto space-y-6">
      
      {/* Active Selection Indicator */}
      <div className="flex items-center justify-between bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
        <div>
          <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider block mb-1">Locked Target Slot</span>
          <div className="flex items-center gap-3">
            <span className="text-lg font-extrabold text-slate-900">{formData.bookingDate}</span>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-lg">{selectedSlot}</span>
          </div>
        </div>
        <button 
          type="button" 
          onClick={onBack} 
          className="px-4 py-2 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition-all cursor-pointer shadow-sm"
        >
          Change Slot
        </button>
      </div>

      {/* Main Details Box */}
      <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900">Practitioner & Institutional Details</h3>
          <p className="text-xs text-slate-500 mt-0.5">Please provide accurate verification information for your clinical slot record.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* Doctor Name with Prefix */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Full Name & Title <span className="text-rose-500">*</span></label>
            <div className="flex gap-2">
              <select 
                name="salutation" 
                value={formData.salutation} 
                onChange={onChange} 
                className="w-28 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 focus:bg-white cursor-pointer shadow-sm"
              >
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Ms.">Ms.</option>
                <option value="Prof.">Prof.</option>
              </select>
              <input 
                type="text" 
                name="doctorName" 
                required 
                placeholder="e.g. Ramesh Kumar"
                value={formData.doctorName} 
                onChange={onChange} 
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
              />
            </div>
          </div>

          {/* Specialty */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Specialty / Department <span className="text-rose-500">*</span></label>
            <input 
              type="text" 
              name="specialty" 
              required 
              placeholder="e.g. Cardiology / Anaesthesiology"
              value={formData.specialty} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
            />
          </div>

          {/* Mobile Number with Country Code */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Mobile Number <span className="text-rose-500">*</span></label>
            <div className="flex gap-2">
              <select 
                name="countryCode" 
                value={formData.countryCode} 
                onChange={onChange} 
                className="w-32 bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 focus:bg-white cursor-pointer shadow-sm"
              >
                <option value="+91">+91 (IN)</option>
                <option value="+1">+1 (US)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+971">+971 (UAE)</option>
              </select>
              <input 
                type="tel" 
                name="mobileNo" 
                required 
                placeholder="9876543210"
                value={formData.mobileNo} 
                onChange={onChange} 
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Email Address <span className="text-rose-500">*</span></label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="doctor@hospital.com"
              value={formData.email} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
            />
          </div>

          {/* Hospital / Clinic Name */}
          <div className="space-y-1.5 md:col-span-2">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Hospital / Institution Name <span className="text-rose-500">*</span></label>
            <input 
              type="text" 
              name="hospitalName" 
              required 
              placeholder="e.g. All India Institute of Medical Sciences"
              value={formData.hospitalName} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
            />
          </div>

          {/* Country */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Country <span className="text-rose-500">*</span></label>
            <select 
              name="country" 
              required 
              value={formData.country} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-bold text-slate-800 outline-none focus:border-emerald-500 focus:bg-white cursor-pointer shadow-sm"
            >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          {/* State */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">State / Province <span className="text-rose-500">*</span></label>
            <input 
              type="text" 
              name="state" 
              required 
              placeholder="e.g. Haryana"
              value={formData.state} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
            />
          </div>

          {/* Place / City */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">City / Town <span className="text-rose-500">*</span></label>
            <input 
              type="text" 
              name="place" 
              required 
              placeholder="e.g. Gurugram"
              value={formData.place} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
            />
          </div>

          {/* Location / Landmark */}
          <div className="space-y-1.5">
            <label className="block text-xs font-extrabold text-slate-700 uppercase tracking-wide">Specific Venue / Location <span className="text-rose-500">*</span></label>
            <input 
              type="text" 
              name="location" 
              required 
              placeholder="e.g. Main Auditorium Block B"
              value={formData.location} 
              onChange={onChange} 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:border-emerald-500 focus:bg-white shadow-sm" 
            />
          </div>

        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-end gap-3 pt-2">
        <button 
          type="button" 
          onClick={onBack} 
          className="px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-bold rounded-xl text-sm transition-all cursor-pointer shadow-sm"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="min-w-[220px] px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm transition-all cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              Securing Slot...
            </>
          ) : 'Confirm & Generate Ticket'}
        </button>
      </div>
    </form>
  );
}