import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import InfoSection from '../components/InfoSection';

import { homeObjOne } from '../Data';
import HomeTime from '../components/HomeTime';

const Home = () => {
  const [clockState, setClockState] = useState({ now: '' });

  useEffect(() => {
    const interval = setInterval(() => {
      // * Pure JavaScript Way
      // const date = new Date();
      // setClockState(date.toLocaleTimeString());

      const now = dayjs();

      const nowObj = {
        now: now,
        iso: now.format(),
        date: now.format('dddd, MMMM DD, YYYY'),
        time: now.format('hh:mm:ss A'),
      };

      setClockState({ ...nowObj });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Code to scroll to specific id when changing route
  // https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
  const { hash } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [hash]); // do this on route change
  return (
    <>
      <HeroSection />
      <Calendar clock={clockState} />
      <HomeTime clock={clockState} />
      <Footer />
    </>
  );
};

export default Home;
