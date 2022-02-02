import React, { useState } from 'react';

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeekday from 'dayjs/plugin/isoWeek';
import updateLocale from 'dayjs/plugin/updateLocale';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import {
  CalendarWrapper,
  CalendarContainer,
  CalButton,
  CalHeader,
  Day,
  CalDisplayDate,
  DayOfWeekLabel,
} from './CalendarElements';

import 'dayjs/locale/en';
import Clock from '../HomeTime/Clock';

dayjs.extend(updateLocale);
dayjs.extend(weekday);
dayjs.extend(isoWeekday);
dayjs.extend(localizedFormat);

dayjs.updateLocale('en', {
  weekStart: 1,
});
dayjs.locale('en');

function Calendar({ clock }) {
  // ^ Set the current moment
  const [dateObject, setDateObject] = useState(dayjs().locale('en'));
  const [currentDate, setCurrentDate] = useState(dayjs().locale('en'));

  // * Controls for selecting the month

  // * month navigation
  const nextMonth = () => {
    setDateObject(dateObject.add(1, 'month'));
  };

  const prevMonth = () => {
    setDateObject(dateObject.subtract(1, 'month'));
  };

  // * Highlight the current day - Number var
  const currentDay = () => {
    if (dateObject.format('MYYYY') === dayjs().format('MYYYY')) {
      return Number(dateObject.format('D'));
    }
  };

  // * Make an array of labels for the days of the week

  const daysOfWeek = () => {
    const daysOfTheWeek = [];

    for (let i = 0; i <= 6; i++) {
      daysOfTheWeek.push(dayjs().weekday(i).format('dddd'));
    }

    return daysOfTheWeek.map((day) => (
      <DayOfWeekLabel key={day}>{day}</DayOfWeekLabel>
    ));
  };

  // * Make an array for all the days of the week

  const daysOfMonth = () => {
    const daysOfTheMonth = [];

    // a number 1 through 7 coordinating to what day the first day of the month lands on
    const firstDayOfMonth = dayjs(dateObject).startOf('month').day();

    for (let d = 1; d <= dateObject.daysInMonth(); d++) {
      daysOfTheMonth.push(d);
    }

    const dateCells = [];

    daysOfTheMonth.forEach((day) => {
      const idString = `${dateObject.format('YYYY')}-${dateObject.format(
        'MM'
      )}-${day}`;
      const cellObject = dayjs(idString);

      const isPast = dayjs(cellObject).isBefore(dayjs());

      console.log(isPast);

      dateCells.push(
        <Day
          startDay={day === 1 ? firstDayOfMonth : false}
          currentDay={currentDay() === day ? true : false}
          isPast={isPast}
          key={day}
          id={idString}
        >
          {day}
        </Day>
      );
    });

    return dateCells;
  };

  // * Generate the calendar content

  const printThisMonthHeader = () => dateObject.format('MMMM');
  const printThisYearHeader = () => dateObject.format('YYYY');
  const printThisMonthAndYearHeader = () =>
    `${printThisMonthHeader()} ${printThisYearHeader()}`;

  // ^ Get the first day of the month from dayjs
  return (
    <CalendarWrapper id="calendar">
      <CalDisplayDate>
        Today is {currentDate.format('dddd / LL')}
      </CalDisplayDate>
      <Clock clock={clock} />
      <CalendarContainer>
        <CalButton direction="prev" onClick={prevMonth}>
          Prev
        </CalButton>
        <CalHeader>{printThisMonthAndYearHeader()}</CalHeader>
        <CalButton direction="next" onClick={nextMonth}>
          Next
        </CalButton>
        {daysOfWeek()}
        {daysOfMonth()}
      </CalendarContainer>
    </CalendarWrapper>
  );
}

export default Calendar;
