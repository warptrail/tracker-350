import React, { useState, useEffect } from 'react';
import Scroll from 'react-scroll';

import {
  HeroContainer,
  HeroBg,
  PhotoBg,
  BackgroundOverlay,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowUp,
  ArrowRight,
} from './HeroElements';

import { Button } from '../ButtonElement';

import backgroundImage from '../../images/pexels-trinity-kubassek-342520.jpg';

const scroll = Scroll.animateScroll;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onHover = () => {
    setHover(!hover);
  };

  console.log(windowDimensions);
  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
        <BackgroundOverlay />
        <PhotoBg src={backgroundImage} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Tracker 350</HeroH1>
        <HeroP>Life is a series of events</HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={() => scroll.scrollTo(windowDimensions.height - 70)}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Time {hover ? <ArrowUp /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

// Photo by Trinity Kubassek from Pexels
