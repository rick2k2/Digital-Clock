function getAllInfo() {
  // day array
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["JAN", "FEB", "MAR","APR","MAY", "JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

  // creates a new Date object with the current date and time.
  const date = new Date(); 
  // get day from Date object
  const day = date.getDay();
  // get day's string from Date object index no and weekday array
  const originalDay = weekdays[day];
  // get date string from date object
  const options = { day: 'numeric' };
  const originalDate = date.toLocaleDateString(undefined, options);
  // get hour from date object
  let hour = date.getHours();
  // get minute from date object
  let minute = date.getMinutes();
  // get second from date object
  const sec = date.getSeconds();
  // get am/pm value from date object
  const ampm = hour >= 12 ? 'PM' : 'AM';
  // this is used to convert 24 hrs format to 12 hrs
  // i.e if current hour is 17 == 5 so (17%12 == 5) in this way
  hour = hour % 12 || 12;
  // add a 0 before hour when hour value is <10
  const hour1 = hour < 10 ? `0${hour}` : hour;
  // add a 0 before minute when minute value is <10
  minute = minute < 10 ? `0${minute}` : minute;
  // this is actual time
  const time = `${hour1}:${minute}`;
  // get month from date object
  const month = date.getMonth();
  // get month's string from month array
  const monthString = months[month];
  // get year from date object
  const year = date.getFullYear();
  // this is the full date
  const fullDate = `${originalDate}-${monthString}-${year}`;

  // set values in HTML elements
  const setDay = document.getElementById("set_day");
  setDay.innerHTML = originalDay;

  const setTime = document.getElementById("set_time");
  setTime.innerHTML = time;

  const setFullDate = document.getElementById("set_date");
  setFullDate.innerHTML = fullDate;

  const setSecond = document.getElementById("set_sec");
  setSecond.innerHTML = sec < 10 ? `0${sec}` : sec;

  const setAmPm = document.getElementById("set_am_pm");
  setAmPm.innerHTML = ampm;

  // update seconds, minutes, and hours elements every second
  setInterval(() => {
    const newDate = new Date();
    const newMinute = newDate.getMinutes();
    const newHour = newDate.getHours();
    const newSec = newDate.getSeconds();

    setSecond.innerHTML = newSec < 10 ? `0${newSec}s` : `${newSec}s`;

    if (newMinute !== minute) {
      minute = newMinute;
      setTime.innerHTML = `${newHour}:${newMinute < 10 ? `0${newMinute}` : newMinute}`;
    }

    if (newHour !== hour) {
      hour = newHour;
      setTime.innerHTML = `${hour % 12 || 12}:${minute < 10 ? `0${minute}` : minute}`;
      setAmPm.innerHTML = hour >= 12 ? 'PM' : 'AM';
    }
  }, 1000);
}

// Execute the function when the DOM is ready
document.addEventListener('DOMContentLoaded', getAllInfo);
