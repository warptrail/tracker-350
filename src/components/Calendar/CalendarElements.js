import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-width: 320px; */
  justify-content: center;
  /* margin-top: 20px; */
  background: #020507;
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 30px);
  /* grid-auto-rows: 50px; */
  background: #061e29;
  border-radius: 10px;

  @media screen and (min-width: 325px) {
    grid-template-columns: repeat(7, 50px);
  }
`;

export const CalHeader = styled.h2`
  grid-column: 2 / span 5;
  text-align: center;
  padding: 10px 0;
  border-radius: 4px;
  font-size: clamp(1.125rem, 0.4583rem + 3.3333vw, 1.5rem);
`;

export const CalDisplayDate = styled.h3`
  font-size: clamp(1.5rem, 1.0556rem + 2.2222vw, 1.75rem);
  padding: 10px 20px;
  color: #cacfbf;
`;

export const CalButton = styled.button`
  background: transparent;
  color: #af37be;
  cursor: pointer;

  &:hover {
    color: #0bba15;
  }
`;

export const DayOfWeekLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  font-size: 8px;
  height: 20px;
  text-align: center;
  padding: auto 0;
  color: white;
`;

export const Day = styled.div`
  padding: 5px;
  border: 1px solid grey;
  grid-column-start: ${({ startDay }) => (startDay ? startDay : '')};
  height: 50px;
  color: ${({ currentDay }) => (currentDay ? 'yellow' : '#cacfbf')};
  background-color: ${({ isPast, currentDay }) =>
    isPast && !currentDay ? '#390206' : '#072801'};
`;
