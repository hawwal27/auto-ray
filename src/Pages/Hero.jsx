import React from 'react';
import repiar from '../assets/car2.png'

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Fast & Reliable <span className="text-blue-600">Car Repairs</span> and Quality Parts
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Your trusted auto partner — from engine fixes to affordable spare parts.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Book Repair
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
              Shop Parts
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={repiar}
            alt="Car Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
