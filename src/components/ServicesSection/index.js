import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

import { servicesData } from '../../Data';
const headerText = 'Warped Services';

const ServicesSection = () => {
  const generateServiceCards = () => {
    return servicesData.map((service, i) => {
      const key = service.id + '-' + (i + 1);
      return (
        <ServicesCard id={key} key={key}>
          <ServicesIcon src={service.icon} />
          <ServicesH2>{service.serviceName}</ServicesH2>
          <ServicesP>{service.description}</ServicesP>
        </ServicesCard>
      );
    });
  };

  return (
    <ServicesContainer id="services">
      <ServicesH1>{headerText}</ServicesH1>
      <ServicesWrapper>{generateServiceCards()}</ServicesWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
