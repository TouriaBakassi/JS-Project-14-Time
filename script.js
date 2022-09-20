let TIME = document.querySelector(".TIME");

function Time() {
  const date = new Date();
  let heur = date.getHours();
  let minute = date.getMinutes();
  let seconds = date.getSeconds();

  heur = heur < 10 ? `0${heur}` : heur;
  minute = minute < 10 ? `0${minute}` : minute;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let Time = `${heur}: ${minute}: ${seconds}`;
  TIME.textContent = Time;
}
setInterval(Time, 1000);
