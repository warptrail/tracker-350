import React, { useState, useEffect } from 'react';

// * Image Import
import IconBm from '../../images/undraw-img-1.svg';
import bird from '../../images/bird.png';
import umbra from '../../images/umbra.png';

// * Data Import
import { timeInfo } from './time';

// * Components
import Content from './Content';

// * Elements
import {
  Column1,
  Heading,
  TextWrapper,
  TopLine,
  Subtitle,
  TimeInfo,
  Container,
  Row,
  Wrapper,
  Column2,
  ImgWrap,
  Img,
  Poem,
  Intro,
} from './HTElements';
import Clock from './Clock.js';
import ColorGif from '../ColorGif';
import Iso from './Iso';
import { Button } from 'react-scroll';

const info = {
  topLine: `Time is a Liquid`,
  poem: `It is constantly flowing down stream. We can control where we want to be, but we cannot control when. We are always in the eternal now.`,
  heading: 'Metrics',
  img: IconBm,
  year: 1992,
};

const HomeTime = ({ clock }) => {
  return (
    <>
      <Container id="time-tracker">
        <Wrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>When are we?</TopLine>
                <Intro>
                  Track the flow of time by year, month, week and day
                </Intro>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={bird} />
              </ImgWrap>
            </Column2>
          </Row>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Year</TopLine>
                <Content dayjsObj={clock.now} level="year"></Content>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>Month</TopLine>
                <Content dayjsObj={clock.now} level="month"></Content>
              </TextWrapper>
            </Column2>
          </Row>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Week</TopLine>
                <Content dayjsObj={clock.now} level="week"></Content>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>Day</TopLine>
                <Content dayjsObj={clock.now} level="day"></Content>
              </TextWrapper>
            </Column2>
          </Row>
          <Row id="iso-unix">
            <Column1>
              <TextWrapper>
                <TopLine>{info.topLine}</TopLine>
                <Poem>{info.poem}</Poem>
                <ColorGif />
                <Iso clock={clock} />
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>{/* <Button>More Info</Button> */}</TextWrapper>
              <ImgWrap>
                <Img src={umbra} />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default HomeTime;
