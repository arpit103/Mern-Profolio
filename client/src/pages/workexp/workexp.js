import React from "react";
import { SiReaact } from "react-icons/si";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Workexp.css";
import { SiReact } from "react-icons/si";

const workexp = () => {
  return (
    <>
      <div className="container work" id="workexp">
        <div className="work-exp">
          <h2 className="col-12 mt-6 mb-1 text-center text-uppercase">
            {" "}
            CERTIFICATION{" "}
          </h2>{" "}
          <hr />
          <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(13, 13, 13)" }}
              date="2023 - 2023"
              iconStyle={{ background: "#138781", color: "rgb(13, 13, 13)" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                {" "}
                Java Fundamentals{" "}
              </h3>{" "}
              <h4 className="vertical-timeline-element-subtitle">
                {" "}
                ORACLE Academy{" "}
              </h4>{" "}
              <p> Decription about work </p>{" "}
            </VerticalTimelineElement>{" "}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(13, 13, 13)" }}
              date="2023 - 2023"
              iconStyle={{ background: "#138781", color: "rgb(13, 13, 13)" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                {" "}
                Database Foundations{" "}
              </h3>{" "}
              <h4 className="vertical-timeline-element-subtitle">
                {" "}
                ORACLE Academy{" "}
              </h4>{" "}
              <p> Decription about work </p>{" "}
            </VerticalTimelineElement>{" "}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  rgb(13, 13, 13)" }}
              date="2022 - 2022"
              iconStyle={{ background: "#138781", color: "rgb(13, 13, 13)" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                {" "}
                Java Foundations{" "}
              </h3>{" "}
              <h4 className="vertical-timeline-element-subtitle">
                {" "}
                ORACLE Academy{" "}
              </h4>{" "}
              <p> Decription about work </p>{" "}
            </VerticalTimelineElement>{" "}
          </VerticalTimeline>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default workexp;
