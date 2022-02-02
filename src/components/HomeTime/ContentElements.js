import styled from 'styled-components';

export const Cbox = styled.div`
  color: #cacfbf;
`;

export const Gbox = styled.div`
  background: #afa6bc;
  padding: 3px 8px;
`;

export const P1 = styled.p`
  font-size: clamp(1.125rem, 0.0139rem + 5.5556vw, 1.75rem);
  margin-bottom: 20px;
`;
export const P2 = styled.p`
  font-size: clamp(1rem, -0.1111rem + 5.5556vw, 1.625rem);
  /* padding-left: 20px; */
  margin-bottom: 8px;
`;

export const P3 = styled.p`
  font-size: clamp(0.9375rem, -0.1736rem + 5.5556vw, 1.5625rem);
  color: black;
  padding: 2px;

  margin-top: 10px;
`;

export const InfoSpan1 = styled.span`
  color: #42d426;
`;

export const InfoSpan2 = styled.span`
  color: #a914d9;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

export const InfoSpan3 = styled.span`
  font-weight: bold;
  color: #390206;
`;

export const InfoSpan4 = styled.span`
  font-family: 'Roboto Mono', monospace;
  color: ${({ color }) => (color === 'green' ? '#42d426;' : '#a914d9')};
  font-weight: bold;
`;

export const TimeSpan = styled.span`
  font-family: 'Roboto Mono', monospace;
  color: #42d426;
`;
