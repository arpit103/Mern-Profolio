import React from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
const Contact = () => {
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img
                    src="https://assets-global.website-files.com/5ef0df6b9272f7410180a013/5ef204bb10b93fdbe5e601bb_contact-2860030_1920-1024x683.jpg"
                    alt="contact"
                    className="image"
                  ></img>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-6 col-md-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6 className="h">
                      {" "}
                      <FcGoogle color="orange" size={30} className="ms-2" />
                      <BsGithub color="black" size={30} className="ms-2" />
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>{" "}
                  </div>{" "}
                  <div className="row px-6 mb-4">
                    <div className="line" />
                    <small className="or text-center"> OR </small>{" "}
                    <div className="line" />
                  </div>{" "}
                  <div className="row px-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your Name"
                      className="mb-3"
                    />
                  </div>{" "}
                  <div className="row px-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      className="mb-3"
                    />
                  </div>{" "}
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="message"
                      placeholder="Write your message"
                      className="mb-3"
                    />
                  </div>{" "}
                  <div className="row px-3">
                    <button className="button" type="submit">
                      {" "}
                      SEND MESSAGE{" "}
                    </button>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Contact;
