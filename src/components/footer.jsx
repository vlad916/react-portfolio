import React from "react";
import './css/footer.css';



const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="container-fluid text-center p-2">
          <a href="mailto:ungosangelo916@yahoo.com.au">
            <i className="far fa-envelope fa-2x mx-3"></i>
          </a>
          <a href="https://www.linkedin.com/in/angelo-ungos-064619197/">
            <i className="fab fa-linkedin-in fa-2x mx-3"></i>
          </a>
          <a href="https://github.com/vlad916">
            <i className="fab fa-github fa-2x mx-3"></i>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="container-fluid text-center">
          <p id="copy">
            <span>&#169;</span> 2019 Angelo Ungos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
