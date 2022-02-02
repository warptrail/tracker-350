import React, { useState, useEffect } from 'react';

import {
  ClockFrame,
  Label,
  IsoFormat,
  IsoDiv,
  DateText,
  TimeText,
} from './HTElements';

const Clock = ({ clock }) => {
  console.log(clock);

  return (
    <ClockFrame>
      <TimeText>{clock.time}</TimeText>
    </ClockFrame>
  );
};

export default Clock;
