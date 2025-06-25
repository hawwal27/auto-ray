import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const car = [
  {
    name: "Air Filters",
    desc: "High-performance filters for all makes and models.",
    img: "https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?k=6&m=1034249292&s=612x612&w=0&h=mkT247JTsOYyiKv315d1ObCp-dqhrmraZiS14naOKD0=",
  },
  {
    name: "Brake Pads",
    desc: "Reliable stopping power with certified materials.",
    img: "https://th.bing.com/th/id/OIP.c98Sg8lxqrJoaVMObCZ4iwHaE8?rs=1&pid=ImgDetMain",
  },
  {
    name: "Spark Plugs",
    desc: "Increase fuel efficiency and engine performance.",
    img: "https://img.freepik.com/free-photo/spark-plugs_93675-66575.jpg?size=626&ext=jpg",
  },
  {
    name: "Headlights",
    desc: "LED & Halogen options for clear night driving.",
    img: "https://th.bing.com/th/id/R.9b188c1a96dff0f2aeeb19d095fc6b09?rik=vtQvGUSkUG0mJA&pid=ImgRaw&r=0",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % car.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + car.length) % car.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % car.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row">
      
      {/* Left - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-16 bg-gray-100 pt-12 pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Fast & Reliable <span className="text-blue-600">Car Repairs</span> and Quality Parts
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Your trusted auto partner — from engine fixes to affordable spare parts.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-sm">
          <Link
            to='/BookRepair'
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center"
          >
            Book Repair
          </Link>
          <Link
            to='/Shop'
            className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition text-center"
          >
            Shop Parts
          </Link>
        </div>
      </div>

      {/* Right - Carousel */}
      <div className="w-full md:w-1/2 relative overflow-hidden bg-white">
        <div className="relative h-screen w-full">
          {/* Slides container */}
          <div
            className="absolute top-0 left-0 w-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateY(-${currentIndex * 100}vh)`,
              height: `${car.length * 100}vh`,
            }}
          >
            {car.map((item, index) => (
              <div
                key={index}
                className="h-screen w-full flex flex-col justify-center items-center p-6"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[400px] md:h-[600px] object-contain mb-6"
                />
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-center max-w-md">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-10">
            <button onClick={handlePrev} className="bg-white p-2 rounded-full shadow hover:bg-blue-100">
              <FaChevronUp className="text-blue-600" />
            </button>
            <button onClick={handleNext} className="bg-white p-2 rounded-full shadow hover:bg-blue-100">
              <FaChevronDown className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
