let Hour_Element = document.getElementById("hour");
let Minute_Element = document.getElementById("minute");
let Second_Element = document.getElementById("second");

function setTime() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();

  Hour_Element.innerText = hour;
  Second_Element.innerText = second;
  Minute_Element.innerText = minute;
}

setInterval(setTime , 1000);
