import React from "react";
import "../App.css";
import TestimonialCard from "./TestimonailCard";



class TestimonialPage extends React.Component{
render() {
  return (
    <div>
      <div  className="testimonials">
        <h1 className="testi-header">Our Customer Story</h1>
      </div>
        <div>
        <TestimonialCard />
        </div>
    </div>
  );
};
}

export default TestimonialPage;
