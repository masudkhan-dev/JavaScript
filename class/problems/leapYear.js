function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const Leap = leapYear(2026);
console.log(Leap);

// ==================================================

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true + " this is leap year";
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false + " this is not leap year";
  }
}

const isLeap = isLeapYear(2026);
console.log(isLeap);
