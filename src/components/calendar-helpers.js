export const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const getMonthNames =  month => monthNames[month];

export function daysInMonth(year, month) {
  return 32 - new Date(year, month, 32).getDate();
}

export function firstDayAtMonth(year, month) {
  return (new Date(year, month, 1)).getDay();
}

export function getNextDate(calendar, to) {
  let month = to.year === calendar.year
    ? Math.min(calendar.month + 1, Number(to.month))
    : calendar.month + 1;
  let year = calendar.year;
  if (month === 12) {
    year = Math.min(year + 1, to.year);
    month = 0;
  }
  return {
    year, month
  }
}

export function getPrevDate(calendar, from) { 
  let month = from.year === calendar.year
    ? Math.max(calendar.month - 1, Number(from.month))
    : calendar.month - 1;
  let year = calendar.year;
  if (month === -1) {
    year = Math.max(year - 1, from.year);
    month = 11;
  }
  return { year, month };
}
