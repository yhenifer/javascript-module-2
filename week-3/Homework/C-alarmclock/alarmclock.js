function setAlarm() {
  tiempo = document.querySelector('#alarmSet').value
 const timeRemaining = document.querySelector('#timeRemaining')
 timeRemaining.textContent = 'Time Remaining: 00:' +tiempo;

 const intervalId = setInterval(() => {
  tiempo = tiempo - 1;
   console.log(tiempo);
   timeRemaining.textContent = 'Time Remaining: 00:' +tiempo;
   if (tiempo === 0) {
     clearInterval(intervalId)
     playAlarm()
   }
 }, 1000)
}


// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
