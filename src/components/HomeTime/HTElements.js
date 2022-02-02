import styled from 'styled-components';

//! Layout Elements

export const Container = styled.div`
  /* background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')}; */
  background: #010606;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 1;
  min-height: 80vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 1px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 10px;
`;

//! Text Elements

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 44px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Poem = styled.p`
  color: #cacfbf;
  margin-bottom: 25px;
  font-size: clamp(1.125rem, 0.4583rem + 3.3333vw, 1.5rem);
`;

export const Intro = styled.p`
  color: #268bd4;
  margin-bottom: 25px;
  font-size: clamp(1.5rem, 1.1667rem + 1.6667vw, 1.6875rem);
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 22px;
  font-size: 28px;
  line-height: 24px;
  color: #c626d4;
  font-weight: bold;
`;

export const TimeInfo = styled.p`
  max-width: 400px;
  margin-bottom: 15px;
  font-size: 16px;
  line-height: 21px;
  color: #42d426;
`;

export const Span = styled.span`
  color: ${({ color }) => color || '#fff'};
`;

//! Image

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  text-align: center; ;
`;

export const Img = styled.img`
  width: 50%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

// ! Clock Elements

export const Label = styled.p`
  font-size: clamp(1.5rem, 0.8333rem + 3.3333vw, 1.875rem);
  /* font-family: 'Anton', sans-serif; */
  font-family: 'M PLUS 2', sans-serif;
  color: #268ad4;
`;

export const IsoDiv = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid green;
  > * {
    &:last-child {
      margin-left: 10px;
    }
  }
`;

export const IsoFormat = styled.p`
  font-family: 'Roboto Mono', monospace;
  color: #42d426;
  font-size: 16px;
`;

export const DateText = styled.p`
  font-family: 'Skranji', cursive;
  font-size: 24px;
  color: #cacfbf;
  margin-top: 24px;
`;

export const ClockFrame = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
  padding: 10px;
  border: 1px solid yellowgreen;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const TimeText = styled.p`
  font-family: 'Skranji', cursive;
  font-size: clamp(1.75rem, 1.0833rem + 3.3333vw, 2.125rem);
  color: yellowgreen;
  font-family: 'Inconsolata', monospace;
`;
