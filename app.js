function updateClock() {
  let day = document.querySelector("#days");
  let hour = document.querySelector("#hours");
  let minute = document.querySelector("#minutes");
  let second = document.querySelector("#seconds");
  const currentTime = new Date();
  const date = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  day.textContent = date;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;
}
setInterval(updateClock, 1000);
updateClock();
