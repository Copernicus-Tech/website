import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col xs:w-full sm:w-1/2 lg:w-1/3 px-4">
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
  const description = "Copernicus Technologies is a leading provider of innovative technology solutions. Our services include:";
  const listItems = ["Web Development", "App Development", "AI & Machine Learning", "Cloud Services", "Data Analysis", "Cybersecurity"];

  return (
    <>
      <div className="text-center mx-auto px-4 sm:px-6 lg:px-8 my-12">

        <h4 className="text-white font-black md:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] mb-4">
        <span style={{ fontWeight: "bold", color: "#00ff00" }}>time</span> is limited, don't waste it.
        </h4>


      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
