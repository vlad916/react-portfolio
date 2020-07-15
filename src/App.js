import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import NotFound from "./components/notFound";
import Footer from './components/footer';
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/aboutMe" component={AboutMe}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/aboutMe"></Redirect>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </main>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
