import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Systematic Overview</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          <span style={{ fontWeight: "bold", color: "#00ff00" }}>MERN</span>
          ingful development
        </h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        The fERN stack is a powerful technology combo for building fast and efficient web apps, using MongoDB for data storage,
        Express.js for server-side processing, React.js for UI building, and Node.js for server-side runtime management.
        This enables businesses to create scalable, responsive web apps that handle complex data and interactions, improving user experience and satisfaction.
      </p>

      <div className="mt-20 flex flex-wrap gap-10" style={{ marginBottom: "-45px" }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
