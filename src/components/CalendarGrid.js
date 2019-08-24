import React from 'react';
import classnames from 'classnames/bind';

const cx = classnames.bind({
  rule1: 'calendar-grid__day',
  rule2: 'active',
  rule3: 'empty',
  rule5: 'past-day'
});

export default function CalendarGrid({
  days,
  firstDayOfWeek,
}) {
  const daysOfMonth = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  let printDay = 1;
  let dayOfWeek = 0;
  let boot = false;
  const mapDays = [];
  while (printDay <= days) {
    if (boot) {
      mapDays.push(
        <div
          className={cx({
            rule1: true,
          })}
          data-value={printDay}
          data-testid={`day-${printDay}`}
        >
          <span className="calendar-grid__day--print">
            {printDay++}
          </span>
        </div>
      );
    } else if (!boot && firstDayOfWeek === dayOfWeek) {
      boot = true;
      mapDays.push(
        <span
          key={`day-${printDay}`}
          className={cx({
            rule1: true,
          })}
          data-value={printDay}
        >
          {printDay++}
        </span>
      );
    } else {
      dayOfWeek++;
      mapDays.push(<span className={cx({ rule1: true, rule3: true })} />);
    }
  }

  return (
    <div className="calendar-grid">
      <div className="calendar-grid__days-of-month">
        {daysOfMonth.map((day, i) => <span key={`day-${day}-${i}`}>{day}</span>)}
      </div>
      <div className="grid">
        {mapDays}
      </div>
    </div>);
}