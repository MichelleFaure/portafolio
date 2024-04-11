import Title from "./Title";


const Education = () => {
  const formacion = [
    {
      date: "2023 - Presente",
      title: "Digital House | Argentina",
      firstText: "Certified Tech Developer",
      secondText:
        "Iniciativa educativa co-creada por Digital House, Mercado Libre y Globant para formar desarrolladores.",
    },
    {
      date: "nov 2022 - jun 2023",
      title: "Academia Desafío Latam | Chile ",
      firstText: "Desarrollor Front-End",
      secondText:
        "Construcción de proyectos de aplicación web del lado del cliente utilizando HTML, CSS, JavaScript y React.",
    },
    {
      date: "jul 2022 - sep 2022",
      title: "Coder House | Argentina",
      firstText: "Desarrollo web | Javascript",
      secondText:
        "Creación de un sitio web utilizando HTML, CSS y JavaScript, implementando prácticas de versionado de código con GIT y preprocesadores como SASS.",
    },
  ];

  return (
    <section id="formacion">
      <Title text="FORMACIÓN"></Title>
      <div>
        {formacion.map((item) => {
          const { date, title, firstText, secondText } = item;
          return (
            <div className="mb-8 p-4">
              <div>
                <p className="w-40 italic text-white">{date}</p>
              </div>
              <div>
                <p className="text-primary font-semibold">{title}</p>
                <p className="text-xl text-white my-2">{firstText}</p>
                <p className="text-white">{secondText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Education;
