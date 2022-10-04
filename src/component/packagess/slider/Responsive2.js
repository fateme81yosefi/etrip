import React, { Component, useContext } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import "./cart.css";
import {
  CityContext,
  MajmoeeContext,
  ZirdasteContext,
  DastebandiContext,
  ProductIdContext,
} from "../../../shared/city-context";
import Imagein from "./Imagein";

export default class Responsive2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 3,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
          },
        },
      ],
    };

    const darkmodeStyle = this.props.isdark
      ? {
          background: "#52525B",
          color: "#ebebeb",
        }
      : { background: "#f5f6f8" };

    return (
      <div className="background" style={darkmodeStyle}>
        <div className="container">
          <Slider {...settings}>
            {this.props.sliderItems.map((sliderss, index) => (
              <div
                className="container contain-image"
                style={{ display: "flex" }}
                key={index}
              >
                <Imagein {...sliderss} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
