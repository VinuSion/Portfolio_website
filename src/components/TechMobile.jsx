import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const TechMobile = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="bg-gradient-to-b from-[#00e7a6] to-[#1a8abe] p-[2px] rounded-[50%] shadow-card" key={technology.name}>
          <div className="w-[5.5rem] h-[5.5rem] bg-tertiary rounded-[50%] py-2 px-2 flex justify-center items-center">
            <img src={technology.icon} alt={technology.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(TechMobile, "");
