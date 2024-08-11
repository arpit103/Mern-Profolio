import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import "./arp.jpg";

const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12- about-img">
              {" "}
              {/* <img
                                                                                                                                        
                                                                                                                                        alt="profile-pic"
                                                                                                                                      />{" "} */}{" "}
              {/* <img src="arp.jpg" alt="profile-pic" /> */}{" "}
            </div>{" "}
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12- about-content">
              <h1> About me </h1>{" "}
              <p className="col">
                A well - organized, goal - oriented Software Engineer and always
                ready for new challenges, with problem solving and a flair to
                explore suitable avenues in Computer Science Engineering while
                developing advanced projects with efficiency and quality.Ability
                to adopt different work cultures and work as a Computer
                Engineer.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </Jump>{" "}
    </>
  );
};

export default About;
