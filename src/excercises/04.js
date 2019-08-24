import React from 'react';
import CalendarGrid from '../components/CalendarGrid';
// 🔥 import { daysInMonth, firstDayAtMonth, getMonthNames, getNextDate, getPrevDate } from '../components/calendar-helpers';

const useCalendar = ({ from, to, date }) => {
  // 🐢 Implements reusable logic for calendars
  // 🔥 use React.useState() to hanlde calendar state
  const calendar = {};

  // 🐢 As a Class component you can add a life cycle method
  // to handle when the props or state change their values
  // 🔥 use React.useEffect to handle this changes
  const nextYear = () => {};

  const prevYear = () => {};

  const nextMonth = () => {};

  const prevMonth = () => {};

  return {
    calendar,
    nextYear,
    prevYear,
    nextMonth,
    prevMonth
  };
};

export default function App () {
  // 🐢Implements useCalendar hook to use the calendar logic
  // 🔥 const { calendar, nextMonth, prevMonth } = useCalendar(initState);
  return (
    <div>
      <div>
        <button>prev</button>
        <button>next</button>
        <span>Mes, Anio</span>
      </div>
      <CalendarGrid
        // days={}
        // firstDayOfWeek={}
      />
    </div>
  );
}
