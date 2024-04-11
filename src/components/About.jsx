import Title from "./Title";

const About = () => {
  return (
    <section id="about">
      <Title text="ACERCA DE MI"></Title>
      <div className="text-white text-xl mb-32 px-4">
        <p className="mb-6">
          Empecé vendiendo artículos por Mercado Libre, me surgió la idea de
          hacer una pagina web propia lo cual me llevo al mundo del desarrollo,
          al comienzo como un hobbie pero luego tomo fuerza la posibilidad de
          convertirme en desarrolladora Front-end. Parti con lo basico HTML Y
          CSS, por su puesto eso no fue suficiente para mi pagina web asi que
          continue con JavaScript y React, ahi las cosas se pusieron complicadas
          pero segui adelante y esa fue la señal que me hizo dar cuenta de que
          la programacion es lo que me gusta y tener desafios me motiva.
        </p>
        <p className="mb-6">
          ¿Termine mi pagina web? No XD, la vida me derivo a otros rumbos, pero
          si miras mas abajo podras encontrar algunos proyectos en los que he
          trabajado.
        </p>
        <p className="mb-6">
          Cuando no estoy frente a un computador me gusta andar en moto y pasear
          por la ciudad. En un futuro me gustaria enseñarle a otras mujeres a
          conducir motocicletas.
        </p>
      </div>
    </section>
  );
};
export default About;
