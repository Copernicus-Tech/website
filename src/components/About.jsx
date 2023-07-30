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

      <h3 className="text-white font-black md:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px]">
  <span style={{ fontWeight: "bold", color: "#00ff00" }}>&ensp;COPER</span>
  nicus <span style={{ fontWeight: "bold", color: "#00ff00" }}>TECH</span>nology Solutions
</h3>


      

      </div>
      <div className="mt-20 flex flex-wrap gap-10" style={{ marginBottom: "-45px" }}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
