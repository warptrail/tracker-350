import React from 'react';

import { ClockFrame, TimeText } from './HTElements';

const Clock = ({ clock }) => {
  console.log(clock);

  return (
    <ClockFrame>
      <TimeText>{clock.time}</TimeText>
    </ClockFrame>
  );
};

export default Clock;
