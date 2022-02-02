import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars, FaCoffee } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLogoText,
  MobileIcon,
} from './NavbarElements';

import DynamicMenu from '../DynamicMenu';

const Navbar = ({ toggle }) => {
  const currentURL = useLocation();

  const [scrollNav, setScrollNav] = useState(false);

  // when past a particular point, trigger the transparent nav background
  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav
        scrollNav={scrollNav}
        isHomePage={currentURL.pathname === '/'}
        isFormPage={currentURL.pathname === '/form-template'}
        isAboutPage={currentURL.pathname === '/about'}
      >
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavLogoText>Tracker 350</NavLogoText>
            <FaCoffee />
          </NavLogo>
          <DynamicMenu urlPathname={currentURL.pathname} mobileView={false} />
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
