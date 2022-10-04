import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import "./cart.css";
import Imagefunc from "./Imagefunc";

export default class Responsive extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const darkmode = this.props.isdark
      ? {marginBottom: "20px",
          backgroundColor: "#404040",
          color: "white",
          
        }
      : {marginBottom: "20px",backgroundColor: "white"};

    return (
      <div
        className="background"
        style={darkmode}
      >
        <div className="container">
          <div className="container contai">
            <h4 className="head-text1">{this.props.title.Name}</h4>
            <h5 className="head-text2">{this.props.title.Description}</h5>
            <Slider {...settings}>
              {this.props.sliderItems.map((sliderss, index) => (
                <div
                  className="container contain-image"
                  style={{ display: "flex" }}
                  key={index}
                >
                  <span className="discount">{sliderss.Discount}%</span>
                  <Imagefunc
                    // ImageURL={sliderss.ImageURL}
                    // Alt={sliderss.Alt}
                    {...sliderss}
                  />
                  <span className="loc">{sliderss.CityName}</span>
                  <span className="subject">{sliderss.Title}</span>
                  <hr className="hr-style"></hr>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
