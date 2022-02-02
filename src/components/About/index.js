import React from 'react';
import {
  AboutContainer,
  Wrapper,
  ConstructionBanner,
  H1,
  H2,
  L,
  P,
} from './AboutElements';

const About = () => {
  return (
    <AboutContainer>
      <Wrapper></Wrapper>
      <H1>About this Project</H1>
      <ConstructionBanner>
        <P black={true}>This App is Under Construction</P>
      </ConstructionBanner>
      <H2>Overview</H2>
      <P>
        This project is designed to help you visualize the constant passage of
        time and track the activities you do along your timeline.
      </P>
      <P>
        The goal of this app is to become a full habit tracker app. The user
        will have a list of habits and record a timestamp of when that habit was
        committed. The app will visualized the habits on a calendar, display a
        daily dashboard and a statistics dashboard.
      </P>

      <P>
        Primary utility will be counters since the last time the habit was
        committed. Habits can be classified by their value judgment and goals
        can be set and broken by relapsing in a bad habit.
      </P>
      <P>
        All time tracking and calculating components are made using the
        <L
          href="https://day.js.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          dayjs JavaScript library.
        </L>
      </P>
      <H2>The Home Page</H2>
      <P>
        This is the universal dashboard for tracking time. Break down large
        units of time into their smaller components to track when you are along
        the year, month, week and day progress bars.{' '}
      </P>
      <P>
        There is a calendar highlighting the current day. There is a live clock
        ticking the seconds. At the bottom of the page the user can copy either
        the ISO8601 Format of the current moment or the seconds elapsed since
        the Epoch.{' '}
      </P>
    </AboutContainer>
  );
};

export default About;
