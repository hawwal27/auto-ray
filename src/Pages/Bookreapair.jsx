import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const BookRepair = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carMake: '',
    carModel: '',
    carYear: '',
    issue: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Repair request submitted successfully!');
    console.log(formData);
  };

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
          <FaHome className="text-blue-600" />
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Book Repair</span>
        </div>

        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Book a Repair</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="p-3 border rounded"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="p-3 border rounded"
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-3 border rounded"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="carMake"
              value={formData.carMake}
              onChange={handleChange}
              placeholder="Car Make (e.g., Toyota)"
              required
              className="p-3 border rounded"
            />
            <input
              type="text"
              name="carModel"
              value={formData.carModel}
              onChange={handleChange}
              placeholder="Model (e.g., Corolla)"
              required
              className="p-3 border rounded"
            />
            <input
              type="number"
              name="carYear"
              value={formData.carYear}
              onChange={handleChange}
              placeholder="Year (e.g., 2015)"
              required
              className="p-3 border rounded"
            />
          </div>

          <select
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          >
            <option value="">Select Repair Type</option>
            <option value="engine">Engine Issue</option>
            <option value="brakes">Brake Repair</option>
            <option value="battery">Battery Replacement</option>
            <option value="ac">AC/Heater Repair</option>
            <option value="electrical">Electrical System</option>
            <option value="oil">Oil Change</option>
            <option value="other">Other</option>
          </select>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              required
              className="p-3 border rounded"
            />
            <input
              type="time"
              name="preferredTime"
              value={formData.preferredTime}
              onChange={handleChange}
              className="p-3 border rounded"
            />
          </div>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional details or symptoms"
            className="w-full p-3 border rounded h-24"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Repair Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookRepair;
