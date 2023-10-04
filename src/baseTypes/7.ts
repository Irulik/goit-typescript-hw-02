/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DaysOfWeek): boolean {
  return day === DaysOfWeek.Saturday | day === DaysOfWeek.Sunday;
}

const day = DaysOfWeek.Thursday;
const isDayWeekend = isWeekend(day);
console.log(`Чи є четвер вихідним? ${isDayWeekend}`); //  false

const today = DaysOfWeek.Saturday;
const isTodayWeekend = isWeekend(today);
console.log(`Сьогодні вихідний? ${isTodayWeekend}`); // true
