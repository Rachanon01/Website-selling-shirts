// เรียกใช้ class 
let hourHand = document.querySelector('.hour-hand') 
let minuteHand = document.querySelector('.minute-hand')
let secoondHand = document.querySelector('.second-hand')

// function คำนวณเวลา
// และปรับเข็มนาฬิกาให้ตรงกับเวลาปัจจุบัน
function setDate() {
  let now = new Date();

  let hours = now.getHours();
  let hoursDegrees = Math.round(((hours / 12) * 360) + 90);
  
  let minutes = now.getMinutes();
  let minutesDegrees = Math.round(((minutes / 60) * 360) + 90);
  
  let seconds = now.getSeconds();
  let secondsDegrees = Math.round(((seconds / 60) * 360) + 90);

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secoondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);