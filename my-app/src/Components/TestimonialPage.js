import React from "react";
import "../App.css";
import FitnessCard from "./FitnessCard";



class TestimonialPage extends React.Component{
render() {
  return (
    <div>
      <div  className="testimonials">
        <h1 className="testi-header">Our Customer Story</h1>
      </div>
        <div>
        <FitnessCard />
        </div>
    </div>
  );
};
}

export default TestimonialPage;
