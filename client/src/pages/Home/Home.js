import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
// import resume from "../../assets/docs/resume/Arpit_Singh_2021477777.pdf";
import Arpit_Singh_2021477777 from "../../assets/docs/resume/Arpit_Singh_2021477777.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Home.css";
import Fade from "react-reveal/Fade";
const Home = () => {
  const [theme, setTheme] = useTheme();

  //Handle Theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className=" container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {" "}
          {theme === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsFillSunFill size={20} />
          )}{" "}
        </div>{" "}
        <div className="container home-content">
          <Fade right>
            <h2> Hii🙋‍♂️ I 'am Arpit</h2>{" "}
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer !",
                    "Mern Stack Developer !",
                    "React native developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />{" "}
            </h1>{" "}
          </Fade>{" "}
          <Fade bottom>
            <div className="home-buttons">
              <a
                className=" btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9506738230"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me{" "}
              </a>{" "}
              {/* <button className=" btn btn-hire"> Hire me </button>{" "} */}{" "}
              <a
                className="btn btn-cv"
                href={Arpit_Singh_2021477777}
                download={Arpit_Singh_2021477777.pdf}
              >
                {" "}
                My Resume{" "}
              </a>{" "}
            </div>{" "}
          </Fade>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Home;
