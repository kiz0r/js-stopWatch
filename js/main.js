'use strict';

const timeEl = document.querySelector('.time');
const [startBtn, resetBtn, stopBtn] = document.querySelectorAll('.btn');

let time = new Date(0);
const DELAY = 100;

let timerId = null;

startBtn.onclick = () => {
  if (timerId) {
    return;
  }
  timerId = setInterval(() => {
    time.setMilliseconds(time.getMilliseconds() + DELAY);
    updateTime(time);
  }, DELAY);
};

resetBtn.onclick = () => {
  time = new Date(0);
  updateTime(time);
};

stopBtn.onclick = () => {
  clearInterval(timerId);
  timerId = null;
};

function updateTime(time) {
  timeEl.textContent = `${formatMinutesAndSeconds(
    time.getMinutes()
  )}:${formatMinutesAndSeconds(time.getSeconds())}:${formatMiliseconds(
    time.getMilliseconds()
  )}`;
}

function formatMinutesAndSeconds(t) {
  return t < 10 ? `0${t}` : t;
}

function formatMiliseconds(ms) {
  return ms < 100 ? '000' : `${ms}`;
}
