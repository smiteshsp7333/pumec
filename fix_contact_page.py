import os

code = """'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Globe, ArrowRight, Building, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service_interest: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message. Please try again or contact us directly via email.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service_interest: '', message: '' });
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'An unexpected error occurred.');
    }
  };

  return (
    <main className="flex-1 bg-[#F4F6F8]">
      {/* Hero Section */}
      <section className="bg-[#1F3A5F] text-white pt-24 pb-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 opacity-20">
          <div className="w-96 h-96 bg-[#F57C00] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="text-[#F57C00] font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-heading font-extrabold leading-tight mb-6">
            Contact PUMEC Consultants
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed border-b border-gray-600 pb-8">
            Partner with our experts for tax advisory, corporate compliance, and strategic business consulting in India.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-6 lg:px-12 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-20">
          
          {/* Left Panel: Contact Information */}
          <div className="lg:col-span-5 bg-white p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-heading font-bold text-[#1F3A5F] mb-2 uppercase">Corporate Headquarters</h2>
              <div className="w-12 h-1 bg-[#F57C00] rounded mb-8"></div>

              <div className="space-y-8">
                {/* Office 1 */}
                <div className="flex items-start">
                  <div className="bg-[#F4F6F8] p-3 rounded-lg mr-4">
                    <MapPin className="w-6 h-6 text-[#2FA4A9]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] text-lg mb-1">India Office</h3>
                    <p className="text-gray-600 leading-relaxed font-sans">
                      Business Hub Tower, Level 4<br />
                      Corporate Road, Sector 12<br />
                      Mumbai, Maharashtra 400051<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#F4F6F8] p-3 rounded-lg mr-4">
                    <Phone className="w-6 h-6 text-[#2FA4A9]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+91 22 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#F4F6F8] p-3 rounded-lg mr-4">
                    <Mail className="w-6 h-6 text-[#2FA4A9]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] text-lg mb-1">Email</h3>
                    <a href="mailto:contact@pumec.com" className="text-[#F57C00] hover:text-[#E65100] font-medium transition-colors">contact@pumec.com</a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#F4F6F8] p-3 rounded-lg mr-4">
                    <Globe className="w-6 h-6 text-[#2FA4A9]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1F3A5F] text-lg mb-1">Global Desks</h3>
                    <p className="text-gray-600">USA | UAE | Singapore | UK</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-[#F4F6F8] p-6 rounded-xl border-l-4 border-[#1F3A5F]">
              <p className="text-[#1F3A5F] font-semibold italic text-sm">
                Our advisory team operates globally. Schedule an online consultation to discuss cross-border strategies regardless of your time zone.
              </p>
            </div>
          </div>

          {/* Right Panel: The Contact Form */}
          <div className="lg:col-span-7 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-heading font-bold text-[#1F3A5F] mb-2 uppercase">Request a Consultation</h2>
            <p className="text-gray-600 mb-8 font-sans">Fill out the form below, and our specialized consulting team will reach out to you within 24 hours.</p>
            
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center mb-8">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                <p className="text-green-700">Thank you for reaching out to PUMEC Consultants. Our advisory team will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 bg-white outline-none border border-green-500 text-green-700 hover:bg-green-50 px-6 py-2 rounded font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start text-red-700">
                    <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-1">Full Name *</label>
                    <input 
                      type="text" required name="name" value={formData.name} onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-1">Email Address *</label>
                    <input 
                      type="email" required name="email" value={formData.email} onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition-all outline-none"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-1">Phone Number</label>
                    <input 
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1F3A5F] mb-1">Company / Organization</label>
                    <div className="relative">
                      <Building className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
                      <input 
                        type="text" name="company" value={formData.company} onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition-all outline-none"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F3A5F] mb-1">Service Interest</label>
                  <select 
                    name="service_interest" value={formData.service_interest} onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition-all bg-white outline-none cursor-pointer"
                  >
                    <option value="">Select a service category...</option>
                    <option value="India Entry">India Market Entry</option>
                    <option value="International Tax">International Tax Advisory</option>
                    <option value="Transfer Pricing">Transfer Pricing</option>
                    <option value="FEMA">FEMA & Regulatory Compliance</option>
                    <option value="Corporate Advisory">Corporate & Transaction Advisory</option>
                    <option value="Litigation">Litigation & Dispute Resolution</option>
                    <option value="Other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1F3A5F] mb-1">Your Message *</label>
                  <textarea 
                    required name="message" rows={5} value={formData.message} onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2FA4A9] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help your business navigate growth and compliance?"
                  ></textarea>
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-6">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="text-[#F57C00] hover:underline">Privacy Policy</Link> and <Link href="/terms-of-use" className="text-[#F57C00] hover:underline">Terms of Use</Link>. We will never share your personal information.
                  </p>
                  
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full md:w-auto inline-flex items-center justify-center bg-[#F57C00] text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-md ${
                      status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#E65100] hover:shadow-xl hover:-translate-y-1'
                    }`}
                  >
                    {status === 'submitting' ? 'Sending Request...' : 'Submit Request'}
                    {status !== 'submitting' && <ArrowRight className="ml-2 w-5 h-5" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
"""

with open('c:/Users/smite/OneDrive/Desktop/client1/src/app/contact/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)

print("Contact page React component generated safely.")
