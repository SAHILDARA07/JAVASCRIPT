// DIGITAL CLOCK

const dt = document.getElementById("dt");
const time = document.getElementById("time");
const months = document.getElementById("months");


 

setInterval(() => {
  const date = new Date();

    time.textContent= date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    dt.textContent = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

}, 1000);

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => { 
  const date = new Date();
  months.textContent = monthNames[date.getMonth()];
}, 1000);

const amPm = ["AM", "PM"];

setInterval(() => {
  const date = new Date();
  const hours = date.getHours();
  const amPmText = hours >= 12 ? amPm[1] : amPm[0];
  time.textContent = (hours % 12 || 12) + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + amPmText;
}, 1000);