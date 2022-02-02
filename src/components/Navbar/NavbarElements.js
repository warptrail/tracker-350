import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

const colorChange = (scrollNav, isFormPage) => {
  if (!isFormPage) {
    if (scrollNav) {
      return '#000';
    } else {
      return 'transparent';
    }
  } else {
    return '#000';
  }
};

export const Nav = styled.nav`
  color: #fff;
  background: ${({ scrollNav, isFormPage }) => {
    return colorChange(scrollNav, isFormPage);
  }};
  height: 80px;
  margin-top: ${({ isHomePage }) => (isHomePage ? '-80px' : '0px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  position: sticky;
  top: 0rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: ${({ isHomePage }) => (isHomePage ? '0.8s all ease;' : 'none')};
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-right: 12px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavLogoText = styled.span`
  color: #fff;
  margin-right: 12px;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
