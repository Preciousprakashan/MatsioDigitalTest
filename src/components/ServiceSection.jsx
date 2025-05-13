import React from 'react';
import { FaFileAlt, FaUsers, FaShieldAlt } from 'react-icons/fa';
import './ServiceSection.css';

const services = [
  {
    icon: <FaFileAlt size={32} />,
    title: 'Start Up Services',
    description:
      'We support entrepreneurs to build their businesses by providing them with the ideal company formation legal services.',
  },
  {
    icon: <FaUsers size={32} />,
    title: 'Finance & Accounting',
    description:
      'We provide our clients with the best in the market, accounting, and financial services to help accelerate their business growth.',
  },
  {
    icon: <FaShieldAlt size={32} />,
    title: 'Risk & Assurance',
    description:
      'We offer risk and assurance services for new as well as established businesses to help them reduce risks and overcome any disruption.',
  },
];

const ServiceSection = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
