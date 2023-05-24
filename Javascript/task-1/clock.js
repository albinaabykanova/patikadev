function askName() {
  let name = prompt("Enter your name: ");
  document.querySelector("#myName").innerHTML = name;
}

function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let weekDay = time.getDay();

  let arrWeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDayName = arrWeekDays[weekDay];

  h = hour < 10 ? "0" + hour : hour;
  m = minute < 10 ? "0" + minute : minute;
  s = second < 10 ? "0" + second : second;

  let timeString = h + ":" + m + ":" + s + " " + weekDayName;
  document.querySelector("#myClock").innerHTML = timeString;
  document.getElementById("myClock").textContent = time;
  setTimeout(showTime, 1000);
}

askName();
showTime();
