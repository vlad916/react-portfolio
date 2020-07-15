import React from "react";
import "./css/contact.css";

const Contact = () => {
  return (
    <form>
      <div className="container p-5">
        <div>
          <h2>
            <strong>Contact</strong>
          </h2>
          <hr />
        </div>
        <div className="row">
          <div className="container text-center mt-5">
            <a href="https://github.com/vlad916">
              <i className="fa fa-github fa-2x mx-3" id="con"></i>
              <span className="body-text">Github</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="container text-center mt-5">
            <a href="https://www.linkedin.com/in/angelo-ungos-064619197/">
              <i className="fab fa-linkedin fa-2x mx-3" id="con"></i>
              <span className="body-text">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="row">
          <div className="container text-center mt-5">
            <a href="mailto:ungosangelo916@yahoo.com.au">
              <i className="far fa-envelope fa-2x mx-3" id="con"></i>
              <span className="body-text">Email</span>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="container text-center mt-5">
            <i className="fas fa-mobile-alt fa-2x mx-3" id="con"></i>
            <span className="body-text">+(61) 422 056 407</span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Contact;
