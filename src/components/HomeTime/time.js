// * Plugins
import dayjs from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import updateLocale from 'dayjs/plugin/updateLocale';
import 'dayjs/locale/en';
import weekday from 'dayjs/plugin/weekday';

// * Dayjs calculations

dayjs.extend(dayOfYear);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});
dayjs.locale('en');
dayjs.extend(weekday);

export function timeCalc(dayjsObj) {
  if (!dayjsObj) {
    return {};
  }
  // Year Calculation
  const theYear = dayjsObj.format('YYYY');
  const currentDayOfYear = dayjsObj.dayOfYear();
  const lastDayOfYear = dayjsObj.endOf('year');
  const firstDayOfYear = dayjsObj.startOf('year');
  const howManyDaysThisYear = lastDayOfYear.diff(firstDayOfYear, 'day') + 1;
  const daysRemainingThisYear = howManyDaysThisYear - currentDayOfYear;
  const yearPercentComplete = (
    (currentDayOfYear / howManyDaysThisYear) *
    100
  ).toFixed(2);

  // Month Calculation
  const monthName = dayjsObj.format('MMMM');
  const firstDayOfMonth = dayjsObj.startOf('month');
  const lastDayOfMonth = dayjsObj.endOf('month');
  const howManyDaysThisMonth = lastDayOfMonth.diff(firstDayOfMonth, 'day') + 1;
  const currentDayOfMonth = parseInt(dayjsObj.format('D'), 10);
  const monthPercentComplete = (
    (currentDayOfMonth / howManyDaysThisMonth) *
    100
  ).toFixed(2);
  const daysRemainingThisMonth = howManyDaysThisMonth - currentDayOfMonth;
  // Week Calculation
  const currentDayNumberOfWeek = dayjsObj.weekday() + 1;
  const currentDayOfWeek = dayjsObj.format('dddd');
  const hoursInAWeek = 7 * 24;
  const startOfWeek = dayjsObj.startOf('week');
  const currentHourOfWeek = dayjsObj.diff(startOfWeek, 'hour');
  const hoursRemainingThisWeek = hoursInAWeek - currentHourOfWeek;
  const weekPercentComplete = (
    (currentHourOfWeek / hoursInAWeek) *
    100
  ).toFixed(2);
  // Day Calculation
  const currentTime = dayjsObj.format('hh:mm:ss A');
  const howManySecondsInADay = 24 * 60 * 60; // 86,400
  const startOfToday = dayjsObj.startOf('day');
  const secondsElapsedToday = dayjsObj.diff(startOfToday, 'seconds');
  const secondsRemainingToday = howManySecondsInADay - secondsElapsedToday;
  const dayPercentComplete = (
    (secondsElapsedToday / howManySecondsInADay) *
    100
  ).toFixed(2);

  return {
    theYear,
    currentDayOfYear,
    lastDayOfYear,
    firstDayOfYear,
    howManyDaysThisYear,
    daysRemainingThisYear,
    yearPercentComplete,
    monthName,
    firstDayOfMonth,
    lastDayOfMonth,
    howManyDaysThisMonth,
    currentDayOfMonth,
    daysRemainingThisMonth,
    monthPercentComplete,
    currentDayNumberOfWeek,
    currentDayOfWeek,
    hoursInAWeek,
    startOfWeek,
    currentHourOfWeek,
    hoursRemainingThisWeek,
    weekPercentComplete,
    currentTime,
    howManySecondsInADay,
    startOfToday,
    secondsElapsedToday,
    secondsRemainingToday,
    dayPercentComplete,
  };
}

// * Text Content to Export
export const timeInfo = {
  id: 'HomeTimeSection',
  theYear: `The year is `,
  yearInfo: `Today is the day`,
};
