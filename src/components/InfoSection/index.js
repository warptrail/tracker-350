import React from 'react';
import { ButtonLink } from '../ButtonElement';
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  InfoBox,
  TimeInfo,
  BtnWrap,
  ImgWrap,
  Img,
} from './InfoElements';

dayjs.extend(dayOfYear);

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  description7,
  time1,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  // dayjs testing
  console.log(
    dayjs('2018-04-04T16:00:00.000Z').format('YYYY-MM-DD -- h:mm:ss A Z')
  );

  const lastDayOfYear = dayjs().month();
  console.log(lastDayOfYear);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Subtitle darkText={darkText}>{description4}</Subtitle>
                <Subtitle darkText={darkText}>{description5}</Subtitle>
                <Subtitle darkText={darkText}>{description6}</Subtitle>
                <Subtitle darkText={darkText}>{description7}</Subtitle>
                <BtnWrap>
                  <ButtonLink
                    href="https://youtu.be/couVqpuX9CU"
                    target="_blank"
                    rel="noopener noreferrer"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonLink>
                </BtnWrap>
                <InfoBox>
                  <TimeInfo>{time1}</TimeInfo>
                </InfoBox>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
