import React from 'react';
// import headslight from "../assets/headslight.png"

const parts = [
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

const Parts = () => {
  return (
    <section id="parts" className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-600 mb-10">Popular Car Parts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {parts.map((part, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border hover:shadow-md transition text-center">
              <img src={part.img} alt={part.name} className="w-24 h-24 object-contain mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-600 mb-1">{part.name}</h3>
              <p className="text-gray-600 text-sm">{part.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Parts;
