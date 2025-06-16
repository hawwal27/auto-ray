import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-2xl font-bold mb-2 text-blue-700 ">Autoray</h4>
          <p className="text-gray-400 text-sm">
            Trusted car repair and genuine parts provider. Fast, reliable service from certified experts.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#parts" className="hover:text-white">Parts</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
          <p className="text-gray-300 text-sm">Email: support@autoray.com</p>
          <p className="text-gray-300 text-sm">Phone: +234 (800) 123-4567</p>
          <p className="text-gray-300 text-sm mt-2">Mon - Sat: 8am - 6pm</p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-3 ">Stay Connected</h4>
          <p className="text-gray-400 text-sm mb-4">Get updates, exclusive deals & service tips in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-lg "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Autoray. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
