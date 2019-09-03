import React from 'react';
import CalendarGrid from '../components/CalendarGrid';
import { daysInMonth, firstDayAtMonth, getMonthNames, getNextDate, getPrevDate } from '../components/calendar-helpers';

function withCalendar(Component) {
  return class Calendar extends React.Component{
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
      const {to, from, date, ...compProps} = this.props;
      const props = {
        calendar: this.state,
        nextYear: this.nextYear,
        prevYear: this.prevYear,
        nextMonth: this.nextMonth,
        prevMonth: this.prevMonth,
        ...compProps
      };
      return <Component {...props} />
    }
  
  };
}

function App () {
  return (
    <div>
      <div>
        <button onClick={() => this.props.prevMonth()}>prev</button>
        <button onClick={() => this.props.nextMonth()}>next</button>
        <span>{getMonthNames(this.props.calendar.month)} {this.props.calendar.year}</span>
      </div>
      <CalendarGrid
        days={this.props.calendar.daysOfMonth}
        firstDayOfWeek={this.props.calendar.firstDayMonth}
      />
    </div>
  );
}

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

const AppWithCalendar = withCalendar(App);
export default AppWithCalendar;

// usage <AppWithCalendar {...initState} />
