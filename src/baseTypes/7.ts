/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const isWeekend = (day: DayOfWeek): boolean => {
  switch (day) {
    case DayOfWeek.Saturday:
    case DayOfWeek.Sunday:
      return true;

    default:
      return false;
  }
};

console.log(isWeekend(DayOfWeek.Sunday));
console.log(isWeekend(DayOfWeek.Monday));