import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
// import ImageSlider from '../ImageSlider';
// import { SliderData } from '../ImageSliderData';
import SlikerCarousel from '../SlikCarousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  return (
    <>
      <SlikerCarousel />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
