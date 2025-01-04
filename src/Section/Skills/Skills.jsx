import SkillsCard from "../../Components/SkillsCard";
import Title from "../../Components/Title";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { FaNodeJs } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills" className="max-w-7xl w-full mb-8 md:mb-16 lg:mb-28 mx-auto p-2">
      <Title>My Skills</Title>
      <Marquee>
        <div className="flex items-center gap-2">
          <SkillsCard>
            <FaHtml5 className="text-red-500 text-2xl md:text-5xl"></FaHtml5>
            <p>HTML5</p>
          </SkillsCard>
          <SkillsCard>
            <FaCss3 className="text-blue-600 text-2xl md:text-5xl"></FaCss3>
            <p>CSS3</p>
          </SkillsCard>
          <SkillsCard>
            <IoLogoJavascript className="text-yellow-400 text-2xl md:text-5xl"></IoLogoJavascript>
            <p>JAVASCRIPT</p>
          </SkillsCard>
          <SkillsCard>
            <FaReact className="text-blue-400 text-2xl md:text-5xl"></FaReact>
          <p>REACT</p>
          </SkillsCard>
          <SkillsCard>
            <FaBootstrap className="text-purple-500 text-2xl md:text-5xl"></FaBootstrap>
            <p>BOOTSTRAP</p>
          </SkillsCard>
          <SkillsCard>
            <FaNodeJs className="text-[#339933] text-2xl md:text-5xl"></FaNodeJs>
            <p>NODEJS</p>
          </SkillsCard>
          <SkillsCard>
            <DiMongodb className="text-green-500 text-2xl md:text-5xl"></DiMongodb>
            <p>MONGODB</p>
          </SkillsCard>
        </div>
      </Marquee>
    </div>
  );
};

export default Skills;
