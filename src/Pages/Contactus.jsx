import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-8">Have a question or need support? We’re here to help you.</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
