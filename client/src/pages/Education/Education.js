import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-6 mb-1 text-center text-uppercase">
          {" "}
          Education Details{" "}
        </h2>{" "}
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(13, 13, 13)" }}
            date="2021 - present"
            iconStyle={{ background: "#138781", color: "rgb(13, 13, 13)" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title"> Btech CSE </h3>{" "}
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              SHARDA UNIVERSITY, GREATER NOIDA{" "}
            </h4>{" "}
          </VerticalTimelineElement>{" "}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(13, 13, 13)" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(13, 13, 13)" }}
            date="2020 - 2021"
            iconStyle={{ background: "orange", color: "rgb(13, 13, 13)" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title"> CLASS 12 th </h3>{" "}
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              HAPPY MODEL SCHOOL, VARANASI{" "}
            </h4>{" "}
          </VerticalTimelineElement>{" "}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(13, 13, 13)" }}
            date="2018 - 2019"
            iconStyle={{ background: "#138781", color: "rgb(13, 13, 13)" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title"> CLASS 10 th </h3>{" "}
            <h4 className="vertical-timeline-element-subtitle">
              {" "}
              HAPPY MODEL SCHOOL, VARANASI{" "}
            </h4>{" "}
          </VerticalTimelineElement>{" "}
        </VerticalTimeline>{" "}
      </div>{" "}
    </>
  );
};

export default Education;
