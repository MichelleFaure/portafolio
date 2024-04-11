import { useState } from "react";
import {
  FaLinkedin,
  FaFileDownload,
  FaGithub,
  FaRegCopy,
  FaYoutube,
 
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaCheck } from "react-icons/fa6";
const Header = () => {
  const [copied, setCopied] = useState(false);
  const [showemail, setShowEmail] = useState(false);

  const correo = "faure.s.michelle@gmail.com";

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(correo)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000); 
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles:", error);
      });
  };
  return (
    <header className="bg-secondary  md:col-start-2  lg:col-start-3 md:col-end-7 px-4 mb-14 ">
      <div className="md:fixed">
        <div>
          <h1 className="text-primary font-semibold text-4xl ps-2">
            MICHELLE FAURE
          </h1>
          <h2 className="text-primary text-xl ps-2">
            DESARROLLADORA FRONT-END
          </h2>
          <a
            href="https://drive.google.com/drive/folders/1lZjCd-OM_9osfhU7tMeqL0Q9SGjb7Q2f"
            target="_blank"
          >
            <div className="flex items-center gap-2 justify-center mt-4 bg-white px-2 py-1 text-xl text-[#464bd3] font-semibold rounded shadow-2xl border border-secondary hover:bg-secondary hover:border-primary hover:border hover:text-primary duration-300">
              <FaFileDownload />
              <p>Descargar CV</p>
            </div>
          </a>
          <div
            className=" mt-4 bg-white px-2 py-1 text-xl text-[#464bd3] font-semibold rounded shadow-2xl border border-secondary hover:bg-secondary hover:border-primary hover:border hover:text-primary duration-300 cursor-pointer"
            onClick={() => setShowEmail(true)}
          >
            {showemail ? (
              <div className="flex items-center gap-2 justify-center">
                <p>{correo}</p>
                <button onClick={handleCopyToClipboard}>
                  {copied ? (
                    <FaCheck />
                  ) : (
                    <div>
                      <FaRegCopy />
                    </div>
                  )}
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 justify-center">
                <SiGmail />
                <p>Contacto</p>
              </div>
            )}
          </div>
        </div>
        <div>
          <ul className="text-white font-semibold ps-2 my-14 flex flex-col gap-4 ">
            <li className=" group flex items-center gap-2">
              <div className="  w-0 h-0 bg-white border rounded group-hover:w-14  duration-300  "></div>
              <a href="#about">ACERCA DE MI</a>
            </li>
            <li className=" group flex items-center gap-2">
              <div className="  w-0 h-0 bg-white border rounded group-hover:w-14  duration-300  "></div>
              <a href="#skills ">STACK TECNÓLOGICO</a>
            </li>
            <li className=" group flex items-center gap-2">
              <div className="  w-0 h-0 bg-white border rounded group-hover:w-14  duration-300  "></div>
              <a href="#experiencia">EXPERIENCIA</a>
            </li>
            <li className=" group flex items-center gap-2">
              <div className="  w-0 h-0 bg-white border rounded group-hover:w-14  duration-300  "></div>
              <a href="#formacion">FORMACIÓN</a>
            </li>
          </ul>
        </div>
        <div className="flex text-4xl gap-8 text-primary">
          <a href="www.linkedin.com/in/michellefaure" target="_blank">
            <div className="group rounded-full p-2  hover:bg-primary duration-300">
              <FaLinkedin className="group-hover:text-secondary" />
            </div>
          </a>
          <a href="https://github.com/MichelleFaure" target="_blank">
            <div className="group rounded-full p-2  hover:bg-primary duration-300">
              <FaGithub className="group-hover:text-secondary" />
            </div>
          </a>
          <a href="" target="_blank">
            <div className="group rounded-full p-2  hover:bg-primary duration-300">
              <FaYoutube className="group-hover:text-secondary" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
