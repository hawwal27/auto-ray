import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Autoray
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
          At CarFixPro, we specialize in providing top-quality auto parts and expert repair services. 
          With over 10 years of experience, our mission is to keep your vehicle running like new with fast, 
          affordable, and reliable solutions.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
          <div>
            <h4 className="text-xl font-semibold text-blue-600">10+ Years Experience</h4>
            <p className="text-gray-600 mt-2">Trusted by thousands of happy customers across the country.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-600">Genuine Parts</h4>
            <p className="text-gray-600 mt-2">We only sell certified, manufacturer-grade auto parts.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-blue-600">Expert Mechanics</h4>
            <p className="text-gray-600 mt-2">Skilled, certified, and ready to solve any car issue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
