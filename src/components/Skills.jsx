import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaSass,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import Title from "./Title";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
    },
    {
      icon: <IoLogoJavascript />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <FaSass />,
      name: "Saas",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
  ];
  return (
    <section id="skills" className="mb-32">
      <Title text="SKILLS"></Title>
      <ul className="flex flex-wrap gap-3 mb-14">
        {skills.map((skill) => {
          return (
            <li className=" flex gap-2 justify-center items-center bg-white px-2 py-1 text-xl text-[#464bd3] font-semibold rounded shadow-lg">
              {skill.icon}
              <div>{skill.name}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default Skills;
