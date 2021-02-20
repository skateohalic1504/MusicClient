import React from "react";
import { Carousel } from "react-bootstrap";

//pictures imported
import jayBanner from "../img/logos/banner.jpg";
import jay1 from "../img/jay1.JPG"

class Jay extends React.Component {
  render() {
    return (
      <>
        {/* banner */}
        <img src={jayBanner} alt="picture_jay" height="100%" width="100%" />
        {/* banner */}

        <br />

        {/* carousel */}
        <Carousel style={{marginTop:"0rem"}}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jay1}
              alt="First slide"
              height="50%"
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jay1}
              alt="Third slide"
              height="50%"
            />
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jay1}
              alt="Third slide"
              height="50%"
            />
          </Carousel.Item>
        </Carousel>
        {/* carousel */}
      </>
    );
  }
}

export default Jay;
