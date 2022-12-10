import sounds from "/js/sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  stop,
  main
}) 
{
let minutes = minutesDisplay.textContent
let timerTimeout;

function hold() {
  clearTimeout(timerTimeout)
}

function removeBoxShadow() {
  main.classList.remove("boxShadow")
}

function handleBoxShadow() {
  main.classList.toggle("boxShadow")
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  
  minutesDisplay.textContent = String(newMinutes).padStart(2,"0")
  secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function updateMinutes(newMinutes) {
  minutes = newMinutes
}

function countdown() {
  timerTimeout = setTimeout(function() {
  let seconds = Number(secondsDisplay.textContent)
  let minutes = Number(minutesDisplay.textContent)

  let finishedTimer = minutes <= 0 && seconds <= 0
  
  if(finishedTimer) {
    stop()
    updateDisplay()
    sounds().timeEnd()
    removeBoxShadow()
    return
  }
  
  if(seconds <= 0) {
    minutes--
    seconds = 60
  }
  handleBoxShadow()
  updateDisplay(minutes, seconds - 1)
  countdown()
},1000)
}
return {
  hold,
  updateDisplay,
  updateMinutes,
  countdown
}
}
