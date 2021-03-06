import './App.css';
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Writing from './components/Writing';
import Audio from './components/Audio';
import FactCheck from './components/FactCheck';
import About from './components/About';
import References from './components/References';
import Contact from './components/Contact';

function App() {

  return (
    <div className="App container vh-100">
      <Router basename="/">
        <Route path="/about" component={() => <Nav />} />
        <Route path="/writing" component={() => <Nav />} />
        <Route path="/audio" component={() => <Nav />} />
        <Route path="/fact-checking" component={() => <Nav />} />
        <Route path="/references" component={() => <Nav />} />
        <Route path="/contact" component={() => <Nav />} />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/writing" exact component={() => <Writing />} />
          <Route path="/audio" exact component={() => <Audio />} />
          <Route path="/fact-checking" exact component={() => <FactCheck />} />
          <Route path="/references" exact component={() => <References />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Route path="/about" component={() => <Footer />} />
        <Route path="/writing" component={() => <Footer />} />
        <Route path="/audio" component={() => <Footer />} />
        <Route path="/fact-checking" component={() => <Footer />} />
        <Route path="/references" component={() => <Footer />} />
        <Route path="/contact" component={() => <Footer />} />
      </Router>
    </div>
  );
}

export default App;
