import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";
import {cardData} from "../Data/card-data"



class TestimonialCard extends React.Component {
  render () {
    const mappingFunction = x => <h1>{x.title}</h1>;
  return (
        <div className="testimonials">
            {cardData.map(x => 
              <Card className="Main-card">
              <div className="card-img">
              <CardImg
                top
                width="100%"
                height="100%"
                src= {x.img}
                alt="Card image cap"
              />
              </div>
              <CardBody>
                <CardTitle></CardTitle>
                <CardSubtitle className="card-title-name">{x.name}, {x.age}</CardSubtitle>
                <CardText className="card-text">
                  {x.blurb}
                </CardText>
                <Button>Learn More</Button>
              </CardBody>
            </Card>
            )
            }
            </div>
   
  );
};
}
export default TestimonialCard;
