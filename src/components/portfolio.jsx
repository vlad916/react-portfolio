import React from "react";
import "./css/portfolio.css";

const Portfolio = () => {
  return (
    <main>
      <div className="container p-5">
        <div>
          <h2>
            <strong>Portfolio</strong>
          </h2>
          <hr />
        </div>
        <div className="row">
          <div className="col-6 mt-3">
            <div className="imageText">
              <img
                src="assets/images/project1.png"
                alt="bootsrap logo"
                className="img-fluid"
              />
            </div>
            <div className="container text-center mt-5">
              <p>
                <a href="https://github.com/vlad916/GOT-WEBPAGE">
                  <i className="fa fa-github fa-2x mx-3" id="port"></i>
                  <span className="port-text">Repo</span>
                </a>
                <a href="https://nicolegeorge.github.io/suicide-squad-GoT-app/">
                  <i className="fa fa-tv fa-2x mx-3" id="port"></i>
                  <span className="port-text">Link</span>
                </a>
              </p>
            </div>
          </div>

          <div className="col-6 mt-3">
            <div className="imageText">
              <img
                src="assets/images/project2.png"
                alt="bootsrap logo"
                className="img-fluid"
              />
            </div>
            <div className="container text-center mt-5">
              <p>
                <a href="https://github.com/vlad916/shop">
                  <i className="fa fa-github fa-2x mx-3" id="port"></i>
                  <span className="port-text">Repo</span>
                </a>
                <a href="https://kicksunited.herokuapp.com/">
                  <i className="fa fa-tv fa-2x mx-3" id="port"></i>
                  <span className="port-text">Link</span>
                </a>
              </p>
            </div>
          </div>

          <div className="col-6 mt-3">
            <div className="imageText">
              <img
                src="assets/images/password.png"
                alt="bootsrap logo"
                className="img-fluid"
              />
            </div>
            <div className="container text-center mt-5">
              <p>
                <a href="https://github.com/vlad916/Password-Generator">
                  <i className="fa fa-github fa-2x mx-3" id="port"></i>
                  <span className="port-text">Repo</span>
                </a>
                <a href="https://vlad916.github.io/Password-Generator/">
                  <i className="fa fa-tv fa-2x mx-3" id="port"></i>
                  <span className="port-text">Link</span>
                </a>
              </p>
            </div>
          </div>

          <div className="col-6 mt-3">
            <div className="imageText">
              <img
                src="assets/images/codequiz.png"
                alt="bootsrap logo"
                className="img-fluid"
              />
            </div>
            <div className="container text-center mt-5">
              <p>
                <a href="https://github.com/vlad916/code-quiz">
                  <i className="fa fa-github fa-2x mx-3" id="port"></i>
                  <span className="port-text">Repo</span>
                </a>
                <a href="https://vlad916.github.io/code-quiz/">
                  <i className="fa fa-tv fa-2x mx-3" id="port"></i>
                  <span className="port-text">Link</span>
                </a>
              </p>
            </div>
          </div>

          <div className="col-6 mt-3">
            <div className="imageText">
              <img
                src="assets/images/weather.png"
                alt="bootsrap logo"
                className="img-fluid"
              />
            </div>
            <div className="container text-center mt-5">
              <p>
                <a href="https://github.com/vlad916/weather-dashboard">
                  <i className="fa fa-github fa-2x mx-3" id="port"></i>
                  <span className="port-text">Repo</span>
                </a>
                <a href="https://vlad916.github.io/weather-dashboard/">
                  <i className="fa fa-tv fa-2x mx-3" id="port"></i>
                  <span className="port-text">Link</span>
                </a>
              </p>
            </div>
          </div>

          <div className="col-6 mt-3">
            <div className="imageText">
              <img
                src="assets/images/burger.png"
                alt="bootsrap logo"
                className="img-fluid"
              />
            </div>
            <div className="container text-center mt-5">
              <p>
                <a href="https://github.com/vlad916/burger-app">
                  <i className="fa fa-github fa-2x mx-3" id="port"></i>
                  <span className="port-text">Repo</span>
                </a>
                <a href="https://intense-coast-62871.herokuapp.com/">
                  <i className="fa fa-tv fa-2x mx-3" id="port"></i>
                  <span className="port-text">Link</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
