import React, { useState } from 'react';

const CarRepairFAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide general car repairs, diagnostics, oil changes, brake service, engine repair, and sell quality car parts.",
    },
    {
      question: "Do you offer warranty on repairs?",
      answer:
        "Yes, we offer a limited warranty on all parts and labor. Contact us for details specific to your service.",
    },
    {
      question: "Can I book an appointment online?",
      answer:
        "Yes, you can schedule a service or parts consultation through our website or by calling us directly.",
    },
    {
      question: "Do you sell both new and used parts?",
      answer:
        "We sell both new and tested used parts. All parts go through quality checks before sale.",
    },
    {
      question: "How long does a typical repair take?",
      answer:
        "It depends on the type of repair. Minor services may take a few hours, while more complex issues may require 1–2 days.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-600">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 font-medium text-lg flex justify-between items-center"
            >
              <span className='text-blue-600'>{faq.question}</span>
              <span className='text-blue-600'>{openIndex === index ? '▲' : '▼'}</span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRepairFAQ;
