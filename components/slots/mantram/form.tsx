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
    <form onSubmit={onSubmit} className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 font-['Sora',_sans-serif]">2. Add your details</h2>
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-[#0078D4] hover:text-[#106EBE] hover:underline font-medium font-['Poppins',_sans-serif] text-left sm:text-right"
        >
          Edit selected time: {selectedSlot}
        </button>
      </div>

      {/* Date & Country */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Date *</label>
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Country *</label>
          <select
            name="country"
            value={formData.country}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.25em 1.25em`, paddingRight: `2.5rem` }}
          >
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* State, Place, Location */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">State *</label>
          <input
            type="text"
            name="state"
            placeholder="Enter State"
            value={formData.state}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">City / Town *</label>
          <input
            type="text"
            name="place"
            placeholder="Enter City / Town"
            value={formData.place}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Venue / Landmark *</label>
          <input
            type="text"
            name="location"
            placeholder="Enter Venue / Landmark"
            value={formData.location}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all"
          />
        </div>
      </div>

      <div className="border-t border-gray-200 my-4 sm:my-6"></div>

      {/* Doctor Title & Name */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5">
        <div className="sm:col-span-1">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Title *</label>
          <select
            name="salutation"
            value={formData.salutation}
            onChange={onChange}
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.25em 1.25em`, paddingRight: `2.5rem` }}
          >
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>
        <div className="sm:col-span-3">
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Doctor Name *</label>
          <input
            type="text"
            name="doctorName"
            placeholder="Enter Doctor Full Name"
            value={formData.doctorName}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all"
          />
        </div>
      </div>

      {/* Mobile with Country Code Dropdown */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Mobile Number *</label>
        <div className="flex gap-2 sm:gap-3">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={onChange}
            className="w-24 sm:w-28 bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-2 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-900 transition-all appearance-none flex-shrink-0"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.5rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.25em 1.25em`, paddingRight: `1.5rem` }}
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
            className="flex-1 bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all min-w-0"
          />
        </div>
      </div>

      {/* Hospital Name & Specialty Dropdown */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Hospital Name *</label>
          <input
            type="text"
            name="hospitalName"
            placeholder="Enter Hospital / Center Name"
            value={formData.hospitalName}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5 font-['Poppins',_sans-serif]">Specialty *</label>
          <select
            name="specialty"
            value={formData.specialty}
            onChange={onChange}
            required
            className="w-full bg-white border border-gray-300 focus:border-[#0078D4] focus:ring-2 focus:ring-[#0078D4]/20 focus:outline-none rounded-md px-3.5 py-2.5 sm:py-3 text-sm text-gray-900 transition-all appearance-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: `right 0.75rem center`, backgroundRepeat: `no-repeat`, backgroundSize: `1.25em 1.25em`, paddingRight: `2.5rem` }}
          >
            {SPECIALTIES.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pt-2 sm:pt-4 flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-md text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 font-['Poppins',_sans-serif]"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 px-6 py-3 sm:py-2.5 bg-[#0078D4] hover:bg-[#106EBE] shadow-sm hover:shadow text-white font-medium rounded-md text-sm transition-all flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-[#0078D4] focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed font-['Poppins',_sans-serif]"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Booking...
            </span>
          ) : 'Book Appointment'}
        </button>
      </div>
    </form>
  );
}