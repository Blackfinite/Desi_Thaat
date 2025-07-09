import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out all fields.');
      return;
    }

    // Example: Simulate successful form submission
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Hide confirmation after a few seconds (optional)
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 text-green-900 min-h-screen py-20 px-4 font-[poppins]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent font-[playfair_display] italic mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-green-800">
            Have a question or feedback? We'd love to hear from you!
          </p>

          <div className="space-y-6 text-green-800">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>123 Desi Street, Thaat Nagar, Lucknow, UP - 226001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-green-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-green-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p>contact@desithaat.in</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaClock className="text-green-600 text-xl mt-1" />
              <div>
                <p className="font-semibold">Opening Hours</p>
                <p>Mon – Sun: 10:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-green-200">
          <h3 className="text-2xl font-bold mb-6 text-green-700">Send Us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {error && <p className="text-red-600 text-sm font-semibold">{error}</p>}
            {submitted && <p className="text-green-600 text-sm font-semibold">Thank you! Your message has been sent.</p>}

            <button
              type="submit"
              className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-green-400/20 hover:shadow-green-500/30 transition-all duration-300 active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
