let interval;
const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * 16);
    colorCode += hex[rand];
  }
  return colorCode;
};
const bgChange = function () {
  document.querySelector("body").style.background =
    `linear-gradient(45deg, ${randomColor()}, ${randomColor()})`;
};
const callInInterval = function () {
  if (!interval) interval = setInterval(bgChange, 2000);
};

const stopBgChange = function () {
  clearInterval(interval);
  interval = null;
};
const start = document.getElementById("start");
const stop = document.getElementById("stop");
start.addEventListener("click", callInInterval);
stop.addEventListener("click", stopBgChange);
