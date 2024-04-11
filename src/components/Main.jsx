import About from "./About";
import Education from "./Education";
import Exp from "./Exp";
import Skills from './Skills';

const Main = () => {
  return (
    <main className="md:col-start-7 md:col-end-12 px-4">
      <About></About>
      <Skills></Skills>
      <Exp></Exp>
      <Education></Education>
    </main>
  );
};
export default Main;
