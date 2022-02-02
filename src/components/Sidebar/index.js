import React from 'react';
import { useLocation } from 'react-router-dom';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
} from './SidebarElements';
import DynamicMenu from '../DynamicMenu';

const Sidebar = ({ isNavOpen, toggle }) => {
  const currentURL = useLocation();
  return (
    <SidebarContainer isNavOpen={isNavOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <DynamicMenu
          toggle={toggle}
          urlPathname={currentURL.pathname}
          mobileView={true}
        ></DynamicMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
