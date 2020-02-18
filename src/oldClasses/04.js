import React from 'react';
import CalendarGrid from '../components/CalendarGrid';
import { daysInMonth, firstDayAtMonth, getMonthNames, getNextDate, getPrevDate } from '../components/calendar-helpers';

class Calendar extends React.Component{
  state = {
    year: this.props.date.getFullYear(),
    month: this.props.date.getMonth(),
    daysOfMonth: 0,
    firstDayMonth: 0
  };

  componentDidMount() {
    this.setup();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.date !== prevState.date) {
      this.setup();
    }
  }
  
  
  setup = () => {
    const currentDate = this.props.date;
    const daysOfMonth = daysInMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    const firstDayMonth = firstDayAtMonth(
      currentDate.getFullYear(),
      currentDate.getMonth()
    );
    this.setState({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      daysOfMonth,
      firstDayMonth
    });
  }

  nextYear = () => {
    const newYear = Math.min(this.state.year + 1, Number(this.props.to.year));
    this.setState({
      year: newYear,
      month: this.state.month,
      daysOfMonth: daysInMonth(newYear, this.state.month),
      firstDayMonth: firstDayAtMonth(newYear, this.state.month)
    });
  };

  prevYear = () => {
    const newYear = Math.max(this.state.year - 1, Number(this.props.from.year));
    this.setState({
      year: newYear,
      month: this.state.month,
      daysOfMonth: daysInMonth(newYear, this.state.month),
      firstDayMonth: firstDayAtMonth(newYear, this.state.month)
    });
  };

  nextMonth = () => {
    const {year, month} = getNextDate(this.state, this.props.to);
    this.setState({
      year,
      month,
      daysOfMonth: daysInMonth(year, month),
      firstDayMonth: firstDayAtMonth(year, month)
    });
  };

  prevMonth = () => {
    const { year, month } = getPrevDate(this.state, this.props.from);
    this.setState({
      year,
      month,
      daysOfMonth: daysInMonth(year, month),
      firstDayMonth: firstDayAtMonth(year, month)
    });
  };

  render() {
    return this.props.children({
      calendar: this.state,
      nextYear: this.nextYear,
      prevYear: this.prevYear,
      nextMonth: this.nextMonth,
      prevMonth: this.prevMonth
    });
  }
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
  return (
    <Calendar {...initState}>
      {({ calendar, prevMonth, nextMonth }) => (
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
      )}
    </Calendar>
  );
}
