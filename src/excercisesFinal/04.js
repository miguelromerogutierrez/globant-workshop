import React from 'react';
import CalendarGrid from '../components/CalendarGrid';
import { daysInMonth, firstDayAtMonth, getMonthNames, getNextDate, getPrevDate } from '../components/calendar-helpers';

const useCalendar = ({ from, to, date }) => {
  const [calendar, setCalendar] = React.useState({
    year: date.getFullYear(),
    month: date.getMonth(),
    daysOfMonth: 0,
    firstDayMonth: 0
  });

  React.useEffect(() => {
    const currentDate = !date ? new Date() : new Date(date);
    const daysOfMonth = daysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const firstDayMonth = firstDayAtMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    setCalendar({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      daysOfMonth,
      firstDayMonth
    });
  }, [date]);

  const nextYear = React.useCallback(() => {
    const newYear = Math.min(calendar.year + 1, Number(to.year));
    setCalendar({
      year: newYear,
      month: calendar.month,
      daysOfMonth: daysInMonth(newYear, calendar.month),
      firstDayMonth: firstDayAtMonth(newYear, calendar.month)
    });
  }, [calendar.year]);

  const prevYear = () => {
    const newYear = Math.max(calendar.year - 1, Number(from.year));
    setCalendar({
      year: newYear,
      month: calendar.month,
      daysOfMonth: daysInMonth(newYear, calendar.month),
      firstDayMonth: firstDayAtMonth(newYear, calendar.month)
    });
  };

  const nextMonth = React.useCallback(() => {
    const {year, month} = getNextDate(calendar, to);
    setCalendar({
      year,
      month,
      daysOfMonth: daysInMonth(year, month),
      firstDayMonth: firstDayAtMonth(year, month)
    });
  }, [calendar.year, calendar.month]);

  const prevMonth = React.useCallback(() => {
    const { year, month } = getPrevDate(calendar, from);
    setCalendar({
      year,
      month,
      daysOfMonth: daysInMonth(year, month),
      firstDayMonth: firstDayAtMonth(year, month)
    });
  }, [calendar.year, calendar.month]);

  return {
    calendar,
    nextYear,
    prevYear,
    nextMonth,
    prevMonth
  };
};


const initState = {
  from: {
    year: 2018,
    month: 1
  },
  to: {
    year: 2021,
    month: 11
  },
  date: new Date()
};
export default function App () {
  const { calendar, nextMonth, prevMonth } = useCalendar(initState);
  return (
    <div>
      <div>
        <button onClick={() => prevMonth()}>prev</button>
        <button onClick={() => nextMonth()}>next</button>
        <span>{getMonthNames(calendar.month)} {calendar.year}</span>
      </div>
      <CalendarGrid
        days={calendar.daysOfMonth}
        firstDayOfWeek={calendar.firstDayMonth}
      />
    </div>
  );
}
