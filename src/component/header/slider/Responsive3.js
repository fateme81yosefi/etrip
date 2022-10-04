import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default class Responsive3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 10,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,            infinite: true,

          },
        },
      ],
    };
    return (
    
    
          <Slider {...settings} className="hiii">
            
            
                  {this.props.sliderItems.map((sliderss , index) => (
                
                        <img width={"100%"} src={sliderss.ImageURL} key={index}></img>
                       
                  ))}
           
          </Slider>
      
    );
  }
}
