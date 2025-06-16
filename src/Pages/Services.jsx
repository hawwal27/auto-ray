import React from 'react';

const services = [
  { title: "Engine Diagnostics", desc: "Accurate engine scans and problem solving." },
  { title: "Brake Replacement", desc: "Safe, fast, and high-quality brake service." },
  { title: "Oil Change", desc: "Keep your engine healthy with our quick oil service." },
  { title: "Battery Check", desc: "Full battery testing and replacements when needed." },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
