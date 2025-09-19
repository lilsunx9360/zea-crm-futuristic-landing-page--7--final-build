import React, { useState } from 'react';

const BookAppointment: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    description: ''   // ✅ Added description
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        body: JSON.stringify({ ...formData, formType: 'Book a Demo' }),
      });

      if (response.ok) {
        console.log("Demo booking form submitted successfully!");
        setSubmitted(true);
      } else {
        console.error("Failed to submit demo booking form.");
      }
    } catch (error) {
      console.error("Error submitting demo booking form:", error);
    }
  };
  
  return (
    <section className="py-16 sm:py-20 px-4 bg-black">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
          Book a <span className="text-[#fbbf24]">Demo</span>
        </h2>
        
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-white mb-3">Demo Booked!</h3>
              <p className="text-gray-300">We will contact you shortly to confirm the details.</p>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] outline-none transition" 
                  />
                </div>
                <div>
                  <label htmlFor="email-appt" className="sr-only">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email-appt" 
                    placeholder="Your Email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] outline-none transition" 
                  />
                </div>
                <div>
                  <label htmlFor="mobileNumber" className="sr-only">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobileNumber" 
                    id="mobileNumber" 
                    placeholder="Your Mobile Number" 
                    required 
                    value={formData.mobileNumber} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] outline-none transition" 
                  />
                </div>
                <div>
                  <label htmlFor="description" className="sr-only">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Describe your requirements..."
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-[#fbbf24] focus:border-[#fbbf24] outline-none transition resize-none"
                  />
                </div>
                
                <button type="submit" className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity">
                  Submit
                </button>
              </form>
              <div className="text-center text-gray-400 text-sm py-4">OR</div>
              <a 
                href="https://api.leadconnectorhq.com/widget/booking/HZQ0cGWTvMEjFfFehmvc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
              >
                Book an Appointment
              </a>
            </>
          )}
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="https://wa.me/9488445921" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 22L7.31 20.62C8.75 21.41 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2M12.04 3.67C16.56 3.67 20.28 7.39 20.28 11.91C20.28 16.43 16.56 20.15 12.04 20.15C10.49 20.15 9 19.74 7.72 19L7.23 18.72L4.35 19.65L5.3 16.83L5 16.32C4.24 15 3.8 13.47 3.8 11.91C3.8 7.39 7.52 3.67 12.04 3.67M9.13 7.5C8.89 7.5 8.66 7.5 8.41 7.82C8.16 8.14 7.41 8.85 7.41 10.04C7.41 11.22 8.43 12.35 8.58 12.55C8.73 12.74 10.13 15.01 12.35 15.87C14.58 16.73 14.58 16.22 14.88 16.17C15.19 16.12 16.05 15.65 16.25 15.04C16.45 14.42 16.45 13.91 16.35 13.81C16.25 13.71 16.1 13.66 15.85 13.51C15.6 13.36 14.35 12.75 14.11 12.65C13.86 12.55 13.71 12.5 13.56 12.74C13.41 12.99 12.96 13.51 12.81 13.71C12.66 13.91 12.51 13.91 12.26 13.76C11.69 13.45 10.73 13.06 9.61 12.04C8.71 11.23 8.13 10.26 7.96 9.94C7.78 9.62 7.91 9.47 8.03 9.35C8.14 9.24 8.28 9.06 8.43 8.89C8.58 8.71 8.63 8.61 8.73 8.41C8.83 8.21 8.78 8.06 8.73 7.96C8.68 7.86 8.23 6.64 8.01 6.07Z" /></svg>
            Chat with us on WhatsApp
          </a>
          <a href="tel:+9488445921" className="flex items-center justify-center p-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;