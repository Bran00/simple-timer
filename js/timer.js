import sounds from "/js/sounds.js"

export default function Timer({
  minutesDisplayTimer,
  secondsDisplayTimer,
  minutesDisplayWatch,
  secondsDisplayWatch,
  milisecondsDisplayWatch,
  stop,
  main
}) 
{
let timerTimeout;
  
let minutesTimer = minutesDisplayTimer.textContent

function hold() {
  clearTimeout(timerTimeout)
}

function removeBoxShadow() {
  main.classList.remove("boxShadow")
}

function handleBoxShadow() {
  main.classList.toggle("boxShadow")
}

function updateDisplayWatch(minutes, seconds, miliseconds) {
 minutesDisplayWatch.textContent = String(minutes).padStart(2,"0")
  secondsDisplayWatch.textContent = String(seconds).padStart(2,"0")
  milisecondsDisplayWatch.textContent = String(miliseconds).padStart(3,"0")
}

function updateDisplayTimer(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutesTimer : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  
  minutesDisplayTimer.textContent = String(newMinutes).padStart(2,"0")
  secondsDisplayTimer.textContent = String(seconds).padStart(2,"0")
}

function updateMinutesTimer(newMinutes) {
  minutesTimer = newMinutes
}

function countdown() {
  timerTimeout = setTimeout(function() {
  let seconds = Number(secondsDisplayTimer.textContent)
  let minutes = Number(minutesDisplayTimer.textContent)

  let finishedTimer = minutes <= 0 && seconds <= 0
  
  if(finishedTimer) {
    stop()
    updateDisplayTimer()
    sounds().timeEnd()
    removeBoxShadow()
    return
  }
  
  if(seconds <= 0) {
    minutes--
    seconds = 60
  }
  handleBoxShadow()
  updateDisplayTimer(minutes, seconds - 1)
  countdown()
},1000)
}

function countUp() {
timerTimeout = setTimeout(function() {
    let miliseconds = Number(milisecondsDisplayWatch.textContent)
    let seconds = Number(secondsDisplayWatch.textContent)
    let minutes = Number(minutesDisplayWatch.textContent)
   
    if (miliseconds === 1000) {
      seconds++;
      miliseconds = 0;
    }
    if (seconds === 60) {
      seconds = 0
      minutes++
    }
    updateDisplayWatch(minutes, seconds, (miliseconds + 10))
    countUp()
  }, 10)
}

return {
  hold,
  updateDisplayWatch,
  updateDisplayTimer,
  countdown,
  countUp,
  handleBoxShadow,
  removeBoxShadow
}
}