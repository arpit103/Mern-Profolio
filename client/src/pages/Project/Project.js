import React from "react";
import "./Project.css";
import Zoom from "react-reveal/Zoom";
import "./blog.png";

const Project = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-6 mb-1 text-center text-uppercase">
          {" "}
          Top Recent Project{" "}
        </h2>{" "}
        <hr />
        <p className="pb-3 text-center">
          {" "}
          👽 Here are my recent Project with live link and source code lo{" "}
        </p>{" "}
        {/* CARD DESIGN */}{" "}
        <Zoom>
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> FULL STACK </span>{" "}
                  {
                    <img
                      src="https://bootstrapmade.com/content/templatefiles/iPortfolio/iPortfolio-bootstrap-website-template-md.webp"
                      //src="blog.png"
                      alt="project"
                    />
                  }{" "}
                </div>{" "}
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge"> Node </span>{" "}
                  {/* <span className="card-detail-badge"> Three.js </span>{" "} */}{" "}
                  <span className="card-detail-badge"> React </span>{" "}
                  <span className="card-detail-badge"> Tailwind CSS </span>{" "}
                </div>{" "}
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> Portfolio Website </h5>{" "}
                  </div>{" "}
                  <a className="ad-btn" href="#">
                    {" "}
                    View{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge"> Front - end </span>{" "}
                  {
                    // <img
                    //   src="https://bootstrapmade.com/content/templatefiles/iPortfolio/iPortfolio-bootstrap-website-template-md.webp"
                    //   alt="project"
                    // />
                  }{" "}
                </div>{" "}
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge"> HTML </span>{" "}
                  <span className="card-detail-badge"> CSS </span>{" "}
                  <span className="card-detail-badge"> JavaScript </span>{" "}
                  <span className="card-detail-badge"> React </span>{" "}
                  {/* <span className="card-detail-badge"> Mongodb </span>{" "} */}{" "}
                </div>{" "}
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase"> BLOG Website </h5>{" "}
                  </div>{" "}
                  <a className="ad-btn" href="#">
                    {" "}
                    View{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* <div className="col-md-4">
                                                                          <div className="card rounded">
                                                                            <div className="card-image">
                                                                              <span className="card-notify-badge"> FULL STACK </span>{" "}
                                                                              {
                                                                                // <img
                                                                                //   //src="https://bootstrapmade.com/content/templatefiles/iPortfolio/iPortfolio-bootstrap-website-template-md.webp"
                                                                                //   src="blog.png"
                                                                                //   alt="project"
                                                                                // />
                                                                                <img src="blog.png" alt="project" />
                                                                              }{" "}
                                                                            </div>{" "}
                                                                            <div className="card-image-overly m-auto mt-3">
                                                                              {" "}
                                                                              {/* <span className="card-detail-badge"> Node </span>{" "} */}{" "}
            {/* <span className="card-detail-badge"> Tailwind </span>{" "}
                                                                              <span className="card-detail-badge"> React </span>{" "}
                                                                              <span className="card-detail-badge"> AppWrite </span>{" "}
                                                                            </div>{" "}
                                                                            <div className="card-body text-center">
                                                                              <div className="ad-title m-auto">
                                                                                <h5 className="text-uppercase"> Portfolio Website </h5>{" "}
                                                                              </div>{" "}
                                                                              <a className="ad-btn" href="#">
                                                                                {" "}
                                                                                View{" "}
                                                                              </a>{" "}
                                                                            </div>{" "}
                                                                          </div>{" "}
                                                                        </div>{" "} */}{" "}
            {/* <h1> Project </h1>{" "} */}{" "}
          </div>{" "}
        </Zoom>{" "}
      </div>{" "}
    </>
  );
};

export default Project;
