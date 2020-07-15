import React from "react";
import "./css/aboutMe.css";

const AboutMe = () => {
  return (
    <main>
      <div className="container p-5">
        <h2>About Me</h2>
        <hr />
        <div className="col-12">
          <img
            src="assets/images/me.jpg"
            className="img-fluid rounded float-left pic"
          />
          <p className="lead capitalize text-justify">
            Full-Stack Developer versed in building beautifully responsive and
            intuitive front-ends and efficient and resilient back-ends. A
            graduate of the Uni Adelaide Full-Stack Bootcamp. I am versed in
            HTML5, CSS3, JavaScript, Node.js, React, Express.js, MySQL, MongoDB,
            Sequelize, Mongoose, Bootstrap, Handlebars, jQuery, Heroku, Git, and
            GitHub.
          </p>
          <p className="lead capitalize text-justify">
            Whether it is a website, application, or program, the things I build
            focus on their essence. I believe a project works best when it does
            what it’s supposed to in a simple, uncluttered way.
          </p>
          <p className="lead capitalize text-justify">
            My education background is in Nursing and currently working in the
            health industry but i have always kept an interest in computers
            since my childhood.
          </p>
          <p className="lead capitalize text-justify">
            I like putting together things and computers piqued my curiosity. I
            like that it's evolving and adapting to change. I want to push
            myself in learning and acquiring new skills. I hope to achieve
            success in pursuing a career related to computer programming in
            which i have explored my capabilities and talents.
          </p>
          <br />
          <a href="assets/images/resume.pdf">
            <h4>Check out my Resume.</h4>
          </a>
        </div>
      </div>
    </main>
  );
};

export default AboutMe;
