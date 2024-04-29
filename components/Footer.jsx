import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <span className="fw-bold">The Generics</span>
            </div>
            <p className="mt-2">
              Sharpener Tech E-Commerce{" "}
              <cite title="Source Title">Project Task</cite>
            </p>
          </div>
          <div className="col-md-3">
            <div className="social-icons">
              <a href="#!" className="me-3 text-decoration-none text-light">
                <FaFacebook />
              </a>
              <a href="#!" className="me-3 text-decoration-none text-light">
                <FaTwitter />
              </a>
              <a href="#!" className="me-3 text-decoration-none text-light">
                <FaYoutube />
              </a>
              <a href="#!" className="text-decoration-none text-light">
                <FaInstagram />
              </a>
            </div>
            <p className="mt-2">
              &copy; {new Date().getFullYear()} The Generics. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
