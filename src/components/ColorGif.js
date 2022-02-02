import React from 'react';
import colorBarGif from '../images/colort.gif';

const ColorGif = () => {
  return (
    <div>
      <img
        style={{ width: '100%' }}
        src={colorBarGif}
        alt="a bar of colors. It is not important"
      />
    </div>
  );
};

export default ColorGif;
