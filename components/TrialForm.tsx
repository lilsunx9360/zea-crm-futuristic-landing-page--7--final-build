
import React, { useState } from 'react';
import { Role, BusinessCategory } from '../types';

interface TrialFormProps {
  onSuccess?: () => void;
}

const TrialForm: React.FC<TrialFormProps> = ({ onSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hospitalName: '',
    email: '',
    mobileNumber: '',
    role: Role.Owner,
    businessCategory: BusinessCategory.Hospitals,
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const webhookUrl = 'https://n8n.urlfactory.website/webhook/zeacrm-contact-form';

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType: 'Reach Us' }),
      });

      if (response.ok) {
        console.log("Trial form submitted successfully!");
        setSubmitted(true);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        console.error("Failed to submit Trial form.");
      }
    } catch (error) {
      console.error("Error submitting Trial form:", error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
        <p className="text-gray-300">Your request has been submitted. We'll be in touch shortly.</p>
      </div>
    );
  }

  const baseInputStyles = "w-full bg-slate-900 border border-slate-700 rounded-lg p-2 sm:p-2.5 text-white focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] outline-none transition";
  const customSelectArrowStyle = {
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%239ca3af' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      backgroundPosition: `right 0.75rem center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `1.25em 1.25em`
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
      <h3 className="text-xl md:text-2xl font-bold text-center text-white mb-3 sm:mb-4">Reach Us</h3>
      <div>
        <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-1.5">Company Name</label>
        <input type="text" name="hospitalName" id="hospitalName" required value={formData.hospitalName} onChange={handleChange} className={baseInputStyles} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-1.5">Email</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={baseInputStyles} />
      </div>
      <div>
        <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-1.5">Mobile Number</label>
        <input type="tel" name="mobileNumber" id="mobileNumber" required value={formData.mobileNumber} onChange={handleChange} className={baseInputStyles} />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-1.5">Role</label>
        <select name="role" id="role" required value={formData.role} onChange={handleChange} className={`${baseInputStyles} appearance-none pr-10`} style={customSelectArrowStyle}>
          {Object.values(Role).map(role => <option key={role} value={role}>{role}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="businessCategory" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-1.5">Business Category</label>
        <select name="businessCategory" id="businessCategory" required value={formData.businessCategory} onChange={handleChange} className={`${baseInputStyles} appearance-none pr-10`} style={customSelectArrowStyle}>
          {Object.values(BusinessCategory).map(category => <option key={category} value={category}>{category}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1 sm:mb-1.5">Description</label>
        <textarea name="description" id="description" rows={2} value={formData.description} onChange={handleChange} className={`${baseInputStyles} resize-none`}></textarea>
      </div>
      <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 sm:py-2.5 px-4 rounded-lg transition-colors duration-300 !mt-4 sm:!mt-5">
        Submit
      </button>
    </form>
  );
};

export default TrialForm;
