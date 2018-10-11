import React from "react";
import "../App.css";
import {bodyData} from "../Data/body-section-data"

class BodyCard extends React.Component{
  render() {
    const mappingFunction = x => <h1>{x.title}</h1>;
  return (
      <div>
            {bodyData.map(x => 
                <div className="body-section">
                <h1>{x.title}</h1>
                <h3>{x.subheading}</h3>
                <p>{x.content}</p>
                </div>)
            }
        </div>
        );
    };
};

export default BodyCard;
