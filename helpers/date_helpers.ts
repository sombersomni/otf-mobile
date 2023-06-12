const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

interface DateFormats {
  day: string;
  month: string;
  dayOfMonth: number;
  hours: number;
  minutes: number;
  meridian: string;
}

export function parseISODateTime(isoDateTime: string): DateFormats {
  const date = new Date(isoDateTime);  
  const day = daysOfWeek[date.getDay()];
  const month = monthsOfYear[date.getMonth()];
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const formattedHours = hours % 12 || 12;
  
  return {
    day,
    month,
    dayOfMonth,
    minutes,
    meridian: ampm,
    hours: formattedHours
  }
}