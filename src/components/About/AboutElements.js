import styled from 'styled-components';

export const AboutContainer = styled.div`
  padding: 10px 35px;
`;

export const H1 = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
export const H2 = styled.h1`
  color: #fff;
  font-size: clamp(1.25rem, 0.8056rem + 2.2222vw, 1.5rem);
`;

export const P = styled.p`
  color: ${({ black }) => (black ? 'black' : '#fff')};
  margin: 12px 0;
  line-height: 1.55;
`;

export const L = styled.a`
  color: #268ad4;
  text-decoration: none;
`;

export const ConstructionBanner = styled.div`
  background: orange;
  padding: 10px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin: 20px 0;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  height: 80px;
`;
