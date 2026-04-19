'use client';

import { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    existingClient: '',
    phone: '',
    email: '',
    country: '',
    language: '',
    services: [] as string[],
    regions: [] as string[],
    message: '',
    cityState: '',
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>, listName: 'services' | 'regions') => {
    const value = e.target.value;
    if (e.target.checked) {
      setFormData({ ...formData, [listName]: [...formData[listName], value] });
    } else {
      setFormData({
        ...formData,
        [listName]: formData[listName].filter((item) => item !== value)
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Failed to send message.');

      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred.');
    }
  };

  const servicesList = [
    'Accounting & Tax Services',
    'Audit & Assurance',
    'Entity Formation or Management Services',
    'Payroll Services',
    'Staffing Services',
    'Technology/SAP Services',
    'Creatio',
    'Global Expansion Services',
    'None of the above'
  ];

  const regionsList = [
    'North India',
    'South India',
    'East India',
    'West India',
    'Central India',
    'Pan India'
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16 md:py-24 gap-16 grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] items-start">
        
        {/* Left Side Content */}
        <div className="lg:pr-8 text-[#1c3359] text-[13px] md:text-[14px]">
          <p className="mb-6 leading-[1.8] text-gray-700">
            Our professionals have broad experience in helping local and national corporations manage their accounting and tax burdens as well as complying with today's complex reporting requirements.
          </p>
          <p className="mb-6 leading-[1.8] text-gray-700">
            We strongly believe in the value of relationships. We view every client relationship like a partnership, and truly believe that our success is a direct result of your success.
          </p>
          <p className="mb-8 leading-[1.8] text-gray-700">
            We want to hear from you. Our door is always open, and we're ready to listen and offer our expertise.
          </p>
          
          <h3 className="font-bold text-[15px] mb-8">Let's CONNECT</h3>
          
          <div>
            <h3 className="font-bold text-[14px] mb-2 tracking-wide text-gray-800">Specific inquiries:</h3>
            <div className="text-gray-600 leading-relaxed text-[13px]">
              <p>PUMEC Consultants</p>
              <p>Managing Director</p>
              <p>email: <a href="mailto:info@pumec.com" className="hover:underline text-gray-800">info@pumec.com</a></p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div>
          <h1 className="text-[32px] md:text-[40px] font-bold text-[#1c3359] mb-12">Start a Conversation</h1>
          
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center mb-8">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
              <p className="text-green-700">Thank you for reaching out. We will get back to you shortly.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-6 bg-[#1c3359] text-white px-8 py-3 rounded text-[13px] font-bold tracking-wider hover:bg-[#F57C00] transition-colors"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 p-4 flex items-start text-red-700 mb-6">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="firstName" placeholder="First Name*" required value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-[#c52828] transition-colors" />
                <input type="text" name="lastName" placeholder="Last name*" required value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-[#c52828] transition-colors" />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-[#c52828] transition-colors" />
                <div className="relative">
                  <select name="existingClient" required value={formData.existingClient} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] focus:outline-none focus:border-[#c52828] transition-colors appearance-none bg-white text-gray-500 cursor-pointer">
                    <option value="" disabled hidden>Existing client*</option>
                    <option value="Yes" className="text-black">Yes</option>
                    <option value="No" className="text-black">No</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l2.908 2.89 2.908-2.89c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615l-3.695 3.692c-0.429 0.436-1.129 0.436-1.558 0l-3.695-3.692c-0.408-0.418-0.436-1.17 0-1.615z"/></svg>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="tel" name="phone" placeholder="Phone Number*" required value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-[#c52828] transition-colors" />
                <input type="email" name="email" placeholder="Email*" required value={formData.email} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-[#c52828] transition-colors" />
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <select name="country" required value={formData.country} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] focus:outline-none focus:border-[#c52828] transition-colors appearance-none bg-white text-gray-500 cursor-pointer">
                    <option value="" disabled hidden>Country where you currently reside *</option>
                    <option value="India" className="text-black">India</option>
                    <option value="USA" className="text-black">United States</option>
                    <option value="UK" className="text-black">United Kingdom</option>
                    <option value="UAE" className="text-black">United Arab Emirates</option>
                    <option value="Singapore" className="text-black">Singapore</option>
                    <option value="Other" className="text-black">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l2.908 2.89 2.908-2.89c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615l-3.695 3.692c-0.429 0.436-1.129 0.436-1.558 0l-3.695-3.692c-0.408-0.418-0.436-1.17 0-1.615z"/></svg>
                  </div>
                </div>
                <div className="relative">
                  <select name="language" required value={formData.language} onChange={handleChange} className="w-full border border-gray-300 px-4 py-3 text-[14px] focus:outline-none focus:border-[#c52828] transition-colors appearance-none bg-white text-gray-500 cursor-pointer">
                    <option value="" disabled hidden>Please select your preferred language *</option>
                    <option value="English" className="text-black">English</option>
                    <option value="Hindi" className="text-black">Hindi</option>
                    <option value="Other" className="text-black">Other</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548c0.436-0.446 1.043-0.481 1.576 0l2.908 2.89 2.908-2.89c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615l-3.695 3.692c-0.429 0.436-1.129 0.436-1.558 0l-3.695-3.692c-0.408-0.418-0.436-1.17 0-1.615z"/></svg>
                  </div>
                </div>
              </div>

              {/* Checkboxes Arrays */}
              <div className="grid grid-cols-1 md:grid-cols-[1fr_0.8fr] gap-8 pt-8">
                {/* Services Group */}
                <div>
                  <h4 className="text-[10px] font-bold text-[#c52828] uppercase mb-4 tracking-wider">SERVICES YOU ARE INTERESTED IN *</h4>
                  <div className="space-y-3">
                    {servicesList.map(item => (
                      <label key={item} className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          value={item} 
                          onChange={(e) => handleCheckboxChange(e, 'services')} 
                          className="mt-[3px] w-3 h-3 text-[#1c3359] border-gray-300 focus:ring-0 cursor-pointer"
                        />
                        <span className="text-[12px] text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Regions Group */}
                <div>
                  <h4 className="text-[10px] font-bold text-[#c52828] uppercase mb-4 tracking-wider">REGION(S) WHERE YOU SEEK SERVICES *</h4>
                  <div className="space-y-3">
                    {regionsList.map(item => (
                      <label key={item} className="flex items-start gap-3 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          value={item} 
                          onChange={(e) => handleCheckboxChange(e, 'regions')} 
                          className="mt-[3px] w-3 h-3 text-[#1c3359] border-gray-300 focus:ring-0 cursor-pointer"
                        />
                        <span className="text-[12px] text-gray-700">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="pt-8">
                <h4 className="text-[10px] font-bold text-[#c52828] uppercase mb-3 tracking-wider">MESSAGE OR ANY OTHER INFORMATION THAT MAY BE HELPFUL *</h4>
                <textarea 
                  name="message" 
                  required 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4}
                  className="w-full border border-gray-300 px-4 py-3 text-[14px] focus:outline-none focus:border-[#c52828] transition-colors resize-y text-gray-700"
                  placeholder="Please provide any additional details or information that may be helpful"
                ></textarea>
              </div>

              {/* City/State */}
              <div className="pt-2">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-3 tracking-wider">CITY/STATE</h4>
                <input 
                  type="text" 
                  name="cityState" 
                  value={formData.cityState} 
                  onChange={handleChange} 
                  className="w-full border border-gray-300 px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-[#c52828] transition-colors"
                />
              </div>

              {/* Consent & Submit */}
              <div className="pt-6 space-y-5">
                <p className="text-[10px] text-gray-500 leading-relaxed">
                  PUMEC is dedicated to safeguarding and respecting your privacy. We will only use your personal information to manage your account and provide the products and services you have requested from us, as well as sharing other content that may be relevant to you. If you agree to be contacted for these purposes, please indicate your consent below.
                </p>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="consent" 
                    required 
                    checked={formData.consent} 
                    onChange={handleChange} 
                    className="mt-[2px] w-3 h-3 text-[#1c3359] border-gray-400 focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] text-gray-600">I consent to receive communications from PUMEC.</span>
                </label>

                <p className="text-[10px] text-gray-500 leading-relaxed">
                  You may opt-out of these communications at any time. To unsubscribe, please email info@pumec.com. To learn more about our privacy practices and our commitment to protecting and respecting your privacy, we invite you to review our Privacy Policy.
                </p>

                <p className="text-[10px] text-gray-500 leading-relaxed pb-4">
                  By clicking submit below, you authorize PUMEC to store and process the personal information provided.
                </p>

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className={`bg-[#001433] text-white px-10 py-3 text-[11px] font-bold tracking-[0.1em] hover:bg-[#F57C00] transition-colors ${
                    status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </main>
  );
}