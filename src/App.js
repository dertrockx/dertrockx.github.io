import React, { Fragment } from 'react';
import './App.css';
import LandingBanner from "./components/LandingBanner/LandingBanner";
import Navbar from "./components/Navbar";
import About from './components/Sections/About';
import Projects from './components/Sections/Projects/Projects';
import Contact from "./components/Sections/Contact/Contact";
import Footer from "./components/Footer";
import RepoState from "./context/repos/repoState";

const App = () => {
  console.log("Hi fellow dev! I see your checking on my page. If you want to know how I created this, feel free to contact me ;)\nMy e-mail is located below on my website");
  return(
    <RepoState>
      <Fragment>
        <Navbar />
        <LandingBanner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Fragment>
    </RepoState>
  )
}

export default App;
