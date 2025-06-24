import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const parts = [
  {
    name: 'Air Filters',
    description: 'High-performance filters for all makes and models.',
    price: '$25',
    image:
      'https://media.istockphoto.com/photos/set-of-car-parts-isolated-on-white-background-3d-picture-id1034249292?k=6&m=1034249292&s=612x612&w=0&h=mkT247JTsOYyiKv315d1ObCp-dqhrmraZiS14naOKD0=',
  },
  {
    name: 'Brake Pads',
    description: 'Reliable stopping power with certified materials.',
    price: '$40',
    image:
      'https://th.bing.com/th/id/OIP.c98Sg8lxqrJoaVMObCZ4iwHaE8?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Spark Plugs',
    description: 'Increase fuel efficiency and engine performance.',
    price: '$15',
    image: 'https://img.freepik.com/free-photo/spark-plugs_93675-66575.jpg?size=626&ext=jpg',
  },
  {
    name: 'Headlights',
    description: 'LED & Halogen options for clear night driving.',
    price: '$70',
    image:
      'https://th.bing.com/th/id/R.9b188c1a96dff0f2aeeb19d095fc6b09?rik=vtQvGUSkUG0mJA&pid=ImgRaw&r=0',
  },
];

const ShopParts = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
          <FaHome className="text-blue-600" />
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">Shop Parts</span>
        </div>

        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">Shop Auto Parts</h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {parts.map((part, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={part.image}
                alt={part.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{part.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{part.description}</p>
                <p className="text-blue-600 font-bold mt-3">{part.price}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopParts;
