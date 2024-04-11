import { MdArrowOutward } from "react-icons/md";
import Title from "./Title";

const Exp = () => {
  const experiencia = [
    {
      date: "mar 2024 - Presente",
      title: "Desarrolladora Front-End | B&C Arquitectos asociados",
      firstText:
        "Como desarrolladora front-end independiente, colaboré con Barrera&Cuevas, una empresa de arquitectura, para crear su presencia en línea. Mi objetivo era diseñar y desarrollar una página web que reflejara la identidad de la  empresa y proporcionara información clara sobre sus servicios,proyectos y cómo contactarlos. ",
      secondText:
        "Utilicé mis habilidades en desarrollo front-end, incluyendo HTML, CSS y JavaScript, para diseñar una interfaz de usuario moderna y atractiva. Implementé React para mejorar la interactividad y la experiencia del usuario. Además, integré un diseño responsivo para garantizar que la página web se vea bien en una variedad de dispositivos y tamaños de pantalla.",
      skills: ["CSS", "Tailwind", "React.js", "JavaScript"],
      link: "https://byc-nine.vercel.app/",
    },
    {
      date: "ene 2024 - mar 2024",
      title: "Desarrolladora Front-End | 3XI ONG",
      firstText:
        "Front End Developer para ONG 3xi en conjunto con Criteria, este proyecto consta de un cuestionario para medir la polarización política y social de las personas.",
      secondText:
        "Desarrollo de interfaz de usuario e interfaz del administrador, implementación de estilos y diseño responsivo, comunicación eficiente y segura entre el front-end y el back-end.",
      skills: ["CSS", "Tailwind", "React.js", "JavaScript", "Axios", "Zustand"],
      link: "https://laboratoriocivico.vercel.app/",
    },
    {
      date: "sep 2024 - dic 2024",
      title: "Desarrolladora Front-End | Surgencia ONG",
      firstText:
        "Colaborar en el equipo front end en el diseño y desarrollo de la página web para la ONG surgencia, cuyo objetivo es impulsar iniciativas de conservación del patrimonio marítimo.",
      secondText:
        "En el proyecto se llevó a cabo con JavaScript, React y Bootstrap. Adicionalmente, para gestionar el flujo de trabajo utilizamos Jira y la metodología Scrum.",
      skills: ["Bootstrap", "React.js", "JavaScript"],
      link: "https://surgenciaong.cl/",
    },
  ];

  return (
    <section id="experiencia" className="mb-32">
      <Title text="EXPERIENCIA"></Title>
      <div className="mb-14">
        {experiencia.map((item) => {
          const { date, title, firstText, secondText, skills, link } = item;
          return (
            <a href={link} target="_blank">
              <div className=" group hover:bg-[#5fecc91e] rounded p-4 duration-300 cursor-pointer">
                <p className="text-white italic ">{date}</p>
                <p className="text-primary font-semibold text-xl mb-4">
                  {title}
                  <MdArrowOutward className="group-hover:translate-x-2 group-hover:-translate-y-2 duration-300 ms-2 inline-block" />
                </p>

                <p className="text-white">{firstText}</p>
                <p className="text-white mt-2">{secondText}</p>
                <div>
                  <ul className="flex flex-wrap gap-1 my-4">
                    {skills.map((skill) => {
                      return (
                        <li className="bg-tertiary rounded-full shadow-lg px-2 py-1 text-primary font-display text-sm">
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
export default Exp;
