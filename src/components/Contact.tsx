import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Calendar } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    gdprConsent: false
  });

  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your learning experience? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#00446E] mb-4">Get in Touch</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                We're here to help you discover how EDHUB360 can revolutionize your educational journey. 
                Whether you're an individual learner, educator, or organization, we have solutions tailored for you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#009C9F] text-white p-3 rounded-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#00446E] mb-1">Email</h4>
                  <p className="text-gray-700">contact@edhub360.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#009C9F] text-white p-3 rounded-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#00446E] mb-1">Phone</h4>
                  <p className="text-gray-700">331 230 8027</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#009C9F] text-white p-3 rounded-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#00446E] mb-1">Address</h4>
                  <p className="text-gray-700">
                    Aurora, IL 60504<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#009C9F] text-white p-3 rounded-lg">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#00446E] mb-1">Business Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM CST<br />
                    Saturday: 10:00 AM - 4:00 PM CST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white rounded-2xl p-6">
              <h4 className="text-xl font-bold mb-2">Book a Discovery Call</h4>
              <p className="text-gray-200 mb-4">
                Schedule a 30-minute consultation to discuss your specific needs and see how we can help.
              </p>
              <button className="bg-[#BEA260] text-[#00446E] px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors flex items-center">
                <Calendar size={20} className="mr-2" />
                Schedule Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#00446E] mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009C9F] focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009C9F] focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009C9F] focus:border-transparent transition-colors"
                  placeholder="What can we help you with?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009C9F] focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  name="gdprConsent"
                  required
                  checked={formData.gdprConsent}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 text-[#009C9F] focus:ring-[#009C9F] border-gray-300 rounded"
                />
                <label htmlFor="gdprConsent" className="text-sm text-gray-700">
                  I agree to the processing of my personal data in accordance with the{' '}
                  <button 
                    type="button"
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="text-[#009C9F] hover:underline"
                  >
                    Privacy Policy
                  </button> and consent to being contacted regarding my inquiry. *
                </label>
              </div>

              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = 'mailto:contact@edhub360.com';
                }}
                className="w-full bg-gradient-to-r from-[#009C9F] to-[#00446E] text-white py-4 px-6 rounded-lg font-semibold hover:from-[#00446E] hover:to-[#009C9F] transition-all duration-300 flex items-center justify-center group"
              >
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>We typically respond within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
      
      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)} 
      />
    </section>
  );
};

export default Contact;