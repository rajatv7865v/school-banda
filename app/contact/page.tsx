'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactCards = [
    {
      title: 'Address',
      content: 'Gayatri Nagar, Near Power House Banda, Shahjahanpur, Uttar Pradesh, India',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      link: null,
    },
    {
      title: 'Phone',
      content: '+91 555-123-4567',
      secondary: 'Main Office',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      link: 'tel:+915551234567',
    },
    {
      title: 'Email',
      content: 'info@sgmssic.edu',
      secondary: 'General Inquiry',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:info@sgmssic.edu',
    },
    {
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      secondary: 'Saturday: 9:00 AM - 1:00 PM',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: null,
    },
  ];

  return (
    <div>
      {/* Banner/Hero Section with Image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-900/80" />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-2xl">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto">
              We&apos;d Love to Hear from You
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mt-4">
              Get in touch with us for any inquiries or information
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach out to us through any of these channels
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactCards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 ${
                    card.link ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => card.link && (window.location.href = card.link)}
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4 text-primary-600">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-800">{card.title}</h3>
                  <p className="text-gray-700 mb-1">{card.content}</p>
                  {card.secondary && (
                    <p className="text-sm text-gray-600">{card.secondary}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                  <p className="text-gray-600 mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your full name"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="+91 1234567890"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="general">General Information</option>
                        <option value="academics">Academic Programs</option>
                        <option value="faculty">Faculty & Staff</option>
                        <option value="facilities">Facilities & Infrastructure</option>
                        <option value="support">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                        placeholder="Write your message here..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Visit Us</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Location
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Gayatri Nagar, Near Power House Banda<br />
                        Shahjahanpur, Uttar Pradesh<br />
                        India
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Office Hours
                      </h3>
                      <div className="text-gray-700 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                        <p>Saturday: 9:00 AM - 1:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email Addresses
                      </h3>
                      <div className="text-gray-700 space-y-1">
                        <p>General: <a href="mailto:info@sgmssic.edu" className="text-primary-600 hover:underline">info@sgmssic.edu</a></p>
                        <p>Admissions: <a href="mailto:admissions@sgmssic.edu" className="text-primary-600 hover:underline">admissions@sgmssic.edu</a></p>
                        <p>Support: <a href="mailto:support@sgmssic.edu" className="text-primary-600 hover:underline">support@sgmssic.edu</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Follow Us</h2>
                  <p className="text-gray-600 mb-6">
                    Stay connected with us on social media for updates, news, and events.
                  </p>
                  <div className="flex space-x-4">
                    {[
                      { name: 'Facebook', icon: 'f', href: '#' },
                      { name: 'Twitter', icon: 't', href: '#' },
                      { name: 'Instagram', icon: '📷', href: '#' },
                      { name: 'LinkedIn', icon: 'in', href: '#' },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                        aria-label={social.name}
                      >
                        <span className="text-sm font-semibold">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Find Us on Map</h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto mb-4"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Visit our campus at Gayatri Nagar, Near Power House Banda, Shahjahanpur
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center overflow-hidden shadow-lg">
              <div className="text-center text-gray-500 p-8">
                <svg className="w-24 h-24 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xl font-semibold mb-2">Interactive Map</p>
                <p className="text-gray-600 mb-4">
                  Gayatri Nagar, Near Power House Banda<br />
                  Shahjahanpur, Uttar Pradesh, India
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gayatri+Nagar,+Near+Power+House+Banda,+Shahjahanpur,+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors mt-4"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
