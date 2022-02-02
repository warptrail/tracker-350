import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

import { mainMenuData, aboutMenuData } from '../../Data';

import {
  NavMenu,
  NavItem,
  DesktopLinkScroll,
  DesktopLinkRouter,
  NavBtn,
  NavBtnLinkRouter,
  NavLinkRouteToHome,
  SidebarMenu,
  SidebarLinkScroll,
  SidebarLinkRouter,
  SideBtnWrap,
  SidebarRouteBtn,
} from './DynamicMenuElements';

const DynamicMenu = ({ urlPathname, mobileView, toggle }) => {
  const [pathnameState, setPathnameState] = useState(urlPathname);
  console.log(aboutMenuData);
  useEffect(() => {
    setPathnameState(urlPathname);
  }, [urlPathname]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  // ^ Desktop Menu layout components

  const renderDesktopHomePageMenu = () => {
    const MainMenuComponents = mainMenuData.map((item) => {
      let MenuItemComponent;
      switch (item.linkStyle) {
        case 'home-scroll':
          MenuItemComponent = (
            <NavItem key={`key-${item.id}`}>
              <DesktopLinkScroll
                to={item.toScroll}
                smooth={true}
                duration={500}
                activeClass="active"
                spy={pathnameState === '/' ? true : false}
                exact="true"
                offset={-80}
              >
                {item.name}
              </DesktopLinkScroll>
            </NavItem>
          );
          break;
        case 'green-router':
          MenuItemComponent = (
            <NavItem key={`key-${item.id}`}>
              <DesktopLinkRouter onClick={toggleHome} to={item.toRoute}>
                {item.name}
              </DesktopLinkRouter>
            </NavItem>
          );
          break;
        case 'btn-green-router':
          MenuItemComponent = (
            <NavBtn key={`key-${item.id}`}>
              <NavBtnLinkRouter onClick={toggleHome} to={item.toRoute}>
                {item.name}
              </NavBtnLinkRouter>
            </NavBtn>
          );
          break;
        default:
          MenuItemComponent = <NavItem>Broken Link</NavItem>;
      }
      return MenuItemComponent;
    });
    return <NavMenu>{MainMenuComponents}</NavMenu>;
  };

  const renderDesktopLoginSignupPageMenu = (authType) => {
    // * Remove the authType option to rearrange the menu data
    const filterMenu = mainMenuData.filter((item) => item.toRoute !== authType);

    // * Move the last item of the menu to the first item
    const poppedMenuItem = filterMenu.pop();
    filterMenu.unshift(poppedMenuItem);

    const MainMenuComponents = filterMenu.map((item) => {
      let menuItemComponent;
      if (item.id === 'login' || item.id === 'signup') {
        menuItemComponent = (
          <NavItem key={`key-${item.id}`} darkBackground={true}>
            <DesktopLinkRouter to={item.toRoute}>{item.name}</DesktopLinkRouter>
          </NavItem>
        );
      } else {
        menuItemComponent = (
          <NavItem key={`key-${item.id}`}>
            <NavLinkRouteToHome to={item.toRoute}>
              {item.name}
            </NavLinkRouteToHome>
          </NavItem>
        );
      }
      return menuItemComponent;
    }); // end map
    return <NavMenu>{MainMenuComponents}</NavMenu>;
  };

  // ^ Mobile Menu layout components

  const renderMobileHomePageMenu = () => {
    const MainMenuComponents = mainMenuData.map((item) => {
      let MenuItemComponent;

      switch (item.linkStyle) {
        case 'home-scroll':
          MenuItemComponent = (
            <SidebarLinkScroll
              key={`key-${item.id}`}
              to={item.toScroll}
              onClick={toggle}
              exact="true"
              offset={-80}
            >
              {item.name}
            </SidebarLinkScroll>
          );
          break;
        case 'green-router':
          MenuItemComponent = (
            <SidebarLinkRouter
              key={`key-${item.id}`}
              to={item.toRoute}
              onClick={toggle}
              whiteText={false}
            >
              {item.name}
            </SidebarLinkRouter>
          );
          break;
        case 'white-router':
          MenuItemComponent = (
            <SidebarLinkRouter
              key={`key-${item.id}`}
              to={item.toRoute}
              onClick={toggle}
              whiteText={true}
            >
              {item.name}
            </SidebarLinkRouter>
          );
          break;
        case 'btn-green-router':
          MenuItemComponent = (
            <SideBtnWrap key={`key-${item.id}`}>
              <SidebarRouteBtn to={item.toRoute}>{item.name}</SidebarRouteBtn>
            </SideBtnWrap>
          );
          break;
        default:
          MenuItemComponent = '';
          break;
      }
      return MenuItemComponent;
    });
    return <SidebarMenu>{MainMenuComponents}</SidebarMenu>;
  };

  const renderAboutMenuMobile = () => {
    const AboutMenuComponents = aboutMenuData.map((item) => {
      let MenuItemComponent;

      switch (item.linkStyle) {
        case 'home-scroll':
          MenuItemComponent = (
            <SidebarLinkScroll
              key={`key-${item.id}`}
              to={item.toScroll}
              onClick={toggle}
              exact="true"
              offset={-80}
            >
              {item.name}
            </SidebarLinkScroll>
          );
          break;
        case 'green-router':
          MenuItemComponent = (
            <SidebarLinkRouter
              key={`key-${item.id}`}
              to={item.toRoute}
              onClick={toggle}
              whiteText={false}
            >
              {item.name}
            </SidebarLinkRouter>
          );
          break;
        case 'white-router':
          MenuItemComponent = (
            <SidebarLinkRouter
              key={`key-${item.id}`}
              to={item.toRoute}
              onClick={toggle}
              whiteText={true}
            >
              {item.name}
            </SidebarLinkRouter>
          );
          break;
        case 'btn-green-router':
          MenuItemComponent = (
            <SideBtnWrap key={`key-${item.id}`}>
              <SidebarRouteBtn to={item.toRoute}>{item.name}</SidebarRouteBtn>
            </SideBtnWrap>
          );
          break;
        default:
          MenuItemComponent = '';
          break;
      }
      return MenuItemComponent;
    });
    return <SidebarMenu>{AboutMenuComponents}</SidebarMenu>;
  };

  const renderMobileLoginSignupPageMenu = (authType) => {
    const filterMenu = mainMenuData.filter((item) => item.toRoute !== authType);

    const MainMenuComponents = filterMenu.map((item) => {
      let MenuItemComponent;
      if (item.id === 'login' || item.id === 'signup') {
        MenuItemComponent = (
          <SideBtnWrap key={`key-${item.id}`}>
            <SidebarRouteBtn to={item.toRoute}>{item.name}</SidebarRouteBtn>
          </SideBtnWrap>
        );
      } else {
        MenuItemComponent = (
          <SidebarLinkRouter
            to={item.toRoute}
            onClick={toggle}
            key={`key-${item.id}`}
          >
            {item.name}
          </SidebarLinkRouter>
        );
      }

      return MenuItemComponent;
    });

    return <SidebarMenu>{MainMenuComponents}</SidebarMenu>;
  };

  const createMobileMenu = () => {
    if (pathnameState === '/') {
      return renderMobileHomePageMenu();
    } else if (pathnameState === '/signup' || pathnameState === '/login') {
      return renderMobileLoginSignupPageMenu(pathnameState);
    } else if (pathnameState === '/about') {
      return renderAboutMenuMobile();
    }
  };

  const createDesktopMenu = () => {
    if (pathnameState === '/') {
      return renderDesktopHomePageMenu();
    } else if (pathnameState === '/signup' || pathnameState === '/login') {
      return renderDesktopLoginSignupPageMenu(pathnameState);
    }
  };

  console.log('the urls pathname is ' + pathnameState);

  // ^ Expansion section for About page

  const renderAboutMenuDesktop = () => {
    const AboutMenuComponents = aboutMenuData.map((item) => {
      let MenuItemComponent;
      MenuItemComponent = (
        <DesktopLinkRouter to={item.toRoute}>{item.name}</DesktopLinkRouter>
      );
      return MenuItemComponent;
    });
    return <NavMenu>{AboutMenuComponents}</NavMenu>;
  };

  let finalMenu;

  switch (pathnameState) {
    case '/':
    case '/login':
    case '/signup':
      finalMenu = <>{mobileView ? createMobileMenu() : createDesktopMenu()}</>;
      break;
    case '/about':
      finalMenu = <>{mobileView ? createMobileMenu() : createDesktopMenu()}</>;
      break;
    default:
      finalMenu = <NavMenu>No Menu Content</NavMenu>;
      break;
  }

  return finalMenu;
};

export default DynamicMenu;
