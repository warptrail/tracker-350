import React from 'react';
import { BarGraph, GraphContainer } from '../GraphElements';
const Graph = ({ percent }) => {
  return (
    <GraphContainer>
      <BarGraph percent={percent}></BarGraph>
    </GraphContainer>
  );
};

export default Graph;
