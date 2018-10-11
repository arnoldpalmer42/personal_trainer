import React from "react";
import "../App.css";
import BodyCards from "./BodyCards"

class BodySection extends React.Component{
  render() {
  return (
        <div className="body-section">
            <BodyCards />
        </div>
  );
};
};

export default BodySection;
