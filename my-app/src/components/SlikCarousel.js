import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlikCarousel.css';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={'fa-solid fa-angle-right'} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={'fa-solid fa-angle-left'} onClick={onClick} />;
}

export default class SlikerCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="img-slider-container">
            <img className="img-slider" src="images/newcode01.png" />
          </div>
          <div className="img-slider-container">
            <img className="img-slider" src="images/newcode02.png" />
          </div>
          <div className="img-slider-container">
            <img className="img-slider" src="images/newcode03.png" />
          </div>
        </Slider>
      </div>
    );
  }
}
