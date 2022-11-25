"use strict";

function Clock(container) {
  this.hourHand = document.querySelector(`${container} > .hand.hour`);
  //   Have to make these stupid refernces, i am too lazy to learn the proper way
  let hourHandRef = this.hourHand;
  this.minuteHand = document.querySelector(`${container} > .minute.hand`);
  let minuteHandRef = this.minuteHand;
  this.secondHand = document.querySelector(`${container} > .second.hand`);
  let secondHandRef = this.secondHand;
  this.init = new Date();
  this.degreeHands = this.init.getSeconds() * 6;
  let degreeHandsRef = this.degreeHands;
  this.positionOfHands = function () {
    let date = new Date();
    //   Converts military time to 1-12
    const hours12 = (date) => date.getHours() % 12 || 12;

    hourHandRef.style.rotate = `${
      hours12(date) * 30 + date.getMinutes() * 0.5
    }deg`;
    minuteHandRef.style.rotate = `${
      date.getMinutes() * 6 + date.getSeconds() / 12
    }deg`;
    degreeHandsRef += 6;
    secondHandRef.style.rotate = `${degreeHandsRef}deg`;
  };
  this.positionOfHands();
  setInterval(this.positionOfHands, 1000);
}

new Clock("#top");
new Clock("#middle");
new Clock("#bottom");

// I did not implement a function to intialize every clock
