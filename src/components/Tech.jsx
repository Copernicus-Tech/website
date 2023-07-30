import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <div className="flex flex-row flex-wrap justify-center gap-10">
          <h4 className="text-white font-black md:text-[60px] sm:text-[40px] xs:text-[30px] text-[20px] mb-4">
          👨‍💻🌐TECH-<span style={{ fontWeight: "bold", color: "#00ff00" }}>STACK🔧⚙️</span> <br/><br/>
        </h4>
        </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">

        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
