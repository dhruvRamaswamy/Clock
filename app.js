"use strict";
let hourHand = document.querySelector(".hand.hour");
let minuteHand = document.querySelector(".minute.hand");
let secondHand = document.querySelector(".second.hand");
let init = new Date();
let degreeHands = init.getSeconds() * 6;
function positionOfHands() {
  let date = new Date();
  //   Converts military time to 1-12
  const hours12 = (date) => date.getHours() % 12 || 12;

  hourHand.style.rotate = `${hours12(date) * 30 + date.getMinutes() * 0.5}deg`;
  minuteHand.style.rotate = `${
    date.getMinutes() * 6 + date.getSeconds() / 12
  }deg`;
  degreeHands += 6;
  secondHand.style.rotate = `${degreeHands}deg`;
}

positionOfHands();
setInterval(positionOfHands, 1000);

// function Clock() {}

// new Clock("#analog-clock");
