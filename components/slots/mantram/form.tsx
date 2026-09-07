'use client';

import React from 'react';
import { BookingFormData } from '@/app/slots/mantram/page';

const SPECIALTIES = [
  'Anaesthesiology', 'Bariatric Surgery', 'Cardiac Surgery', 'Cardiothoracic Surgery',
  'Colorectal Surgery', 'ENT Surgery', 'Gastrointestinal Surgery', 'General Surgery',
  'Gynaecologic Oncology', 'Hepatobiliary Surgery', 'Neurosurgery', 'Orthopaedic Surgery',
  'Paediatric Surgery', 'Plastic & Reconstructive Surgery', 'Surgical Oncology',
  'Thoracic Surgery', 'Transplant Surgery', 'Urology', 'Vascular Surgery',
];

const COUNTRIES = [
  'India', 'United States', 'United Kingdom', 'United Arab Emirates', 
  'Canada', 'Australia', 'Germany', 'France', 'Singapore', 'Japan', 
  'Saudi Arabia', 'Qatar', 'Oman', 'Kuwait', 'Bahrain', 'South Africa'
];

const COUNTRY_CODES = [
  { code: '+91', country: 'IN' }, { code: '+1', country: 'US/CA' },
  { code: '+44', country: 'UK' }, { code: '+971', country: 'UAE' },
  { code: '+65', country: 'SG' }, { code: '+61', country: 'AU' },
  { code: '+49', country: 'DE' }
];

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
    <form onSubmit={onSubmit} className="animate-in fade-in slide-in-from-bottom-3 duration-300 w-full max-w-6xl mx-auto space-y-6">
      
      {/* Selected Slot Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-blue-50/50 border border-blue-100 p-4 rounded-xl gap-3 shadow-sm">
        <div>
          <span className="text-xs text-blue-600 uppercase tracking-wider block font-bold mb-1">Selected Time Window</span>
          <span className="text-sm sm:text-base font-bold text-gray-900">{selectedSlot}</span>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center gap-1 bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm hover:shadow"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Change Time
        </button>
      </div>

      {/* Section 1: Location & Date */}
      <div className="bg-white p-5 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5 font-['Sora',_sans-serif]">
          1. Appointment & Location Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
          <div className="xl:col-span-1">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Date *</label>
            <input
              type="date"
              name="bookingDate"
              value={formData.bookingDate}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all"
            />
          </div>
          <div className="xl:col-span-1">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Country *</label>
            <select
              name="country"
              value={formData.country}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em`, paddingRight: `2.5rem` }}
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="xl:col-span-1">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">State *</label>
            <input
              type="text"
              name="state"
              placeholder="Enter State"
              value={formData.state}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all"
            />
          </div>
          <div className="xl:col-span-1">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">City / Town *</label>
            <input
              type="text"
              name="place"
              placeholder="Enter City"
              value={formData.place}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all"
            />
          </div>
          <div className="xl:col-span-1 sm:col-span-2 lg:col-span-4 xl:col-span-1">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Venue / Landmark *</label>
            <input
              type="text"
              name="location"
              placeholder="Enter Landmark"
              value={formData.location}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Doctor Details */}
      <div className="bg-white p-5 sm:p-7 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-sm sm:text-base font-bold text-gray-900 border-b border-gray-100 pb-3 mb-5 font-['Sora',_sans-serif]">
          2. Practitioner & Hospital Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div className="lg:col-span-2 flex gap-3">
            <div className="w-24 sm:w-28 flex-shrink-0">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Title *</label>
              <select
                name="salutation"
                value={formData.salutation}
                onChange={onChange}
                className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-3 py-3 text-sm text-gray-900 transition-all appearance-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em`, paddingRight: `1.75rem` }}
              >
                <option value="Dr.">Dr.</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Doctor Name *</label>
              <input
                type="text"
                name="doctorName"
                placeholder="Enter Full Name"
                value={formData.doctorName}
                onChange={onChange}
                required
                className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all"
              />
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Mobile Number *</label>
            <div className="flex gap-3">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={onChange}
                className="w-28 sm:w-32 bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-3 py-3 text-sm text-gray-900 transition-all appearance-none flex-shrink-0"
                style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em`, paddingRight: `1.75rem` }}
              >
                {COUNTRY_CODES.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.code} ({item.country})
                  </option>
                ))}
              </select>
              <input
                type="tel"
                name="mobileNo"
                placeholder="Mobile Number"
                value={formData.mobileNo}
                onChange={onChange}
                required
                className="flex-1 bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all min-w-0"
              />
            </div>
          </div>

          <div className="lg:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Hospital Name *</label>
            <input
              type="text"
              name="hospitalName"
              placeholder="Enter Hospital / Center"
              value={formData.hospitalName}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all"
            />
          </div>
          
          <div className="lg:col-span-2">
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Specialty *</label>
            <select
              name="specialty"
              value={formData.specialty}
              onChange={onChange}
              required
              className="w-full bg-gray-50 border border-gray-200 hover:border-blue-400 focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 transition-all appearance-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 1rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.2em 1.2em`, paddingRight: `2.5rem` }}
            >
              {SPECIALTIES.map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 justify-end">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 text-gray-700 font-bold rounded-xl text-sm transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 shadow-sm font-['Poppins',_sans-serif]"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-md hover:shadow-lg text-white font-bold rounded-xl text-sm transition-all flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed font-['Poppins',_sans-serif]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Confirming...
            </span>
          ) : 'Confirm Appointment'}
        </button>
      </div>
    </form>
  );
}