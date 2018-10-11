import React, { Component } from "react";
import "../App.css";
import { Button } from "reactstrap";

class Mainarea extends Component {
  render() {
    return (
          <div className="Main-area">
            <div className="main-heading">
                <h1>Personal Training</h1>    
                <h4>Premium lifestyle and health transformations with Kat</h4> 
                <Button color="secondary" className="header-button">
                  Learn More
                </Button>
            </div>
          </div>
    );
  }
}

export default Mainarea;
