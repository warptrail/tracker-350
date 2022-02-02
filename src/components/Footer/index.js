import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Some Empty Links</FooterLinkTitle>
                <FooterLink to="/">These Are Links</FooterLink>
                <FooterLink to="/">They Do Not Work</FooterLink>
                <FooterLink to="/">They Go Nowhere</FooterLink>
                <FooterLink to="/">Watch The Time</FooterLink>
                <FooterLink to="/">Filler Content</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Colors</FooterLinkTitle>
                <FooterLink to="/">Red</FooterLink>
                <FooterLink to="/">Blue</FooterLink>
                <FooterLink to="/">Yellow</FooterLink>
                <FooterLink to="/">Green</FooterLink>
                <FooterLink to="/">Purple</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Rivers</FooterLinkTitle>
                <FooterLink to="/">Amazon</FooterLink>
                <FooterLink to="/">Nile</FooterLink>
                <FooterLink to="/">Mississippi</FooterLink>
                <FooterLink to="/">Colorado</FooterLink>
                <FooterLink to="/">Ganges</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Food</FooterLinkTitle>
                <FooterLink to="/">Pizza</FooterLink>
                <FooterLink to="/">Burgers</FooterLink>
                <FooterLink to="/">Tacos</FooterLink>
                <FooterLink to="/">Pasta</FooterLink>
                <FooterLink to="/">Stew</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Warptrail
              </SocialLogo>
              <WebsiteRights>
                warptrail © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
