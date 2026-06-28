import React from 'react'
import { FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaServer,
  FaShoppingCart,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaLaptopCode className="text-6xl mx-auto mb-4" />,
    title: "Web Development",
    description: "Creating responsive and interactive websites using modern technologies."
  },
  {
    icon: <FaPaintBrush className="text-6xl mx-auto mb-4" />,
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with a focus on usability and aesthetics."
  },
  {
    icon: <FaMobileAlt className="text-6xl mx-auto mb-4" />,
    title: "Mobile Development",
    description: "Building cross-platform mobile applications for iOS and Android."
  },
  {
    icon: <FaServer className="text-6xl mx-auto mb-4" />,
    title: "Frontend Development",
    description: "Developing robust client-side applications and user interfaces."
  },
  {
    icon: <FaShoppingCart className="text-6xl mx-auto mb-4" />,
    title: "E-Commerce Solutions",
    description: "Creating comprehensive online shopping experiences."
  }
];

const Services = () => {
  return (
    <div className="text-center py-4 px-2 text-white">
      <h1 className="text-4xl font-bold mb-4 mt-6">My <span className='text-green-500'>Services</span></h1>
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <div key={service.title} className="bg-[#001f0e] p-6 rounded-xl text-center w-full transition-transform duration-300 hover:-translate-y-1">
            <h3 className= 'text-green-500'>{service.icon}</h3>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services