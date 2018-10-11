import React, { Component } from "react";
import "./App.css";
import TestimonialPage from "./Components/TestimonialPage";
import Mainarea from "./Components/Mainarea";
import Navbar from "./Components/Navbar";
import SecondArea from "./Components/SecondArea";
import BodySection from "./Components/BodySection";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Mainarea />
        <TestimonialPage />
        <SecondArea />
        <BodySection />
      </div>
    );
  }
}

export default App;
