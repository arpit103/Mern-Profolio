import React from "react";
import "./Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="tech stack">
        <RubberBand>
          <h2 className="col-12 mt-6 mb-1 text-center text-uppercase">
            {" "}
            Technologies Stack{" "}
          </h2>{" "}
          <hr />
          <p className="pb-3 text-center">
            {" "}
            👽 Including Programming lang database, front - end, and back - end
            tools{" "}
          </p>{" "}
        </RubberBand>{" "}
        <div className="row">
          {" "}
          {TechstackList.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="col-md-13">
                <div className="card ">
                  <div className="card-content">
                    {" "}
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>{" "}
                        <div className="media-body">
                          <h5> {tech.name} </h5>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Techstack;
