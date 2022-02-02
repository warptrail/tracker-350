import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

// ^ Navbar components for desktop

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  /* margin-right: -27px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  background-color: ${({ darkBackground }) =>
    darkBackground ? '#010101' : 'transparent'};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

// ^ Menu Link variations

const linkDefaultDesktop = `
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
`;

export const DesktopLinkScroll = styled(LinkScroll)`
  ${linkDefaultDesktop}
  color: #fff;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const DesktopLinkRouter = styled(LinkRouter)`
  ${linkDefaultDesktop}
  color: #31ec68;
  font-weight: 500;

  &:hover {
    border-bottom: 2px solid #fff;
  }
`;

export const NavLinkRouteToHome = styled(LinkRouter)`
  ${linkDefaultDesktop}
  color: #fff;
  font-size: 80%;
  transition: border-bottom 0.2s ease-in;

  &:hover {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinkRouter = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 02s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 02s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

// ^ Sidebar Components for Mobile

const linkDefaultMobile = `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  cursor: pointer;
  padding: 23px 0;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}

@media screen and (max-width: 480px) {
  padding: 18px 0;
}
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarLinkScroll = styled(LinkScroll)`
  color: #fff;
  ${linkDefaultMobile}
`;

export const SidebarLinkRouter = styled(LinkRouter)`
  /* color: #31ed68; */
  color: ${({ whiteText }) => (whiteText ? '#fff' : '#31ed68')};
  ${linkDefaultMobile}
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 23px;

  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const SidebarRouteBtn = styled(LinkRouter)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
