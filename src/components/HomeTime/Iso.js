import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { numberWithCommas } from '../../util/numberWithCommas.js';
import { CopyToClipboardBtn } from '../CopyToClipboardBtn';

import { Label, IsoFormat, IsoDiv } from './HTElements';

dayjs.extend(utc);

const Iso = ({ clock }) => {
  const onCopyIsoTime = () => {
    navigator.clipboard.writeText(clock.iso);
  };

  const onCopyUnixTime = () => {
    navigator.clipboard.writeText(clock.now.unix());
  };

  return (
    <>
      <Label>Now in ISO8601</Label>
      <IsoDiv>
        <IsoFormat>{clock.iso}</IsoFormat>
        <CopyToClipboardBtn onClick={onCopyIsoTime}>copy</CopyToClipboardBtn>
      </IsoDiv>
      <Label>Seconds Elapsed since the Epoch:</Label>
      <IsoDiv>
        <IsoFormat>{numberWithCommas(dayjs(clock.now).unix())}</IsoFormat>
        <CopyToClipboardBtn onClick={onCopyUnixTime}>copy</CopyToClipboardBtn>
      </IsoDiv>
      <IsoFormat>
        The Epoch began on{' '}
        {dayjs.unix(0).utc().format('dddd, MMMM DD, YYYY - hh:mm:ss')} UTC
      </IsoFormat>
    </>
  );
};

export default Iso;
