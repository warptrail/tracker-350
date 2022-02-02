import React from 'react';
import { timeCalc } from './time';
import { numberWithCommas } from '../../util/numberWithCommas.js';
import Graph from './Graph';
import {
  Cbox,
  Gbox,
  InfoSpan1,
  InfoSpan2,
  InfoSpan3,
  InfoSpan4,
  P1,
  P2,
  P3,
  TimeSpan,
} from './ContentElements';

const Content = ({ dayjsObj, level }) => {
  const timeInfo = timeCalc(dayjsObj);

  const YearContent = (
    <Cbox>
      <P2>
        There are <InfoSpan2>{timeInfo.howManyDaysThisYear}</InfoSpan2> days
        this year
      </P2>
      <P2>
        Today is day <InfoSpan1>{timeInfo.currentDayOfYear}</InfoSpan1> out of{' '}
        <InfoSpan2>{timeInfo.howManyDaysThisYear}</InfoSpan2>
      </P2>
      <P2>
        There {timeInfo.daysRemainingThisYear > 1 ? 'are' : 'is'}{' '}
        <InfoSpan2>{timeInfo.daysRemainingThisYear} </InfoSpan2>
        {timeInfo.daysRemainingThisYear === 1 ? 'day' : 'days'} remaining this
        year
      </P2>
      <Gbox>
        <P3>
          The year is <InfoSpan3>{timeInfo.yearPercentComplete} %</InfoSpan3>{' '}
          complete
        </P3>
        <Graph percent={timeInfo.yearPercentComplete} />
      </Gbox>
    </Cbox>
  );
  const MonthContent = (
    <Cbox>
      <P2>
        <InfoSpan2>{timeInfo.monthName}</InfoSpan2> has{' '}
        <InfoSpan2>{timeInfo.howManyDaysThisMonth}</InfoSpan2> days
      </P2>
      <P2>
        Today is day <InfoSpan1>{timeInfo.currentDayOfMonth} </InfoSpan1>
        out of <InfoSpan2>{timeInfo.howManyDaysThisMonth}</InfoSpan2>
      </P2>
      <P2>
        There {timeInfo.daysRemainingThisMonth > 1 ? 'are' : 'is'}{' '}
        <InfoSpan2>{timeInfo.daysRemainingThisMonth} </InfoSpan2>
        {timeInfo.daysRemainingThisMonth === 1 ? 'day' : 'days'} remaining this
        month
      </P2>
      <Gbox>
        <P3>
          The month is <InfoSpan3>{timeInfo.monthPercentComplete} %</InfoSpan3>{' '}
          complete
        </P3>
        <Graph percent={timeInfo.monthPercentComplete} />
      </Gbox>
    </Cbox>
  );
  const WeekContent = (
    <Cbox>
      <P2>
        Today is <InfoSpan2 bold={true}>{timeInfo.currentDayOfWeek}</InfoSpan2>
      </P2>
      <P2>
        There are <InfoSpan2>{timeInfo.hoursInAWeek}</InfoSpan2> hours in a week
      </P2>
      <P2>
        We are on hour <InfoSpan1>{timeInfo.currentHourOfWeek}</InfoSpan1> out
        of <InfoSpan2>{timeInfo.hoursInAWeek}</InfoSpan2>
      </P2>
      <P2>
        <InfoSpan1>{timeInfo.hoursRemainingThisWeek} </InfoSpan1>{' '}
        {timeInfo.hoursRemainingThisWeek === 1 ? 'hour' : 'hours'} remain this
        week
      </P2>
      <Gbox>
        <P3>
          The week is <InfoSpan3>{timeInfo.weekPercentComplete} %</InfoSpan3>{' '}
          complete
        </P3>
        <Graph percent={timeInfo.weekPercentComplete} />
      </Gbox>
    </Cbox>
  );
  const DayContent = (
    <Cbox>
      <P2>
        The time is <TimeSpan>{timeInfo.currentTime}</TimeSpan>
      </P2>
      <P2>
        There are{' '}
        <InfoSpan2>{numberWithCommas(timeInfo.howManySecondsInADay)}</InfoSpan2>{' '}
        seconds in a day
      </P2>
      <P2>
        We are currently experiencing second #{' '}
        <InfoSpan4 color="green">
          {numberWithCommas(timeInfo.secondsElapsedToday)}{' '}
        </InfoSpan4>
        of{' '}
        <InfoSpan4>
          {numberWithCommas(timeInfo.howManySecondsInADay)}{' '}
        </InfoSpan4>
      </P2>
      <P2>
        There {timeInfo.secondsRemainingToday === 1 ? 'is' : 'are'}{' '}
        <InfoSpan4>
          {numberWithCommas(timeInfo.secondsRemainingToday)}
        </InfoSpan4>{' '}
        {timeInfo.secondsRemainingToday > 1 ? 'seconds' : 'second'} remaining
        today
      </P2>

      <Gbox>
        <P3>
          The day is <InfoSpan3>{timeInfo.dayPercentComplete} %</InfoSpan3>{' '}
          complete
        </P3>
        <Graph percent={timeInfo.dayPercentComplete} />
      </Gbox>
    </Cbox>
  );

  const selector = () => {
    let contentVersion = <div></div>;

    if (!level || !['year', 'month', 'week', 'day'].includes(level)) {
      contentVersion = <div>no content</div>;
    }

    if (level === 'year') {
      contentVersion = YearContent;
    }

    if (level === 'month') {
      contentVersion = MonthContent;
    }

    if (level === 'week') {
      contentVersion = WeekContent;
    }

    if (level === 'day') {
      contentVersion = DayContent;
    }
    return contentVersion;
  };
  return <>{selector()}</>;
};

export default Content;
